// Comprehensive test to simulate the full user checkout experience
async function testFullCheckoutFlow() {
  try {
    console.log('=== Testing Full Checkout Flow ===')
    
    const baseUrl = 'http://localhost:3002'
    
    // Step 1: Login
    console.log('1. Logging in...')
    const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'customer@example.com',
        password: 'customer123'
      })
    })
    
    if (!loginResponse.ok) {
      console.error('Login failed')
      return
    }
    
    const loginData = await loginResponse.json()
    const token = loginData.token
    console.log('✅ Login successful')
    
    // Step 2: Check current order count
    console.log('\n2. Checking current order count...')
    const ordersResponse1 = await fetch(`${baseUrl}/api/orders`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const ordersData1 = await ordersResponse1.json()
    const initialOrderCount = ordersData1.data?.length || 0
    console.log(`Initial order count: ${initialOrderCount}`)
    
    // Step 3: Simulate cart with valid products
    console.log('\n3. Creating order with valid products...')
    const orderData = {
      orderNumber: 'TEST-' + Date.now(),
      items: [
        {
          id: 'cmdg5way80006z86o21lr2kt0', // Paracetamol 500mg
          quantity: 2,
          price: 12.99
        },
        {
          id: 'cmdg5waye0008z86ono9b5nwv', // Ibuprofen 200mg  
          quantity: 1,
          price: 8.99
        }
      ],
      shipping: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Test St',
        city: 'Test City',
        state: 'TS',
        zipCode: '12345',
        country: 'US'
      },
      billing: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Test St',
        city: 'Test City',
        state: 'TS',
        zipCode: '12345',
        country: 'US'
      },
      paymentMethod: 'cod',
      subtotal: 34.97,
      tax: 2.80,
      shippingFee: 5.00,
      total: 42.77
    }
    
    const createOrderResponse = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    })
    
    if (!createOrderResponse.ok) {
      const errorData = await createOrderResponse.json()
      console.error('❌ Order creation failed:', errorData.message)
      return
    }
    
    const createOrderData = await createOrderResponse.json()
    console.log('✅ Order created successfully:', createOrderData.order.orderNumber)
    
    // Step 4: Verify order appears in history
    console.log('\n4. Checking updated order count...')
    const ordersResponse2 = await fetch(`${baseUrl}/api/orders`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const ordersData2 = await ordersResponse2.json()
    const finalOrderCount = ordersData2.data?.length || 0
    console.log(`Final order count: ${finalOrderCount}`)
    
    if (finalOrderCount > initialOrderCount) {
      console.log('✅ Order successfully added to history')
      
      // Show the latest order details
      const latestOrder = ordersData2.data[0]
      console.log('Latest order details:')
      console.log(`- Order Number: ${latestOrder.orderNumber}`)
      console.log(`- Status: ${latestOrder.status}`)
      console.log(`- Total: $${latestOrder.totalAmount}`)
      console.log(`- Items count: ${latestOrder.orderItems?.length || 0}`)
      
      // Check if order items have product data
      if (latestOrder.orderItems && latestOrder.orderItems.length > 0) {
        console.log('Order items:')
        latestOrder.orderItems.forEach((item, index) => {
          console.log(`  ${index + 1}. ${item.product?.name || 'Unknown Product'} x${item.quantity} - $${item.price}`)
        })
      }
    } else {
      console.log('❌ Order was not added to history')
    }
    
    console.log('\n=== Test Complete ===')
    
  } catch (error) {
    console.error('Error in full checkout test:', error)
  }
}

testFullCheckoutFlow()
