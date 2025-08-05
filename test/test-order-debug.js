// Test script to debug order creation and fetching
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testOrderFlow() {
  try {
    console.log('=== Testing Order Flow ===')
    
    // Check if there are any existing orders
    const existingOrders = await prisma.order.findMany({
      include: {
        orderItems: true,
        user: true
      }
    })
    console.log('Existing orders count:', existingOrders.length)
    console.log('Existing orders:', existingOrders)
    
    // Check if there are any users
    const users = await prisma.user.findMany()
    console.log('Users count:', users.length)
    console.log('Users:', users.map(u => ({ id: u.id, email: u.email, name: `${u.firstName} ${u.lastName}` })))
    
    // Check if there are any products
    const products = await prisma.product.findMany()
    console.log('Products count:', products.length)
    
    console.log('=== Test Complete ===')
  } catch (error) {
    console.error('Error in test:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testOrderFlow()
