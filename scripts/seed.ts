import prisma from '../lib/prisma'
import { hashPassword } from '../lib/auth'

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...')

    // Create categories
    console.log('📦 Creating categories...')
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Pain Relief',
          slug: 'pain-relief',
          description: 'Over-the-counter and prescription pain management medications',
          icon: 'i-iconify-ph-heart-fill',
          sortOrder: 1
        }
      }),
      prisma.category.create({
        data: {
          name: 'Cold & Flu',
          slug: 'cold-flu',
          description: 'Cold, flu, and respiratory medication',
          icon: 'i-iconify-ph-thermometer-fill',
          sortOrder: 2
        }
      }),
      prisma.category.create({
        data: {
          name: 'Vitamins & Supplements',
          slug: 'vitamins-supplements',
          description: 'Nutritional supplements and vitamins',
          icon: 'i-iconify-ph-leaf-fill',
          sortOrder: 3
        }
      }),
      prisma.category.create({
        data: {
          name: 'First Aid',
          slug: 'first-aid',
          description: 'First aid supplies and wound care',
          icon: 'i-iconify-ph-bandaids-fill',
          sortOrder: 4
        }
      }),
      prisma.category.create({
        data: {
          name: 'Personal Care',
          slug: 'personal-care',
          description: 'Personal hygiene and care products',
          icon: 'i-iconify-ph-user-fill',
          sortOrder: 5
        }
      })
    ])

    console.log(`✅ Created ${categories.length} categories`)

    // Create admin user
    console.log('👤 Creating admin user...')
    const adminPassword = await hashPassword(process.env.ADMIN_PASSWORD || 'admin123')
    
    const adminUser = await prisma.user.create({
      data: {
        email: process.env.ADMIN_EMAIL || 'admin@pharmacy.com',
        password: adminPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: 'ADMIN',
        addresses: JSON.stringify({
          street: '123 Admin Street',
          city: 'Admin City',
          state: 'AC',
          zipCode: '12345',
          country: 'USA'
        })
      }
    })

    console.log('✅ Created admin user')

    // Create sample products
    console.log('💊 Creating sample products...')
    
    const sampleProducts = [
      {
        name: 'Paracetamol 500mg',
        slug: 'paracetamol-500mg',
        description: 'Effective pain relief and fever reducer. Each tablet contains 500mg of paracetamol.',
        shortDescription: 'Pain relief and fever reducer tablets',
        price: 12.99,
        originalPrice: 15.99,
        discount: 19,
        brand: 'PharmaBrand',
        manufacturer: 'PharmaCorp',
        activeIngredient: 'Paracetamol 500mg',
        strength: '500mg',
        dosageForm: 'Tablet',
        packSize: '20 tablets',
        stock: 100,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
        images: [
          'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
        ],
        categoryId: categories[0].id, // Pain Relief
        tags: ['pain relief', 'fever', 'headache'],
        sideEffects: ['Stomach upset', 'Nausea', 'Dizziness'],
        contraindications: ['Liver disease', 'Alcohol dependency'],
        dosage: 'Adults: 1-2 tablets every 4-6 hours. Maximum 8 tablets in 24 hours.',
        storage: 'Store below 25°C in a dry place. Keep out of reach of children.',
        isFeatured: true
      },
      {
        name: 'Vitamin D3 1000IU',
        slug: 'vitamin-d3-1000iu',
        description: 'Essential vitamin D3 supplement for bone health and immune system support.',
        shortDescription: 'Vitamin D3 supplement for bone health',
        price: 24.99,
        brand: 'VitaHealth',
        manufacturer: 'VitaHealth Inc.',
        activeIngredient: 'Cholecalciferol 1000IU',
        strength: '1000IU',
        dosageForm: 'Capsule',
        packSize: '60 capsules',
        stock: 75,
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400',
        images: [
          'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400',
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
        ],
        categoryId: categories[2].id, // Vitamins & Supplements
        tags: ['vitamin D', 'bone health', 'immune support'],
        dosage: 'Adults: 1 capsule daily with food.',
        storage: 'Store in a cool, dry place away from light.',
        isFeatured: true
      },
      {
        name: 'Antiseptic Bandages Pack',
        slug: 'antiseptic-bandages-pack',
        description: 'Sterile adhesive bandages with antiseptic coating for wound protection.',
        shortDescription: 'Sterile antiseptic bandages for wound care',
        price: 8.99,
        brand: 'MediCare',
        manufacturer: 'MediCare Solutions',
        packSize: '20 bandages',
        stock: 150,
        image: 'https://images.unsplash.com/photo-1603398938947-1cae90a9b892?w=400',
        images: [
          'https://images.unsplash.com/photo-1603398938947-1cae90a9b892?w=400'
        ],
        categoryId: categories[3].id, // First Aid
        tags: ['bandages', 'wound care', 'antiseptic'],
        storage: 'Store in a dry place at room temperature.',
        isFeatured: false
      },
      {
        name: 'Cough Syrup 200ml',
        slug: 'cough-syrup-200ml',
        description: 'Effective cough suppressant syrup for dry and productive coughs.',
        shortDescription: 'Cough suppressant syrup',
        price: 16.50,
        brand: 'CoughAway',
        manufacturer: 'Respiratory Care Ltd.',
        activeIngredient: 'Dextromethorphan 15mg/5ml',
        strength: '15mg/5ml',
        dosageForm: 'Syrup',
        packSize: '200ml bottle',
        stock: 60,
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
        categoryId: categories[1].id, // Cold & Flu
        tags: ['cough', 'cold', 'respiratory'],
        sideEffects: ['Drowsiness', 'Dizziness', 'Nausea'],
        dosage: 'Adults: 10ml every 4 hours. Children 6-12: 5ml every 4 hours.',
        storage: 'Store below 25°C. Do not refrigerate.',
        isFeatured: false
      },
      {
        name: 'Moisturizing Hand Cream',
        slug: 'moisturizing-hand-cream',
        description: 'Intensive moisturizing hand cream with natural ingredients for dry skin.',
        shortDescription: 'Moisturizing hand cream for dry skin',
        price: 11.99,
        brand: 'SkinCare Plus',
        manufacturer: 'Beauty Health Co.',
        packSize: '100ml tube',
        stock: 80,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
        categoryId: categories[4].id, // Personal Care
        tags: ['moisturizer', 'hand care', 'dry skin'],
        storage: 'Store at room temperature.',
        isFeatured: false
      }
    ]

    for (const productData of sampleProducts) {
      await prisma.product.create({
        data: productData
      })
    }

    console.log(`✅ Created ${sampleProducts.length} sample products`)

    // Create a sample customer
    console.log('👥 Creating sample customer...')
    const customerPassword = await hashPassword('customer123')
    
    const customer = await prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        password: customerPassword,
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1234567890',
        dateOfBirth: new Date('1990-01-15'),
        addresses: JSON.stringify({
          street: '456 Customer Lane',
          city: 'Customer City',
          state: 'CC',
          zipCode: '67890',
          country: 'USA'
        })
      }
    })

    console.log('✅ Created sample customer')

    console.log('🎉 Database seeding completed successfully!')
    console.log('\n📋 Login Credentials:')
    console.log(`Admin: ${adminUser.email} / ${process.env.ADMIN_PASSWORD || 'admin123'}`)
    console.log(`Customer: ${customer.email} / customer123`)

  } catch (error) {
    console.error('❌ Database seeding failed:', error)
    throw error
  }
}

// Run seeder
seedDatabase()
  .then(() => {
    console.log('✅ Seeding completed')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  })

export default seedDatabase
