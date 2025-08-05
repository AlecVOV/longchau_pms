<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <SiteFooter />
    
    <!-- Toast notifications -->
    <ToastContainer />
    
    <!-- Session expiry warning -->
    <SessionExpiryWarning />
  </div>
</template>

<script setup>
// Layout component that wraps all pages
</script>