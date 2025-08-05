import prisma from '~/lib/prisma'
import { verifyAccessToken } from '~/lib/auth'

export default defineEventHandler(async (event) => {
  // Only allow POST method
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })
  }

  try {
    // Get and verify JWT token
    const authorization = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
    
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    const decoded = verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token'
      })
    }

    // Get order data from request body
    const orderData = await readBody(event)
    
    if (!orderData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Order data is required'
      })
    }

    // Validate required fields
    if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Order items are required'
      })
    }

    if (!orderData.shipping) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Shipping information is required'
      })
    }

    // Validate order items and check inventory
    for (const item of orderData.items) {
      // Validate quantity is positive
      if (!item.quantity || item.quantity <= 0) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid quantity for product ${item.id}. Quantity must be greater than 0.`
        })
      }

      // Validate quantity is a valid number
      if (!Number.isInteger(item.quantity) || item.quantity > 10000) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid quantity for product ${item.id}. Quantity must be a valid integer between 1 and 10,000.`
        })
      }
    }

    // Validate that all products exist and check stock availability
    const productIds = orderData.items.map((item: any) => item.id)
    const existingProducts = await prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      },
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        isActive: true
      }
    })

    // Check if all products exist
    const missingProducts = productIds.filter((id: string) => !existingProducts.find(p => p.id === id))
    if (missingProducts.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Products not found: ${missingProducts.join(', ')}`
      })
    }

    // Check stock availability for each item
    const stockIssues: string[] = []
    for (const item of orderData.items) {
      const product = existingProducts.find(p => p.id === item.id)
      if (!product) continue

      // Check if product is active and has stock
      if (!product.isActive) {
        stockIssues.push(`${product.name} is currently unavailable`)
        continue
      }

      // Check if product has any stock
      if (product.stock <= 0) {
        stockIssues.push(`${product.name} is currently out of stock`)
        continue
      }

      // Check if requested quantity exceeds available stock
      if (product.stock && item.quantity > product.stock) {
        stockIssues.push(`${product.name}: requested ${item.quantity} but only ${product.stock} available`)
      }
    }

    if (stockIssues.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Stock validation failed: ${stockIssues.join('; ')}`
      })
    }

    // Generate order number if not provided
    const orderNumber = orderData.orderNumber || 'MDP-' + Date.now() + '-' + Math.floor(Math.random() * 1000)

    // Calculate totals
    const subtotal = orderData.subtotal || orderData.items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const shippingFee = orderData.shippingFee || 0
    const taxAmount = orderData.tax || subtotal * 0.08 // 8% tax
    const totalAmount = orderData.total || subtotal + shippingFee + taxAmount

    // Create the order
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: decoded.userId,
        status: 'PENDING',
        totalAmount,
        taxAmount,
        shippingFee,
        shippingAddress: JSON.stringify(orderData.shipping || orderData.shippingAddress),
        billingAddress: JSON.stringify(orderData.billing || orderData.billingAddress),
        paymentMethod: orderData.paymentMethod || 'credit-card',
        paymentStatus: 'PENDING',
        // Create order items
        orderItems: {
          create: orderData.items?.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
          })) || []
        }
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                manufacturer: true
              }
            }
          }
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    })

    // Return success response
    return {
      success: true,
      order,
      message: 'Order created successfully'
    }

  } catch (error: any) {
    console.error('Error creating order:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create order'
    })
  }
})
