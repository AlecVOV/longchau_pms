// Simple test script to verify database connection
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('🔄 Testing database connection...')
    
    // Test connection by creating a test category
    const testCategory = await prisma.category.create({
      data: {
        name: 'Test Category',
        slug: 'test-category',
        description: 'A test category'
      }
    })
    
    console.log('✅ Database connection successful!')
    console.log('📝 Created test category:', testCategory)
    
    // Clean up
    await prisma.category.delete({
      where: { id: testCategory.id }
    })
    
    console.log('🧹 Cleaned up test data')
    
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
