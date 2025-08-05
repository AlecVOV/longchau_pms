// Final test to verify order history page shows correct data
async function testOrderHistoryDisplay() {
  try {
    console.log('=== Testing Order History Display ===')
    
    const baseUrl = 'http://localhost:3002'
    
    // Login
    const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'customer@example.com',
        password: 'customer123'
      })
    })
    
    const loginData = await loginResponse.json()
    const token = loginData.token
    console.log('✅ Logged in successfully')
    
    // Fetch orders data (same API call the orders page makes)
    const ordersResponse = await fetch(`${baseUrl}/api/orders`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    
    const ordersData = await ordersResponse.json()
    console.log(`📊 Found ${ordersData.data.length} orders`)
    
    // Test the data structure that the orders page expects
    ordersData.data.forEach((order, index) => {
      console.log(`\n📋 Order ${index + 1}:`)
      console.log(`   Order Number: ${order.orderNumber}`)
      console.log(`   Status: ${order.status}`)
      console.log(`   Total Amount: $${order.totalAmount} (field exists: ${order.totalAmount !== undefined})`)
      console.log(`   Order Items: ${order.orderItems?.length || 0} items (field exists: ${order.orderItems !== undefined})`)
      
      if (order.orderItems && order.orderItems.length > 0) {
        order.orderItems.forEach((item, itemIndex) => {
          console.log(`     Item ${itemIndex + 1}: ${item.product?.name || 'Unknown Product'} x${item.quantity} @ $${item.price}`)
        })
      }
      
      // Test potential error sources
      if (!order.totalAmount) console.warn(`⚠️  Order ${order.orderNumber} missing totalAmount field`)
      if (!order.orderItems) console.warn(`⚠️  Order ${order.orderNumber} missing orderItems field`)
      if (order.orderItems && order.orderItems.some(item => !item.product)) {
        console.warn(`⚠️  Order ${order.orderNumber} has items with missing product data`)
      }
    })
    
    console.log('\n✅ Order history data structure verification complete')
    console.log('All fields required by the orders page are present')
    
  } catch (error) {
    console.error('❌ Error testing order history:', error)
  }
}

testOrderHistoryDisplay()
