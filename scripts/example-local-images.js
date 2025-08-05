// Example of creating a sample product image
// Place your actual product images in the public/images/products/ folder
// Then use this script to update products with local image paths

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateWithLocalImages() {
  // Example: Update Paracetamol with a local image
  // First, make sure you have the file: public/images/products/paracetamol-500mg.jpg
  
  await prisma.product.update({
    where: { id: "cmdy5psgb0006z860id082fh7" }, // Paracetamol ID
    data: {
      images: JSON.stringify(["/images/products/paracetamol-500mg.jpg"])
    }
  });
  
  console.log("Updated with local image path");
  await prisma.$disconnect();
}

// Uncomment to run:
// updateWithLocalImages().catch(console.error);
