<template>
  <div>
    <!-- Gallery Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg" 
          alt="Gallery background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Gallery</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Step into our world of culinary artistry and elegant ambiance
          </p>
        </div>
      </div>
    </section>
    
    <!-- Gallery Filters -->
    <section class="bg-white py-8">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in ['All', 'Food', 'Drinks', 'Interior', 'Events']" 
            :key="category"
            @click="activeFilter = category.toLowerCase()"
            class="px-6 py-2 rounded-full transition-all duration-200 text-lg"
            :class="activeFilter === category.toLowerCase() 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Gallery Grid -->
    <section class="py-16 bg-cream">
      <div class="container-custom">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(image, index) in filteredGalleryImages" 
            :key="index"
            class="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"
            :class="{ 'sm:col-span-2': image.widespan }"
            @click="openGalleryModal(index)"
          >
            <div class="relative pb-[75%]">
              <img 
                :src="image.src" 
                :alt="image.alt" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Icon name="heroicons:plus-circle" class="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredGalleryImages.length === 0" class="py-12 text-center">
          <Icon name="heroicons:photo" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-2xl font-serif font-bold text-gray-500">No images found</h3>
          <p class="text-gray-500 mt-2">
            Try selecting a different category or check back later for new additions.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Gallery Modal -->
    <div
      v-if="showGalleryModal" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300"
      @click.self="showGalleryModal = false"
    >
      <button @click="showGalleryModal = false" class="absolute top-6 right-6 text-white">
        <Icon name="heroicons:x-mark" class="w-8 h-8" />
      </button>
      
      <button @click="prevImage" class="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200">
        <Icon name="heroicons:chevron-left" class="w-10 h-10" />
      </button>
      
      <div class="max-w-5xl max-h-[80vh] px-8">
        <img 
          :src="galleryImages[currentImageIndex].src" 
          :alt="galleryImages[currentImageIndex].alt" 
          class="max-w-full max-h-[80vh] object-contain"
        />
      </div>
      
      <button @click="nextImage" class="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200">
        <Icon name="heroicons:chevron-right" class="w-10 h-10" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Gallery state
const activeFilter = ref('all');
const showGalleryModal = ref(false);
const currentImageIndex = ref(0);

// Gallery images
const galleryImages = [
  // Food
  { 
    src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg", 
    alt: "Gourmet steak dish", 
    category: "food"
  },
  { 
    src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", 
    alt: "Fresh pasta dish", 
    category: "food"
  },
  { 
    src: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg", 
    alt: "Seafood platter", 
    category: "food",
    widespan: true
  },
  { 
    src: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg", 
    alt: "Elegant dessert", 
    category: "food"
  },
  { 
    src: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", 
    alt: "Artisan burger", 
    category: "food"
  },
  
  // Drinks
  { 
    src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg", 
    alt: "Craft cocktail", 
    category: "drinks"
  },
  { 
    src: "https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg", 
    alt: "Wine selection", 
    category: "drinks"
  },
  { 
    src: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg", 
    alt: "Signature martini", 
    category: "drinks"
  },
  
  // Interior
  { 
    src: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg", 
    alt: "Restaurant table setting", 
    category: "interior"
  },
  { 
    src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg", 
    alt: "Elegant dining area", 
    category: "interior",
    widespan: true
  },
  { 
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg", 
    alt: "Bar area", 
    category: "interior"
  },
  { 
    src: "https://images.pexels.com/photos/960856/pexels-photo-960856.jpeg", 
    alt: "Private dining room", 
    category: "interior"
  },
  
  // Events
  { 
    src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg", 
    alt: "Wedding reception", 
    category: "events",
    widespan: true
  },
  { 
    src: "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg", 
    alt: "Chef's table event", 
    category: "events"
  },
  { 
    src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg", 
    alt: "Corporate dinner", 
    category: "events"
  }
];

// Filtered gallery images based on active filter
const filteredGalleryImages = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryImages;
  }
  return galleryImages.filter(image => image.category === activeFilter.value);
});

// Gallery modal functions
const openGalleryModal = (index) => {
  currentImageIndex.value = index;
  showGalleryModal.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeGalleryModal = () => {
  showGalleryModal.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};

const nextImage = () => {
  if (currentImageIndex.value < filteredGalleryImages.value.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0; // Loop back to the first image
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = filteredGalleryImages.value.length - 1; // Loop to the last image
  }
};

// Clean up when component unmounts
onUnmounted(() => {
  document.body.style.overflow = ''; // Ensure scrolling is restored
});
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>