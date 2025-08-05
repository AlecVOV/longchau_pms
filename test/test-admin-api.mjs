process.env.DATABASE_URL = 'file:C:/Users/Admin/Desktop/Ver 2/Pharmacy Website/project/prisma/dev.db';

// Test the admin orders API endpoint directly
import fetch from 'node-fetch';

async function testAdminAPI() {
  try {
    // First, let's try to login as admin to get a token
    console.log('Testing admin login...');
    
    const loginResponse = await fetch('http://localhost:3002/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@pharmacy.com',
        password: 'admin123'
      })
    });
    
    if (!loginResponse.ok) {
      console.log('Login failed:', loginResponse.status, loginResponse.statusText);
      const errorText = await loginResponse.text();
      console.log('Error details:', errorText);
      return;
    }
    
    const loginData = await loginResponse.json();
    console.log('Login successful!');
    console.log('User:', loginData.user);
    console.log('Token exists:', !!loginData.token);
    
    // Now test the admin orders endpoint
    console.log('\nTesting admin orders API...');
    
    const ordersResponse = await fetch('http://localhost:3002/api/admin/orders', {
      headers: {
        'Authorization': `Bearer ${loginData.token}`
      }
    });
    
    if (!ordersResponse.ok) {
      console.log('Orders API failed:', ordersResponse.status, ordersResponse.statusText);
      const errorText = await ordersResponse.text();
      console.log('Error details:', errorText);
      return;
    }
    
    const ordersData = await ordersResponse.json();
    console.log('Orders API successful!');
    console.log('Response:', JSON.stringify(ordersData, null, 2));
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testAdminAPI();
