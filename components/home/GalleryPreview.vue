<template>
  <section class="py-20 bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Gallery</h2>
        <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
        <p class="text-gray-700 max-w-3xl mx-auto">
          Step into our world of culinary artistry and elegant ambiance through our gallery.
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index"
          class="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"
          :class="{ 
            'row-span-2': image.featured, 
            'col-span-2': image.widespan 
          }"
          @click="openGallery(index)"
        >
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Icon name="heroicons:plus-circle" class="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/gallery" class="btn btn-outline">
          View Full Gallery
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryImages = [
  { 
    src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg", 
    alt: "Elegant table setting", 
    featured: true 
  },
  { 
    src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", 
    alt: "Chef preparing food" 
  },
  { 
    src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg", 
    alt: "Cocktail preparation" 
  },
  { 
    src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg", 
    alt: "Restaurant interior", 
    widespan: true 
  },
  { 
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg", 
    alt: "Dessert plate" 
  },
  { 
    src: "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg", 
    alt: "Wine selection" 
  }
];

const openGallery = (index) => {
  // This would typically open a lightbox gallery
  // Implementation would depend on the chosen gallery component
  console.log(`Opening gallery at index ${index}`);
};
</script>