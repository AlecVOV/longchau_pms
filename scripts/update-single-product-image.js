import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateProductImage(productId, imageUrls) {
  try {
    // Convert array to JSON string format
    const imagesJson = JSON.stringify(imageUrls);
    
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        images: imagesJson
      }
    });
    
    console.log(`✅ Updated product: ${updatedProduct.name}`);
    console.log(`   New images: ${imagesJson}`);
    
    return updatedProduct;
  } catch (error) {
    console.error('❌ Error updating product:', error);
  }
}

async function updateProductImageByName(productName, imageUrls) {
  try {
    // First find the product to get its ID
    const product = await prisma.product.findFirst({
      where: { name: productName }
    });
    
    if (!product) {
      console.error(`❌ Product "${productName}" not found`);
      return;
    }
    
    // Convert array to JSON string format
    const imagesJson = JSON.stringify(imageUrls);
    
    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: {
        images: imagesJson
      }
    });
    
    console.log(`✅ Updated product: ${updatedProduct.name}`);
    console.log(`   New images: ${imagesJson}`);
    
    return updatedProduct;
  } catch (error) {
    console.error('❌ Error updating product:', error);
  }
}

async function listAllProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        images: true
      }
    });
    
    console.log('\n📋 All Products:');
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name}`);
      console.log(`   ID: ${product.id}`);
      console.log(`   Current images: ${product.images || 'No images'}`);
      console.log('');
    });
    
    return products;
  } catch (error) {
    console.error('❌ Error listing products:', error);
  }
}

// Example usage functions
async function main() {
  const action = process.argv[2];
  
  if (action === 'list') {
    await listAllProducts();
  } else if (action === 'update-by-id') {
    const productId = process.argv[3];
    const imageUrls = process.argv.slice(4);
    
    if (!productId || imageUrls.length === 0) {
      console.log('Usage: node update-single-product-image.js update-by-id <product-id> <image-url-1> [image-url-2] ...');
      return;
    }
    
    await updateProductImage(productId, imageUrls);
  } else if (action === 'update-by-name') {
    const productName = process.argv[3];
    const imageUrls = process.argv.slice(4);
    
    if (!productName || imageUrls.length === 0) {
      console.log('Usage: node update-single-product-image.js update-by-name "Product Name" <image-url-1> [image-url-2] ...');
      return;
    }
    
    await updateProductImageByName(productName, imageUrls);
  } else {
    console.log('Available commands:');
    console.log('  list                                           - List all products');
    console.log('  update-by-id <id> <url1> [url2] ...           - Update product by ID');
    console.log('  update-by-name "Product Name" <url1> [url2]... - Update product by name');
    console.log('');
    console.log('Examples:');
    console.log('  node update-single-product-image.js list');
    console.log('  node update-single-product-image.js update-by-name "Paracetamol 500mg" "https://example.com/image1.jpg"');
    console.log('  node update-single-product-image.js update-by-id cmdy5psgb0006z860id082fh7 "https://example.com/image1.jpg" "https://example.com/image2.jpg"');
  }
  
  await prisma.$disconnect();
}

main().catch(console.error);

export { updateProductImage, updateProductImageByName, listAllProducts };
