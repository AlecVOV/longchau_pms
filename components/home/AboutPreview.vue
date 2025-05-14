<template>
  <section class="py-20 bg-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="absolute inset-0 translate-x-5 translate-y-5 border-2 border-secondary-500 rounded-lg -z-10"></div>
          <img 
            src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg" 
            alt="Chef preparing food" 
            class="rounded-lg shadow-xl w-full h-auto md:h-[500px] object-cover"
          />
        </div>
        
        <!-- Content -->
        <div class="md:pl-8">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Story</h2>
          <div class="w-24 h-1 bg-secondary-500 mb-8"></div>
          <p class="text-gray-700 mb-6 text-lg">
            Founded in 2010 by award-winning Chef Michel Laurent, Gourmet Restaurant has been delighting patrons with exceptional culinary creations for over a decade.
          </p>
          <p class="text-gray-700 mb-8 text-lg">
            Our commitment to using only the freshest local ingredients and sustainable practices sets us apart, creating an unforgettable dining experience that harmonizes flavor, presentation, and ambiance.
          </p>
          <NuxtLink to="/about" class="btn btn-outline">
            Read Our Full Story
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>