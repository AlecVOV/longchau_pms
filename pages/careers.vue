<template>
  <div>
    <!-- Careers Hero -->
    <section class="relative pt-40 pb-20 text-white">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg" 
          alt="Restaurant kitchen" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <!-- Content -->
      <div class="container-custom relative z-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-serif text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Join Our Team</h1>
          <p class="text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Build your career with a passionate team dedicated to culinary excellence
          </p>
        </div>
      </div>
    </section>
    
    <!-- Why Work With Us -->
    <section class="py-20 bg-cream">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Why Work With Us</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            At Gourmet Restaurant, we're more than just colleagues—we're a family united by our passion for exceptional cuisine and hospitality.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Icon name="heroicons:academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Growth & Development</h3>
            <p class="text-gray-700">
              We invest in our team through ongoing training, skill development, and opportunities for advancement in your culinary or hospitality career.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Icon name="heroicons:heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Work-Life Balance</h3>
            <p class="text-gray-700">
              We value your well-being with fair scheduling, competitive paid time off, and a supportive environment that respects your life outside work.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Icon name="heroicons:star" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-bold mb-4 text-primary-600">Excellence & Innovation</h3>
            <p class="text-gray-700">
              Be part of a team that's constantly pushing boundaries in the culinary world, working with top-quality ingredients and innovative techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6">Employee Benefits</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-200 max-w-3xl mx-auto">
            We offer a comprehensive benefits package to support you both professionally and personally.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:currency-dollar" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Competitive Wages</h3>
            </div>
            <p class="text-gray-200">
              Above-industry pay rates with regular performance-based increases.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:briefcase-medical" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Health Insurance</h3>
            </div>
            <p class="text-gray-200">
              Medical, dental, and vision coverage available for full-time employees.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:cake" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Paid Time Off</h3>
            </div>
            <p class="text-gray-200">
              Vacation days, sick leave, and holiday pay to ensure you have time to recharge.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:user-group" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Team Meals</h3>
            </div>
            <p class="text-gray-200">
              Enjoy complimentary family meal during your shift and employee dining discounts.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:sparkles" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Career Development</h3>
            </div>
            <p class="text-gray-200">
              Training programs, workshops, and opportunities to advance within our organization.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:calendar" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Flexible Scheduling</h3>
            </div>
            <p class="text-gray-200">
              We work with you to create schedules that accommodate your personal needs and commitments.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:banknotes" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">401(k) Plan</h3>
            </div>
            <p class="text-gray-200">
              Retirement savings plan with company matching contributions for eligible employees.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:academic-cap" class="w-6 h-6 text-secondary-500 mr-3" />
              <h3 class="font-serif text-lg font-bold">Education Support</h3>
            </div>
            <p class="text-gray-200">
              Tuition assistance for culinary school and hospitality management programs.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Current Openings -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Current Openings</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Explore our current job opportunities and find your place in our team.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="job in currentOpenings" 
              :key="job.id"
              class="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <div class="p-6">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-serif text-2xl font-bold text-primary-600">{{ job.title }}</h3>
                    <div class="flex items-center mt-2 text-gray-600">
                      <Icon name="heroicons:clock" class="w-5 h-5 mr-2" />
                      <span>{{ job.type }}</span>
                      <span class="mx-3">•</span>
                      <Icon name="heroicons:map-pin" class="w-5 h-5 mr-2" />
                      <span>{{ job.location }}</span>
                    </div>
                  </div>
                  <span 
                    class="px-3 py-1 rounded-full text-sm font-medium"
                    :class="{
                      'bg-green-100 text-green-800': job.status === 'Urgent',
                      'bg-blue-100 text-blue-800': job.status === 'New',
                    }"
                  >
                    {{ job.status }}
                  </span>
                </div>
                
                <div class="mt-6">
                  <p class="text-gray-700 mb-6">{{ job.description }}</p>
                  
                  <div>
                    <h4 class="font-medium mb-2">Key Responsibilities:</h4>
                    <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                      <li v-for="(responsibility, index) in job.responsibilities" :key="index">
                        {{ responsibility }}
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-medium mb-2">Requirements:</h4>
                    <ul class="list-disc pl-5 space-y-1 text-gray-700">
                      <li v-for="(requirement, index) in job.requirements" :key="index">
                        {{ requirement }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="mt-8 flex justify-end">
                  <button class="btn btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- No openings message -->
          <div v-if="currentOpenings.length === 0" class="text-center py-12 bg-gray-50 rounded-lg">
            <Icon name="heroicons:briefcase" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-2xl font-serif font-bold text-gray-500">No Current Openings</h3>
            <p class="text-gray-500 mt-2 mb-6">
              We don't have any open positions at the moment, but we're always looking for talented individuals.
            </p>
            <button class="btn btn-primary">Submit Your Resume</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Application Process -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Hiring Process</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            Learn what to expect when you apply to join the Gourmet Restaurant family.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Vertical line -->
            <div class="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-primary-200 transform md:-translate-x-px"></div>
            
            <div class="space-y-12">
              <div 
                v-for="(step, index) in hiringSteps" 
                :key="index"
                class="relative"
              >
                <div class="flex flex-col md:flex-row items-center">
                  <!-- Circle on timeline -->
                  <div 
                    class="absolute top-0 left-6 md:left-1/2 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center transform -translate-x-1/2 z-10"
                  >
                    <span class="text-white font-bold">{{ index + 1 }}</span>
                  </div>
                  
                  <!-- Content -->
                  <div class="ml-20 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <div v-if="index % 2 === 0" class="md:hidden">
                      <h3 class="font-serif text-xl font-bold text-primary-600 mb-2">{{ step.title }}</h3>
                      <p class="text-gray-700">{{ step.description }}</p>
                    </div>
                    <div v-if="index % 2 === 0" class="hidden md:block">
                      <h3 class="font-serif text-xl font-bold text-primary-600 mb-2">{{ step.title }}</h3>
                      <p class="text-gray-700">{{ step.description }}</p>
                    </div>
                  </div>
                  
                  <div class="ml-20 md:ml-0 md:w-1/2 md:pl-8 md:text-left">
                    <div v-if="index % 2 === 1" class="md:hidden">
                      <h3 class="font-serif text-xl font-bold text-primary-600 mb-2">{{ step.title }}</h3>
                      <p class="text-gray-700">{{ step.description }}</p>
                    </div>
                    <div v-if="index % 2 === 1" class="hidden md:block">
                      <h3 class="font-serif text-xl font-bold text-primary-600 mb-2">{{ step.title }}</h3>
                      <p class="text-gray-700">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Culture -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="font-serif text-4xl font-bold mb-6 text-primary-600">Our Team Culture</h2>
          <div class="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
          <p class="text-gray-700 max-w-3xl mx-auto">
            At Gourmet Restaurant, we foster a culture of excellence, creativity, and respect.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-2 mr-4 text-white">
                  <Icon name="heroicons:star" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Excellence in Everything</h3>
                  <p class="text-gray-700">
                    We pursue excellence in everything we do, from the quality of our ingredients to the service we provide and the experiences we create.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-2 mr-4 text-white">
                  <Icon name="heroicons:light-bulb" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Creative Spirit</h3>
                  <p class="text-gray-700">
                    We encourage innovation and creativity, allowing team members to contribute ideas and showcase their talents.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-2 mr-4 text-white">
                  <Icon name="heroicons:user-group" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Collaborative Teamwork</h3>
                  <p class="text-gray-700">
                    We believe in the power of teamwork and foster an environment where every voice is heard and everyone supports one another.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-600 rounded-full p-2 mr-4 text-white">
                  <Icon name="heroicons:heart" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-serif text-xl font-bold mb-2 text-primary-600">Passion for Hospitality</h3>
                  <p class="text-gray-700">
                    We're united by a shared passion for food and the joy of creating memorable experiences for our guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" 
              alt="Team culture" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Current job openings
const currentOpenings = [
  {
    id: 1,
    title: "Sous Chef",
    type: "Full-time",
    location: "Main Location",
    status: "Urgent",
    description: "We're seeking an experienced and passionate Sous Chef to join our culinary team. Working directly with our Executive Chef, you'll help create exceptional dining experiences for our guests.",
    responsibilities: [
      "Assist the Executive Chef in daily kitchen operations",
      "Supervise and train kitchen staff",
      "Ensure high standards of food quality, preparation, and presentation",
      "Develop new menu items in collaboration with the Executive Chef",
      "Maintain inventory and order supplies as needed",
      "Ensure compliance with health and safety regulations"
    ],
    requirements: [
      "Minimum 3 years of experience in a similar role at a high-end restaurant",
      "Culinary degree or equivalent experience",
      "Strong leadership and communication skills",
      "Creativity and passion for culinary innovation",
      "Ability to work under pressure in a fast-paced environment",
      "ServSafe certification or equivalent"
    ]
  },
  {
    id: 2,
    title: "Server",
    type: "Part-time / Full-time",
    location: "Main Location",
    status: "New",
    description: "Join our front-of-house team as a Server, where you'll provide outstanding service and create memorable dining experiences for our guests.",
    responsibilities: [
      "Greet and seat guests with genuine hospitality",
      "Take orders and make informed recommendations from our food and wine menus",
      "Serve food and beverages in accordance with our service standards",
      "Ensure guest satisfaction throughout the dining experience",
      "Process payments accurately",
      "Maintain cleanliness and organization in the dining area"
    ],
    requirements: [
      "Previous serving experience in a fine dining setting preferred",
      "Excellent communication and interpersonal skills",
      "Knowledge of food and wine pairings",
      "Ability to work evenings, weekends, and holidays",
      "Team player with a positive attitude",
      "Food handler's permit and alcohol service certification (or ability to obtain)"
    ]
  },
  {
    id: 3,
    title: "Pastry Chef",
    type: "Full-time",
    location: "Main Location",
    status: "New",
    description: "We're looking for a creative and skilled Pastry Chef to join our team and elevate our dessert offerings.",
    responsibilities: [
      "Create and execute innovative desserts and pastries",
      "Develop seasonal dessert menus",
      "Ensure consistent quality of all baked goods and desserts",
      "Manage inventory and ordering for the pastry section",
      "Train and supervise pastry assistants",
      "Collaborate with the culinary team on special events and catering"
    ],
    requirements: [
      "Minimum 2 years of experience as a Pastry Chef in a restaurant setting",
      "Formal culinary education with pastry focus or equivalent experience",
      "Strong knowledge of baking techniques and ingredient functionality",
      "Excellent organizational and time management skills",
      "Creativity and attention to detail",
      "Portfolio of previous work preferred"
    ]
  }
];

// Hiring process steps
const hiringSteps = [
  {
    title: "Application Review",
    description: "Our HR team carefully reviews your application and resume to assess your qualifications and experience."
  },
  {
    title: "Phone Screening",
    description: "If your qualifications match our needs, we'll conduct a brief phone interview to learn more about you and answer any initial questions."
  },
  {
    title: "In-Person Interview",
    description: "You'll meet with our management team to discuss your experience, skills, and how you might fit with our team culture."
  },
  {
    title: "Practical Assessment",
    description: "For culinary positions, this includes a cooking demonstration. For service roles, you may participate in a mock service scenario."
  },
  {
    title: "Final Interview",
    description: "Selected candidates will meet with senior leadership for a final interview to discuss expectations and potential start dates."
  },
  {
    title: "Job Offer",
    description: "If you're the right fit, we'll extend a formal job offer outlining your position, compensation, and benefits."
  }
];
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style>