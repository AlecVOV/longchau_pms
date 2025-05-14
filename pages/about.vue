<template>
  <div>
    <!-- About Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg" 
          alt="Restaurant interior" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Our Story</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            From humble beginnings to a celebrated culinary destination
          </p>
        </div>
      </div>
    </section>
    
    <!-- Our History -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our History</h2>
            <div class="w-24 h-1 bg-secondary-500 mb-8"></div>
            
            <div class="space-y-6">
              <p class="text-gray-700 text-lg">
                Gourmet Restaurant was established in 2010 by acclaimed Chef Michel Laurent, who brought his vision of combining traditional culinary techniques with modern innovation to life.
              </p>
              <p class="text-gray-700 text-lg">
                What began as an intimate 40-seat bistro has evolved into one of the city's premier dining destinations, earning numerous accolades including two Michelin stars and the coveted James Beard Award.
              </p>
              <p class="text-gray-700 text-lg">
                Despite our growth and success, we remain committed to our founding principles: sourcing the finest ingredients, respecting classic techniques, and delivering exceptional hospitality to each guest who walks through our doors.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute inset-0 translate-x-5 translate-y-5 border-2 border-secondary-500 rounded-lg -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
              alt="Restaurant history" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Philosophy -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="font-serif text-4xl font-bold mb-6">Our Philosophy</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-12"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="flex flex-col items-center">
              <div class="bg-white/10 rounded-full p-6 mb-6">
                <Icon name="heroicons:sparkles" class="w-12 h-12 text-secondary-500" />
              </div>
              <h3 class="font-serif text-xl font-bold mb-4">Quality Ingredients</h3>
              <p class="text-gray-200">
                We source only the finest seasonal ingredients from local farmers and sustainable suppliers.
              </p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="bg-white/10 rounded-full p-6 mb-6">
                <Icon name="heroicons:beaker" class="w-12 h-12 text-secondary-500" />
              </div>
              <h3 class="font-serif text-xl font-bold mb-4">Culinary Innovation</h3>
              <p class="text-gray-200">
                We respect tradition while embracing creativity to craft unique dining experiences.
              </p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="bg-white/10 rounded-full p-6 mb-6">
                <Icon name="heroicons:heart" class="w-12 h-12 text-secondary-500" />
              </div>
              <h3 class="font-serif text-xl font-bold mb-4">Exceptional Service</h3>
              <p class="text-gray-200">
                We believe that genuine hospitality and attention to detail create memorable moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Meet the Chef -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Meet Chef Laurent</h2>
              <div class="w-24 h-1 bg-secondary-500 mb-8"></div>
              
              <div class="space-y-6">
                <p class="text-gray-700 text-lg">
                  Classically trained at Le Cordon Bleu in Paris, Chef Michel Laurent honed his skills in prestigious kitchens throughout Europe before realizing his dream of opening Gourmet Restaurant.
                </p>
                <p class="text-gray-700 text-lg">
                  With over 25 years of culinary experience, Chef Laurent combines his French heritage with global influences to create dishes that are both familiar and surprising.
                </p>
                <p class="text-gray-700 text-lg">
                  "My cooking philosophy is simple: respect the ingredients, understand their natural flavors, and enhance them through technique rather than mask them with complexity." - Chef Michel Laurent
                </p>
                
                <div class="pt-4">
                  <div class="flex items-center">
                    <img 
                      src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg" 
                      alt="Chef's signature" 
                      class="h-16 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" 
                alt="Chef Michel Laurent" 
                class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Team -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Team</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Meet the talented individuals who work tirelessly to create exceptional dining experiences for our guests.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-80 object-cover object-center"
            />
            <div class="p-6">
              <h3 class="font-serif text-xl font-bold text-primary-600 mb-1">{{ member.name }}</h3>
              <p class="text-secondary-500 font-medium mb-4">{{ member.role }}</p>
              <p class="text-gray-600">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Team members
const teamMembers = [
  {
    name: "Michel Laurent",
    role: "Executive Chef & Founder",
    bio: "With over 25 years of culinary experience and training from Le Cordon Bleu, Chef Laurent brings his passion for innovative cuisine to every dish.",
    image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
  },
  {
    name: "Sophia Martinez",
    role: "Pastry Chef",
    bio: "Award-winning pastry artist who transforms simple desserts into extraordinary culinary experiences with her creative approach.",
    image: "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg"
  },
  {
    name: "James Chen",
    role: "Sommelier",
    bio: "Certified sommelier with an exceptional talent for wine pairings that complement and elevate the flavors of our menu.",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"
  },
  {
    name: "Olivia Jackson",
    role: "Restaurant Manager",
    bio: "Ensures every aspect of your dining experience meets our high standards of excellence and hospitality.",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
  },
  {
    name: "Daniel Rodriguez",
    role: "Sous Chef",
    bio: "Brings creativity and precision to the kitchen, working closely with Chef Laurent to maintain consistent quality.",
    image: "https://images.pexels.com/photos/8477129/pexels-photo-8477129.jpeg"
  },
  {
    name: "Emma Wilson",
    role: "Mixologist",
    bio: "Creates signature cocktails that pair perfectly with our menu using house-infused spirits and fresh ingredients.",
    image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg"
  }
];
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>