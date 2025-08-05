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
              <span class="text-neutral-700">FAQ</span>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h1>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
          Find answers to common questions about our pharmacy services, prescriptions, shipping, and more.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search FAQ..."
            class="w-full px-4 py-3 pl-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="i-iconify-ph-magnifying-glass text-neutral-400"></span>
          </div>
        </div>
      </div>

      <!-- FAQ Categories -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'p-4 rounded-lg border-2 transition-all duration-200 text-left',
            activeCategory === category.id
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
          ]"
        >
          <div class="flex items-center space-x-3">
            <span :class="category.icon + ' text-xl'"></span>
            <div>
              <div class="font-semibold text-sm">{{ category.name }}</div>
              <div class="text-xs text-neutral-500">{{ category.count }} questions</div>
            </div>
          </div>
        </button>
      </div>

      <!-- FAQ Content -->
      <div class="space-y-4">
        <div
          v-for="faq in filteredFAQs"
          :key="faq.id"
          class="bg-white rounded-lg shadow-sm border border-neutral-200"
        >
          <button
            @click="toggleFAQ(faq.id)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
          >
            <h3 class="font-semibold text-neutral-900 pr-4">{{ faq.question }}</h3>
            <span
              :class="[
                'i-iconify-ph-caret-down transition-transform duration-200',
                openFAQs.includes(faq.id) ? 'rotate-180' : ''
              ]"
            ></span>
          </button>
          <div
            v-if="openFAQs.includes(faq.id)"
            class="px-6 pb-4 text-neutral-600 border-t border-neutral-100"
          >
            <div class="pt-4" v-html="faq.answer"></div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredFAQs.length === 0" class="text-center py-12">
        <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="i-iconify-ph-question text-2xl text-neutral-400"></span>
        </div>
        <h3 class="text-lg font-semibold text-neutral-900 mb-2">No questions found</h3>
        <p class="text-neutral-600 mb-6">Try adjusting your search terms or browse by category.</p>
        <button
          @click="clearSearch"
          class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Clear Search
        </button>
      </div>

      <!-- Contact Section -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-neutral-900 mb-4">Still have questions?</h2>
          <p class="text-neutral-600 mb-6">
            Our customer service team is here to help you with any questions not covered in our FAQ.
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Meta
useHead({
  title: 'FAQ - Long Châu Pharmacy',
  meta: [
    {
      name: 'description',
      content: 'Find answers to frequently asked questions about Long Châu Pharmacy services, prescriptions, shipping, and account management.'
    },
    {
      name: 'keywords',
      content: 'FAQ, frequently asked questions, pharmacy help, prescription questions, shipping info, medication questions'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const activeCategory = ref('all')
const openFAQs = ref([])

// Categories
const categories = [
  { id: 'all', name: 'All', icon: 'i-iconify-ph-list', count: 24 },
  { id: 'prescriptions', name: 'Prescriptions', icon: 'i-iconify-ph-pill', count: 8 },
  { id: 'shipping', name: 'Shipping', icon: 'i-iconify-ph-truck', count: 6 },
  { id: 'account', name: 'Account', icon: 'i-iconify-ph-user', count: 5 },
  { id: 'payment', name: 'Payment', icon: 'i-iconify-ph-credit-card', count: 5 }
]

// FAQ data
const faqs = [
  // Prescription FAQs
  {
    id: 1,
    category: 'prescriptions',
    question: 'How do I upload my prescription?',
    answer: `<p>You can upload your prescription in several ways:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Take a clear photo using our mobile app</li>
               <li>Upload a digital copy through our website</li>
               <li>Email it to prescriptions@longchau.com</li>
               <li>Fax it to 1-800-555-FAXS</li>
             </ul>
             <p class="mt-3">Make sure all text is clearly visible and the prescription is current.</p>`
  },
  {
    id: 2,
    category: 'prescriptions',
    question: 'How long does prescription processing take?',
    answer: `<p>Processing times vary by prescription type:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li><strong>New prescriptions:</strong> 2-4 hours</li>
               <li><strong>Refills:</strong> 1-2 hours</li>
               <li><strong>Controlled substances:</strong> 4-8 hours</li>
               <li><strong>Specialty medications:</strong> 1-2 business days</li>
             </ul>
             <p class="mt-3">You'll receive notifications when your prescription is ready.</p>`
  },
  {
    id: 3,
    category: 'prescriptions',
    question: 'Can I get a prescription without insurance?',
    answer: `<p>Yes, you can fill prescriptions without insurance. We offer:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Competitive cash prices on all medications</li>
               <li>Generic alternatives when available</li>
               <li>Prescription discount programs</li>
               <li>Patient assistance program referrals</li>
             </ul>
             <p class="mt-3">Our pharmacists can help you find the most affordable options.</p>`
  },
  {
    id: 4,
    category: 'prescriptions',
    question: 'What if my prescription is out of stock?',
    answer: `<p>If your medication is temporarily out of stock:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>We'll contact you immediately</li>
               <li>Provide an estimated restock date</li>
               <li>Offer partial fills if appropriate</li>
               <li>Help you find alternative pharmacy locations</li>
               <li>Work with your doctor for substitutions if needed</li>
             </ul>`
  },
  {
    id: 5,
    category: 'prescriptions',
    question: 'How do prescription refills work?',
    answer: `<p>Refilling prescriptions is easy:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Log into your account and click "Refill"</li>
               <li>Use our mobile app for quick refills</li>
               <li>Call our automated refill line</li>
               <li>Set up automatic refills for maintenance medications</li>
             </ul>
             <p class="mt-3">We'll send reminders when refills are due.</p>`
  },
  {
    id: 6,
    category: 'prescriptions',
    question: 'Can I transfer prescriptions from another pharmacy?',
    answer: `<p>Yes! We can transfer most prescriptions from other pharmacies:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Provide your current pharmacy's name and phone number</li>
               <li>We'll handle the transfer process for you</li>
               <li>Most transfers complete within 1-2 hours</li>
               <li>Controlled substances may require a new prescription</li>
             </ul>
             <p class="mt-3">Contact us at (028) 73023456 to start a transfer.</p>`
  },
  {
    id: 7,
    category: 'prescriptions',
    question: 'Do you offer medication synchronization?',
    answer: `<p>Yes! Our Med Sync program allows you to:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Pick up all your medications on the same day each month</li>
               <li>Reduce pharmacy visits</li>
               <li>Never miss a dose</li>
               <li>Get personalized medication packaging</li>
             </ul>
             <p class="mt-3">Ask your pharmacist about enrolling in Med Sync.</p>`
  },
  {
    id: 8,
    category: 'prescriptions',
    question: 'What happens if I miss a dose?',
    answer: `<p>If you miss a dose:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Take it as soon as you remember</li>
               <li>If it's almost time for your next dose, skip the missed dose</li>
               <li>Never double up on doses</li>
               <li>Consult your pharmacist or doctor if unsure</li>
             </ul>
             <p class="mt-3">Consider using our medication reminder app to stay on track.</p>`
  },

  // Shipping FAQs
  {
    id: 9,
    category: 'shipping',
    question: 'How much does shipping cost?',
    answer: `<p>Our shipping rates are:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li><strong>Standard shipping:</strong> $7.99 (FREE on orders over $50)</li>
               <li><strong>Express shipping:</strong> $14.99</li>
               <li><strong>Same-day delivery:</strong> $24.99 (select areas)</li>
               <li><strong>Store pickup:</strong> FREE</li>
             </ul>`
  },
  {
    id: 10,
    category: 'shipping',
    question: 'How long does delivery take?',
    answer: `<p>Delivery times depend on your shipping method:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li><strong>Standard:</strong> 3-5 business days</li>
               <li><strong>Express:</strong> 1-2 business days</li>
               <li><strong>Same-day:</strong> 4-6 hours (order by 2 PM)</li>
               <li><strong>Store pickup:</strong> Ready in 2-4 hours</li>
             </ul>`
  },
  {
    id: 11,
    category: 'shipping',
    question: 'Do you ship prescriptions?',
    answer: `<p>Yes, we safely ship prescription medications with:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Secure, tamper-evident packaging</li>
               <li>Temperature-controlled shipping for sensitive medications</li>
               <li>Signature required for delivery</li>
               <li>HIPAA-compliant handling</li>
               <li>Discrete packaging for privacy</li>
             </ul>`
  },
  {
    id: 12,
    category: 'shipping',
    question: 'Can I track my order?',
    answer: `<p>Yes! You can track your order through:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Your account dashboard</li>
               <li>Email notifications with tracking links</li>
               <li>SMS text updates</li>
               <li>Our mobile app</li>
             </ul>
             <p class="mt-3">You'll receive real-time updates from order processing to delivery.</p>`
  },
  {
    id: 13,
    category: 'shipping',
    question: 'What if I miss my delivery?',
    answer: `<p>If you miss a delivery attempt:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>We'll make up to 3 delivery attempts</li>
               <li>Package will be held at local facility for 5 days</li>
               <li>You'll receive pickup instructions</li>
               <li>Contact us to reschedule delivery</li>
             </ul>`
  },
  {
    id: 14,
    category: 'shipping',
    question: 'Do you offer same-day delivery?',
    answer: `<p>Yes! Same-day delivery is available in select cities:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>New York, Los Angeles, Chicago, Houston</li>
               <li>Phoenix, Philadelphia, San Antonio, San Diego</li>
               <li>Dallas, San Jose</li>
               <li>Order by 2 PM for same-day delivery</li>
               <li>$24.99 delivery fee</li>
             </ul>`
  },

  // Account FAQs
  {
    id: 15,
    category: 'account',
    question: 'How do I create an account?',
    answer: `<p>Creating an account is easy:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Click "Sign Up" at the top of any page</li>
               <li>Provide your email, name, and phone number</li>
               <li>Create a secure password</li>
               <li>Verify your email address</li>
               <li>Add your insurance and shipping information</li>
             </ul>
             <p class="mt-3">Your account will be ready to use immediately!</p>`
  },
  {
    id: 16,
    category: 'account',
    question: 'How do I reset my password?',
    answer: `<p>To reset your password:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Click "Forgot Password" on the login page</li>
               <li>Enter your email address</li>
               <li>Check your email for a reset link</li>
               <li>Follow the link to create a new password</li>
             </ul>
             <p class="mt-3">If you don't receive the email, check your spam folder.</p>`
  },
  {
    id: 17,
    category: 'account',
    question: 'Can I update my insurance information?',
    answer: `<p>Yes, you can update your insurance anytime:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Log into your account</li>
               <li>Go to "Profile" > "Insurance Information"</li>
               <li>Update your insurance details</li>
               <li>Upload photos of your new insurance cards</li>
             </ul>
             <p class="mt-3">Changes take effect immediately for new prescriptions.</p>`
  },
  {
    id: 18,
    category: 'account',
    question: 'How do I add family members to my account?',
    answer: `<p>To add family members:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Go to "Family Members" in your account</li>
               <li>Click "Add Family Member"</li>
               <li>Provide their information and insurance details</li>
               <li>They can create their own login or use yours</li>
             </ul>
             <p class="mt-3">You can manage prescriptions for all family members from one account.</p>`
  },
  {
    id: 19,
    category: 'account',
    question: 'How do I view my prescription history?',
    answer: `<p>Your prescription history is available in your account:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Log in and go to "Prescription History"</li>
               <li>View all past prescriptions and refills</li>
               <li>Download receipts and insurance statements</li>
               <li>Track medication adherence</li>
             </ul>`
  },

  // Payment FAQs
  {
    id: 20,
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer: `<p>We accept various payment methods:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>All major credit cards (Visa, MasterCard, American Express)</li>
               <li>Debit cards</li>
               <li>PayPal</li>
               <li>Apple Pay and Google Pay</li>
               <li>Health Savings Account (HSA) cards</li>
               <li>Flexible Spending Account (FSA) cards</li>
             </ul>`
  },
  {
    id: 21,
    category: 'payment',
    question: 'Do you accept insurance?',
    answer: `<p>Yes! We accept most insurance plans including:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Most major health insurance plans</li>
               <li>Medicare and Medicaid</li>
               <li>Prescription drug plans (Part D)</li>
               <li>Employer-sponsored plans</li>
             </ul>
             <p class="mt-3">Contact us to verify your specific coverage.</p>`
  },
  {
    id: 22,
    category: 'payment',
    question: 'How do I use my HSA/FSA card?',
    answer: `<p>Using your HSA/FSA card is simple:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Add your HSA/FSA card as a payment method</li>
               <li>Select it during checkout</li>
               <li>We'll automatically process eligible items</li>
               <li>You'll receive detailed receipts for your records</li>
             </ul>`
  },
  {
    id: 23,
    category: 'payment',
    question: 'Can I get a receipt for my purchases?',
    answer: `<p>Yes! You can access receipts through:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Your account dashboard</li>
               <li>Email confirmations after each purchase</li>
               <li>Mobile app order history</li>
               <li>Request printed receipts for store pickups</li>
             </ul>
             <p class="mt-3">All receipts include details needed for insurance or tax purposes.</p>`
  },
  {
    id: 24,
    category: 'payment',
    question: 'What if my payment is declined?',
    answer: `<p>If your payment is declined:</p>
             <ul class="list-disc list-inside mt-2 space-y-1">
               <li>Check that all card information is correct</li>
               <li>Ensure you have sufficient funds or credit available</li>
               <li>Contact your bank to verify no holds on your account</li>
               <li>Try a different payment method</li>
               <li>Contact our support team for assistance</li>
             </ul>`
  }
]

// Computed properties
const filteredFAQs = computed(() => {
  let filtered = faqs

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(faq => faq.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(faq => 
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Methods
const toggleFAQ = (id) => {
  const index = openFAQs.value.indexOf(id)
  if (index > -1) {
    openFAQs.value.splice(index, 1)
  } else {
    openFAQs.value.push(id)
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
}
</script>
