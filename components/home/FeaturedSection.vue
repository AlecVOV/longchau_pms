<template>
  <section id="featured-section" class="py-20 bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Signature Dishes</h2>
        <div class="w-24 h-1 bg-secondary-500 mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(dish, index) in featuredDishes" 
          :key="dish.id"
          class="rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
          :class="{ 'animate-fade-in': true }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <img 
            :src="dish.image" 
            :alt="dish.name" 
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="font-serif text-2xl font-bold mb-2">{{ dish.name }}</h3>
            <p class="text-gray-700 mb-4">{{ dish.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-primary-600 font-bold text-xl">${{ dish.price.toFixed(2) }}</span>
              <NuxtLink 
                to="/menu" 
                class="text-secondary-500 hover:text-secondary-600 font-medium flex items-center"
              >
                View Details
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/menu" class="btn btn-outline">
          Explore Full Menu
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredDishes = [
  {
    id: 1,
    name: "Pan-Seared Salmon",
    description: "Fresh Atlantic salmon seared to perfection, served with lemon butter sauce and seasonal vegetables.",
    price: 32.99,
    image: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg"
  },
  {
    id: 2,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice cooked with wild mushrooms, finished with truffle oil and aged Parmesan.",
    price: 28.99,
    image: "https://images.pexels.com/photos/6541091/pexels-photo-6541091.jpeg"
  },
  {
    id: 3,
    name: "Filet Mignon",
    description: "Prime beef tenderloin grilled to your preference, accompanied by garlic mashed potatoes and red wine reduction.",
    price: 45.99,
    image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg"
  }
];
</script>