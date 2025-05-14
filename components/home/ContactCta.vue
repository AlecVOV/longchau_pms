<template>
  <section class="relative py-20">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/70 z-10"></div>
      <img 
        src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg" 
        alt="Restaurant interior" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="container-custom relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-xl p-8">
          <h3 class="font-serif text-3xl font-bold mb-6 text-primary-600">Get in Touch</h3>
          <form class="space-y-4">
            <div>
              <label for="name" class="block mb-1 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label for="message" class="block mb-1 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="text-white self-center">
          <h3 class="font-serif text-3xl font-bold mb-6">Contact Information</h3>
          <div class="space-y-6 text-lg">
            <div class="flex items-start">
              <Icon name="heroicons:map-pin" class="w-6 h-6 mr-4 text-secondary-500 flex-shrink-0 mt-1" />
              <p>123 Culinary St<br/>Foodie City, FC 12345</p>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:phone" class="w-6 h-6 mr-4 text-secondary-500 flex-shrink-0" />
              <p>(555) 123-4567</p>
            </div>
            <div class="flex items-center">
              <Icon name="heroicons:envelope" class="w-6 h-6 mr-4 text-secondary-500 flex-shrink-0" />
              <p>info@gourmetrestaurant.com</p>
            </div>
            <div class="flex items-start">
              <Icon name="heroicons:clock" class="w-6 h-6 mr-4 text-secondary-500 flex-shrink-0 mt-1" />
              <div>
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 10am - 9pm</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <NuxtLink to="/contact" class="btn btn-secondary">
              View Location
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>