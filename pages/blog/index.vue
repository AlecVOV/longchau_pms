<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Health & Wellness Blog</h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert advice, health tips, and the latest insights from our pharmacy team
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Featured Article -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white flex items-center">
              <div>
                <span class="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h3 class="text-3xl font-bold mb-4">Understanding Blood Pressure: A Complete Guide</h3>
                <p class="text-lg mb-6 opacity-90">
                  Learn everything you need to know about managing your blood pressure for better heart health.
                </p>
                <NuxtLink to="/blog/understanding-blood-pressure" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Read Full Article
                </NuxtLink>
              </div>
            </div>
            <div class="p-8 flex items-center">
              <div class="text-center w-full">
                <div class="text-6xl mb-4">❤️</div>
                <p class="text-gray-600">
                  High blood pressure affects 1 in 3 adults. Our comprehensive guide helps you understand 
                  the causes, symptoms, and management strategies for maintaining healthy blood pressure levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Categories -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div class="text-3xl mb-3">💊</div>
            <h3 class="font-semibold text-gray-900">Medications</h3>
            <p class="text-sm text-gray-600 mt-1">3 articles</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div class="text-3xl mb-3">🥗</div>
            <h3 class="font-semibold text-gray-900">Nutrition</h3>
            <p class="text-sm text-gray-600 mt-1">5 articles</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div class="text-3xl mb-3">🏃‍♂️</div>
            <h3 class="font-semibold text-gray-900">Fitness</h3>
            <p class="text-sm text-gray-600 mt-1">4 articles</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div class="text-3xl mb-3">🧠</div>
            <h3 class="font-semibold text-gray-900">Mental Health</h3>
            <p class="text-sm text-gray-600 mt-1">2 articles</p>
          </div>
        </div>
      </section>

      <!-- Recent Articles -->
      <section class="mb-16">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Recent Articles</h2>
          <button class="text-blue-600 hover:text-blue-700 font-semibold">View All →</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-48 flex items-center justify-center">
              <span class="text-6xl">☀️</span>
            </div>
            <div class="p-6">
              <span class="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Vitamins & Supplements
              </span>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <NuxtLink to="/blog/importance-of-vitamin-d" class="hover:text-blue-600 transition-colors">
                  The Importance of Vitamin D for Your Health
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">
                Discover why vitamin D is essential for your immune system, bone health, and overall wellbeing.
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <span>Dr. Sarah Chen</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
                <span class="mx-2">•</span>
                <span>July 20, 2025</span>
              </div>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gradient-to-r from-green-400 to-blue-500 h-48 flex items-center justify-center">
              <span class="text-6xl">🌸</span>
            </div>
            <div class="p-6">
              <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Seasonal Health
              </span>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <NuxtLink to="/blog/managing-seasonal-allergies" class="hover:text-blue-600 transition-colors">
                  Managing Seasonal Allergies: Tips and Treatments
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">
                Effective strategies to reduce allergy symptoms and enjoy the changing seasons comfortably.
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <span>Dr. Michael Johnson</span>
                <span class="mx-2">•</span>
                <span>7 min read</span>
                <span class="mx-2">•</span>
                <span>July 18, 2025</span>
              </div>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gradient-to-r from-purple-400 to-pink-500 h-48 flex items-center justify-center">
              <span class="text-6xl">🧘‍♀️</span>
            </div>
            <div class="p-6">
              <span class="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Mental Health
              </span>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                <NuxtLink to="/blog/stress-management-techniques" class="hover:text-blue-600 transition-colors">
                  Stress Management Techniques for Better Health
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">
                Learn practical methods to manage stress and improve your mental and physical wellbeing.
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <span>Dr. Robert Martinez</span>
                <span class="mx-2">•</span>
                <span>6 min read</span>
                <span class="mx-2">•</span>
                <span>July 15, 2025</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest health advice, medication tips, and wellness insights.
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          >
          <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Page meta
definePageMeta({
  title: 'Health & Wellness Blog - Expert Healthcare Advice',
  description: 'Read expert health advice, medication tips, and wellness insights from our qualified pharmacy team.'
})

// SEO Head
useHead({
  title: 'Health & Wellness Blog - Expert Healthcare Advice',
  meta: [
    { name: 'description', content: 'Read expert health advice, medication tips, and wellness insights from our qualified pharmacy team.' },
    { name: 'keywords', content: 'health blog, wellness tips, medication advice, pharmacy blog, health articles' }
  ]
})
</script>
