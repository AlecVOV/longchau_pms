<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Contact -->
        <div class="md:col-span-1">
          <div class="mb-6">
            <h3 class="text-2xl font-serif font-bold mb-2">Gourmet</h3>
            <p class="text-gray-400">Exquisite dining experience since 2010</p>
          </div>
          <div class="space-y-2">
            <div class="flex items-center">
              <Icon name="heroicons:map-pin" class="w-5 h-5 mr-2 text-secondary-500" />
              <p>123 Culinary St, Foodie City</p>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:phone" class="w-5 h-5 mr-2 text-secondary-500" />
              <p>(555) 123-4567</p>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:envelope" class="w-5 h-5 mr-2 text-secondary-500" />
              <p>info@gourmetrestaurant.com</p>
            </div>
          </div>
        </div>
        
        <!-- Hours -->
        <div class="md:col-span-1">
          <h4 class="text-xl font-serif mb-4">Hours of Operation</h4>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span>Monday - Thursday</span>
              <span>11am - 10pm</span>
            </li>
            <li class="flex justify-between">
              <span>Friday - Saturday</span>
              <span>11am - 11pm</span>
            </li>
            <li class="flex justify-between">
              <span>Sunday</span>
              <span>10am - 9pm</span>
            </li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div class="md:col-span-1">
          <h4 class="text-xl font-serif mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in navigationLinks" :key="link.path">
              <NuxtLink :to="link.path" class="hover:text-secondary-500 transition-colors duration-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div class="md:col-span-1">
          <h4 class="text-xl font-serif mb-4">Join Our Newsletter</h4>
          <p class="text-gray-400 mb-4">Stay updated with our latest offerings and events</p>
          <form class="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              class="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
            <button
              type="submit"
              class="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 rounded transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <!-- Social Media and Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <Icon name="mdi:facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <Icon name="mdi:instagram" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <Icon name="mdi:twitter" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
            <Icon name="mdi:yelp" class="w-6 h-6" />
          </a>
        </div>
        <p class="text-gray-400">
          © {{ new Date().getFullYear() }} Gourmet Restaurant. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Events', path: '/events' },
  { label: 'Careers', path: '/careers' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];
</script>