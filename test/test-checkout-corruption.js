// Test script to check for checkout page corruption issues
// Run this script in browser console after completing checkout

console.log('=== Checkout Corruption Debug Test ===');

// Check if the page is responsive
console.log('1. Testing page responsiveness...');
try {
  const testButton = document.createElement('button');
  testButton.textContent = 'Test Button';
  testButton.style.position = 'fixed';
  testButton.style.top = '10px';
  testButton.style.left = '10px';
  testButton.style.zIndex = '99999';
  testButton.style.background = 'red';
  testButton.style.color = 'white';
  testButton.style.padding = '10px';
  testButton.onclick = () => {
    alert('Page is responsive!');
    document.body.removeChild(testButton);
  };
  document.body.appendChild(testButton);
  console.log('✓ Test button added - if you can click it, page is responsive');
} catch (error) {
  console.error('✗ Failed to add test button:', error);
}

// Check for overlay elements
console.log('2. Checking for problematic overlays...');
const overlays = document.querySelectorAll('[style*="position: fixed"], [style*="position: absolute"], .fixed, .absolute');
overlays.forEach((overlay, index) => {
  const style = window.getComputedStyle(overlay);
  const zIndex = style.zIndex;
  const pointerEvents = style.pointerEvents;
  console.log(`Overlay ${index}:`, {
    element: overlay.tagName,
    class: overlay.className,
    zIndex: zIndex,
    pointerEvents: pointerEvents,
    position: style.position,
    top: style.top,
    left: style.left,
    width: style.width,
    height: style.height
  });
});

// Check for problematic CSS
console.log('3. Checking page dimensions...');
console.log('Document height:', document.documentElement.scrollHeight);
console.log('Window height:', window.innerHeight);
console.log('Body height:', document.body.scrollHeight);
console.log('Body overflow:', window.getComputedStyle(document.body).overflow);

// Check for JavaScript errors
console.log('4. Checking for JavaScript errors...');
window.addEventListener('error', (e) => {
  console.error('JavaScript error detected:', e.error);
});

// Check Vue/Nuxt app state
console.log('5. Checking Vue app state...');
try {
  const app = document.querySelector('#__nuxt');
  if (app) {
    console.log('✓ Nuxt app container found');
    console.log('App classes:', app.className);
    console.log('App style:', app.style.cssText);
  } else {
    console.error('✗ Nuxt app container not found');
  }
} catch (error) {
  console.error('Error checking Vue app:', error);
}

console.log('=== Debug test completed ===');
console.log('If you can see this and interact with the test button, the page corruption might be resolved.');
