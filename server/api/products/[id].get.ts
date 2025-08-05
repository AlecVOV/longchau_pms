import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'id');
    
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID is required'
      });
    }

    console.log(productId)
    
    // Find product by ID or slug
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          { id: productId },
          { slug: productId }
        ],
        isActive: true
      },
      include: {
        category: true
      }
    });

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found'
      });
    }

    // Get related products (same category, different products)
    const relatedProducts = await prisma.product.findMany({
      where: {
        categoryId: product.categoryId,
        id: { not: product.id },
        isActive: true
      },
      include: {
        category: true
      },
      take: 4
    });

    // Parse JSON fields
    const productWithParsedFields = {
      ...product,
      images: product.images ? JSON.parse(product.images) : [],
      ingredients: product.ingredients ? JSON.parse(product.ingredients) : [],
      sideEffects: product.sideEffects ? JSON.parse(product.sideEffects) : [],
      contraindications: product.contraindications ? JSON.parse(product.contraindications) : [],
      relatedProducts: relatedProducts.map(p => ({
        ...p,
        images: p.images ? JSON.parse(p.images) : [],
      }))
    };

    return {
      product: productWithParsedFields
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch product'
    });
  }
});
