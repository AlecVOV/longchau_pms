<template>
  <div>
    <!-- Contact Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" 
          alt="Contact background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Contact Us</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact Info and Form -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="lg:col-span-1 bg-white rounded-lg shadow-lg p-8">
            <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600">Get In Touch</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-3 mr-4">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Our Location</h4>
                  <p class="text-gray-700">123 Culinary St<br/>Foodie City, FC 12345</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-3 mr-4">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Phone</h4>
                  <p class="text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-3 mr-4">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Email</h4>
                  <p class="text-gray-700">info@gourmetrestaurant.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-3 mr-4">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Hours</h4>
                  <p class="text-gray-700">Monday - Thursday: 11am - 10pm<br/>
                  Friday - Saturday: 11am - 11pm<br/>
                  Sunday: 10am - 9pm</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="font-bold text-lg mb-3">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300">
                  <Icon name="mdi:facebook" class="w-5 h-5" />
                </a>
                <a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300">
                  <Icon name="mdi:instagram" class="w-5 h-5" />
                </a>
                <a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300">
                  <Icon name="mdi:twitter" class="w-5 h-5" />
                </a>
                <a href="#" class="bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors duration-300">
                  <Icon name="mdi:yelp" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600">Send Us a Message</h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div>
                <label for="subject" class="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label for="message" class="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    class="w-4 h-4 accent-secondary-500"
                  />
                </div>
                <label for="privacy" class="ml-3 text-sm text-gray-600">
                  I agree to the privacy policy and consent to having my data processed to be contacted.
                </label>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="h-[500px] w-full relative">
      <!-- Placeholder for Google Maps embed -->
      <div class="absolute inset-0 bg-gray-300 flex items-center justify-center">
        <p class="text-gray-700 text-center px-4">
          Google Maps would be embedded here with your restaurant's exact location.<br>
          For implementation, you would need to add your Google Maps API key.
        </p>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Frequently Asked Questions</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Here are answers to some common questions about our restaurant and services.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

// FAQs
const faqs = ref([
  {
    question: "Do I need to make a reservation?",
    answer: "While walk-ins are welcome, we highly recommend making a reservation, especially for weekend dining. You can book a table online through our reservations page or by calling us directly.",
    open: true
  },
  {
    question: "Is there a dress code?",
    answer: "We recommend smart casual attire. While there is no strict dress code, we do ask that guests refrain from wearing athletic wear, beachwear, or flip flops.",
    open: false
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, our chefs are happy to accommodate most dietary restrictions and allergies. Please inform your server or note your needs when making your reservation so we can prepare accordingly.",
    open: false
  },
  {
    question: "Do you offer private dining?",
    answer: "Yes, we have a private dining room that can accommodate groups of up to 20 people. For larger events, please inquire about our catering services or full restaurant buyouts.",
    open: false
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. For large parties or private events, we may require a deposit or prepayment.",
    open: false
  }
]);

// Toggle FAQ
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>