<template>
  <div class="relative h-screen text-white overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img 
        :src="backgroundImage" 
        alt="Restaurant hero image" 
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
    
    <!-- Content -->
    <div class="container-custom relative z-20 h-full flex flex-col justify-center">
      <div class="max-w-2xl">
        <h1 class="font-serif text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Exquisite Dining Experience
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl animate-slide-up animation-delay-200">
          Indulge in our carefully crafted menu of culinary delights, prepared with passion and the finest ingredients.
        </p>
        <div class="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
          <NuxtLink to="/menu" class="btn btn-primary">
            View Our Menu
          </NuxtLink>
          <NuxtLink to="/reservation" class="btn btn-secondary">
            Reserve a Table
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <button @click="scrollToFeatured" class="text-white flex flex-col items-center">
        <span class="mb-2">Scroll Down</span>
        <Icon name="heroicons:chevron-down" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
const backgroundImage = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg";

const scrollToFeatured = () => {
  document.getElementById('featured-section').scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}
</style>