<template>
  <div>
    <!-- Ordering Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg" 
          alt="Online ordering background" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Online Ordering</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Enjoy our exquisite cuisine in the comfort of your home
          </p>
        </div>
      </div>
    </section>
    
    <!-- Order Options -->
    <section class="py-16 bg-cream">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div class="h-48 bg-primary-600 flex items-center justify-center">
              <Icon name="heroicons:truck" class="w-24 h-24 text-white" />
            </div>
            <div class="p-8 text-center">
              <h3 class="font-serif text-2xl font-bold mb-4 text-primary-600">Delivery</h3>
              <p class="text-gray-700 mb-6">
                Have our delicious meals delivered directly to your doorstep. Available within a 5-mile radius.
              </p>
              <button class="btn btn-primary w-full">Order Delivery</button>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div class="h-48 bg-secondary-500 flex items-center justify-center">
              <Icon name="heroicons:shopping-bag" class="w-24 h-24 text-white" />
            </div>
            <div class="p-8 text-center">
              <h3 class="font-serif text-2xl font-bold mb-4 text-primary-600">Pickup</h3>
              <p class="text-gray-700 mb-6">
                Order ahead and pick up your meal at your convenience. Skip the line and save on delivery fees.
              </p>
              <button class="btn btn-primary w-full">Order Pickup</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Menu Categories -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Online Menu</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Browse our takeaway menu and place your order online for a convenient dining experience.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MenuCard
            name="Starters" 
            description="Begin your meal with our delectable appetizers"
            imageUrl="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg"
          />
          <MenuCard
            name="Main Courses" 
            description="Indulge in our chef's finest entrées"
            imageUrl="https://images.pexels.com/photos/4147875/pexels-photo-4147875.jpeg"
            large
          />
          <MenuCard
            name="Sides" 
            description="Perfect accompaniments to your meal"
            imageUrl="https://images.pexels.com/photos/6419730/pexels-photo-6419730.jpeg"
          />
          <MenuCard
            name="Desserts" 
            description="Sweet endings to complete your dining experience"
            imageUrl="https://images.pexels.com/photos/4669237/pexels-photo-4669237.jpeg"
          />
          <MenuCard
            name="Beverages" 
            description="Refreshing drinks and fine wines"
            imageUrl="https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg"
          />
          <MenuCard
            name="Family Meals" 
            description="Special packages for sharing with loved ones"
            imageUrl="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            large
          />
        </div>
      </div>
    </section>
    
    <!-- How It Works -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">How It Works</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Ordering from Gourmet Restaurant is simple and convenient. Follow these easy steps:
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="flex flex-col items-center text-center">
            <div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Browse Menu</h3>
            <p class="text-gray-700">
              Explore our full menu and select your favorite dishes.
            </p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Add to Cart</h3>
            <p class="text-gray-700">
              Add items to your cart and customize as needed.
            </p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
              3
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Checkout</h3>
            <p class="text-gray-700">
              Provide delivery or pickup details and payment information.
            </p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
              4
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Enjoy!</h3>
            <p class="text-gray-700">
              Relax while we prepare your order and deliver it to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Delivery Information -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
          <h3 class="font-serif text-2xl font-bold mb-6 text-primary-600">Delivery Information</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-serif text-lg font-bold mb-2">Delivery Hours</h4>
              <p class="text-gray-700">
                Monday - Thursday: 11:30am - 9:30pm<br/>
                Friday - Saturday: 11:30am - 10:30pm<br/>
                Sunday: 11:00am - 8:30pm
              </p>
            </div>
            
            <div>
              <h4 class="font-serif text-lg font-bold mb-2">Delivery Area</h4>
              <p class="text-gray-700">
                We currently deliver within a 5-mile radius of our restaurant. For addresses outside this range, please consider our pickup option.
              </p>
            </div>
            
            <div>
              <h4 class="font-serif text-lg font-bold mb-2">Delivery Fee</h4>
              <p class="text-gray-700">
                A delivery fee of $5.99 applies to all orders. This fee is waived for orders over $75.
              </p>
            </div>
            
            <div>
              <h4 class="font-serif text-lg font-bold mb-2">Minimum Order</h4>
              <p class="text-gray-700">
                The minimum order amount for delivery is $25 (before tax and delivery fee).
              </p>
            </div>
            
            <div>
              <h4 class="font-serif text-lg font-bold mb-2">Estimated Delivery Time</h4>
              <p class="text-gray-700">
                Delivery times typically range from 30-60 minutes depending on your location and current order volume. You'll receive an estimated delivery time when you place your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="font-serif text-3xl font-bold mb-6 text-primary-600">What Our Customers Say</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="(testimonial, index) in orderTestimonials" 
            :key="index"
            class="bg-white rounded-lg shadow-md p-6"
          >
            <div class="flex justify-center mb-4">
              <div class="flex">
                <Icon 
                  v-for="i in 5" 
                  :key="i"
                  name="heroicons:star" 
                  class="w-5 h-5" 
                  :class="i <= testimonial.rating ? 'text-secondary-500' : 'text-gray-300'"
                />
              </div>
            </div>
            <p class="text-gray-700 mb-4 text-center italic">{{ testimonial.comment }}</p>
            <div class="text-center">
              <p class="font-bold text-primary-600">{{ testimonial.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MenuCard from '~/components/ui/MenuCard.vue';

// Testimonials specific to online ordering
const orderTestimonials = [
  {
    name: "Robert Johnson",
    rating: 5,
    comment: "The delivery arrived hot and right on time. Everything was packed carefully and tasted just as good as dining in!"
  },
  {
    name: "Lisa Nguyen",
    rating: 5,
    comment: "Ordering online was so easy, and the food quality was exceptional. Will definitely be ordering again!"
  },
  {
    name: "Carlos Mendez",
    rating: 4,
    comment: "Great takeout experience. The family meal option was perfect for our Sunday dinner and had generous portions."
  }
];
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>