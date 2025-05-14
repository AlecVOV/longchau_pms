<template>
  <header 
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300',
      { 'bg-black/80 backdrop-blur-md py-4': scrolled, 'py-6': !scrolled }
    ]"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-serif font-bold text-white">Gourmet</span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in navigationLinks" 
            :key="link.path" 
            :to="link.path" 
            class="font-medium text-white opacity-90 hover:opacity-100 hover:text-secondary-500 transition-colors duration-300"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/reservation" class="btn btn-primary bg-secondary-500 hover:bg-secondary-600">
            Reserve a Table
          </NuxtLink>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden text-white"
        >
          <Icon v-if="!mobileMenuOpen" name="heroicons:bars-3" class="w-7 h-7" />
          <Icon v-else name="heroicons:x-mark" class="w-7 h-7" />
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md animate-fade-in"
      >
        <div class="container-custom py-6">
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="link in navigationLinks" 
              :key="link.path" 
              :to="link.path" 
              class="py-2 font-medium text-white hover:text-secondary-500 transition-colors duration-300"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink 
              to="/reservation" 
              class="btn btn-primary bg-secondary-500 hover:bg-secondary-600 text-center"
              @click="mobileMenuOpen = false"
            >
              Reserve a Table
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  handleScroll(); // Initial check
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>