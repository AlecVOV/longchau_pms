<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <!-- Error Icon -->
        <div class="mx-auto h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mb-6">
          <svg class="h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>

        <!-- Error Code -->
        <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.value?.statusCode || '403' }}</h1>
        
        <!-- Error Message -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          {{ error.value?.statusMessage || 'Access Denied' }}
        </h2>
        
        <p class="text-gray-600 mb-8">
          <template v-if="error.value?.statusCode === 403">
            You need admin privileges to access this area. Please login with an admin account.
          </template>
          <template v-else>
            {{ error.value?.message || 'Something went wrong. Please try again.' }}
          </template>
        </p>

        <!-- Action Buttons -->
        <div class="space-y-4">
          <template v-if="error.value?.statusCode === 403">
            <NuxtLink 
              to="/login" 
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Login to Admin Account
            </NuxtLink>
          </template>
          
          <NuxtLink 
            to="/" 
            class="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Go to Homepage
          </NuxtLink>
        </div>

        <!-- Help Text -->
        <div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div class="flex">
            <svg class="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="ml-3 text-sm text-blue-700">
              <p><strong>Admin Access Required:</strong></p>
              <p>Use admin credentials: <code class="bg-blue-100 px-1 rounded">admin@pharmacy.com</code></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Get error from Nuxt
const error = useError()

// Set page title
useHead({
  title: `${error.value?.statusCode || 'Error'} - Access Denied | Long Châu Admin`
})
</script>
