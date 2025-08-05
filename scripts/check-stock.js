import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStock() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        stock: true,
      }
    });
    
    console.log('Product stock data:');
    products.forEach(p => {
      console.log(`${p.name}: stock=${p.stock}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkStock();
