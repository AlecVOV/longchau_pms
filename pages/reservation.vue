<template>
  <div>
    <!-- Reservation Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg" 
          alt="Table setting" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Reserve a Table</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Book your table online and experience our exquisite cuisine and hospitality
          </p>
        </div>
      </div>
    </section>
    
    <!-- Reservation Form -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-5">
            <!-- Image -->
            <div class="md:col-span-2 h-full">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                alt="Restaurant interior" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Form -->
            <div class="md:col-span-3 p-8">
              <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600">Make a Reservation</h2>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="Your full name"
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
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="phone" class="block mb-2 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label for="guests" class="block mb-2 font-medium">Number of Guests</label>
                    <select 
                      id="guests"
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2" selected>2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7+">7+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="date" class="block mb-2 font-medium">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      :min="today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    />
                  </div>
                  <div>
                    <label for="time" class="block mb-2 font-medium">Time</label>
                    <select 
                      id="time"
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    >
                      <option value="" disabled selected>Select a time</option>
                      <option v-for="time in availableTimes" :key="time" :value="time">
                        {{ time }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label for="special-requests" class="block mb-2 font-medium">Special Requests</label>
                  <textarea 
                    id="special-requests" 
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="Any special requests or dietary requirements?"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="btn btn-primary w-full"
                  >
                    Confirm Reservation
                  </button>
                  <p class="text-sm text-gray-500 mt-4 text-center">
                    By making a reservation, you agree to our reservation policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Reservation Policies -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600 text-center">Reservation Policies</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-12"></div>
          
          <div class="space-y-8">
            <div>
              <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Confirmation</h3>
              <p class="text-gray-700">
                All reservations will be confirmed via email. Please check your spam folder if you do not receive a confirmation within a few minutes of booking.
              </p>
            </div>
            
            <div>
              <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Cancellation Policy</h3>
              <p class="text-gray-700">
                We understand that plans change. We kindly ask that you notify us at least 24 hours in advance if you need to cancel or modify your reservation. For parties of 6 or more, we require 48 hours' notice.
              </p>
            </div>
            
            <div>
              <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Late Arrivals</h3>
              <p class="text-gray-700">
                We'll hold your table for 15 minutes past your reservation time. If you're running late, please call us to let us know, and we'll do our best to accommodate you.
              </p>
            </div>
            
            <div>
              <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Large Parties</h3>
              <p class="text-gray-700">
                For groups of 7 or more, please contact us directly by phone to arrange your reservation. A credit card may be required to secure the booking, and a gratuity of 18% will be added to the final bill.
              </p>
            </div>
            
            <div>
              <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Children</h3>
              <p class="text-gray-700">
                We welcome guests of all ages. If you'll be dining with young children, please let us know so we can provide appropriate seating and accommodations.
              </p>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <p class="text-gray-700">
              If you have any questions about our reservation policies, please contact us at
              <a href="tel:5551234567" class="text-primary-600 font-medium">(555) 123-4567</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Get today's date in YYYY-MM-DD format for min date on input
const today = computed(() => {
  const date = new Date();
  return date.toISOString().split('T')[0];
});

// Available time slots
const availableTimes = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM"
];
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>