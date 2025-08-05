#!/usr/bin/env node
// run-all-tests.js
// Quick test runner for all pharmacy website tests

const { execSync } = require('child_process');
const path = require('path');

console.log('🧪 PHARMACY WEBSITE TEST RUNNER');
console.log('================================\n');

const tests = [
  {
    name: 'Setup: Create Admin User',
    file: 'create-admin.js',
    description: 'Ensures admin user exists for testing'
  },
  {
    name: 'Setup: Get Product IDs', 
    file: 'get-products.js',
    description: 'Shows available products for testing'
  },
  {
    name: 'Main: Comprehensive Test Suite',
    file: 'final-comprehensive-test.js',
    description: 'Complete end-to-end functionality test'
  },
  {
    name: 'Specific: Zero Quantity Validation',
    file: 'test-zero-quantity.js', 
    description: 'Validates zero quantity order prevention'
  },
  {
    name: 'Debug: Order Creation',
    file: 'debug-order-test.js',
    description: 'Detailed order creation debugging'
  }
];

async function runTest(test) {
  console.log(`\n🔄 Running: ${test.name}`);
  console.log(`📝 ${test.description}`);
  console.log(`📁 File: ${test.file}`);
  console.log('─'.repeat(50));
  
  try {
    const result = execSync(`node ${test.file}`, { 
      cwd: __dirname,
      encoding: 'utf8',
      timeout: 30000 // 30 second timeout
    });
    
    console.log(result);
    return true;
  } catch (error) {
    console.error(`❌ Test failed: ${error.message}`);
    if (error.stdout) console.log('STDOUT:', error.stdout);
    if (error.stderr) console.log('STDERR:', error.stderr);
    return false;
  }
}

async function runAllTests() {
  console.log('🚀 Starting test execution...\n');
  
  const results = [];
  
  for (const test of tests) {
    const success = await runTest(test);
    results.push({ ...test, success });
    
    // Add delay between tests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 TEST EXECUTION SUMMARY');
  console.log('='.repeat(50));
  
  const passed = results.filter(r => r.success).length;
  const total = results.length;
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.name}`);
  });
  
  console.log(`\n🎯 Overall: ${passed}/${total} tests completed successfully`);
  
  if (passed === total) {
    console.log('🎉 All tests completed successfully!');
  } else {
    console.log('⚠️  Some tests failed. Check output above for details.');
  }
}

// Command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage:');
    console.log('  node run-all-tests.js              # Run all tests');
    console.log('  node run-all-tests.js --list       # List available tests');
    console.log('  node run-all-tests.js <filename>   # Run specific test');
    console.log('\nAvailable tests:');
    tests.forEach((test, i) => {
      console.log(`  ${i + 1}. ${test.file} - ${test.description}`);
    });
    process.exit(0);
  }
  
  if (args[0] === '--list') {
    console.log('Available tests:');
    tests.forEach((test, i) => {
      console.log(`${i + 1}. ${test.name}`);
      console.log(`   File: ${test.file}`);
      console.log(`   Description: ${test.description}\n`);
    });
    process.exit(0);
  }
  
  if (args[0] && args[0] !== '--all') {
    // Run specific test
    const testFile = args[0];
    const test = tests.find(t => t.file === testFile);
    
    if (test) {
      runTest(test);
    } else {
      console.log(`❌ Test file not found: ${testFile}`);
      console.log('Available tests:', tests.map(t => t.file).join(', '));
      process.exit(1);
    }
  } else {
    // Run all tests
    runAllTests();
  }
}
