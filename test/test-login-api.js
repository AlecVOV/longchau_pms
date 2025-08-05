// Test login functionality
async function testLogin() {
  try {
    console.log('🔍 Testing login API...')
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@pharmacy.com',
        password: 'admin123',
        rememberMe: false
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('❌ Login failed!')
      console.log('📄 Status:', response.status, response.statusText)
      console.log('📄 Response:', errorText)
      return
    }
    
    const data = await response.json()
    
    console.log('✅ Login successful!')
    console.log('👤 User:', data.user?.email, 'Role:', data.user?.role)
    console.log('🔑 Token received:', !!data.token)
    
  } catch (error) {
    console.error('💥 Error testing login:', error.message)
    console.error('💥 Make sure the server is running on http://localhost:3000')
  }
}

testLogin()
