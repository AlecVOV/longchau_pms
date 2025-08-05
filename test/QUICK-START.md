# 🚀 Quick Start Guide

## Run All Tests
```bash
cd test
npm run test
```

## Run Specific Tests
```bash
# Main comprehensive test (recommended)
npm run test:comprehensive

# Quick setup + main test
npm run test:quick

# Zero quantity validation only
npm run test:zero-quantity

# Debug order creation
npm run test:debug-order
```

## Setup Commands
```bash
# Create admin user for testing
npm run setup:admin

# Get valid product IDs
npm run setup:products
```

## Manual Test Execution
```bash
# Run individual tests
node final-comprehensive-test.js
node test-zero-quantity.js
node debug-order-test.js
```

## Expected Results
- ✅ All validation tests should PASS
- ✅ Zero quantity orders should be REJECTED
- ✅ Inventory overselling should be PREVENTED
- ✅ Valid orders should be ACCEPTED
- ✅ Admin functions should WORK

## Troubleshooting
If tests fail:
1. Ensure server is running: `npm run dev` (in main project)
2. Create admin user: `npm run setup:admin`
3. Check product IDs: `npm run setup:products`
4. Read full documentation: `README.md`
