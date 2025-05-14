<template>
  <div>
    <!-- Events Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg" 
          alt="Events background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Events & Promotions</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Join us for special dining experiences and exclusive offers
          </p>
        </div>
      </div>
    </section>
    
    <!-- Upcoming Events -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Upcoming Events</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Mark your calendar for these special dining experiences at Gourmet Restaurant.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="event in upcomingEvents" 
            :key="event.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              :src="event.image" 
              :alt="event.title" 
              class="w-full h-64 object-cover"
            />
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="font-serif text-2xl font-bold text-primary-600">{{ event.title }}</h3>
                  <p class="text-gray-500">{{ event.date }}</p>
                </div>
                <div class="bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {{ event.price }}
                </div>
              </div>
              
              <p class="text-gray-700 mb-6">{{ event.description }}</p>
              
              <div class="border-t border-gray-200 pt-6 mt-6">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <Icon name="heroicons:clock" class="w-5 h-5 text-gray-500 mr-2" />
                    <span>{{ event.time }}</span>
                  </div>
                  <button class="btn btn-outline">Reserve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Current Promotions -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6">Current Promotions</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-200 max-w-3xl mx-auto">
            Take advantage of these special offers when dining with us.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="promotion in currentPromotions" 
            :key="promotion.id"
            class="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white"
          >
            <div class="mb-6 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <Icon :name="promotion.icon" class="w-10 h-10 text-secondary-500" />
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold mb-4 text-center">{{ promotion.title }}</h3>
            <p class="mb-6 text-center">{{ promotion.description }}</p>
            <div class="text-center">
              <p class="text-secondary-500 font-bold mb-2">{{ promotion.validity }}</p>
              <button class="btn btn-secondary w-full">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Private Events -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Host Your Private Event</h2>
            <div class="w-24 h-1 bg-secondary-500 mb-8"></div>
            
            <div class="space-y-6">
              <p class="text-gray-700 text-lg">
                From intimate gatherings to grand celebrations, Gourmet Restaurant provides the perfect setting for your special occasion. Our private dining spaces can accommodate groups of various sizes.
              </p>
              <p class="text-gray-700 text-lg">
                Our events team will work closely with you to create a customized menu and experience that meets your specific needs and exceeds your expectations.
              </p>
              
              <div class="space-y-4 mt-8">
                <div class="flex items-start">
                  <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <p class="text-gray-700">Corporate meetings and dinners</p>
                </div>
                <div class="flex items-start">
                  <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <p class="text-gray-700">Wedding rehearsals and receptions</p>
                </div>
                <div class="flex items-start">
                  <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <p class="text-gray-700">Birthday and anniversary celebrations</p>
                </div>
                <div class="flex items-start">
                  <Icon name="heroicons:check-circle" class="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <p class="text-gray-700">Private cooking classes and tastings</p>
                </div>
              </div>
              
              <div class="pt-4">
                <NuxtLink to="/private-events" class="btn btn-primary">
                  Inquire About Private Events
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg" 
                alt="Private dining room" 
                class="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" 
                alt="Event space" 
                class="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
            <div class="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg" 
                alt="Wedding reception" 
                class="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg" 
                alt="Banquet hall" 
                class="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Calendar -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Events Calendar</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Stay updated with all upcoming events and special occasions at Gourmet Restaurant.
          </p>
        </div>
        
        <!-- Calendar grid would typically be implemented with a calendar component -->
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p class="text-center text-gray-700 mb-4">
            A calendar component would be implemented here to display all upcoming events.
          </p>
          <div class="text-center">
            <button class="btn btn-primary">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    date: "October 15, 2023",
    time: "6:00 PM - 9:00 PM",
    description: "Join us for an exclusive wine tasting event featuring selections from Napa Valley. Our sommelier will guide you through each tasting with paired appetizers.",
    price: "$85 per person",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    date: "October 22, 2023",
    time: "7:00 PM - 10:00 PM",
    description: "An intimate dining experience with Chef Laurent. Enjoy a seven-course tasting menu with commentary from the chef and premium wine pairings.",
    price: "$150 per person",
    image: "https://images.pexels.com/photos/5953591/pexels-photo-5953591.jpeg"
  },
  {
    id: 3,
    title: "Autumn Harvest Dinner",
    date: "November 5, 2023",
    time: "6:30 PM - 9:30 PM",
    description: "Celebrate the flavors of autumn with a special seasonal menu featuring locally sourced fall ingredients and harvest-inspired cocktails.",
    price: "$95 per person",
    image: "https://images.pexels.com/photos/5876296/pexels-photo-5876296.jpeg"
  },
  {
    id: 4,
    title: "Cooking Class: Holiday Desserts",
    date: "November 19, 2023",
    time: "2:00 PM - 4:30 PM",
    description: "Learn to create show-stopping holiday desserts with our pastry chef. Take home recipes and enjoy sampling your creations paired with coffee or dessert wine.",
    price: "$75 per person",
    image: "https://images.pexels.com/photos/6210764/pexels-photo-6210764.jpeg"
  }
];

// Current promotions
const currentPromotions = [
  {
    id: 1,
    title: "Happy Hour",
    description: "Enjoy 50% off select cocktails and appetizers every Monday through Thursday from 4PM to 6PM.",
    validity: "Valid until Dec 31, 2023",
    icon: "heroicons:beer-mug"
  },
  {
    id: 2,
    title: "Date Night Special",
    description: "Three-course dinner for two with a bottle of wine for $120 every Friday night.",
    validity: "Valid until Nov 30, 2023",
    icon: "heroicons:heart"
  },
  {
    id: 3,
    title: "Weekend Brunch",
    description: "Complimentary mimosa or bloody mary with any brunch entrée, Saturday and Sunday from 10AM to 2PM.",
    validity: "Ongoing",
    icon: "heroicons:sun"
  }
];
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>