// filepath: c:\Users\Admin\Desktop\project-bolt-sb1-mqqvvjv9\project\pages\book-consultation.vue
<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Book a Virtual Consultation</h1>
      <p class="text-neutral-600 mb-8 max-w-2xl">Speak with our professional healthcare providers from the comfort of your home.</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Service options -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-lg font-semibold text-neutral-800 mb-4">Our Services</h2>
            <div class="space-y-4">
              <div v-for="service in services" :key="service.id" @click="selectService(service)" 
                   class="border rounded-lg p-4 cursor-pointer transition-colors"
                   :class="selectedService?.id === service.id ? 'border-primary-500 bg-primary-50' : 'border-neutral-200'">
                <div class="flex items-center">
                  <span :class="`text-2xl ${service.icon} text-primary-600 mr-3`"></span>
                  <div>
                    <p class="font-medium">{{ service.name }}</p>
                    <p class="text-sm text-neutral-500">{{ service.description }}</p>
                  </div>
                </div>
                <div class="text-right mt-2">
                  <span class="font-semibold">${{ service.price.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Booking calendar -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold text-neutral-800 mb-4">Select Date & Time</h2>
            
            <!-- Calendar would go here -->
            <div class="grid grid-cols-7 gap-1 mb-6">
              <div v-for="day in 7" :key="day" class="text-center font-medium text-neutral-500 text-sm py-2">
                {{ ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day - 1] }}
              </div>
              <div v-for="date in 31" :key="date" @click="selectDate(date)"
                   class="text-center py-3 cursor-pointer transition-colors rounded-md"
                   :class="selectedDateNum === date ? 'bg-primary-600 text-white' : 'hover:bg-neutral-100'">
                {{ date }}
              </div>
            </div>
            
            <!-- Time slots -->
            <div class="mb-6">
              <h3 class="font-medium text-neutral-800 mb-3">Available Time Slots</h3>
              <div class="grid grid-cols-3 gap-2">
                <button v-for="time in availableTimes" :key="time" @click="selectTime(time)"
                        class="py-2 px-4 rounded-md text-center transition-colors"
                        :class="selectedTime === time ? 'bg-primary-600 text-white' : 'bg-neutral-100 hover:bg-neutral-200'">
                  {{ time }}
                </button>
              </div>
            </div>
            
            <!-- Submit button -->
            <button :disabled="!canBook" @click="bookAppointment" 
                    class="btn-primary w-full" :class="{'opacity-50 cursor-not-allowed': !canBook}">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const services = [
  { 
    id: 1, 
    name: 'General Health Consultation', 
    description: '20-minute consultation with a general practitioner',
    price: 45.00,
    icon: 'i-iconify-ph-stethoscope-fill'
  },
  { 
    id: 2, 
    name: 'Medication Review', 
    description: '30-minute review of your current medications',
    price: 55.00,
    icon: 'i-iconify-ph-pill-fill'
  },
  { 
    id: 3, 
    name: 'Specialist Referral', 
    description: '15-minute consultation to assess specialist needs',
    price: 35.00,
    icon: 'i-iconify-ph-user-focus-fill'
  }
]

const selectedService = ref(null)
const selectedDateNum = ref(null)
const selectedTime = ref(null)

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

const currentYear = new Date().getFullYear()
const currentMonth = new Date().toLocaleString('default', { month: 'long' })

const canBook = computed(() => {
  return selectedService.value && selectedDateNum.value && selectedTime.value
})

function selectService(service) {
  selectedService.value = service
}

function selectDate(date) {
  selectedDateNum.value = date
}

function selectTime(time) {
  selectedTime.value = time
}

function bookAppointment() {
  if (!canBook.value) return
  
  // In a real app, this would call an API to book the appointment
  alert(`Appointment booked for ${selectedDateNum.value} ${currentMonth} ${currentYear} at ${selectedTime.value}`)
  
  // Reset form
  selectedService.value = null
  selectedDateNum.value = null
  selectedTime.value = null
}
</script>