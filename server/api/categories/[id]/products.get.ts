import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const categoryId = getRouterParam(event, 'id')
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 12
    const sortBy = query.sortBy as string || 'name'
    const sortOrder = query.sortOrder as string || 'asc'
    
    if (!categoryId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Category ID is required'
      })
    }

    // Find category first
    const category = await prisma.category.findFirst({
      where: {
        OR: [
          { id: categoryId },
          { slug: categoryId }
        ],
        isActive: true
      }
    })

    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found'
      })
    }

    // Build orderBy clause
    const orderBy: any = {}
    if (sortBy === 'price') {
      orderBy.price = sortOrder
    } else if (sortBy === 'name') {
      orderBy.name = sortOrder
    } else if (sortBy === 'createdAt') {
      orderBy.createdAt = sortOrder
    } else {
      orderBy.name = 'asc'
    }

    // Get products for this category
    const products = await prisma.product.findMany({
      where: {
        categoryId: category.id,
        isActive: true
      },
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

    // Get total count
    const totalItems = await prisma.product.count({
      where: {
        categoryId: category.id,
        isActive: true
      }
    })

    // Calculate average rating and add inStock for each product
    const productsWithRating = products.map(product => ({
      ...product,
      rating: product.reviews.length > 0 
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0,
      reviewCount: product.reviews.length,
      inStock: product.stock > 0, // Add inStock boolean for frontend compatibility
      reviews: undefined // Remove reviews array from response
    }))

    return {
      products: productsWithRating,
      category,
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
    console.error('Category products fetch error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch category products'
    })
  }
})
