<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <NuxtLink to="/" class="inline-block">
          <h1 class="text-3xl font-bold text-purple-600">Long Châu</h1>
        </NuxtLink>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <!-- Forgot Password Form -->
      <form @submit.prevent="handleForgotPassword" class="mt-8 space-y-6">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <!-- Error Message -->
          <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {{ error }}
          </div>

          <!-- Success Message -->
          <div v-if="success" class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {{ success }}
          </div>

          <div class="space-y-4" v-if="!emailSent">
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email address"
              />
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="loading"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ loading ? 'Sending...' : 'Send reset link' }}
              </button>
            </div>
          </div>

          <!-- Email Sent Confirmation -->
          <div v-else class="text-center space-y-4">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Check your email</h3>
              <p class="mt-2 text-sm text-gray-600">
                We've sent a password reset link to <strong>{{ email }}</strong>
              </p>
              <p class="mt-2 text-xs text-gray-500">
                Didn't receive the email? Check your spam folder or
                <button @click="resendEmail" class="text-purple-600 hover:text-purple-500 underline">
                  resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>

      <!-- Back to Login -->
      <div class="text-center">
        <NuxtLink to="/login" class="text-purple-600 hover:text-purple-500 text-sm font-medium">
          ← Back to sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Forgot Password - Long Châu',
  meta: [
    { name: 'description', content: 'Reset your Long Châu account password. Enter your email to receive a password reset link.' }
  ]
})

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')
const emailSent = ref(false)

const handleForgotPassword = async () => {
  error.value = ''
  success.value = ''
  loading.value = true

  try {
    const response = await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: { email: email.value }
    })

    success.value = 'Password reset instructions have been sent to your email.'
    emailSent.value = true
    
  } catch (err) {
    error.value = err.data?.message || 'Failed to send reset email. Please try again.'
  } finally {
    loading.value = false
  }
}

const resendEmail = async () => {
  await handleForgotPassword()
}
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
