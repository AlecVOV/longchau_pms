<template>
  <NuxtLink to="/menu" class="menu-card relative overflow-hidden rounded-lg shadow-lg group cursor-pointer" :class="{ 'large': large }">
    <img 
      :src="imageUrl" 
      :alt="name" 
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300">
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 class="font-serif text-2xl font-bold mb-2">{{ name }}</h3>
        <p class="text-white/90">{{ description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  large: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.menu-card {
  height: 300px;
}
.menu-card.large {
  height: 450px;
}
</style>