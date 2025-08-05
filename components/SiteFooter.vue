<template>
  <footer class="bg-neutral-800 text-neutral-300 pt-12 pb-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Long Châu</h4>
          <p class="mb-4 text-sm leading-relaxed">
            Your trusted online pharmacy for medications and medical equipment. We're committed to providing quality healthcare products with excellent service.
          </p>
          <div class="flex items-center space-x-4 mt-6">
            <a href="#" class="text-neutral-400 hover:text-white">
              <span class="i-iconify-ph-facebook-logo-fill text-xl"></span>
            </a>
            <a href="#" class="text-neutral-400 hover:text-white">
              <span class="i-iconify-ph-twitter-logo-fill text-xl"></span>
            </a>
            <a href="#" class="text-neutral-400 hover:text-white">
              <span class="i-iconify-ph-instagram-logo-fill text-xl"></span>
            </a>
            <a href="#" class="text-neutral-400 hover:text-white">
              <span class="i-iconify-ph-linkedin-logo-fill text-xl"></span>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/about" class="inline-block py-1 hover:text-white">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="inline-block py-1 hover:text-white">Contact Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="inline-block py-1 hover:text-white">Health Articles</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="inline-block py-1 hover:text-white">FAQs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/shipping-policy" class="inline-block py-1 hover:text-white">Shipping Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/return-policy" class="inline-block py-1 hover:text-white">Return & Refund Policy</NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Categories -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Categories</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="category in categories.slice(0, 6)" :key="category.slug">
              <NuxtLink :to="`/category/${category.slug}`" class="inline-block py-1 hover:text-white">
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact Information -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Contact Us</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex">
              <span class="i-iconify-ph-map-pin-fill text-xl mr-3 text-primary-400 mt-0.5"></span>
              <span>379-381 Hai Bà Trưng, P. Xuân Hoà, TP. Hồ Chí Minh</span>
            </li>
            <li class="flex">
              <span class="i-iconify-ph-phone-fill text-xl mr-3 text-primary-400 mt-0.5"></span>
              <span>(028) 73023456</span>
            </li>
            <li class="flex">
              <span class="i-iconify-ph-envelope-fill text-xl mr-3 text-primary-400 mt-0.5"></span>
              <span>sale@nhathuoclongchau.com.vn</span>
            </li>
            <li class="flex">
              <span class="i-iconify-ph-clock-fill text-xl mr-3 text-primary-400 mt-0.5"></span>
              <span>Monday - Friday: 8am - 10pm<br>Saturday - Sunday: 9am - 7pm</span>
            </li>
          </ul>
        </div>
      </div>
      
           
      <!-- Bottom Footer -->
      <div class="mt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm mb-4 md:mb-0">&copy; 2025 Long Châu. All rights reserved.</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <NuxtLink to="/privacy-policy" class="hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service" class="hover:text-white">Terms of Service</NuxtLink>
          <NuxtLink to="/accessibility" class="hover:text-white">Accessibility</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// List of categories to display in footer
const categories = [
  { name: 'Pain Relief', slug: 'pain-relief' },
  { name: 'Cold & Flu', slug: 'cold-flu' },
  { name: 'Allergy', slug: 'allergy' },
  { name: 'Diabetes Care', slug: 'diabetes-care' },
  { name: 'First Aid', slug: 'first-aid' },
  { name: 'Vitamins & Supplements', slug: 'vitamins-supplements' },
  { name: 'Personal Care', slug: 'personal-care' },
  { name: 'Skin Care', slug: 'skin-care' },
  { name: 'Medical Devices', slug: 'medical-devices' }
]
</script>