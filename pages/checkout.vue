<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Checkout</h1>
      
      <!-- Empty Cart Message -->
      <div v-if="cartItems.length === 0" class="bg-white rounded-lg shadow-sm p-8 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
          <span class="i-iconify-ph-shopping-cart-fill text-3xl text-neutral-400"></span>
        </div>
        <h2 class="text-xl font-semibold text-neutral-800 mb-3">Your cart is empty</h2>
        <p class="text-neutral-600 mb-6">You need to add items to your cart before proceeding to checkout.</p>
        <NuxtLink to="/" class="btn-primary">Browse Products</NuxtLink>
      </div>
      
      <!-- Checkout Process -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Checkout Steps -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Checkout Progress -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between">
              <div 
                v-for="(step, index) in checkoutSteps" 
                :key="step.id" 
                class="flex-1 flex flex-col items-center"
              >
                <div 
                  class="w-8 h-8 rounded-full flex items-center justify-center mb-2 relative text-sm"
                  :class="[
                    activeStep === index ? 'bg-primary-600 text-white' : 
                    activeStep > index ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-600'
                  ]"
                >
                  <span v-if="activeStep <= index">{{ index + 1 }}</span>
                  <span v-else class="i-iconify-ph-check-bold"></span>
                  
                  <!-- Progress line -->
                  <div 
                    v-if="index < checkoutSteps.length - 1" 
                    class="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 left-1/2"
                    :class="[
                      activeStep > index ? 'bg-primary-500' : 'bg-neutral-200'
                    ]"
                  ></div>
                </div>
                <span 
                  class="text-sm font-medium hidden md:block"
                  :class="[
                    activeStep === index ? 'text-primary-600' : 
                    activeStep > index ? 'text-primary-500' : 'text-neutral-500'
                  ]"
                >
                  {{ step.name }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Shipping Information (Step 1) -->
          <div v-if="activeStep === 0" class="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <span class="i-iconify-ph-truck-fill text-xl text-primary-600 mr-2"></span>
              Shipping Information
            </h2>
            
            <div class="space-y-4">
              <!-- Contact Information -->
              <div>
                <h3 class="font-medium text-neutral-800 mb-3">Contact Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="email" class="block text-sm font-medium text-neutral-700 mb-1">Email Address <span class="text-accent-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.email}"
                      required
                    >
                    <p v-if="errors.email" class="text-accent-600 text-xs mt-1">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-neutral-700 mb-1">Phone Number <span class="text-accent-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.phone}"
                      required
                    >
                    <p v-if="errors.phone" class="text-accent-600 text-xs mt-1">{{ errors.phone }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Shipping Address -->
              <div class="mt-6">
                <h3 class="font-medium text-neutral-800 mb-3">Shipping Address</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-neutral-700 mb-1">First Name <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="formData.firstName" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.firstName}"
                      required
                    >
                    <p v-if="errors.firstName" class="text-accent-600 text-xs mt-1">{{ errors.firstName }}</p>
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-neutral-700 mb-1">Last Name <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="formData.lastName" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.lastName}"
                      required
                    >
                    <p v-if="errors.lastName" class="text-accent-600 text-xs mt-1">{{ errors.lastName }}</p>
                  </div>
                  <div class="md:col-span-2">
                    <label for="address" class="block text-sm font-medium text-neutral-700 mb-1">Address <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="address" 
                      v-model="formData.address" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.address}"
                      required
                    >
                    <p v-if="errors.address" class="text-accent-600 text-xs mt-1">{{ errors.address }}</p>
                  </div>
                  <div>
                    <label for="zipCode" class="block text-sm font-medium text-neutral-700 mb-1">Postal Code <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      v-model="formData.zipCode" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.zipCode}"
                      required
                    >
                    <p v-if="errors.zipCode" class="text-accent-600 text-xs mt-1">{{ errors.zipCode }}</p>
                  </div>
                  <div>
                    <label for="country" class="block text-sm font-medium text-neutral-700 mb-1">Country <span class="text-accent-500">*</span></label>
                    <select 
                      id="country" 
                      v-model="formData.country" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.country}"
                      required
                    >
                      <option value="VN">Vietnam</option>
                    </select>
                    <p v-if="errors.country" class="text-accent-600 text-xs mt-1">{{ errors.country }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Shipping Options -->
              <div class="mt-6">
                <h3 class="font-medium text-neutral-800 mb-3">Shipping Method</h3>
                <div class="space-y-3">
                  <div 
                    v-for="(option, index) in shippingOptions" 
                    :key="option.id" 
                    class="border rounded-lg p-4 flex items-center cursor-pointer transition-colors"
                    :class="formData.shippingMethod === option.id ? 'border-primary-500 bg-primary-50' : 'border-neutral-200 hover:border-primary-300'"
                    @click="formData.shippingMethod = option.id"
                  >
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3"
                         :class="formData.shippingMethod === option.id ? 'border-primary-600' : 'border-neutral-300'">
                      <div v-if="formData.shippingMethod === option.id" class="w-3 h-3 rounded-full bg-primary-600"></div>
                    </div>
                    <div class="flex-grow">
                      <p class="font-medium text-neutral-800">{{ option.name }}</p>
                      <p class="text-sm text-neutral-500">{{ option.description }}</p>
                    </div>
                    <div class="text-right">
                      <p class="font-semibold text-neutral-800">
                        {{ option.price === 0 ? 'Free' : '$' + option.price.toFixed(2) }}
                      </p>
                      <p class="text-xs text-neutral-500">{{ option.eta }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Special Instructions -->
              <div class="mt-6">
                <label for="instructions" class="block text-sm font-medium text-neutral-700 mb-1">Special Instructions (Optional)</label>
                <textarea 
                  id="instructions" 
                  v-model="formData.specialInstructions" 
                  class="input h-20" 
                  placeholder="Any special delivery instructions or notes"
                ></textarea>
              </div>
              
              <!-- Prescription Upload Notice -->
              <div v-if="hasPrescriptionItems" class="mt-6 bg-primary-50 border border-primary-100 rounded-md p-4">
                <div class="flex">
                  <span class="i-iconify-ph-prescription-fill text-xl text-primary-600 mr-2 mt-0.5"></span>
                  <div>
                    <h3 class="font-medium text-primary-700 mb-1">Prescription Required</h3>
                    <p class="text-sm text-primary-600 mb-3">
                      One or more items in your order require a prescription. 
                      Please upload a valid prescription below.
                    </p>
                    <div class="flex items-center">
                      <label for="prescription" class="btn-outline text-sm py-1.5 cursor-pointer">
                        <span class="i-iconify-ph-upload-simple text-lg mr-1"></span>
                        Upload Prescription
                        <input 
                          type="file" 
                          id="prescription" 
                          class="hidden" 
                          accept=".jpg,.jpeg,.png,.pdf"
                          @change="handlePrescriptionUpload"
                        >
                      </label>
                      <span v-if="formData.prescriptionFile" class="ml-3 text-sm text-primary-600">
                        {{ formData.prescriptionFile.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between mt-8">
              <NuxtLink to="/cart" class="btn-outline">Return to Cart</NuxtLink>
              <button @click="goToStep(1)" class="btn-primary" :disabled="!canProceedToNextStep">Continue to Payment</button>
            </div>
          </div>
          
          <!-- Payment (Step 2) -->
          <div v-if="activeStep === 1" class="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <span class="i-iconify-ph-credit-card-fill text-xl text-primary-600 mr-2"></span>
              Payment Method
            </h2>
            
            <div class="space-y-4">
              <!-- Billing Address -->
              <div>
                <div class="flex items-center mb-4">
                  <h3 class="font-medium text-neutral-800">Billing Address</h3>
                  <div class="ml-6 flex items-center">
                    <input 
                      type="checkbox" 
                      id="sameAsShipping" 
                      v-model="sameAsShipping" 
                      class="rounded text-primary-600 focus:ring-primary-500 h-4 w-4"
                    >
                    <label for="sameAsShipping" class="ml-2 text-sm text-neutral-700">
                      Same as shipping address
                    </label>
                  </div>
                </div>
                
                <div v-if="!sameAsShipping" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="billingFirstName" class="block text-sm font-medium text-neutral-700 mb-1">First Name <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="billingFirstName" 
                      v-model="billingAddress.firstName" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.billingFirstName}"
                      required
                    >
                    <p v-if="errors.billingFirstName" class="text-accent-600 text-xs mt-1">{{ errors.billingFirstName }}</p>
                  </div>
                  <div>
                    <label for="billingLastName" class="block text-sm font-medium text-neutral-700 mb-1">Last Name <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="billingLastName" 
                      v-model="billingAddress.lastName" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.billingLastName}"
                      required
                    >
                    <p v-if="errors.billingLastName" class="text-accent-600 text-xs mt-1">{{ errors.billingLastName }}</p>
                  </div>
                  <div class="md:col-span-2">
                    <label for="billingAddress" class="block text-sm font-medium text-neutral-700 mb-1">Street Address <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="billingAddress" 
                      v-model="billingAddress.address" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.billingAddress}"
                      required
                    >
                    <p v-if="errors.billingAddress" class="text-accent-600 text-xs mt-1">{{ errors.billingAddress }}</p>
                  </div>
                  <div>
                    <label for="billingZipCode" class="block text-sm font-medium text-neutral-700 mb-1">Postal Code <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="billingZipCode" 
                      v-model="billingAddress.zipCode" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.billingZipCode}"
                      required
                    >
                    <p v-if="errors.billingZipCode" class="text-accent-600 text-xs mt-1">{{ errors.billingZipCode }}</p>
                  </div>
                  <div>
                    <label for="billingCountry" class="block text-sm font-medium text-neutral-700 mb-1">Country <span class="text-accent-500">*</span></label>
                    <select 
                      id="billingCountry" 
                      v-model="billingAddress.country" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.billingCountry}"
                      required
                    >
                      <option value="VN">Vietnam</option>
                    </select>
                    <p v-if="errors.billingCountry" class="text-accent-600 text-xs mt-1">{{ errors.billingCountry }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Enhanced Payment Form -->
              <PaymentForm
                ref="paymentFormRef"
                v-model="paymentData"
                :disabled="isProcessingPayment"
                @validation-change="handlePaymentValidation"
              />
              
              <!-- Payment Terms -->
              <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h4 class="text-sm font-medium text-blue-800 mb-1">Payment Information</h4>
                    <div class="text-sm text-blue-700 space-y-1">
                      <p>• Your payment will be processed securely using 256-bit SSL encryption</p>
                      <p>• No payment will be charged until your order is confirmed</p>
                      <p>• You can review your order before completing the purchase</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- PayPal Information (if PayPal selected) -->
              <div v-if="paymentMethod === 'paypal'" class="mt-6 p-4 border border-neutral-200 rounded-lg">
                <div class="text-center">
                  <p class="mb-4 text-neutral-700">You will be redirected to PayPal to complete your payment securely.</p>
                  <img src="https://placehold.co/200x60?text=PayPal" alt="PayPal" class="h-8 mx-auto">
                </div>
              </div>
            </div>
            
            <div class="flex justify-between mt-8">
              <button @click="goToStep(0)" class="btn-outline">Back to Shipping</button>
              <button @click="goToStep(2)" class="btn-primary" :disabled="!paymentValid">Continue to Review</button>
            </div>
          </div>
          
          <!-- Review Order (Step 3) -->
          <div v-if="activeStep === 2" class="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
            <h2 class="text-xl font-semibold mb-6 flex items-center">
              <span class="i-iconify-ph-clipboard-text-fill text-xl text-primary-600 mr-2"></span>
              Review Your Order
            </h2>
            
            <div class="space-y-6">
              <!-- Order Items -->
              <div>
                <h3 class="font-medium text-neutral-800 mb-3">Order Items ({{ cartItemCount }})</h3>
                <div class="space-y-4 max-h-60 overflow-y-auto pr-2">
                  <div v-for="(item, index) in cartItems" :key="index" class="flex items-center gap-3 py-2 border-b border-neutral-100 last:border-b-0">
                    <img :src="item.image" :alt="item.name" class="w-14 h-14 object-cover rounded-md">
                    <div class="flex-grow">
                      <p class="font-medium text-neutral-800">{{ item.name }}</p>
                      <div class="flex justify-between mt-1">
                        <p class="text-sm text-neutral-500">Qty: {{ item.quantity }}</p>
                        <p class="font-medium text-neutral-800">${{ (item.price * item.quantity).toFixed(2) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Shipping Info Summary -->
              <div class="border-t border-neutral-200 pt-4">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-medium text-neutral-800">Shipping Information</h3>
                  <button @click="goToStep(0)" class="text-sm text-primary-600 hover:text-primary-700">
                    Edit
                  </button>
                </div>
                <div class="bg-neutral-50 rounded-lg p-3 text-sm">
                  <p class="font-medium text-neutral-800">{{ formData.firstName }} {{ formData.lastName }}</p>
                  <p>{{ formData.address }}</p>
                  <p>{{ formData.zipCode }}</p>
                  <p>{{ getCountryName(formData.country) }}</p>
                  <p class="mt-1">{{ formData.email }}</p>
                  <p>{{ formData.phone }}</p>
                  <p v-if="formData.specialInstructions" class="mt-2 text-neutral-600 italic">
                    <span class="font-medium">Special Instructions:</span> {{ formData.specialInstructions }}
                  </p>
                  <p class="mt-2 text-neutral-600">
                    <span class="font-medium">Shipping Method:</span> {{ getShippingMethodName() }}
                  </p>
                </div>
              </div>
              
              <!-- Payment Info Summary -->
              <div class="border-t border-neutral-200 pt-4">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-medium text-neutral-800">Payment Information</h3>
                  <button @click="goToStep(1)" class="text-sm text-primary-600 hover:text-primary-700">
                    Edit
                  </button>
                </div>
                <div class="bg-neutral-50 rounded-lg p-3 text-sm">
                  <div v-if="paymentMethod === 'credit-card'">
                    <div class="flex items-center">
                      <span v-if="cardType" :class="`i-iconify-${cardType} text-xl mr-2`"></span>
                      <span v-else class="i-iconify-ph-credit-card-fill text-xl mr-2 text-neutral-400"></span>
                      <div>
                        <p class="font-medium">Credit Card</p>
                        <p>**** **** **** {{ paymentDetails.cardNumber.slice(-4) }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="paymentMethod === 'paypal'">
                    <div class="flex items-center">
                      <span class="i-iconify-ph-paypal-logo-fill text-xl mr-2 text-[#003087]"></span>
                      <p class="font-medium">PayPal</p>
                    </div>
                  </div>
                  
                  <div class="mt-2" v-if="!sameAsShipping">
                    <p class="font-medium mt-3">Billing Address:</p>
                    <p>{{ billingAddress.firstName }} {{ billingAddress.lastName }}</p>
                    <p>{{ billingAddress.address }}</p>
                    <p>{{ billingAddress.zipCode }}</p>
                    <p>{{ getCountryName(billingAddress.country) }}</p>
                  </div>
                  <div class="mt-2" v-else>
                    <p class="text-neutral-600"><span class="font-medium">Billing Address:</span> Same as shipping</p>
                  </div>
                </div>
              </div>
              
              <!-- Prescription Information (if applicable) -->
              <div v-if="hasPrescriptionItems" class="border-t border-neutral-200 pt-4">
                <h3 class="font-medium text-neutral-800 mb-2">Prescription Information</h3>
                <div class="bg-neutral-50 rounded-lg p-3 text-sm">
                  <div v-if="formData.prescriptionFile">
                    <div class="flex items-center">
                      <span class="i-iconify-ph-check-circle-fill text-lg text-success-500 mr-2"></span>
                      <p>Prescription uploaded: <span class="font-medium">{{ formData.prescriptionFile.name }}</span></p>
                    </div>
                  </div>
                  <div v-else class="text-accent-600">
                    <span class="i-iconify-ph-warning-circle-fill text-lg mr-2 align-text-bottom"></span>
                    <span>Prescription not uploaded. Please go back to the shipping step to upload your prescription.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between mt-8">
              <button @click="goToStep(1)" class="btn-outline">Back to Payment</button>
              <button 
                @click="placeOrder" 
                class="btn-primary" 
                :disabled="!canPlaceOrder"
              >
                Place Order
              </button>
            </div>
          </div>
          
          <!-- Order Confirmation (Step 4) -->
          <div v-if="activeStep === 3" class="bg-white rounded-lg shadow-sm p-6 text-center animate-fade-in">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-success-100 flex items-center justify-center">
              <span class="i-iconify-ph-check-fill text-4xl text-success-500"></span>
            </div>
            <h2 class="text-2xl font-bold text-neutral-900 mb-3">Thank You for Your Order!</h2>
            <p class="text-neutral-600 mb-6">Your order has been placed successfully.</p>
            
            <div class="max-w-md mx-auto bg-neutral-50 rounded-lg p-4 text-left mb-8">
              <p class="font-semibold text-neutral-800 mb-2">Order #{{ orderNumber }}</p>
              <p class="text-sm text-neutral-600 mb-4">A confirmation email has been sent to {{ formData.email }}</p>
              
              <div class="border-t border-neutral-200 pt-3 mt-3">
                <p class="font-medium text-neutral-800 mb-1">Order Summary</p>
                <div class="flex justify-between text-sm text-neutral-600 mb-1">
                  <span>Subtotal ({{ cartItemCount }} items):</span>
                  <span>${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm text-neutral-600 mb-1">
                  <span>Shipping:</span>
                  <span v-if="selectedShippingOption.price === 0">Free</span>
                  <span v-else>${{ selectedShippingOption.price.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm text-neutral-600 mb-1">
                  <span>Tax:</span>
                  <span>${{ tax.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between font-semibold text-neutral-800 mt-2 text-base">
                  <span>Total:</span>
                  <span>${{ orderTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
            
            <div class="space-x-4">
              <NuxtLink to="/account/orders" class="btn-primary">
                View Your Orders
              </NuxtLink>
              <NuxtLink to="/" class="btn-outline">
                Continue Shopping
              </NuxtLink>
            </div>
            
            <!-- Manual Cart Clear Button (if cart still has items) -->
            <div v-if="cartItems.length > 0" class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div class="text-center">
                <p class="text-sm text-amber-700 mb-3">
                  <span class="i-iconify-ph-warning-fill text-lg mr-1"></span>
                  Your cart still contains items. This might be a technical issue.
                </p>
                <button 
                  @click="forceClearCart" 
                  class="btn-outline text-sm"
                >
                  Clear Cart Manually
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm overflow-hidden lg:sticky lg:top-8 lg:max-h-[calc(100vh-6rem)]">
            <div class="p-4 sm:p-6 border-b border-neutral-200">
              <h2 class="text-lg font-semibold text-neutral-800">Order Summary</h2>
            </div>
            
            <div class="p-4 sm:p-6 lg:overflow-y-auto lg:max-h-[calc(100vh-12rem)]">
              <div v-if="cartItems.length > 0" class="max-h-60 lg:max-h-none overflow-y-auto mb-4">
                <div v-for="(item, index) in cartItems" :key="index" class="flex items-center py-2 border-b border-neutral-100 last:border-b-0">
                  <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded-md">
                  <div class="ml-3 flex-1">
                    <p class="text-sm font-medium text-neutral-800 line-clamp-1">{{ item.name }}</p>
                    <div class="flex items-center justify-between mt-1">
                      <p class="text-sm text-neutral-500">{{ item.quantity }} × ${{ item.price.toFixed(2) }}</p>
                      <p class="text-sm font-medium">${{ (item.price * item.quantity).toFixed(2) }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                  <span class="text-neutral-600">Subtotal</span>
                  <span class="font-medium text-neutral-800">${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600">Shipping</span>
                  <span v-if="selectedShippingOption.price === 0" class="text-success-500 font-medium">Free</span>
                  <span v-else class="font-medium text-neutral-800">${{ selectedShippingOption.price.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-600">Tax (8%)</span>
                  <span class="font-medium text-neutral-800">${{ tax.toFixed(2) }}</span>
                </div>
                
                <!-- Discount Code (if applicable) -->
                <div v-if="discount > 0" class="flex justify-between text-success-600">
                  <span>Discount</span>
                  <span>-${{ discount.toFixed(2) }}</span>
                </div>
                
                <div class="border-t border-neutral-200 pt-3 mt-3">
                  <div class="flex justify-between">
                    <span class="font-semibold text-neutral-800">Total</span>
                    <span class="font-bold text-lg text-neutral-900">${{ orderTotal.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Promo Code (Only in cart/first step) -->
              <div v-if="activeStep === 0" class="mb-6">
                <div class="flex gap-2">
                  <input type="text" placeholder="Promo code" v-model="promoCode" class="input flex-grow">
                  <button @click="applyPromoCode" class="btn-outline px-4 whitespace-nowrap">Apply</button>
                </div>
                <p v-if="promoError" class="text-sm text-accent-600 mt-1">{{ promoError }}</p>
                <p v-if="promoSuccess" class="text-sm text-success-600 mt-1">{{ promoSuccess }}</p>
              </div>
              
              <!-- Order Summary Info -->
              <div class="mt-6 bg-neutral-50 rounded-lg p-3">
                <h3 class="font-medium text-neutral-800 mb-2 text-sm">Order Information</h3>
                <ul class="text-xs space-y-1.5 text-neutral-600">
                  <li class="flex">
                    <span class="i-iconify-ph-shield-check-fill text-success-500 mr-1.5"></span>
                    <span>All transactions are secure and encrypted</span>
                  </li>
                  <li class="flex">
                    <span class="i-iconify-ph-truck-fill text-primary-500 mr-1.5"></span>
                    <span>Orders are typically processed within 24 hours</span>
                  </li>
                  <li class="flex">
                    <span class="i-iconify-ph-info-fill text-warning-500 mr-1.5"></span>
                    <span>Prescription items require verification before shipping</span>
                  </li>
                  <li class="flex">
                    <span class="i-iconify-ph-first-aid-fill text-primary-500 mr-1.5"></span>
                    <span>Free shipping on orders over $50</span>
                  </li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useOrdersStore } from '~/stores/orders'
import { useNotificationsStore } from '~/stores/notifications'
import PaymentForm from '~/components/PaymentForm.vue'

definePageMeta({
  middleware: 'auth'
})

// Import stores
const cartStore = useCartStore()
const notifications = useNotificationsStore()

// Checkout steps
const checkoutSteps = [
  { id: 'shipping', name: 'Shipping' },
  { id: 'payment', name: 'Payment' },
  { id: 'review', name: 'Review' },
  { id: 'confirmation', name: 'Confirmation' }
]

// State
const activeStep = ref(0)
const sameAsShipping = ref(true)
const promoCode = ref('')
const promoError = ref('')
const promoSuccess = ref('')
const discount = ref(0)
const errors = ref({})
const orderNumber = ref('')
const isProcessingPayment = ref(false)
const paymentValid = ref(false)
const paymentFormRef = ref(null)

// New payment data for PaymentForm component
const paymentData = ref({
  method: 'credit-card',
  cardDetails: {}
})

// Computed property for selected payment method
const paymentMethod = computed(() => paymentData.value.method || 'credit-card')

// Cart data from store
const cartItems = computed(() => cartStore.items)
const cartItemCount = computed(() => cartStore.itemCount)
const cartTotal = computed(() => cartStore.total)

// Form data
const formData = ref({
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  country: 'VN',
  shippingMethod: 'standard',
  specialInstructions: '',
  prescriptionFile: null
})

// Billing address (used if not same as shipping)
const billingAddress = ref({
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  country: 'VN'
})

// Payment details
const paymentDetails = ref({
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: ''
})

// US States for select dropdown
const usStates = [
  { name: 'Alabama', abbr: 'AL' },
  { name: 'Alaska', abbr: 'AK' },
  { name: 'Arizona', abbr: 'AZ' },
  { name: 'Arkansas', abbr: 'AR' },
  { name: 'California', abbr: 'CA' },
  { name: 'Colorado', abbr: 'CO' },
  { name: 'Connecticut', abbr: 'CT' },
  { name: 'Delaware', abbr: 'DE' },
  { name: 'Florida', abbr: 'FL' },
  { name: 'Georgia', abbr: 'GA' },
  { name: 'Hawaii', abbr: 'HI' },
  { name: 'Idaho', abbr: 'ID' },
  { name: 'Illinois', abbr: 'IL' },
  { name: 'Indiana', abbr: 'IN' },
  { name: 'Iowa', abbr: 'IA' },
  { name: 'Kansas', abbr: 'KS' },
  { name: 'Kentucky', abbr: 'KY' },
  { name: 'Louisiana', abbr: 'LA' },
  { name: 'Maine', abbr: 'ME' },
  { name: 'Maryland', abbr: 'MD' },
  { name: 'Massachusetts', abbr: 'MA' },
  { name: 'Michigan', abbr: 'MI' },
  { name: 'Minnesota', abbr: 'MN' },
  { name: 'Mississippi', abbr: 'MS' },
  { name: 'Missouri', abbr: 'MO' },
  { name: 'Montana', abbr: 'MT' },
  { name: 'Nebraska', abbr: 'NE' },
  { name: 'Nevada', abbr: 'NV' },
  { name: 'New Hampshire', abbr: 'NH' },
  { name: 'New Jersey', abbr: 'NJ' },
  { name: 'New Mexico', abbr: 'NM' },
  { name: 'New York', abbr: 'NY' },
  { name: 'North Carolina', abbr: 'NC' },
  { name: 'North Dakota', abbr: 'ND' },
  { name: 'Ohio', abbr: 'OH' },
  { name: 'Oklahoma', abbr: 'OK' },
  { name: 'Oregon', abbr: 'OR' },
  { name: 'Pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', abbr: 'RI' },
  { name: 'South Carolina', abbr: 'SC' },
  { name: 'South Dakota', abbr: 'SD' },
  { name: 'Tennessee', abbr: 'TN' },
  { name: 'Texas', abbr: 'TX' },
  { name: 'Utah', abbr: 'UT' },
  { name: 'Vermont', abbr: 'VT' },
  { name: 'Virginia', abbr: 'VA' },
  { name: 'Washington', abbr: 'WA' },
  { name: 'West Virginia', abbr: 'WV' },
  { name: 'Wisconsin', abbr: 'WI' },
  { name: 'Wyoming', abbr: 'WY' }
]

// Shipping options
const getShippingOptions = () => [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: cartTotal.value > 50 ? 0 : 5.99,
    description: 'Delivery in 3-5 business days',
    eta: 'Arrives by ' + getFormattedDate(5)
  },
  {
    id: 'express',
    name: 'Express Shipping',
    price: 12.99,
    description: 'Delivery in 2-3 business days',
    eta: 'Arrives by ' + getFormattedDate(3)
  },
  {
    id: 'next-day',
    name: 'Next Day Delivery',
    price: 19.99,
    description: 'Guaranteed delivery on the next business day',
    eta: 'Arrives by ' + getFormattedDate(1)
  }
]

// Reactive shipping options
const shippingOptions = computed(() => getShippingOptions())

// Payment methods (updated to remove PayPal)
const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit / Debit Card',
    description: 'Secure payment with Visa, Mastercard, American Express, or Discover',
    icon: 'iconify-ph-credit-card-fill',
    secure: true
  }
]



// Calculate tax and order total
const selectedShippingOption = computed(() => {
  try {
    const found = shippingOptions.value.find(option => option.id === formData.value.shippingMethod)
    return found || shippingOptions.value[0] || { id: 'standard', name: 'Standard Shipping', price: 5.99 }
  } catch (error) {
    console.warn('Error in selectedShippingOption computed:', error)
    return { id: 'standard', name: 'Standard Shipping', price: 5.99 }
  }
})

const tax = computed(() => {
  try {
    return cartTotal.value * 0.08
  } catch (error) {
    console.warn('Error calculating tax:', error)
    return 0
  }
})

const orderTotal = computed(() => {
  try {
    return cartTotal.value + selectedShippingOption.value.price + tax.value - discount.value
  } catch (error) {
    console.warn('Error calculating order total:', error)
    return cartTotal.value || 0
  }
})

// Check if any items require a prescription
const hasPrescriptionItems = computed(() => {
  return cartItems.value.some(item => item.isRx)
})

// Card type detection based on first digit
const cardType = computed(() => {
  const number = paymentDetails.value.cardNumber.replace(/\D/g, '')
  if (!number) return null
  
  if (number.startsWith('4')) return 'ph-visa-logo'
  if (/^5[1-5]/.test(number)) return 'ph-mastercard-logo'
  if (/^3[47]/.test(number)) return 'ph-american-express-logo'
  if (/^6(?:011|5)/.test(number)) return 'ph-discover-logo'
  
  return 'ph-credit-card-fill'
})

// Validation for proceeding to next step
const canProceedToNextStep = computed(() => {
  if (activeStep.value === 0) {
    // Shipping validation
    const requiredFields = ['email', 'phone', 'firstName', 'lastName', 'address', 'zipCode', 'country']
    const isAllRequired = requiredFields.every(field => !!formData.value[field])
    const isShippingSelected = !!formData.value.shippingMethod
    const isPrescriptionUploaded = !hasPrescriptionItems.value || (hasPrescriptionItems.value && formData.value.prescriptionFile)
    
    return isAllRequired && isShippingSelected && isPrescriptionUploaded
  }
  
  if (activeStep.value === 1) {
    // Payment validation
    if (!sameAsShipping.value) {
      const requiredBillingFields = ['firstName', 'lastName', 'address', 'zipCode', 'country']
      if (!requiredBillingFields.every(field => !!billingAddress.value[field])) {
        return false
      }
    }
    
    // Use the PaymentForm validation
    return paymentValid.value
  }
  
  return true
})

// Final validation before placing order
const canPlaceOrder = computed(() => {
  // We can use the same validation as on previous steps
  // Add any additional final checks here
  return canProceedToNextStep.value
})

// Methods
function goToStep(step) {
  console.log('goToStep called with step:', step, 'current activeStep:', activeStep.value)
  
  // Validate target step is within bounds
  if (step < 0 || step >= checkoutSteps.length) {
    console.warn('Invalid step:', step)
    return
  }
  
  // Validate current step before proceeding to next steps
  if (step > activeStep.value && !validateStep(activeStep.value)) {
    notifications.error('Please complete all required fields before proceeding.')
    return
  }
  
  // Reset errors
  errors.value = {}
  
  // Update active step
  activeStep.value = step
  
  // Provide user feedback for step changes
  if (step > 0) {
    notifications.success(`Proceeding to ${checkoutSteps[step].name}`)
  }
  
  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  // Focus management for accessibility
  nextTick(() => {
    try {
      const stepElement = document.querySelector('.checkout-step-content')
      if (stepElement) {
        stepElement.focus()
      }
    } catch (error) {
      console.warn('Focus management failed:', error)
    }
  })
  
  console.log('goToStep completed, activeStep is now:', activeStep.value)
}

function validateStep(step) {
  errors.value = {}
  let isValid = true
  
  if (step === 0) {
    // Validate shipping info
    if (!formData.value.email) {
      errors.value.email = 'Email is required'
      isValid = false
    } else if (!isValidEmail(formData.value.email)) {
      errors.value.email = 'Please enter a valid email address'
      isValid = false
    }
    
    if (!formData.value.phone) {
      errors.value.phone = 'Phone number is required'
      isValid = false
    }
    
    if (!formData.value.firstName) {
      errors.value.firstName = 'First name is required'
      isValid = false
    }
    
    if (!formData.value.lastName) {
      errors.value.lastName = 'Last name is required'
      isValid = false
    }
    
    if (!formData.value.address) {
      errors.value.address = 'Address is required'
      isValid = false
    }
    
    if (!formData.value.zipCode) {
      errors.value.zipCode = 'Postal code is required'
      isValid = false
    }
    
    // Validate prescription upload if needed
    if (hasPrescriptionItems.value && !formData.value.prescriptionFile) {
      notifications.warning('Please upload a prescription for prescription items')
      isValid = false
    }
  }
  
  if (step === 1) {
    // Validate payment info
    
    // Billing address if different from shipping
    if (!sameAsShipping.value) {
      if (!billingAddress.value.firstName) {
        errors.value.billingFirstName = 'First name is required'
        isValid = false
      }
      
      if (!billingAddress.value.lastName) {
        errors.value.billingLastName = 'Last name is required'
        isValid = false
      }
      
      if (!billingAddress.value.address) {
        errors.value.billingAddress = 'Address is required'
        isValid = false
      }
      
      if (!billingAddress.value.zipCode) {
        errors.value.billingZipCode = 'Postal code is required'
        isValid = false
      }
    }
    
    // Credit card validation
    if (paymentMethod.value === 'credit-card') {
      if (!paymentDetails.value.cardNumber) {
        errors.value.cardNumber = 'Card number is required'
        isValid = false
      } else if (!isValidCreditCard(paymentDetails.value.cardNumber)) {
        errors.value.cardNumber = 'Please enter a valid card number'
        isValid = false
      }
      
      if (!paymentDetails.value.cardName) {
        errors.value.cardName = 'Name on card is required'
        isValid = false
      }
      
      if (!paymentDetails.value.expiryDate) {
        errors.value.expiryDate = 'Expiry date is required'
        isValid = false
      } else if (!isValidExpiryDate(paymentDetails.value.expiryDate)) {
        errors.value.expiryDate = 'Please enter a valid expiry date (MM/YY)'
        isValid = false
      }
      
      if (!paymentDetails.value.cvv) {
        errors.value.cvv = 'CVV is required'
        isValid = false
      } else if (!isValidCVV(paymentDetails.value.cvv)) {
        errors.value.cvv = 'Please enter a valid CVV'
        isValid = false
      }
    }
  }
  
  return isValid
}

function getFormattedDate(daysFromNow) {
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getCountryName(countryCode) {
  const countries = {
    'VN': 'Vietnam',
    'US': 'United States',
    'CA': 'Canada'
  }
  return countries[countryCode] || countryCode
}

function getShippingMethodName() {
  const option = shippingOptions.value.find(option => option.id === formData.value.shippingMethod)
  return option ? option.name : 'Standard Shipping'
}

function selectPaymentMethod(method) {
  paymentMethod.value = method
}

function formatCardNumber() {
  // Remove any non-digits
  let value = paymentDetails.value.cardNumber.replace(/\D/g, '')
  
  // Add spaces after every 4 digits
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
  
  // Update the value
  paymentDetails.value.cardNumber = value
}

function formatExpiryDate() {
  // Remove any non-digits
  let value = paymentDetails.value.expiryDate.replace(/\D/g, '')
  
  // Insert a slash after the month
  if (value.length > 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4)
  }
  
  // Update the value
  paymentDetails.value.expiryDate = value
}

function handlePrescriptionUpload(event) {
  const file = event.target.files[0]
  if (file) {
    // In a real app, you would validate file type and size here
    formData.value.prescriptionFile = file
  }
}

function applyPromoCode() {
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
    if (selectedShippingOption.value.price > 0) {
      discount.value = selectedShippingOption.value.price
      promoSuccess.value = 'Free shipping applied!'
    } else {
      promoError.value = 'Free shipping is already applied to orders over $50'
    }
  } else {
    promoError.value = 'Invalid promo code'
  }
}

// Payment validation handler
const handlePaymentValidation = (isValid) => {
  console.log('Payment validation changed:', isValid)
  paymentValid.value = isValid
}



async function placeOrder() {
  // Final validation
  if (!canPlaceOrder.value) {
    notifications.error('Please complete all required fields before placing your order.')
    return
  }
  
  if (!paymentValid.value) {
    notifications.error('Please complete your payment information.')
    return
  }
  
  try {
    isProcessingPayment.value = true
    
    // Generate a random order number
    orderNumber.value = 'MDP-' + Math.floor(100000 + Math.random() * 900000)
    
    // Prepare order data for API
    const orderData = {
      orderNumber: orderNumber.value,
      items: cartItems.value.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      shipping: formData.value,
      billing: sameAsShipping.value ? formData.value : billingAddress.value,
      paymentMethod: paymentData.value.method,
      subtotal: cartTotal.value,
      tax: tax.value,
      shippingFee: selectedShippingOption.value.price,
      total: orderTotal.value,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    
    console.log('Checkout: Preparing order data:', orderData)
    console.log('Checkout: Cart items before order:', cartItems.value.length)
    
    // Skip payment processing for COD (Cash on Delivery)
    // Payment will be processed on delivery
    console.log('Checkout: Using Cash on Delivery - no payment processing required')
    
    // Create order in database using orders store
    const ordersStore = useOrdersStore()
    const createdOrder = await ordersStore.createOrder(orderData)
    
    console.log('Checkout: Order creation result:', createdOrder)
    
    if (createdOrder) {
      console.log('Checkout: Order created successfully, clearing cart...')
      
      // Clear the cart only after successful order creation
      try {
        // Use multiple methods to ensure cart is cleared
        const cartCleared = cartStore.forceCloseCart()
        console.log('Checkout: Cart clearing result:', cartCleared)
        
        // Backup cart clearing methods
        cartStore.clearCart()
        
        // Additional cleanup: clear any remaining localStorage cart data
        if (process.client) {
          const cartKeys = [
            'pharmacy-cart',
            'pharmacy-cart-guest',
            `pharmacy-cart-${cartStore.getCurrentUserId()}`
          ]
          
          cartKeys.forEach(key => {
            try {
              localStorage.removeItem(key)
            } catch (e) {
              console.warn(`Failed to remove ${key}:`, e)
            }
          })
        }
        
        // Force reactive update
        await nextTick()
        
        if (cartCleared || cartItems.value.length === 0) {
          notifications.success('Order placed successfully! Your cart has been cleared.')
        } else {
          notifications.success('Order placed successfully!')
          console.warn('Cart clearing may have failed, but order was successful')
        }
      } catch (cartError) {
        console.error('Cart clearing failed:', cartError)
        notifications.success('Order placed successfully! Please refresh to clear your cart.')
      }
      
      // Go to confirmation step
      goToStep(3)
      
      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
      console.log('Order placement completed successfully, activeStep is now:', activeStep.value)
    } else {
      throw new Error('Order creation failed')
    }
    
  } catch (error) {
    console.error('Order placement failed:', error)
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      data: error.data,
      stack: error.stack
    })
    
    // Provide specific error messages
    if (error.message?.includes('stock')) {
      notifications.error('Some items in your cart are out of stock. Please update your cart and try again.')
    } else if (error.message?.includes('payment')) {
      notifications.error('Payment processing failed. Please check your payment details and try again.')
    } else {
      notifications.error('Failed to place order. Please try again or contact support if the problem persists.')
    }
  } finally {
    isProcessingPayment.value = false
    console.log('placeOrder function completed, isProcessingPayment:', isProcessingPayment.value)
  }
}

// Validation helpers
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function isValidZipCode(zipCode) {
  const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
  return re.test(zipCode)
}

function isValidCreditCard(cardNumber) {
  // Remove spaces
  const number = cardNumber.replace(/\s+/g, '')
  // Basic validation (better validation would be done on the server)
  return number.length >= 13 && number.length <= 19 && !isNaN(number)
}

function isValidExpiryDate(expiryDate) {
  const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
  if (!re.test(expiryDate)) return false
  
  const parts = expiryDate.split('/')
  const month = parseInt(parts[0], 10)
  const year = parseInt('20' + parts[1], 10)
  
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1
  
  if (year < currentYear) return false
  if (year === currentYear && month < currentMonth) return false
  
  return true
}

function isValidCVV(cvv) {
  const re = /^[0-9]{3,4}$/
  return re.test(cvv)
}

// Update billing address when "same as shipping" changes
watch(sameAsShipping, (newValue) => {
  if (newValue) {
    // Reset errors
    errors.value = {
      ...errors.value,
      billingFirstName: null,
      billingLastName: null,
      billingAddress: null,
      billingZipCode: null,
      billingCountry: null
    }
  }
})

// When form data changes, update billing address if same as shipping
watch(() => formData.value, (newValue) => {
  try {
    if (sameAsShipping.value && newValue) {
      billingAddress.value = {
        firstName: newValue.firstName || '',
        lastName: newValue.lastName || '',
        address: newValue.address || '',
        zipCode: newValue.zipCode || '',
        country: newValue.country || 'VN'
      }
    }
  } catch (error) {
    console.warn('Error updating billing address:', error)
  }
}, { deep: true })

// Reset error messages when promo code changes
watch(promoCode, () => {
  promoError.value = ''
  promoSuccess.value = ''
})

// Force clear cart function - can be called manually if needed
const forceClearCart = async () => {
  try {
    console.log('Manually clearing cart...')
    
    // Use multiple methods to ensure cart is cleared
    cartStore.clearCart()
    const forceCleared = cartStore.forceCloseCart()
    
    // Additional cleanup: clear any remaining localStorage cart data
    if (process.client) {
      const cartKeys = [
        'pharmacy-cart',
        'pharmacy-cart-guest',
        `pharmacy-cart-${cartStore.getCurrentUserId()}`
      ]
      
      cartKeys.forEach(key => {
        try {
          localStorage.removeItem(key)
        } catch (e) {
          console.warn(`Failed to remove ${key}:`, e)
        }
      })
      
      // Clear any other cart-related keys
      Object.keys(localStorage).forEach(key => {
        if (key.includes('pharmacy-cart')) {
          try {
            localStorage.removeItem(key)
          } catch (e) {
            console.warn(`Failed to remove ${key}:`, e)
          }
        }
      })
    }
    
    // Force reactive update
    await nextTick()
    
    notifications.success('Cart cleared successfully!')
    console.log('Cart cleared successfully')
    return true
  } catch (error) {
    console.error('Error clearing cart:', error)
    notifications.error('Failed to clear cart. Please refresh the page.')
    return false
  }
}

// When selected shipping method changes, update the order total
watch(() => formData.value.shippingMethod, (newMethod, oldMethod) => {
  try {
    // Only process if method actually changed and promo code is active
    if (newMethod !== oldMethod && promoCode.value.toLowerCase() === 'freeship') {
      const newOption = shippingOptions.value.find(option => option.id === newMethod)
      if (newOption && typeof newOption.price === 'number') {
        discount.value = newOption.price
      }
    }
  } catch (error) {
    console.warn('Error updating shipping discount:', error)
  }
})

// Load user data from localStorage if available
onMounted(() => {
  try {
    console.log('Checkout page mounted, cart items:', cartItemCount.value)
    
    // If the cart is empty, redirect to the cart page
    if (cartItemCount.value === 0) {
      console.log('Cart is empty, redirecting to cart page')
      navigateTo('/cart')
    }
  } catch (error) {
    console.error('Error in checkout onMounted:', error)
  }
})
</script>

<style scoped>
/* Ensure proper sticky positioning */
.sticky {
  position: -webkit-sticky;
  position: sticky;
}

/* Smooth scrolling for the order summary */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure the grid container has proper height on mobile */
@media (max-width: 1023px) {
  .lg\:sticky {
    position: relative !important;
    top: auto !important;
    max-height: none !important;
  }
}
</style>