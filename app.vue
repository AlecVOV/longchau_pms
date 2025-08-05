<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SessionExpiryWarning />
  </div>
</template>

<script setup>
useHead({
  title: 'Long Châu - Online Pharmacy & Medical Equipment',
  meta: [
    { name: 'description', content: 'Your trusted online pharmacy for medications and medical equipment' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    }
  ]
})
</script>