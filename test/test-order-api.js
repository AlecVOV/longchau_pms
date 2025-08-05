// Test script to verify order creation API
// Run this with: node test-order-api.js

const testOrderCreation = async () => {
  try {
    // You'll need to replace this with a valid JWT token from your login
    const authToken = 'your-jwt-token-here'
    
    const orderData = {
      orderNumber: 'TEST-' + Date.now(),
      items: [
        {
          id: 'test-product-1',
          name: 'Test Product',
          price: 10.99,
          quantity: 2
        }
      ],
      shipping: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '555-1234',
        address: '123 Test St',
        city: 'Test City',
        state: 'CA',
        zipCode: '90210',
        country: 'US'
      },
      billing: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Test St',
        city: 'Test City',
        state: 'CA',
        zipCode: '90210',
        country: 'US'
      },
      paymentMethod: 'credit-card',
      subtotal: 21.98,
      tax: 1.76,
      shippingFee: 5.99,
      total: 29.73
    }
    
    const response = await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(orderData)
    })
    
    const result = await response.json()
    console.log('Order creation result:', result)
    
  } catch (error) {
    console.error('Error testing order creation:', error)
  }
}

console.log('To test the order creation API:')
console.log('1. Login to get a JWT token')
console.log('2. Replace "your-jwt-token-here" with the actual token')
console.log('3. Run: node test-order-api.js')

// Uncomment the line below and add a real token to test
// testOrderCreation()
