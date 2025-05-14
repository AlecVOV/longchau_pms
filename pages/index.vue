<template>
  <div>
    <HeroSection />
    <FeaturedSection />
    <AboutPreview />
    <GalleryPreview />
    <TestimonialSection />
    <ContactCta />
  </div>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue';
import FeaturedSection from '~/components/home/FeaturedSection.vue';
import AboutPreview from '~/components/home/AboutPreview.vue';
import TestimonialSection from '~/components/home/TestimonialSection.vue';
import ContactCta from '~/components/home/ContactCta.vue';
</script>