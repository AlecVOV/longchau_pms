// Test script to check available products and then create an order with correct data
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true
      },
      take: 5
    })
    
    console.log('Available products:')
    products.forEach(p => console.log(`- ${p.id}: ${p.name} ($${p.price})`))
    
    return products[0] // Return first product for testing
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkProducts()
