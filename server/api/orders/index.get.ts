import prisma from '~/lib/prisma'
import { verifyAccessToken } from '~/lib/auth'

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'GET') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })
  }

  try {
    // Get authorization token from header or cookie
    const authHeader = getHeader(event, 'authorization')
    const authCookie = getCookie(event, 'auth-token')
    
    const token = authHeader?.startsWith('Bearer ') 
      ? authHeader.split(' ')[1] 
      : authCookie

    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authorization token required'
      })
    }

    // Verify token and get user info
    const decoded = await verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid or expired token'
      })
    }

    // Get query parameters for filtering
    const query = getQuery(event)
    const { status, limit = '50', offset = '0' } = query

    // Build where clause for user-specific orders
    const whereClause: any = {
      userId: decoded.userId
    }

    // Add status filter if provided
    if (status && status !== 'all') {
      whereClause.status = status as string
    }

    // Parse pagination parameters safely
    const limitNum = parseInt(limit as string) || 50
    const offsetNum = parseInt(offset as string) || 0

    // Fetch user's orders only
    const orders = await prisma.order.findMany({
      where: whereClause,
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
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limitNum,
      skip: offsetNum
    })

    // Get total count for pagination
    const totalCount = await prisma.order.count({
      where: whereClause
    })

    return {
      success: true,
      data: orders,
      pagination: {
        total: totalCount,
        limit: limitNum,
        offset: offsetNum,
        hasNext: offsetNum + limitNum < totalCount,
        hasPrev: offsetNum > 0
      }
    }

  } catch (error: any) {
    console.error('Error fetching orders:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch orders'
    })
  }
})
