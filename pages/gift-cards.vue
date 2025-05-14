<template>
  <div>
    <!-- Gift Cards Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg" 
          alt="Gift card background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Gift Cards</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Share the gift of exceptional dining with someone special
          </p>
        </div>
      </div>
    </section>
    
    <!-- Gift Card Options -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Choose a Gift Card</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Select from our digital or physical gift card options, available in various denominations.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Digital Gift Card -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-30">
                  <Icon name="heroicons:gift" class="w-64 h-64 text-white" />
                </div>
              </div>
              <div class="relative z-10 text-center">
                <h3 class="font-serif text-3xl font-bold text-white mb-2">Digital Gift Card</h3>
                <p class="text-white/80">Instant delivery to your recipient's email</p>
              </div>
            </div>
            
            <div class="p-8">
              <div class="space-y-6">
                <p class="text-gray-700">
                  Our digital gift cards are delivered instantly via email and can be redeemed online or in-restaurant. Perfect for last-minute gifts!
                </p>
                
                <div>
                  <label class="block mb-2 font-medium">Select Amount:</label>
                  <div class="grid grid-cols-3 gap-3 mb-4">
                    <button 
                      v-for="amount in [50, 100, 150, 200, 250, 'Custom']" 
                      :key="amount"
                      class="py-2 border rounded-md transition-colors duration-200"
                      :class="amount === selectedAmount 
                        ? 'bg-primary-600 text-white border-primary-600' 
                        : 'border-gray-300 hover:border-primary-600 text-gray-700'"
                      @click="selectedAmount = amount"
                    >
                      {{ typeof amount === 'number' ? `$${amount}` : amount }}
                    </button>
                  </div>
                  
                  <div v-if="selectedAmount === 'Custom'" class="mt-4">
                    <label for="custom-amount" class="block mb-2 font-medium">Enter Custom Amount:</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        id="custom-amount"
                        min="25"
                        max="1000"
                        class="w-full pl-7 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
                
                <button class="btn btn-primary w-full">
                  Purchase Digital Gift Card
                </button>
              </div>
            </div>
          </div>
          
          <!-- Physical Gift Card -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-30">
                  <Icon name="heroicons:envelope" class="w-64 h-64 text-white" />
                </div>
              </div>
              <div class="relative z-10 text-center">
                <h3 class="font-serif text-3xl font-bold text-white mb-2">Physical Gift Card</h3>
                <p class="text-white/80">Elegantly packaged and delivered by mail</p>
              </div>
            </div>
            
            <div class="p-8">
              <div class="space-y-6">
                <p class="text-gray-700">
                  Our physical gift cards come elegantly packaged and can be shipped directly to you or your recipient. Please allow 3-5 business days for delivery.
                </p>
                
                <div>
                  <label class="block mb-2 font-medium">Select Amount:</label>
                  <div class="grid grid-cols-3 gap-3 mb-4">
                    <button 
                      v-for="amount in [50, 100, 150, 200, 250, 'Custom']" 
                      :key="amount"
                      class="py-2 border rounded-md transition-colors duration-200"
                      :class="amount === selectedPhysicalAmount 
                        ? 'bg-secondary-500 text-white border-secondary-500' 
                        : 'border-gray-300 hover:border-secondary-500 text-gray-700'"
                      @click="selectedPhysicalAmount = amount"
                    >
                      {{ typeof amount === 'number' ? `$${amount}` : amount }}
                    </button>
                  </div>
                  
                  <div v-if="selectedPhysicalAmount === 'Custom'" class="mt-4">
                    <label for="custom-physical-amount" class="block mb-2 font-medium">Enter Custom Amount:</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        id="custom-physical-amount"
                        min="25"
                        max="1000"
                        class="w-full pl-7 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
                
                <button class="btn btn-secondary w-full">
                  Purchase Physical Gift Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Gift Card FAQs -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Gift Card FAQs</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Find answers to commonly asked questions about our gift cards.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in giftCardFaqs" :key="index" class="mb-4">
            <button
              class="w-full bg-gray-50 px-6 py-4 rounded-lg font-medium text-left flex justify-between items-center"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <Icon 
                :name="faq.open ? 'heroicons:minus-circle' : 'heroicons:plus-circle'" 
                class="w-6 h-6 text-primary-600"
              />
            </button>
            <div 
              v-show="faq.open"
              class="bg-white px-6 py-4 rounded-lg border-t-0 border border-gray-100"
            >
              <p class="text-gray-700">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Corporate Gift Cards -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600">Corporate Gift Cards</h2>
              <div class="w-24 h-1 bg-secondary-500 mb-8"></div>
              
              <div class="space-y-6">
                <p class="text-gray-700">
                  Looking for the perfect corporate gift or incentive? Our gift cards make excellent rewards for employees, clients, and business partners.
                </p>
                <p class="text-gray-700">
                  For bulk orders of 10 or more gift cards, we offer special corporate discounts and customization options.
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                    <p class="text-gray-700">Bulk discounts available</p>
                  </div>
                  <div class="flex items-start">
                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                    <p class="text-gray-700">Custom branding options</p>
                  </div>
                  <div class="flex items-start">
                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                    <p class="text-gray-700">Personalized messages</p>
                  </div>
                  <div class="flex items-start">
                    <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                    <p class="text-gray-700">Flexible delivery options</p>
                  </div>
                </div>
                
                <div class="pt-4">
                  <button class="btn btn-primary">
                    Contact for Corporate Orders
                  </button>
                </div>
              </div>
            </div>
            
            <div class="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Corporate gift" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Gift card selections
const selectedAmount = ref(100);
const selectedPhysicalAmount = ref(100);

// Gift card FAQs
const giftCardFaqs = ref([
  {
    question: "How long are gift cards valid?",
    answer: "Our gift cards are valid for 5 years from the date of purchase and can be used for any menu items or experiences at Gourmet Restaurant.",
    open: true
  },
  {
    question: "Can I use gift cards for online ordering?",
    answer: "Yes! Gift cards can be used for both in-restaurant dining and online ordering. Simply enter the gift card number and PIN during checkout on our website.",
    open: false
  },
  {
    question: "How quickly will digital gift cards be delivered?",
    answer: "Digital gift cards are delivered instantly to the recipient's email address. If they don't receive it right away, please check spam or junk folders.",
    open: false
  },
  {
    question: "Can I check the balance on my gift card?",
    answer: "Yes, you can check your gift card balance by calling us, visiting the restaurant, or entering the card details in the 'Check Balance' section of our website.",
    open: false
  },
  {
    question: "What if my gift card is lost or stolen?",
    answer: "If your physical gift card is lost or stolen, please contact us immediately. With proof of purchase, we may be able to issue a replacement. Digital gift cards can be resent to the original email address if needed.",
    open: false
  }
]);

// Toggle FAQ
const toggleFaq = (index) => {
  giftCardFaqs.value[index].open = !giftCardFaqs.value[index].open;
};
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>