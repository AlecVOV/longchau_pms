import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "file:C:/Users/Admin/Desktop/Ver 2/Pharmacy Website/project/prisma/dev.db"
    }
  }
})

async function checkProductImages() {
  try {
    console.log('Checking product images...')
    
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        images: true
      },
      take: 10
    })
    
    console.log(`\nFound ${products.length} products:`)
    
    products.forEach((product, index) => {
      console.log(`\n${index + 1}. ${product.name}`)
      console.log(`   ID: ${product.id}`)
      console.log(`   images field: ${typeof product.images} - "${product.images}"`)
    })
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkProductImages()
