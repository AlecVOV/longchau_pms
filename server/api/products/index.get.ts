import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 12
    const category = query.category as string
    const brand = query.brand as string
    const minPrice = parseFloat(query.minPrice as string) || 0
    const maxPrice = parseFloat(query.maxPrice as string) || 999999
    const inStock = query.inStock === 'true'
    const featured = query.featured === 'true'
    const sortBy = query.sortBy as string || 'name'
    const sortOrder = query.sortOrder as string || 'asc'
    const search = query.search as string
    const slug = query.slug as string

    // Build where clause
    const where: any = {
      isActive: true,
      price: {
        gte: minPrice,
        lte: maxPrice
      }
    }

    // Apply filters
    if (category) {
      where.category = {
        slug: category
      }
    }

    if (brand) {
      where.brand = {
        contains: brand,
        mode: 'insensitive'
      }
    }

    if (inStock) {
      where.stock = {
        gt: 0
      }
    }

    if (featured) {
      where.isFeatured = true
    }

    // Add slug filter for single product lookup
    if (slug) {
      where.slug = slug
    }

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          description: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          brand: {
            contains: search,
            mode: 'insensitive'
          }
        }
      ]
    }

    // Build orderBy clause
    let orderBy: any = {}
    switch (sortBy) {
      case 'price':
        orderBy.price = sortOrder
        break
      case 'name':
        orderBy.name = sortOrder
        break
      case 'createdAt':
        orderBy.createdAt = sortOrder
        break
      default:
        orderBy.name = 'asc'
    }

    // Get total count for pagination
    const totalItems = await prisma.product.count({ where })

    // Get products with pagination
    const products = await prisma.product.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        reviews: {
          select: {
            rating: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * limit,
      take: limit
    })

    // Calculate average rating for each product
    const productsWithRating = products.map(product => ({
      ...product,
      rating: product.reviews.length > 0 
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0,
      reviewCount: product.reviews.length,
      inStock: product.stock > 0, // Add inStock boolean for frontend compatibility
      reviews: undefined // Remove reviews array from response
    }))

    // If slug is provided, return single product data format
    if (slug) {
      return {
        data: productsWithRating
      }
    }

    return {
      products: productsWithRating,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    }

  } catch (error) {
    console.error('Products fetch error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch products'
    })
  }
})
