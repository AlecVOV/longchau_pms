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
              <span class="text-neutral-700">Contact Us</span>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Contact Us</h1>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          We're here to help! Get in touch with our team for any questions about medications, prescriptions, or our services.
        </p>
      </div>

      <!-- Quick Contact Options -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="i-iconify-ph-phone-fill text-2xl text-primary-600"></span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 mb-2">Call Us</h3>
          <p class="text-neutral-600 mb-3">Speak directly with our pharmacy team</p>
          <a href="tel:+84287302345" class="text-primary-600 hover:text-primary-700 font-medium">
            (028) 73023456
          </a>
          <p class="text-sm text-neutral-500 mt-2">Mon-Fri: 8AM-8PM<br>Sat-Sun: 9AM-6PM</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="i-iconify-ph-envelope-fill text-2xl text-green-600"></span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 mb-2">Email Us</h3>
          <p class="text-neutral-600 mb-3">Send us a message anytime</p>
          <a href="mailto:sale@nhathuoclongchau.com.vn" class="text-primary-600 hover:text-primary-700 font-medium">
            sale@nhathuoclongchau.com.vn
          </a>
          <p class="text-sm text-neutral-500 mt-2">We respond within 24 hours</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="i-iconify-ph-chat-circle-fill text-2xl text-blue-600"></span>
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 mb-2">Live Chat</h3>
          <p class="text-neutral-600 mb-3">Chat with our support team</p>
          <button @click="openLiveChat" class="text-primary-600 hover:text-primary-700 font-medium">
            Start Live Chat
          </button>
          <p class="text-sm text-neutral-500 mt-2">Available 24/7</p>
        </div>
      </div>      <!-- Send Us a Message Section -->
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-neutral-700 mb-2">
                First Name <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="firstName" 
                v-model="form.firstName" 
                class="input"
                :class="{'border-red-500': errors.firstName}"
                required
              >
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
            </div>
            
            <div>
              <label for="lastName" class="block text-sm font-medium text-neutral-700 mb-2">
                Last Name <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="lastName" 
                v-model="form.lastName" 
                class="input"
                :class="{'border-red-500': errors.lastName}"
                required
              >
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="input"
                :class="{'border-red-500': errors.email}"
                required
              >
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone" 
                class="input"
                placeholder="(555) 123-4567"
              >
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-neutral-700 mb-2">
              Subject <span class="text-red-500">*</span>
            </label>
            <select 
              id="subject" 
              v-model="form.subject" 
              class="input"
              :class="{'border-red-500': errors.subject}"
              required
            >
              <option value="">Select a subject</option>
              <option value="prescription">Prescription Questions</option>
              <option value="order">Order Support</option>
              <option value="billing">Billing Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="consultation">Consultation Booking</option>
              <option value="complaint">Complaint or Feedback</option>
              <option value="other">Other</option>
            </select>
            <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              class="input"
              :class="{'border-red-500': errors.message}"
              placeholder="Please provide details about your inquiry..."
              required
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input 
                id="privacy" 
                type="checkbox" 
                v-model="form.privacyAccepted"
                class="rounded text-primary-600 focus:ring-primary-500 h-4 w-4"
                :class="{'border-red-500': errors.privacyAccepted}"
                required
              >
            </div>
            <div class="ml-3">
              <label for="privacy" class="text-sm text-neutral-600">
                I agree to the 
                <NuxtLink to="/privacy-policy" class="text-primary-600 hover:text-primary-700">Privacy Policy</NuxtLink>
                and consent to Long Châu processing my personal information.
                <span class="text-red-500">*</span>
              </label>
              <p v-if="errors.privacyAccepted" class="text-red-500 text-xs mt-1">{{ errors.privacyAccepted }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button 
              type="button" 
              @click="resetForm"
              class="btn-outline"
            >
              Reset Form
            </button>
            <button 
              type="submit" 
              class="btn-primary"
              :disabled="isSubmitting"
              :class="{'opacity-50 cursor-not-allowed': isSubmitting}"
            >
              <span v-if="isSubmitting" class="i-iconify-ph-spinner animate-spin mr-2"></span>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Information Section -->
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-start">
            <span class="i-iconify-ph-map-pin-fill text-xl text-primary-600 mr-3 mt-1"></span>
            <div>
              <h3 class="font-semibold text-neutral-900">Main Office</h3>
              <p class="text-neutral-600">
                379-381 Hai Bà Trưng<br>
                P. Xuân Hoà<br>
                TP. Hồ Chí Minh
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <span class="i-iconify-ph-clock-fill text-xl text-primary-600 mr-3 mt-1"></span>
            <div>
              <h3 class="font-semibold text-neutral-900">Business Hours</h3>
              <div class="text-neutral-600">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <span class="i-iconify-ph-shield-check-fill text-xl text-primary-600 mr-3 mt-1"></span>
            <div>
              <h3 class="font-semibold text-neutral-900">Emergency</h3>
              <p class="text-neutral-600">
                For medical emergencies, please call 113<br>
                For urgent prescription questions: 
                <a href="tel:+18005551234" class="text-primary-600 hover:text-primary-700">(028) 73023456</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Links Section -->
      <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Quick Links</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink to="/upload-prescription" class="flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200">
            <span class="i-iconify-ph-upload-simple text-2xl text-primary-600 mr-3"></span>
            <div>
              <h3 class="font-medium text-neutral-900 group-hover:text-primary-600">Upload Prescription</h3>
              <p class="text-xs text-neutral-600">Start your medication order</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/book-consultation" class="flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200">
            <span class="i-iconify-ph-video-camera text-2xl text-primary-600 mr-3"></span>
            <div>
              <h3 class="font-medium text-neutral-900 group-hover:text-primary-600">Book Consultation</h3>
              <p class="text-xs text-neutral-600">Speak with our pharmacists</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/health-assessment" class="flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200">
            <span class="i-iconify-ph-clipboard-text text-2xl text-primary-600 mr-3"></span>
            <div>
              <h3 class="font-medium text-neutral-900 group-hover:text-primary-600">Health Assessment</h3>
              <p class="text-xs text-neutral-600">Take our health quiz</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/account/prescriptions" class="flex items-center p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-neutral-200">
            <span class="i-iconify-ph-file-text text-2xl text-primary-600 mr-3"></span>
            <div>
              <h3 class="font-medium text-neutral-900 group-hover:text-primary-600">My Prescriptions</h3>
              <p class="text-xs text-neutral-600">Manage your prescriptions</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Frequently Asked Questions Section -->
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="border-b border-neutral-200 pb-4">
              <h3 class="font-semibold text-neutral-900 mb-2">How do I upload my prescription?</h3>
              <p class="text-sm text-neutral-600">
                You can upload your prescription by clicking the "Upload Prescription" button or visiting our upload page. Simply take a clear photo or scan of your prescription.
              </p>
            </div>

            <div class="border-b border-neutral-200 pb-4">
              <h3 class="font-semibold text-neutral-900 mb-2">How long does prescription processing take?</h3>
              <p class="text-sm text-neutral-600">
                Most prescriptions are processed within 2-4 hours during business hours. We'll contact you once your prescription is ready.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div class="border-b border-neutral-200 pb-4">
              <h3 class="font-semibold text-neutral-900 mb-2">Do you offer delivery services?</h3>
              <p class="text-sm text-neutral-600">
                Yes! We offer free delivery on orders over $50. Same-day delivery is available in select areas.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-neutral-900 mb-2">Can I book a consultation online?</h3>
              <p class="text-sm text-neutral-600">
                Absolutely! You can book a consultation with our licensed pharmacists online or by calling our support number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacyAccepted: false
})

const errors = reactive({})
const isSubmitting = ref(false)

// Methods
const validateForm = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key])

  // Validate required fields
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.subject) {
    errors.subject = 'Please select a subject'
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  if (!form.privacyAccepted) {
    errors.privacyAccepted = 'You must agree to the privacy policy'
  }

  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', form)
    
    // Show success message
    alert('Thank you for your message! We will get back to you within 24 hours.')
    
    // Reset form
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'boolean') {
      form[key] = false
    } else {
      form[key] = ''
    }
  })
  Object.keys(errors).forEach(key => delete errors[key])
}

const openLiveChat = () => {
  // In a real app, this would open a live chat widget
  alert('Live chat feature would be implemented here. For now, please use the contact form or call us directly.')
}

// Meta
useHead({
  title: 'Contact Us - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Contact Long Châu Pharmacy for prescription questions, order support, and consultation booking. Available 24/7 to help with your healthcare needs.'
    }
  ]
})
</script>
