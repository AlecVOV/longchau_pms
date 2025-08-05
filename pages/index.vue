<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-primary-50 overflow-hidden">
      <div class="container-custom py-12 md:py-16 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Your Trusted Online <span class="text-primary-600">Pharmacy</span>
            </h1>
            <p class="text-lg text-neutral-600 mb-6 max-w-lg">
              Quality medications and medical equipment delivered to your doorstep with the highest standards of safety and care.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <NuxtLink to="/category/otc-medicines" class="btn-primary">
                Shop Medicines
              </NuxtLink>
              <NuxtLink to="/upload-prescription" class="btn-outline">
                Upload Prescription
              </NuxtLink>
            </div>
            <div class="flex items-center gap-6 flex-wrap">
              <div class="flex items-center">
                <span class="text-2xl text-primary-600 mr-2">🚚</span>
                <span class="text-sm font-medium">Free Delivery</span>
              </div>
              <div class="flex items-center">
                <span class="text-2xl text-primary-600 mr-2">🕒</span>
                <span class="text-sm font-medium">24/7 Support</span>
              </div>
              <div class="flex items-center">
                <span class="text-2xl text-primary-600 mr-2">🛡️</span>
                <span class="text-sm font-medium">Verified Products</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg" alt="Online Pharmacy" class="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]">
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div class="flex items-center">
                <span class="text-warning-500 text-2xl">⭐</span>
                <div class="ml-3">
                  <p class="font-semibold text-neutral-800">Trusted by 2M+ customers</p>
                  <p class="text-sm text-neutral-500">4.9/5 average rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Background decorative elements -->
      <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-100 rounded-full opacity-70"></div>
      <div class="absolute -top-12 -left-12 w-40 h-40 bg-secondary-100 rounded-full opacity-50"></div>
    </section>
    
    <!-- Categories Section -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container-custom">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Shop by Category</h2>
          <p class="text-neutral-600 max-w-2xl mx-auto">Browse our wide range of medications and medical equipment categorized for easy navigation.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <NuxtLink v-for="category in featuredCategories" :key="category.slug" 
                   :to="`/category/${category.slug}`"
                   class="group">
            <div class="card p-4 text-center transition-all hover:border-primary-300 h-full flex flex-col justify-between">
              <div class="mb-4 mx-auto p-3 rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors w-16 h-16 flex items-center justify-center">
                <span class="text-3xl">{{ category.icon }}</span>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800 mb-2">{{ category.name }}</h3>
                <p class="text-sm text-neutral-500">{{ category.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <!-- <div class="text-center mt-10">
          <NuxtLink to="/categories" class="btn-outline">View All Categories</NuxtLink>
        </div> -->
      </div>
    </section>
    
    <!-- Featured Products -->
    <section class="py-12 md:py-16 bg-neutral-50">
      <div class="container-custom">
        <div class="flex justify-between items-end mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Popular Products</h2>
            <p class="text-neutral-600">Top-selling medications and health products our customers love.</p>
          </div>
          <div class="hidden md:block">
            <NuxtLink to="/products" class="btn-outline">View All</NuxtLink>
          </div>
        </div>
        
        <div v-if="productsStore.loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <ProductCardSkeleton v-for="n in 8" :key="n" />
        </div>
        
        <div v-else-if="featuredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
            @add-to-cart="addToCart"
          />
        </div>
        
        <div v-else class="text-center py-12">
          <p class="text-gray-500 text-lg">No products available at the moment.</p>
          <NuxtLink to="/products" class="btn-primary mt-4">Browse All Products</NuxtLink>
        </div>
        
        <div class="text-center mt-8 md:hidden">
          <NuxtLink to="/products" class="btn-outline">View All Products</NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Why Choose Long Châu?</h2>
          <p class="text-neutral-600 max-w-2xl mx-auto">Experience the convenience and reliability of Vietnam's trusted online pharmacy.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">🏆</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">Genuine Products</h3>
            <p class="text-neutral-600">All our medicines and equipment are sourced from authorized distributors and manufacturers.</p>
          </div>
          
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">🚚</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">Fast Delivery</h3>
            <p class="text-neutral-600">Quick and reliable delivery to ensure you never run out of essential medications.</p>
          </div>
          
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">👨‍⚕️</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">Expert Consultation</h3>
            <p class="text-neutral-600">Our qualified pharmacists are available to provide guidance and answer your questions.</p>
          </div>
          
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">🛡️</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">Secure Checkout</h3>
            <p class="text-neutral-600">Your personal and payment information is protected with advanced encryption technology.</p>
          </div>
          
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">💰</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
            <p class="text-neutral-600">We offer the best prices on medications and medical equipment without compromising quality.</p>
          </div>
          
          <div class="card p-6">
            <div class="mb-4 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <span class="text-2xl text-primary-600">📞</span>
            </div>
            <h3 class="text-xl font-semibold text-neutral-800 mb-2">24/7 Customer Support</h3>
            <p class="text-neutral-600">Our dedicated customer service team is always available to assist you.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-12 md:py-16 bg-primary-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p class="text-neutral-600 max-w-2xl mx-auto">Hàng nghìn khách hàng hài lòng tin tưởng Long Châu cho nhu cầu chăm sóc sức khỏe của họ.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="card p-6">
            <div class="flex text-warning-500 mb-4">
              <span v-for="n in 5" :key="n">⭐</span>
            </div>
            <p class="text-neutral-700 mb-6 text-lg italic">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-medium text-neutral-800">{{ testimonial.name }}</h4>
                <p class="text-sm text-neutral-500">{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Newsletter -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container-custom">
        <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Health Tips</h2>
              <p class="text-primary-100 mb-6">Subscribe to our newsletter and receive health tips, exclusive offers, and updates on new products.</p>
              <div class="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" class="input bg-white/10 text-white placeholder:text-primary-200 border-primary-400 focus:ring-white flex-grow" />
                <button class="btn bg-white text-primary-700 hover:bg-primary-50">Subscribe</button>
              </div>
              <p class="text-xs text-primary-200 mt-3">By subscribing, you agree to our Privacy Policy and consent to receive updates from Long Châu.</p>
            </div>
            <div class="hidden md:flex justify-end">
              <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" alt="Health Newsletter" class="w-48 h-48 object-cover rounded-full">
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Health Articles Preview -->
    <section class="py-12 md:py-16 bg-neutral-50">
      <div class="container-custom">
        <div class="flex justify-between items-end mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Health & Wellness Articles</h2>
            <p class="text-neutral-600">Expert advice and information to help you stay healthy.</p>
          </div>
          <div class="hidden md:block">
            <NuxtLink to="/blog" class="btn-outline">View All Articles</NuxtLink>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink v-for="(article, index) in articles" :key="index" 
                   :to="`/blog/${article.slug}`"
                   class="card group overflow-hidden">
            <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover transition-transform group-hover:scale-105">
            <div class="p-6">
              <p class="text-sm text-primary-600 mb-2">{{ article.category }}</p>
              <h3 class="font-semibold text-lg text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">{{ article.title }}</h3>
              <p class="text-neutral-600 mb-4 line-clamp-2">{{ article.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="article.authorAvatar" :alt="article.author" class="w-8 h-8 rounded-full object-cover mr-2">
                  <span class="text-sm text-neutral-600">{{ article.author }}</span>
                </div>
                <span class="text-sm text-neutral-500">{{ article.date }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <div class="text-center mt-8 md:hidden">
          <NuxtLink to="/blog" class="btn-outline">View All Articles</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useProductsStore } from '~/stores/products'

// Import stores
const cartStore = useCartStore()
const productsStore = useProductsStore()

// Fetch products on component mount
await productsStore.fetchProducts({ limit: 8, featured: true })

// Get in-stock featured products for display
const featuredProducts = computed(() => {
  const inStockProducts = productsStore.getInStockProducts
  return inStockProducts.slice(0, 8) // Show first 8 in-stock products
})

// Featured Categories
const featuredCategories = [
  {
    name: 'Allergy',
    slug: 'allergy',
    description: 'Products to help manage allergy symptoms.',
    icon: '🌞'
  },
  {
    name: 'Cold & Flu',
    slug: 'cold-flu',
    description: 'Relief for cold and flu symptoms.',
    icon: '🌡️'
  },
  {
    name: 'Diabetes Care',
    slug: 'diabetes-care',
    description: 'Essential products for diabetes management.',
    icon: '🩸'
  },
  {
    name: 'First Aid',
    slug: 'first-aid',
    description: 'Complete first aid kits and supplies.',
    icon: '🩹'
  },
  {
    name: 'Heart Health',
    slug: 'heart-health',
    description: 'Medications and devices for heart health.',
    icon: '❤️'
  },
  {
    name: 'Medical Devices',
    slug: 'medical-devices',
    description: 'Quality medical devices for home use.',
    icon: '🩺'
  },
  {
    name: 'OTC Medicines',
    slug: 'otc-medicines',
    description: 'Over-the-counter medications for common ailments.',
    icon: '💊'
  },
  {
    name: 'Pain Relief',
    slug: 'pain-relief',
    description: 'Effective pain relief solutions.',
    icon: '🏥'
  },
  {
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Personal care products for everyday needs.',
    icon: '🧴'
  },
  {
    name: 'Skin Care',
    slug: 'skin-care',
    description: 'Skincare products for all skin types.',
    icon: '🧴'
  },
  {
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    description: 'Vitamins and supplements to boost your health.',
    icon: '💊'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'Nguyễn Phan Quốc Việt',
    location: 'Ho Chi Minh City, Vietnam',
    content: 'Long Châu đã giúp việc quản lý bệnh mãn tính của tôi trở nên dễ dàng hơn rất nhiều. Việc tự động gia hạn đơn thuốc và giao hàng nhanh đảm bảo tôi không bao giờ bỏ lỡ liều uống. Dịch vụ khách hàng của họ thật tuyệt vời!',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    name: 'Nguyễn Tấn Phát',
    location: 'Ho Chi Minh City, Vietnam',
    content: 'Tôi đã sử dụng Long Châu được hơn một năm và không thể hài lòng hơn. Giá cả của họ cạnh tranh và quy trình tải lên đơn thuốc cực kỳ đơn giản.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    name: 'Lương Gia Huy',
    location: 'Ho Chi Minh City, Vietnam',
    content: 'Là người phải dùng nhiều loại thuốc, Long Châu thực sự là cứu cánh của tôi. Các dược sĩ của họ luôn sẵn sàng trả lời các câu hỏi về tương tác thuốc tiềm tàng.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  }
]

// Health Articles
const articles = [
  {
    title: 'Understanding Blood Pressure: What the Numbers Mean',
    slug: 'understanding-blood-pressure',
    excerpt: 'Learn about the importance of monitoring your blood pressure and what the readings actually indicate for your health.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    date: 'May 15, 2025',
    author: 'Dr. James Wilson',
    authorAvatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    category: 'Heart Health'
  },
  {
    title: 'The Importance of Vitamin D: Are You Getting Enough?',
    slug: 'importance-of-vitamin-d',
    excerpt: 'Vitamin D deficiency is common, especially in winter months. Discover how to ensure you\'re getting adequate levels.',
    image: 'https://images.pexels.com/photos/4046767/pexels-photo-4046767.jpeg',
    date: 'May 10, 2025',
    author: 'Dr. Lisa Chen',
    authorAvatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
    category: 'Nutrition'
  },
  {
    title: 'Managing Seasonal Allergies: Tips and Treatments',
    slug: 'managing-seasonal-allergies',
    excerpt: 'Seasonal allergies affect millions. Here are effective strategies to minimize symptoms and enjoy the outdoors again.',
    image: 'https://images.pexels.com/photos/5938360/pexels-photo-5938360.jpeg',
    date: 'May 5, 2025',
    author: 'Dr. Robert Taylor',
    authorAvatar: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
    category: 'Allergy'
  }
]

// Add product to cart
const addToCart = (product) => {
  cartStore.addItem(product)
}
</script>