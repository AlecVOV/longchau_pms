// Test script to simulate the complete checkout flow
async function testCheckoutFlow() {
  try {
    console.log('=== Testing Checkout Flow ===')
    
    const baseUrl = 'http://localhost:3002'
    
    // Step 1: Login to get auth token
    console.log('1. Logging in...')
    const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'lehoangtrietthong@gmail.com',
        password: 'customer123' // From seed script
      })
    })
    
    const loginData = await loginResponse.json()
    console.log('Login response:', loginData)
    
    if (!loginResponse.ok) {
      console.log('Login failed, let\'s try with customer@example.com')
      const loginResponse2 = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'customer@example.com',
          password: 'customer123'
        })
      })
      
      const loginData2 = await loginResponse2.json()
      console.log('Login response 2:', loginData2)
      
      if (!loginResponse2.ok) {
        console.error('Both login attempts failed')
        return
      }
      
      var token = loginData2.accessToken || loginData2.token
    } else {
      var token = loginData.accessToken || loginData.token
    }
    
    console.log('Token received:', token ? 'Yes' : 'No')
    
    // Step 2: Fetch current orders before placing new order
    console.log('\\n2. Fetching current orders...')
    const ordersResponse = await fetch(`${baseUrl}/api/orders`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const ordersData = await ordersResponse.json()
    console.log('Current orders response:', ordersData)
    console.log('Current orders count:', ordersData.data?.length || 0)
    
    // Step 3: Create a test order
    console.log('\\n3. Creating test order...')
    const orderData = {
      items: [
        {
          id: 'cmdg5way80006z86o21lr2kt0', // Real product ID: Paracetamol 500mg
          quantity: 2,
          price: 12.99
        }
      ],
      paymentMethod: 'cod',
      shipping: {
        firstName: 'Test',
        lastName: 'User',
        address: '123 Test St',
        city: 'Test City',
        state: 'TS',
        zipCode: '12345',
        country: 'US'
      },
      billing: {
        firstName: 'Test',
        lastName: 'User',
        address: '123 Test St',
        city: 'Test City',
        state: 'TS',
        zipCode: '12345',
        country: 'US'
      }
    }
    
    const createOrderResponse = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    })
    
    const createOrderData = await createOrderResponse.json()
    console.log('Create order response status:', createOrderResponse.status)
    console.log('Create order response:', createOrderData)
    
    // Step 4: Fetch orders again to see if the new order is there
    console.log('\\n4. Fetching orders after creation...')
    const ordersResponse2 = await fetch(`${baseUrl}/api/orders`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const ordersData2 = await ordersResponse2.json()
    console.log('Orders after creation response:', ordersData2)
    console.log('Orders after creation count:', ordersData2.data?.length || 0)
    
    console.log('\\n=== Test Complete ===')
    
  } catch (error) {
    console.error('Error in checkout test:', error)
  }
}

testCheckoutFlow()
