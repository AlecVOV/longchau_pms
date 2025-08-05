<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <NuxtLink to="/" class="inline-block">
          <h1 class="text-3xl font-bold text-purple-600">Long Châu</h1>
        </NuxtLink>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Set new password
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Enter your new password below.
        </p>
      </div>

      <!-- Reset Password Form -->
      <form @submit.prevent="handleResetPassword" class="mt-8 space-y-6">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <!-- Error Message -->
          <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {{ error }}
          </div>

          <!-- Success Message -->
          <div v-if="success" class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {{ success }}
          </div>

          <!-- Invalid Token Message -->
          <div v-if="invalidToken" class="text-center space-y-4">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Invalid or expired link</h3>
              <p class="mt-2 text-sm text-gray-600">
                This password reset link is invalid or has expired.
              </p>
              <NuxtLink to="/forgot-password" class="mt-4 inline-block text-purple-600 hover:text-purple-500 text-sm font-medium">
                Request a new reset link
              </NuxtLink>
            </div>
          </div>

          <!-- Reset Form -->
          <div v-else-if="!passwordReset" class="space-y-4">
            <!-- New Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div class="mt-1 relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  :class="{ 'border-red-500': passwordError }"
                  placeholder="Enter new password"
                  @input="validatePassword"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg v-if="!showPassword" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122l4.243 4.243M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3" />
                  </svg>
                </button>
              </div>
              
              <!-- Password Strength Indicator -->
              <div class="mt-2">
                <div class="flex space-x-1">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="h-1 w-1/4 rounded"
                    :class="getPasswordStrengthClass(i)"
                  ></div>
                </div>
                <p class="mt-1 text-xs text-gray-600">
                  Password strength: {{ passwordStrengthText }}
                </p>
              </div>
              <p v-if="passwordError" class="mt-1 text-sm text-red-600">{{ passwordError }}</p>
            </div>

            <!-- Confirm Password Field -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                :class="{ 'border-red-500': confirmPasswordError }"
                placeholder="Confirm new password"
                @blur="validateConfirmPassword"
              />
              <p v-if="confirmPasswordError" class="mt-1 text-sm text-red-600">{{ confirmPasswordError }}</p>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="loading || !isFormValid"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ loading ? 'Updating password...' : 'Update password' }}
              </button>
            </div>
          </div>

          <!-- Success State -->
          <div v-else class="text-center space-y-4">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Password updated successfully</h3>
              <p class="mt-2 text-sm text-gray-600">
                Your password has been updated. You can now sign in with your new password.
              </p>
              <NuxtLink to="/login" class="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm font-medium">
                Sign in now
              </NuxtLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'guest'
})

useHead({
  title: 'Reset Password - Long Châu',
  meta: [
    { name: 'description', content: 'Reset your Long Châu account password. Enter your new password to regain access to your account.' }
  ]
})

const route = useRoute()
const token = route.query.token
const email = route.query.email

const form = ref({
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const error = ref('')
const success = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const invalidToken = ref(false)
const passwordReset = ref(false)

// Password strength calculation
const passwordStrength = computed(() => {
  const password = form.value.password
  let strength = 0
  
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++
  
  return strength
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength === 0) return 'Very weak'
  if (strength === 1) return 'Weak'
  if (strength === 2) return 'Fair'
  if (strength === 3) return 'Good'
  return 'Strong'
})

const getPasswordStrengthClass = (index) => {
  const strength = passwordStrength.value
  if (index <= strength) {
    if (strength <= 1) return 'bg-red-500'
    if (strength === 2) return 'bg-yellow-500'
    if (strength === 3) return 'bg-blue-500'
    return 'bg-green-500'
  }
  return 'bg-gray-200'
}

const isFormValid = computed(() => {
  return form.value.password &&
         form.value.confirmPassword &&
         !passwordError.value &&
         !confirmPasswordError.value
})

const validatePassword = () => {
  const password = form.value.password
  if (password.length < 8) {
    passwordError.value = 'Password must be at least 8 characters long'
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    passwordError.value = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  } else {
    passwordError.value = ''
  }
  
  if (form.value.confirmPassword) {
    validateConfirmPassword()
  }
}

const validateConfirmPassword = () => {
  if (form.value.password !== form.value.confirmPassword) {
    confirmPasswordError.value = 'Passwords do not match'
  } else {
    confirmPasswordError.value = ''
  }
}

const handleResetPassword = async () => {
  error.value = ''
  success.value = ''
  loading.value = true

  validatePassword()
  validateConfirmPassword()

  if (passwordError.value || confirmPasswordError.value) {
    loading.value = false
    return
  }

  try {
    const response = await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: {
        token,
        email,
        password: form.value.password,
        confirmPassword: form.value.confirmPassword
      }
    })

    success.value = 'Password has been reset successfully!'
    passwordReset.value = true
    
  } catch (err) {
    if (err.status === 400 || err.status === 404) {
      invalidToken.value = true
    } else {
      error.value = err.data?.message || 'Failed to reset password. Please try again.'
    }
  } finally {
    loading.value = false
  }
}

// Validate token on mount
onMounted(async () => {
  if (!token || !email) {
    invalidToken.value = true
    return
  }

  try {
    await $fetch('/api/auth/validate-reset-token', {
      method: 'POST',
      body: { token, email }
    })
  } catch (err) {
    invalidToken.value = true
  }
})
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
