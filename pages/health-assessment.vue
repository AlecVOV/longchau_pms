// filepath: c:\Users\Admin\Desktop\project-bolt-sb1-mqqvvjv9\project\pages\health-assessment.vue
<template>
  <div class="py-8 md:py-12">
    <div class="container-custom">
      <h1 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Health Assessment Tool</h1>
      <p class="text-neutral-600 mb-8 max-w-2xl">Complete this assessment to receive personalized health recommendations and product suggestions.</p>
      
      <div class="bg-white rounded-lg shadow-sm p-6">
        <!-- Progress indicator -->
        <div class="mb-8">
          <div class="flex justify-between mb-2">
            <span class="text-sm font-medium text-neutral-700">Progress</span>
            <span class="text-sm font-medium text-neutral-700">Step {{ currentStep }} of {{ totalSteps }}</span>
          </div>
          <div class="w-full bg-neutral-200 rounded-full h-2">
            <div class="bg-primary-600 h-2 rounded-full" :style="`width: ${(currentStep / totalSteps) * 100}%`"></div>
          </div>
        </div>
        
        <form @submit.prevent="submitAssessment" class="space-y-8">
          <!-- Step 1: Personal Information -->
          <div v-if="currentStep === 1">
            <h2 class="text-xl font-semibold mb-6">Personal Information</h2>
            <!-- Form fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Age Range</label>
                <select v-model="assessment.ageRange" class="input" required>
                  <option value="">Select your age range</option>
                  <option value="18-30">18-30</option>
                  <option value="31-45">31-45</option>
                  <option value="46-60">46-60</option>
                  <option value="60+">60+</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Gender</label>
                <select v-model="assessment.gender" class="input" required>
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">Do you have any known allergies?</label>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input type="radio" id="allergies-yes" v-model="assessment.hasAllergies" :value="true" class="mr-2">
                  <label for="allergies-yes">Yes</label>
                </div>
                <div class="flex items-center">
                  <input type="radio" id="allergies-no" v-model="assessment.hasAllergies" :value="false" class="mr-2">
                  <label for="allergies-no">No</label>
                </div>
              </div>
              <div v-if="assessment.hasAllergies" class="mt-3">
                <label class="block text-sm font-medium text-neutral-700 mb-1">Please specify your allergies:</label>
                <textarea v-model="assessment.allergies" class="input h-24" placeholder="List any allergies you have"></textarea>
              </div>
            </div>
          </div>
          
          <!-- Step 2: Health Concerns -->
          <div v-if="currentStep === 2">
            <h2 class="text-xl font-semibold mb-6">Health Concerns</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">What are your primary health concerns? (Select all that apply)</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div v-for="(concern, index) in healthConcerns" :key="index" class="flex items-center">
                    <input type="checkbox" :id="'concern-' + index" v-model="assessment.concerns" :value="concern" class="mr-2">
                    <label :for="'concern-' + index">{{ concern }}</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Are you currently taking any medications?</label>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <input type="radio" id="medications-yes" v-model="assessment.takingMedications" :value="true" class="mr-2">
                    <label for="medications-yes">Yes</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" id="medications-no" v-model="assessment.takingMedications" :value="false" class="mr-2">
                    <label for="medications-no">No</label>
                  </div>
                </div>
                <div v-if="assessment.takingMedications" class="mt-3">
                  <label class="block text-sm font-medium text-neutral-700 mb-1">Please list your current medications:</label>
                  <textarea v-model="assessment.medications" class="input h-24" placeholder="List any medications you are currently taking"></textarea>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Step 3: Lifestyle Factors -->
          <div v-if="currentStep === 3">
            <h2 class="text-xl font-semibold mb-6">Lifestyle Factors</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">How often do you exercise?</label>
                <select v-model="assessment.exercise" class="input" required>
                  <option value="">Please select an option</option>
                  <option value="never">Rarely or never</option>
                  <option value="occasional">1-2 times per week</option>
                  <option value="regular">3-4 times per week</option>
                  <option value="daily">5+ times per week</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">How would you rate your diet?</label>
                <select v-model="assessment.diet" class="input" required>
                  <option value="">Please select an option</option>
                  <option value="poor">Poor (mostly processed foods)</option>
                  <option value="average">Average (mix of healthy and processed foods)</option>
                  <option value="good">Good (mostly whole foods)</option>
                  <option value="excellent">Excellent (well-balanced, whole food diet)</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">How would you rate your stress level?</label>
                <select v-model="assessment.stress" class="input" required>
                  <option value="">Please select an option</option>
                  <option value="low">Low (rarely feel stressed)</option>
                  <option value="moderate">Moderate (occasional stress)</option>
                  <option value="high">High (frequently stressed)</option>
                  <option value="severe">Severe (constant stress)</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">How many hours of sleep do you typically get?</label>
                <select v-model="assessment.sleep" class="input" required>
                  <option value="">Please select an option</option>
                  <option value="less-than-5">Less than 5 hours</option>
                  <option value="5-6">5-6 hours</option>
                  <option value="7-8">7-8 hours</option>
                  <option value="more-than-8">More than 8 hours</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Step 4: Goals -->
          <div v-if="currentStep === 4">
            <h2 class="text-xl font-semibold mb-6">Health Goals</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">What are your primary health goals? (Select all that apply)</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div v-for="(goal, index) in healthGoals" :key="index" class="flex items-center">
                    <input type="checkbox" :id="'goal-' + index" v-model="assessment.goals" :value="goal" class="mr-2">
                    <label :for="'goal-' + index">{{ goal }}</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">Any additional information you'd like to share?</label>
                <textarea v-model="assessment.additionalInfo" class="input h-24" placeholder="Add any additional information that may be relevant"></textarea>
              </div>
            </div>
          </div>
          
          <!-- Results section (only shown after submission) -->
          <div v-if="showResults" class="mt-8 border-t border-neutral-200 pt-8">
            <h2 class="text-xl font-semibold mb-6">Your Personalized Recommendations</h2>
            
            <div class="p-4 border border-success-200 rounded-md bg-success-50 mb-6">
              <h3 class="font-medium text-success-700 mb-2">Thank you for completing the assessment!</h3>
              <p class="text-success-600">Based on your responses, we've prepared the following recommendations.</p>
            </div>
            
            <!-- Recommendations -->
            <div class="mb-8">
              <h3 class="text-lg font-medium mb-4">Recommended Products</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(product, index) in recommendedProducts" :key="index" class="border border-neutral-200 rounded-md overflow-hidden">
                  <img :src="product.image" :alt="product.name" class="w-full h-36 object-cover">
                  <div class="p-4">
                    <h4 class="font-medium">{{ product.name }}</h4>
                    <p class="text-sm text-neutral-500 mb-3">{{ product.description }}</p>
                    <div class="flex items-center justify-between">
                      <span class="font-medium">${{ product.price.toFixed(2) }}</span>
                      <button @click="addToCart(product)" class="btn-primary text-sm py-1 px-3">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Health Tips -->
            <div>
              <h3 class="text-lg font-medium mb-4">Health Tips</h3>
              <ul class="space-y-3 text-neutral-700">
                <li v-for="(tip, index) in healthTips" :key="index" class="flex items-start">
                  <span class="i-iconify-ph-check-circle-fill text-success-500 mr-2 mt-1"></span>
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="flex justify-between">
            <button 
              type="button" 
              @click="currentStep--" 
              class="btn-outline" 
              v-if="currentStep > 1 && !showResults"
            >
              Previous
            </button>
            <button 
              type="button" 
              @click="currentStep++" 
              class="btn-primary" 
              v-if="currentStep < totalSteps && !showResults"
              :disabled="!canContinue"
            >
              Continue
            </button>
            <button 
              type="submit" 
              class="btn-primary" 
              v-if="currentStep === totalSteps && !showResults"
              :disabled="!canSubmit"
            >
              Get Recommendations
            </button>
            <NuxtLink 
              to="/" 
              class="btn-primary" 
              v-if="showResults"
            >
              Back to Home
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const currentStep = ref(1)
const totalSteps = 4
const showResults = ref(false)

// Health concerns and goals lists
const healthConcerns = [
  'Weight management',
  'Digestive issues',
  'Heart health',
  'Joint pain',
  'Sleep issues',
  'Stress and anxiety',
  'Low energy/fatigue',
  'Immune system support',
  'Skin health',
  'Allergies',
  'Blood pressure',
  'Cholesterol',
  'Diabetes'
]

const healthGoals = [
  'Improve overall health',
  'Lose weight',
  'Gain muscle',
  'Increase energy',
  'Better sleep',
  'Manage stress',
  'Improve digestion',
  'Support immune system',
  'Manage chronic condition',
  'Improve athletic performance',
  'Anti-aging',
  'Mental clarity'
]

const assessment = ref({
  ageRange: '',
  gender: '',
  hasAllergies: null,
  allergies: '',
  concerns: [],
  takingMedications: null,
  medications: '',
  exercise: '',
  diet: '',
  stress: '',
  sleep: '',
  goals: [],
  additionalInfo: ''
})

// Computed properties to validate each step
const canContinue = computed(() => {
  if (currentStep.value === 1) {
    return assessment.value.ageRange && assessment.value.gender && assessment.value.hasAllergies !== null;
  }
  if (currentStep.value === 2) {
    return assessment.value.concerns.length > 0 && assessment.value.takingMedications !== null;
  }
  if (currentStep.value === 3) {
    return assessment.value.exercise && assessment.value.diet && assessment.value.stress && assessment.value.sleep;
  }
  return true;
})

const canSubmit = computed(() => {
  return assessment.value.goals.length > 0;
})

// Sample recommended products based on assessment
const recommendedProducts = ref([])
const healthTips = ref([])

function submitAssessment() {
  // Process assessment and generate recommendations
  console.log('Assessment submitted:', assessment.value)
  
  // In a real application, you would send this data to a server 
  // and get back personalized recommendations
  // For now, we'll just show some placeholder recommendations
  generateRecommendations()
  
  // Show results section
  showResults.value = true
}

function generateRecommendations() {
  // Generate product recommendations based on assessment (simplified example)
  recommendedProducts.value = [
    {
      name: "Complete Multivitamin",
      description: "Comprehensive daily vitamin with essential nutrients",
      price: 19.99,
      image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg"
    },
    {
      name: "Omega-3 Fish Oil",
      description: "Supports heart and brain health",
      price: 24.99,
      image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg"
    },
    {
      name: "Vitamin D3 Supplement",
      description: "Essential for bone health and immune support",
      price: 15.99,
      image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg"
    }
  ]
  
  // Generate health tips based on assessment
  healthTips.value = [
    "Try to get 7-8 hours of sleep each night for optimal health",
    "Incorporate at least 30 minutes of moderate exercise most days of the week",
    "Stay hydrated by drinking at least 8 glasses of water daily",
    "Include more fruits and vegetables in your diet for essential vitamins and minerals",
    "Practice stress-reduction techniques like meditation or deep breathing daily"
  ]
}

function addToCart(product) {
  cartStore.addItem({
    id: Date.now(),  // Using timestamp as temporary ID
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1
  })
  
  alert(`${product.name} added to your cart`)
}
</script>