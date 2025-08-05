import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const productId = getRouterParam(event, 'id');
  
  if (!productId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product ID is required'
    });
  }

  try {
    // Find product by ID or slug
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          { id: productId },
          { slug: productId }
        ],
        isActive: true
      }
    });

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found'
      });
    }

    if (method === 'GET') {
      // Get current inventory status
      return {
        productId: product.id,
        productName: product.name,
        currentStock: product.stock,
        inStock: product.stock > 0,
        lowStock: product.stock > 0 && product.stock < product.minStock,
        outOfStock: product.stock === 0,
        minStock: product.minStock,
        maxStock: product.maxStock
      };
    }

    if (method === 'PUT') {
      // Update inventory
      const body = await readBody(event);
      const { stock, operation = 'set' } = body;

      if (typeof stock !== 'number' || stock < 0) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Valid stock number is required'
        });
      }

      let newStock: number;
      
      switch (operation) {
        case 'add':
          newStock = product.stock + stock;
          break;
        case 'subtract':
          newStock = Math.max(0, product.stock - stock);
          break;
        case 'set':
        default:
          newStock = stock;
          break;
      }

      // Update the product stock in database
      const updatedProduct = await prisma.product.update({
        where: { id: product.id },
        data: { stock: newStock }
      });

      return {
        productId: updatedProduct.id,
        productName: updatedProduct.name,
        previousStock: product.stock,
        newStock: updatedProduct.stock,
        operation,
        inStock: updatedProduct.stock > 0,
        lowStock: updatedProduct.stock > 0 && updatedProduct.stock < updatedProduct.minStock,
        outOfStock: updatedProduct.stock === 0
      };
    }

    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    });

  } catch (error: any) {
    console.error('Inventory operation error:', error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process inventory operation'
    });
  }
});
