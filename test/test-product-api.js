// Test the product API endpoint
async function testProductAPI() {
  try {
    console.log('Testing product API...');
    
    // Test with a known slug
    const response = await fetch('http://localhost:3001/api/products/paracetamol-500mg');
    
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status} ${response.statusText}`);
      return;
    }
    
    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testProductAPI();
