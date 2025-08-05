<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-neutral-900">Cart Items ({{ cartItemCount }})</h1>
        <button @click="clearCart" class="text-sm text-neutral-500 hover:text-accent-600">Clear Cart</button>
      </div>

      <div v-if="cartItems.length === 0" class="bg-white rounded-lg shadow-sm p-8 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
          <span class="i-iconify-ph-shopping-cart-fill text-3xl text-neutral-400"></span>
        </div>
        <h2 class="text-xl font-semibold text-neutral-800 mb-3">Your cart is empty</h2>
        <p class="text-neutral-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
        <NuxtLink to="/" class="btn-primary">Continue Shopping</NuxtLink>
      </div>
      
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm divide-y divide-neutral-100">
            <div v-for="(item, index) in cartItems" :key="index" 
                 class="p-6 flex items-start space-x-4">
              <!-- Product Image -->
              <div class="w-24 h-24 flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover rounded-md">
              </div>
              
              <!-- Product Details -->
              <div class="flex-1 min-w-0">
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-lg font-medium text-neutral-900 mb-1">{{ item.name }}</h3>
                    <p class="text-sm text-neutral-500">Unit Price: ${{ item.price.toFixed(2) }}</p>
                  </div>
                  <p class="text-lg font-medium text-neutral-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center space-x-4">
                    <div class="inline-flex items-center border border-neutral-200 rounded-md">
                      <button @click="updateQuantity(index, item.quantity - 1)"
                              :disabled="item.quantity <= 1"
                              class="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <span class="w-12 text-center font-medium">{{ item.quantity }}</span>
                      <button @click="updateQuantity(index, item.quantity + 1)"
                              :disabled="item.quantity >= 10"
                              class="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-3">
                    <button @click="saveForLater(index)" 
                            class="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-white hover:text-primary-600 border border-primary-600 transition-all duration-500">
                      Save for Later
                    </button>
                    <button @click="removeItem(index)" 
                            class="px-4 py-2 rounded-md bg-accent-600 text-white hover:bg-white hover:text-accent-600 border border-accent-600 transition-all duration-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Continue Shopping Link -->
          <div class="mt-6">
            <NuxtLink to="/" class="inline-flex items-center text-primary-600 hover:text-primary-700">
              <span class="i-iconify-ph-arrow-left text-lg mr-2"></span>
              Continue Shopping
            </NuxtLink>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm sticky top-24">
            <div class="p-6">
              <h2 class="text-xl font-semibold text-neutral-900 mb-6">Order Summary</h2>
              
              <div class="space-y-4 text-neutral-600">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span class="font-medium text-neutral-900">${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Shipping</span>
                  <span v-if="cartTotal > 50" class="text-success-600 font-medium">Free</span>
                  <span v-else class="font-medium text-neutral-900">${{ shipping.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Tax (8%)</span>
                  <span class="font-medium text-neutral-900">${{ tax.toFixed(2) }}</span>
                </div>

                <!-- Discount Code (if applicable) -->
                <div v-if="discount > 0" class="flex justify-between text-success-600">
                  <span>Discount</span>
                  <span>-${{ discount.toFixed(2) }}</span>
                </div>
                
                <div class="border-t border-neutral-200 pt-4 mt-4">
                  <div class="flex justify-between text-lg">
                    <span class="font-semibold text-neutral-900">Total</span>
                    <span class="font-bold text-neutral-900">${{ orderTotal.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Discount Code Input -->
              <div class="mb-6">
                <div class="flex gap-2">
                  <input type="text" placeholder="Promo code" v-model="promoCode" class="input flex-grow">
                  <button @click="applyPromoCode" class="btn-outline px-4 whitespace-nowrap">Apply</button>
                </div>
                <p v-if="promoError" class="text-sm text-accent-600 mt-1">{{ promoError }}</p>
                <p v-if="promoSuccess" class="text-sm text-success-600 mt-1">{{ promoSuccess }}</p>
              </div>
              
              <!-- Checkout Button -->
              <NuxtLink to="/checkout" class="btn-primary w-full flex justify-center py-3">
                Proceed to Checkout
              </NuxtLink>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

import { ref, computed, watch } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useNotificationsStore } from '~/stores/notifications'

// Import stores
const cartStore = useCartStore()
const notifications = useNotificationsStore()

// State
const promoCode = ref('')
const promoError = ref('')
const promoSuccess = ref('')
const discount = ref(0)
const savedItems = ref([])

// Get cart items from store
const cartItems = computed(() => cartStore.items)
const cartItemCount = computed(() => cartStore.itemCount)
const cartTotal = computed(() => cartStore.total)

// Calculate shipping, tax, and order total
const shipping = computed(() => cartTotal.value > 50 ? 0 : 5.99)
const tax = computed(() => cartTotal.value * 0.08)
const orderTotal = computed(() => cartTotal.value + shipping.value + tax.value - discount.value)

// Methods
const updateQuantity = async (index, quantity) => {
  if (quantity > 0 && quantity <= 10) {
    const item = cartItems.value[index]
    if (item) {
      await cartStore.updateQuantity(item.id, quantity)
      notifications.success('Cart updated successfully')
    }
  }
}

const removeItem = (index) => {
  const item = cartItems.value[index]
  if (item) {
    cartStore.removeItem(item.id)
    notifications.success('Item removed from cart')
  }
}

const clearCart = () => {
  cartStore.clearCart()
  notifications.success('Cart cleared successfully')
}

const saveForLater = (index) => {
  const item = cartItems.value[index]
  if (item) {
    // Add the item to saved items
    savedItems.value.push({ ...item })
    
    // Remove from cart using product ID
    cartStore.removeItem(item.id)
    notifications.success('Item saved for later')
  }
}

const moveToCart = (index) => {
  const item = savedItems.value[index]
  if (item) {
    // Add the item back to cart
    cartStore.addItem(item, item.quantity)
    
    // Remove from saved items
    savedItems.value.splice(index, 1)
    notifications.success('Item moved back to cart')
  }
}

const removeSavedItem = (index) => {
  savedItems.value.splice(index, 1)
  notifications.success('Saved item removed')
}

const applyPromoCode = () => {
  promoError.value = ''
  promoSuccess.value = ''
  
  if (promoCode.value.trim() === '') {
    promoError.value = 'Please enter a promo code'
    return
  }
  
  // Check for valid promo codes (in a real app, this would be validated against a database)
  if (promoCode.value.toLowerCase() === 'welcome10') {
    discount.value = cartTotal.value * 0.1 // 10% discount
    promoSuccess.value = 'Promo code applied successfully! You saved $' + discount.value.toFixed(2)
  } else if (promoCode.value.toLowerCase() === 'freeship') {
    if (cartTotal.value <= 50) {
      discount.value = shipping.value
      promoSuccess.value = 'Free shipping applied!'
    } else {
      promoError.value = 'Free shipping is already applied to orders over $50'
    }
  } else {
    promoError.value = 'Invalid promo code'
  }
}

// Reset error messages when promo code changes
watch(promoCode, () => {
  promoError.value = ''
  promoSuccess.value = ''
})
</script>