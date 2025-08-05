import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "file:C:/Users/Admin/Desktop/Ver 2/Pharmacy Website/project/prisma/dev.db"
    }
  }
})

// Generic placeholder images for different product categories
const placeholderImages = {
  'pain-relief': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400',
  'cold-flu': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400',
  'vitamins': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400',
  'personal-care': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400',
  'first-aid': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400',
  'default': 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400'
}

async function updateProductImages() {
  try {
    console.log('Updating product images...')
    
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        images: true,
        category: {
          select: {
            slug: true
          }
        }
      }
    })
    
    console.log(`Found ${products.length} products to update`)
    
    for (const product of products) {
      // Determine the appropriate placeholder image based on category or product name
      let imageUrl = placeholderImages.default
      
      if (product.category?.slug) {
        imageUrl = placeholderImages[product.category.slug] || placeholderImages.default
      } else {
        // Fallback: guess category from product name
        const name = product.name.toLowerCase()
        if (name.includes('paracetamol') || name.includes('ibuprofen') || name.includes('aspirin') || name.includes('naproxen')) {
          imageUrl = placeholderImages['pain-relief']
        } else if (name.includes('cough') || name.includes('throat') || name.includes('nasal')) {
          imageUrl = placeholderImages['cold-flu']
        } else if (name.includes('vitamin') || name.includes('omega')) {
          imageUrl = placeholderImages['vitamins']
        } else if (name.includes('bandage') || name.includes('antiseptic')) {
          imageUrl = placeholderImages['first-aid']
        }
      }
      
      // Update the product images field with the new URL
      const newImages = JSON.stringify([imageUrl])
      
      await prisma.product.update({
        where: { id: product.id },
        data: {
          images: newImages
        }
      })
      
      console.log(`Updated ${product.name}: ${newImages}`)
    }
    
    console.log('\nAll product images updated successfully!')
    
  } catch (error) {
    console.error('Error updating product images:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateProductImages()
