<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Upload Your Prescription</h1>
      <p class="text-neutral-600 mb-8 max-w-2xl">
        Upload your prescription securely to purchase prescription medications. Your privacy and security are our top priorities.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Upload area -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold text-neutral-800 mb-6">Prescription Upload</h2>
            
            <div 
              class="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center mb-6 hover:border-primary-300 transition-colors"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
            >
              <div v-if="!selectedFile" class="py-8">
                <span class="i-iconify-ph-upload-simple text-5xl text-neutral-400 mb-4 inline-block"></span>
                <p class="text-neutral-700 font-medium mb-2">Drag and drop your prescription file here</p>
                <p class="text-neutral-500 mb-6">or</p>
                <button class="btn-primary" @click="$refs.fileInput.click()">Select File</button>
                <p class="text-xs text-neutral-500 mt-4">Supported formats: JPG, PNG, PDF (Max: 10MB)</p>
                <input type="file" class="hidden" ref="fileInput" @change="handleFileChange" accept=".jpg,.jpeg,.png,.pdf"/>
              </div>
              <div v-else class="py-4">
                <div class="flex items-center justify-center">
                  <span class="i-iconify-ph-check-circle-fill text-3xl text-success-500 mr-3"></span>
                  <div class="text-left">
                    <p class="font-medium text-neutral-800">{{ selectedFile.name }}</p>
                    <p class="text-sm text-neutral-500">{{ formatFileSize(selectedFile.size) }}</p>
                  </div>
                </div>
                <button class="btn-outline mt-4" @click="removeFile">
                  <span class="i-iconify-ph-trash text-lg mr-1"></span>
                  Remove
                </button>
              </div>
            </div>
            
            <form @submit.prevent="submitPrescription" class="space-y-6">
              <!-- Patient Information -->
              <div>
                <h3 class="font-medium text-neutral-800 mb-3">Patient Information</h3>
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
              
              <!-- Prescription Details -->
              <div>
                <h3 class="font-medium text-neutral-800 mb-3">Prescription Details</h3>
                <div class="grid grid-cols-1 gap-4">
                  <div>
                    <label for="doctorName" class="block text-sm font-medium text-neutral-700 mb-1">Doctor's Name <span class="text-accent-500">*</span></label>
                    <input 
                      type="text" 
                      id="doctorName" 
                      v-model="formData.doctorName" 
                      class="input" 
                      :class="{'border-accent-500 focus:ring-accent-500': errors.doctorName}"
                      required
                    >
                    <p v-if="errors.doctorName" class="text-accent-600 text-xs mt-1">{{ errors.doctorName }}</p>
                  </div>
                  <div>
                    <label for="notes" class="block text-sm font-medium text-neutral-700 mb-1">Additional Notes (Optional)</label>
                    <textarea 
                      id="notes" 
                      v-model="formData.notes" 
                      class="input h-24" 
                      placeholder="Include any special instructions or information about your prescription"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <!-- Terms and Submit -->
              <div>
                <div class="flex items-start mb-4">
                  <div class="flex items-center h-5">
                    <input 
                      id="terms" 
                      type="checkbox" 
                      v-model="formData.termsAgreed"
                      class="rounded text-primary-600 focus:ring-primary-500 h-4 w-4 mr-2"
                      :class="{'border-accent-500': errors.termsAgreed}"
                      required
                    >
                  </div>
                  <div class="ml-2">
                    <label for="terms" class="text-sm text-neutral-600">
                      I confirm that I have a valid prescription and consent to Long Châu processing my personal data in accordance with the <NuxtLink to="/privacy-policy" class="text-primary-600 hover:text-primary-700">Privacy Policy</NuxtLink>
                    </label>
                    <p v-if="errors.termsAgreed" class="text-accent-600 text-xs mt-1">{{ errors.termsAgreed }}</p>
                  </div>
                </div>
                
                <div class="flex justify-between">
                  <NuxtLink to="/" class="btn-outline">
                    <span class="i-iconify-ph-arrow-left text-lg mr-1"></span>
                    Back to Home
                  </NuxtLink>
                  <button 
                    type="submit" 
                    class="btn-primary"
                    :disabled="!canSubmit"
                    :class="{'opacity-50 cursor-not-allowed': !canSubmit}"
                  >
                    Submit Prescription
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Info Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-lg font-semibold text-neutral-800 mb-4">How It Works</h2>
            <ul class="space-y-4">
              <li class="flex">
                <div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">1</div>
                <div>
                  <p class="font-medium text-neutral-800">Upload Your Prescription</p>
                  <p class="text-sm text-neutral-500">Take a clear photo or scan of your valid prescription</p>
                </div>
              </li>
              <li class="flex">
                <div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">2</div>
                <div>
                  <p class="font-medium text-neutral-800">Verification</p>
                  <p class="text-sm text-neutral-500">Our pharmacists will review your prescription</p>
                </div>
              </li>
              <li class="flex">
                <div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">3</div>
                <div>
                  <p class="font-medium text-neutral-800">Order Confirmation</p>
                  <p class="text-sm text-neutral-500">We'll contact you to confirm your medication order</p>
                </div>
              </li>
              <li class="flex">
                <div class="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">4</div>
                <div>
                  <p class="font-medium text-neutral-800">Delivery</p>
                  <p class="text-sm text-neutral-500">Your medication will be securely delivered to your doorstep</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="bg-neutral-50 rounded-lg p-6">
            <h3 class="font-medium text-neutral-800 mb-3">Prescription Requirements</h3>
            <ul class="text-sm text-neutral-600 space-y-2">
              <li class="flex items-start">
                <span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span>
                <span>Prescription must be valid and not expired</span>
              </li>
              <li class="flex items-start">
                <span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span>
                <span>Must include doctor's signature, patient name, and medication details</span>
              </li>
              <li class="flex items-start">
                <span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span>
                <span>Image must be clear and fully legible</span>
              </li>
              <li class="flex items-start">
                <span class="i-iconify-ph-check-circle-fill text-primary-600 mt-1 mr-2"></span>
                <span>File size should not exceed 10MB</span>
              </li>
            </ul>
            
            <div class="mt-6 bg-primary-50 border border-primary-100 rounded-md p-4">
              <div class="flex">
                <span class="i-iconify-ph-info-fill text-xl text-primary-600 mr-2 mt-0.5"></span>
                <p class="text-sm text-primary-600">
                  Need help? Contact our pharmacy team at <a href="tel:+84287302345" class="font-medium">(028) 73023456</a> or <a href="mailto:sale@nhathuoclongchau.com.vn" class="font-medium">sale@nhathuoclongchau.com.vn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Success Modal -->
      <div v-if="showSuccess" class="fixed inset-0 bg-neutral-900/75 flex items-center justify-center z-50 animate-fade-in">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
          <div class="text-center mb-6">
            <div class="w-16 h-16 rounded-full bg-success-100 text-success-500 flex items-center justify-center mx-auto mb-4">
              <span class="i-iconify-ph-check-bold text-4xl"></span>
            </div>
            <h3 class="text-xl font-bold text-neutral-900 mb-2">Prescription Uploaded Successfully!</h3>
            <p class="text-neutral-600">
              Thank you for submitting your prescription. Our pharmacy team will review it shortly and contact you within 24 hours.
            </p>
          </div>
          <div class="bg-neutral-50 rounded-md p-4 mb-6">
            <p class="text-sm font-medium text-neutral-700 mb-1">Reference Number:</p>
            <p class="text-neutral-800 font-bold">{{ referenceNumber }}</p>
          </div>
          <div class="flex justify-center">
            <NuxtLink to="/" class="btn-primary w-full">
              Return to Homepage
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// File upload
const fileInput = ref(null)
const selectedFile = ref(null)

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  doctorName: '',
  notes: '',
  termsAgreed: false
})

// Validation
const errors = ref({})
const showSuccess = ref(false)
const referenceNumber = ref('')

// Computed properties
const canSubmit = computed(() => {
  return selectedFile.value && formData.value.termsAgreed
})

// File handling methods
function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size should not exceed 10MB')
      return
    }
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, PNG and PDF files are allowed')
      return
    }
    
    selectedFile.value = file
  }
}

function handleFileDrop(event) {
  if (event.dataTransfer.files.length) {
    const file = event.dataTransfer.files[0]
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size should not exceed 10MB')
      return
    }
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, PNG and PDF files are allowed')
      return
    }
    
    selectedFile.value = file
  }
}

function removeFile() {
  selectedFile.value = null
  if (fileInput.value) {
    fileInput.value.value = null
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + ' bytes'
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB'
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }
}

// Form submission
function submitPrescription() {
  // Reset errors
  errors.value = {}
  let isValid = true
  
  // Simple validation
  if (!formData.value.firstName.trim()) {
    errors.value.firstName = 'First name is required'
    isValid = false
  }
  
  if (!formData.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
    isValid = false
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }
  
  if (!formData.value.phone.trim()) {
    errors.value.phone = 'Phone number is required'
    isValid = false
  }
  
  if (!formData.value.doctorName.trim()) {
    errors.value.doctorName = 'Doctor\'s name is required'
    isValid = false
  }
  
  if (!formData.value.termsAgreed) {
    errors.value.termsAgreed = 'You must agree to the terms'
    isValid = false
  }
  
  if (!selectedFile.value) {
    alert('Please upload your prescription')
    isValid = false
  }
  
  if (isValid) {
    // Generate a reference number
    referenceNumber.value = 'RX-' + Math.floor(100000 + Math.random() * 900000)
    
    // Show success message
    showSuccess.value = true
    
    // In a real application, you would send the form data and file to your server here
    console.log('Form submitted:', formData.value)
    console.log('File:', selectedFile.value)
  }
}

// Email validation helper
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
</script>