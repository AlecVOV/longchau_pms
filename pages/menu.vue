<template>
  <div>
    <!-- Menu Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg" 
          alt="Menu background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Our Menu</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Explore our carefully curated selection of dishes, crafted with passion using only the finest seasonal ingredients.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Menu Categories Nav -->
    <section class="bg-white sticky top-20 z-30 shadow-md">
      <div class="container-custom py-4">
        <div class="flex overflow-x-auto hide-scrollbar space-x-8 justify-center">
          <button 
            v-for="category in menuCategories" 
            :key="category.id"
            @click="scrollToCategory(category.id)"
            class="text-primary-600 hover:text-primary-800 whitespace-nowrap font-medium py-2 px-2 border-b-2 transition-all duration-200"
            :class="activeCategory === category.id ? 'border-secondary-500' : 'border-transparent'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Menu Sections -->
    <section class="py-16 bg-cream">
      <div class="container-custom">
        <div 
          v-for="category in menuCategories" 
          :key="category.id"
          :id="category.id"
          class="mb-16 scroll-mt-32"
        >
          <div class="text-center mb-12">
            <h2 class="font-serif text-4xl font-bold text-primary-600 mb-4">{{ category.name }}</h2>
            <div class="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p class="text-gray-700 max-w-2xl mx-auto">{{ category.description }}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MenuItemCard 
              v-for="item in getMenuItemsByCategory(category.id)"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Special Dietary Notes -->
    <section class="py-12 bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="font-serif text-2xl font-bold mb-6 text-primary-600">Dietary Information</h3>
          <p class="mb-8 text-gray-700">
            We are committed to accommodating our guests with special dietary requirements. Many of our dishes can be adapted to suit your needs.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(info, index) in dietaryInfo" :key="index" class="px-4 py-2 bg-white rounded-full shadow flex items-center">
              <span class="w-3 h-3 rounded-full mr-2" :class="info.color"></span>
              <span>{{ info.label }}</span>
            </div>
          </div>
          
          <p class="mt-8 text-gray-700">
            Please inform your server of any allergies or dietary restrictions, and our chefs will be happy to accommodate your needs.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Composables
const route = useRoute();
const activeCategory = ref('starters');

// Categories
const menuCategories = [
  { 
    id: 'starters', 
    name: 'Starters', 
    description: 'Begin your culinary journey with our selection of elegant appetizers crafted to excite the palate.'
  },
  { 
    id: 'main-courses', 
    name: 'Main Courses', 
    description: 'Indulge in our chef\'s signature entrées, each plate a masterpiece of flavor and presentation.'
  },
  { 
    id: 'seafood', 
    name: 'From the Sea', 
    description: 'Fresh seafood selections sourced sustainably from local and international waters.'
  },
  { 
    id: 'vegetarian', 
    name: 'Vegetarian', 
    description: 'Creative and flavorful plant-based dishes that celebrate seasonal produce.'
  },
  { 
    id: 'desserts', 
    name: 'Desserts', 
    description: 'Sweet creations that provide the perfect finale to your dining experience.'
  },
  { 
    id: 'beverages', 
    name: 'Beverages', 
    description: 'Expertly crafted cocktails, fine wines, and non-alcoholic refreshments to complement your meal.'
  }
];

// Menu items
const menuItems = [
  // Starters
  {
    id: 101,
    category: 'starters',
    name: 'Seared Scallops',
    description: 'Pan-seared sea scallops with cauliflower purée, pancetta crisp, and micro greens',
    price: 18.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: true,
    image: 'https://images.pexels.com/photos/8311324/pexels-photo-8311324.jpeg'
  },
  {
    id: 102,
    category: 'starters',
    name: 'Wild Mushroom Bruschetta',
    description: 'Toasted artisan bread topped with sautéed wild mushrooms, truffle oil, and shaved Parmesan',
    price: 14.99,
    isVegetarian: true,
    isGlutenFree: false,
    isSignature: false,
    image: 'https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg'
  },
  {
    id: 103,
    category: 'starters',
    name: 'Tuna Tartare',
    description: 'Fresh yellowfin tuna diced and seasoned with avocado, citrus, and wasabi vinaigrette',
    price: 17.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg'
  },
  {
    id: 104,
    category: 'starters',
    name: 'Burrata Caprese',
    description: 'Creamy burrata cheese with heirloom tomatoes, basil, aged balsamic, and extra virgin olive oil',
    price: 15.99,
    isVegetarian: true,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/13271260/pexels-photo-13271260.jpeg'
  },
  
  // Main Courses
  {
    id: 201,
    category: 'main-courses',
    name: 'Filet Mignon',
    description: '8oz prime beef tenderloin with truffled mashed potatoes, seasonal vegetables, and red wine reduction',
    price: 45.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: true,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg'
  },
  {
    id: 202,
    category: 'main-courses',
    name: 'Herb Roasted Chicken',
    description: 'Free-range chicken with lemon thyme jus, root vegetable purée, and glazed baby carrots',
    price: 32.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg'
  },
  {
    id: 203,
    category: 'main-courses',
    name: 'Braised Short Rib',
    description: 'Slow-cooked beef short rib with creamy polenta, roasted brussels sprouts, and natural jus',
    price: 38.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: true,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
  },
  {
    id: 204,
    category: 'main-courses',
    name: 'Rack of Lamb',
    description: 'Herb-crusted New Zealand lamb rack with mint pesto, potato gratin, and seasonal vegetables',
    price: 42.99,
    isVegetarian: false,
    isGlutenFree: false,
    isSignature: false,
    image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg'
  },
  
  // Seafood
  {
    id: 301,
    category: 'seafood',
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon with lemon butter sauce, asparagus, and wild rice pilaf',
    price: 34.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg'
  },
  {
    id: 302,
    category: 'seafood',
    name: 'Lobster Risotto',
    description: 'Creamy Arborio rice with Maine lobster, saffron, and fresh herbs',
    price: 48.99,
    isVegetarian: false,
    isGlutenFree: true,
    isSignature: true,
    image: 'https://images.pexels.com/photos/13094362/pexels-photo-13094362.jpeg'
  },
  
  // Vegetarian
  {
    id: 401,
    category: 'vegetarian',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with assorted wild mushrooms, truffles, and aged Parmesan',
    price: 28.99,
    isVegetarian: true,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg'
  },
  {
    id: 402,
    category: 'vegetarian',
    name: 'Eggplant Parmesan',
    description: 'Layers of eggplant, house-made marinara, mozzarella, and fresh basil',
    price: 26.99,
    isVegetarian: true,
    isGlutenFree: false,
    isSignature: false,
    image: 'https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg'
  },
  
  // Desserts
  {
    id: 501,
    category: 'desserts',
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream',
    price: 12.99,
    isVegetarian: true,
    isGlutenFree: false,
    isSignature: true,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg'
  },
  {
    id: 502,
    category: 'desserts',
    name: 'Crème Brûlée',
    description: 'Classic vanilla bean custard with caramelized sugar crust',
    price: 10.99,
    isVegetarian: true,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/8599744/pexels-photo-8599744.jpeg'
  },
  
  // Beverages
  {
    id: 601,
    category: 'beverages',
    name: 'Signature Martini',
    description: 'House-infused cucumber gin, elderflower liqueur, fresh lime, and mint',
    price: 14.99,
    isVegetarian: true,
    isGlutenFree: true,
    isSignature: true,
    image: 'https://images.pexels.com/photos/2531187/pexels-photo-2531187.jpeg'
  },
  {
    id: 602,
    category: 'beverages',
    name: 'Artisanal Tea Selection',
    description: 'Premium loose-leaf teas, served with honey and lemon',
    price: 6.99,
    isVegetarian: true,
    isGlutenFree: true,
    isSignature: false,
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg'
  }
];

// Dietary information
const dietaryInfo = [
  { label: 'Vegetarian', color: 'bg-green-500' },
  { label: 'Gluten-Free', color: 'bg-blue-500' },
  { label: 'Signature Dish', color: 'bg-secondary-500' }
];

// Get menu items by category
const getMenuItemsByCategory = (categoryId) => {
  return menuItems.filter(item => item.category === categoryId);
};

// Scroll to category
const scrollToCategory = (categoryId) => {
  activeCategory.value = categoryId;
  document.getElementById(categoryId).scrollIntoView({ behavior: 'smooth' });
};

// Intersection observer to update active category on scroll
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeCategory.value = entry.target.id;
        }
      });
    },
    { 
      rootMargin: '-150px 0px -50% 0px',
      threshold: 0
    }
  );
  
  // Observe each category section
  menuCategories.forEach((category) => {
    const element = document.getElementById(category.id);
    if (element) observer.observe(element);
  });
  
  return observer;
};

let observer;

onMounted(() => {
  // Check if there's a category specified in the URL hash
  if (route.hash) {
    const categoryId = route.hash.substring(1);
    if (menuCategories.some(c => c.id === categoryId)) {
      activeCategory.value = categoryId;
      nextTick(() => {
        scrollToCategory(categoryId);
      });
    }
  }
  
  // Set up intersection observer after a short delay to ensure DOM is ready
  setTimeout(() => {
    observer = setupIntersectionObserver();
  }, 500);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>