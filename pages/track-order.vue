<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <!-- Breadcrumb -->
      <nav class="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="text-neutral-500 hover:text-primary-600">Home</NuxtLink>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <span class="mx-2 text-neutral-400">/</span>
              <span class="text-neutral-700">Track Order</span>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Track Your Order</h1>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          Enter your order number or tracking number to get real-time updates on your prescription and health product deliveries.
        </p>
      </div>

      <!-- Track Order Form -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <form @submit.prevent="trackOrder" class="space-y-6">
            <div>
              <label for="orderNumber" class="block text-sm font-medium text-neutral-700 mb-2">
                Order Number or Tracking Number
              </label>
              <input
                id="orderNumber"
                v-model="orderNumber"
                type="text"
                placeholder="Enter your order number (e.g., LC123456789)"
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
              <p class="text-sm text-neutral-500 mt-2">
                You can find your order number in your confirmation email or account dashboard.
              </p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
                Email Address (Optional)
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter the email used for this order"
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>

            <button
              type="submit"
              :disabled="isLoading || !orderNumber.trim()"
              class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              <span v-if="isLoading" class="flex items-center justify-center">
                <span class="i-iconify-ph-spinner animate-spin mr-2"></span>
                Tracking Order...
              </span>
              <span v-else>Track Order</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Order Tracking Results -->
      <div v-if="trackingData" class="space-y-8">
        <!-- Order Summary -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-neutral-900">Order Details</h2>
            <span :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              getStatusColor(trackingData.status)
            ]">
              {{ trackingData.status }}
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Order Number</h3>
              <p class="text-lg font-semibold text-neutral-900">{{ trackingData.orderNumber }}</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Order Date</h3>
              <p class="text-lg font-semibold text-neutral-900">{{ formatDate(trackingData.orderDate) }}</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Estimated Delivery</h3>
              <p class="text-lg font-semibold text-neutral-900">{{ formatDate(trackingData.estimatedDelivery) }}</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Tracking Number</h3>
              <p class="text-lg font-semibold text-neutral-900">{{ trackingData.trackingNumber }}</p>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-neutral-200">
            <h3 class="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">Delivery Address</h3>
            <p class="text-neutral-900">{{ trackingData.deliveryAddress }}</p>
          </div>
        </div>

        <!-- Tracking Timeline -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <h2 class="text-2xl font-bold text-neutral-900 mb-6">Tracking Timeline</h2>
          
          <div class="relative">
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
            
            <div class="space-y-6">
              <div
                v-for="(event, index) in trackingData.timeline"
                :key="index"
                class="relative flex items-start"
              >
                <div :class="[
                  'relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center',
                  event.completed 
                    ? 'bg-green-500 border-green-500' 
                    : event.current 
                      ? 'bg-primary-500 border-primary-500' 
                      : 'bg-white border-neutral-300'
                ]">
                  <span v-if="event.completed" class="i-iconify-ph-check text-white text-sm"></span>
                  <span v-else-if="event.current" class="i-iconify-ph-circle text-white text-sm"></span>
                </div>
                
                <div class="ml-6 flex-1">
                  <div class="flex items-center justify-between">
                    <h3 :class="[
                      'font-semibold',
                      event.completed || event.current ? 'text-neutral-900' : 'text-neutral-500'
                    ]">
                      {{ event.title }}
                    </h3>
                    <span :class="[
                      'text-sm',
                      event.completed || event.current ? 'text-neutral-600' : 'text-neutral-400'
                    ]">
                      {{ event.time ? formatDateTime(event.time) : 'Pending' }}
                    </span>
                  </div>
                  <p :class="[
                    'text-sm mt-1',
                    event.completed || event.current ? 'text-neutral-600' : 'text-neutral-400'
                  ]">
                    {{ event.description }}
                  </p>
                  <p v-if="event.location" :class="[
                    'text-xs mt-1',
                    event.completed || event.current ? 'text-neutral-500' : 'text-neutral-400'
                  ]">
                    📍 {{ event.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Items -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <h2 class="text-2xl font-bold text-neutral-900 mb-6">Order Items</h2>
          
          <div class="space-y-4">
            <div
              v-for="item in trackingData.items"
              :key="item.id"
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <span :class="item.isPrescription ? 'i-iconify-ph-pill' : 'i-iconify-ph-package'" class="text-2xl text-neutral-400"></span>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900">{{ item.name }}</h3>
                  <p class="text-sm text-neutral-600">{{ item.description }}</p>
                  <div class="flex items-center space-x-4 mt-1">
                    <span class="text-sm text-neutral-500">Qty: {{ item.quantity }}</span>
                    <span v-if="item.isPrescription" class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Prescription
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold text-neutral-900">${{ item.price.toFixed(2) }}</p>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-neutral-200">
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-neutral-900">Total</span>
              <span class="text-lg font-bold text-neutral-900">${{ trackingData.total.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <!-- Delivery Instructions -->
        <div v-if="trackingData.deliveryInstructions" class="bg-blue-50 rounded-lg p-6">
          <h3 class="font-semibold text-neutral-900 mb-2">Delivery Instructions</h3>
          <p class="text-neutral-700">{{ trackingData.deliveryInstructions }}</p>
        </div>

        <!-- Contact Support -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-xl font-bold text-neutral-900 mb-4">Need Help with Your Order?</h2>
            <p class="text-neutral-600 mb-6">
              Our customer service team is here to help with any questions about your order.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/contact"
                class="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Contact Support
              </NuxtLink>
              <a
                href="tel:(028) 73023456"
                class="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-medium"
              >
                Call (028) 73023456
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="max-w-2xl mx-auto">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <div class="flex items-center">
            <span class="i-iconify-ph-warning-circle text-red-500 text-xl mr-3"></span>
            <div>
              <h3 class="font-semibold text-red-900">Order Not Found</h3>
              <p class="text-red-700 mt-1">{{ errorMessage }}</p>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="font-medium text-red-900 mb-2">Please check:</h4>
            <ul class="text-sm text-red-700 space-y-1">
              <li>• Order number is entered correctly</li>
              <li>• Order was placed within the last 90 days</li>
              <li>• Email address matches the order</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="mt-12 text-center">
        <h2 class="text-xl font-semibold text-neutral-900 mb-6">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink
            to="/account/prescriptions"
            class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="i-iconify-ph-pill text-blue-600 text-xl"></span>
            </div>
            <h3 class="font-semibold text-neutral-900 mb-2">My Prescriptions</h3>
            <p class="text-sm text-neutral-600">View and manage your prescription orders</p>
          </NuxtLink>

          <NuxtLink
            to="/cart"
            class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="i-iconify-ph-shopping-cart text-green-600 text-xl"></span>
            </div>
            <h3 class="font-semibold text-neutral-900 mb-2">Shopping Cart</h3>
            <p class="text-sm text-neutral-600">Continue shopping for health products</p>
          </NuxtLink>

          <NuxtLink
            to="/shipping-policy"
            class="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="i-iconify-ph-truck text-purple-600 text-xl"></span>
            </div>
            <h3 class="font-semibold text-neutral-900 mb-2">Shipping Info</h3>
            <p class="text-sm text-neutral-600">Learn about our shipping options</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Meta
useHead({
  title: 'Track Order - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Track your Long Châu Pharmacy orders in real-time. Get updates on prescription deliveries, shipping status, and estimated delivery times.'
    },
    {
      name: 'keywords',
      content: 'track order, order tracking, prescription delivery, shipping status, order status'
    }
  ]
})

// Reactive data
const orderNumber = ref('')
const email = ref('')
const isLoading = ref(false)
const trackingData = ref(null)
const errorMessage = ref('')

// Sample tracking data for demonstration
const sampleTrackingData = {
  orderNumber: 'LC123456789',
  status: 'In Transit',
  orderDate: '2025-06-22T10:30:00Z',
  estimatedDelivery: '2025-06-25T17:00:00Z',
  trackingNumber: 'UP123456789012',
  deliveryAddress: '123 Main Street, Apartment 4B, New York, NY 10001',
  deliveryInstructions: 'Leave package with front desk. Signature required for prescription items.',
  total: 87.45,
  timeline: [
    {
      title: 'Order Placed',
      description: 'Your order has been received and is being processed.',
      time: '2025-06-22T10:30:00Z',
      location: 'Long Châu Pharmacy',
      completed: true,
      current: false
    },
    {
      title: 'Prescription Verified',
      description: 'Pharmacist has verified your prescription and prepared your medication.',
      time: '2025-06-22T14:45:00Z',
      location: 'Long Châu Pharmacy',
      completed: true,
      current: false
    },
    {
      title: 'Order Packed',
      description: 'Your order has been securely packaged and is ready for shipping.',
      time: '2025-06-23T09:15:00Z',
      location: 'Long Châu Distribution Center',
      completed: true,
      current: false
    },
    {
      title: 'In Transit',
      description: 'Your package is on its way to your delivery address.',
      time: '2025-06-23T18:30:00Z',
      location: 'UPS Facility - Newark, NJ',
      completed: false,
      current: true
    },
    {
      title: 'Out for Delivery',
      description: 'Your package is on the delivery truck and will arrive today.',
      time: null,
      location: 'Local Delivery Facility',
      completed: false,
      current: false
    },
    {
      title: 'Delivered',
      description: 'Your order has been successfully delivered.',
      time: null,
      location: '123 Main Street, New York, NY',
      completed: false,
      current: false
    }
  ],
  items: [
    {
      id: 1,
      name: 'Lisinopril 10mg',
      description: '30 tablets - Generic for Prinivil',
      quantity: 1,
      price: 15.99,
      isPrescription: true
    },
    {
      id: 2,
      name: 'Centrum Silver Multivitamin',
      description: '100 tablets - Adult 50+',
      quantity: 1,
      price: 19.99,
      isPrescription: false
    },
    {
      id: 3,
      name: 'Ibuprofen 200mg',
      description: '50 tablets - Pain reliever',
      quantity: 2,
      price: 8.99,
      isPrescription: false
    },
    {
      id: 4,
      name: 'Bandage Strips',
      description: 'Assorted sizes - 40 count',
      quantity: 1,
      price: 6.99,
      isPrescription: false
    }
  ]
}

// Methods
const trackOrder = async () => {
  if (!orderNumber.value.trim()) return

  isLoading.value = true
  errorMessage.value = ''
  trackingData.value = null

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes, show sample data if specific order number is entered
    if (orderNumber.value.toUpperCase().includes('LC123456789') || 
        orderNumber.value.toUpperCase().includes('UP123456789012')) {
      trackingData.value = sampleTrackingData
    } else {
      // Simulate order not found
      errorMessage.value = 'We could not find an order with that number. Please check your order number and try again.'
    }
  } catch (error) {
    errorMessage.value = 'There was an error tracking your order. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

const getStatusColor = (status) => {
  const colors = {
    'Order Placed': 'bg-blue-100 text-blue-800',
    'Processing': 'bg-yellow-100 text-yellow-800',
    'In Transit': 'bg-purple-100 text-purple-800',
    'Out for Delivery': 'bg-orange-100 text-orange-800',
    'Delivered': 'bg-green-100 text-green-800',
    'Cancelled': 'bg-red-100 text-red-800'
  }
  return colors[status] || 'bg-neutral-100 text-neutral-800'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}
</script>
