<template>
  <section class="py-20 bg-primary-600 text-white">
    <div class="container-custom relative">
      <!-- Decorative quotes -->
      <div class="absolute top-0 left-0 opacity-5">
        <Icon name="heroicons:quote-left" class="w-40 h-40" />
      </div>
      
      <div class="text-center mb-16 relative z-10">
        <h2 class="font-serif text-4xl font-bold mb-6">What Our Guests Say</h2>
        <div class="w-24 h-1 bg-secondary-500 mx-auto"></div>
      </div>
      
      <div class="relative z-10">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 }
          }"
        >
          <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div class="flex items-center mb-6">
                <div class="mr-4">
                  <img 
                    :src="testimonial.avatar" 
                    :alt="testimonial.name" 
                    class="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 class="font-serif font-bold text-xl">{{ testimonial.name }}</h4>
                  <div class="flex mt-1">
                    <Icon 
                      v-for="i in 5" 
                      :key="i"
                      name="heroicons:star" 
                      class="w-5 h-5 text-secondary-500" 
                      :class="{ 'text-gray-400': i > testimonial.rating }"
                    />
                  </div>
                </div>
              </div>
              <p class="italic">{{ testimonial.comment }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/reviews" class="btn btn-secondary">
          Read More Reviews
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

const testimonials = [
  {
    id: 1,
    name: "Sophie Turner",
    rating: 5,
    comment: "The pan-seared salmon was absolutely divine! The attentive service and elegant ambiance made our anniversary dinner truly special.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 2,
    name: "James Wilson",
    rating: 5,
    comment: "Chef Laurent's tasting menu was a culinary journey I won't forget. Each course was more impressive than the last.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 4,
    comment: "The wine pairing suggestions from their sommelier perfectly complemented our meal. A must-visit for food enthusiasts!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 4,
    name: "Michael Chang",
    rating: 5,
    comment: "Exceptional flavors, beautiful presentation, and impeccable service. Gourmet exceeds expectations in every way.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];
</script>