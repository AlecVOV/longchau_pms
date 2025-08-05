process.env.DATABASE_URL = 'file:C:/Users/Admin/Desktop/Ver 2/Pharmacy Website/project/prisma/dev.db';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('Checking database...');
    
    // Check users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        password: true
      }
    });
    console.log('\n=== USERS ===');
    console.log('Total users:', users.length);
    users.forEach(user => {
      console.log(`- ${user.firstName} ${user.lastName} (${user.email}) - Role: ${user.role}`);
      console.log(`  Password hash: ${user.password.substring(0, 20)}...`);
    });
    
    // Check orders
    const orders = await prisma.order.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        },
        orderItems: {
          include: {
            product: {
              select: {
                name: true
              }
            }
          }
        }
      }
    });
    
    console.log('\n=== ORDERS ===');
    console.log('Total orders:', orders.length);
    orders.forEach(order => {
      console.log(`\nOrder #${order.id}:`);
      console.log(`  Customer: ${order.user.firstName} ${order.user.lastName} (${order.user.email})`);
      console.log(`  Status: ${order.status}`);
      console.log(`  Total: $${order.totalAmount}`);
      console.log(`  Items: ${order.orderItems.length}`);
      console.log(`  Shipping Address:`, order.shippingAddress);
      console.log(`  Tracking Number:`, order.trackingNumber);
      order.orderItems.forEach(item => {
        console.log(`    - ${item.product.name} x${item.quantity} at $${item.price}`);
      });
    });
    
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
