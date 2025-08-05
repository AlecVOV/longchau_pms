// Get real product IDs
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true
      },
      take: 3
    })
    
    console.log('Available products for testing:')
    products.forEach(p => console.log(`- ${p.id}: ${p.name} ($${p.price})`))
    
    if (products.length > 0) {
      console.log(`\nUse this product ID for testing: ${products[0].id}`)
    }
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

getProducts()
