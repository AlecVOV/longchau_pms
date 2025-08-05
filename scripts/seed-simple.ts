import prisma from '../lib/prisma'
import { hashPassword } from '../lib/auth'

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...')

    // Clear existing data
    console.log('🧹 Clearing existing data...')
    await prisma.review.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.cartItem.deleteMany()
    await prisma.prescription.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    await prisma.user.deleteMany()

    // Create categories
    console.log('📦 Creating categories...')
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: "Pain Relief",
          slug: "pain-relief",
          description: "Over-the-counter and prescription pain management medications",
          image: "/images/categories/pain-relief.jpg"
        }
      }),
      prisma.category.create({
        data: {
          name: "Cold & Flu",
          slug: "cold-flu",
          description: "Medications for cold, flu, and respiratory symptoms",
          image: "/images/categories/cold-flu.jpg"
        }
      }),
      prisma.category.create({
        data: {
          name: "Vitamins & Supplements",
          slug: "vitamins-supplements",
          description: "Essential vitamins, minerals, and health supplements",
          image: "/images/categories/vitamins.jpg"
        }
      }),
      prisma.category.create({
        data: {
          name: "Personal Care",
          slug: "personal-care",
          description: "Personal hygiene and skincare products",
          image: "/images/categories/personal-care.jpg"
        }
      }),
      prisma.category.create({
        data: {
          name: "First Aid",
          slug: "first-aid",
          description: "First aid supplies and emergency medical items",
          image: "/images/categories/first-aid.jpg"
        }
      })
    ])

    console.log(`✅ Created ${categories.length} categories`)

    // Create products
    console.log('🏥 Creating products...')
    const products = [
      {
        name: "Paracetamol 500mg",
        slug: "paracetamol-500mg",
        description: "Fast-acting pain relief and fever reducer. Effective for headaches, muscle aches, and minor pain.",
        shortDescription: "Fast-acting pain relief tablets",
        price: 12.99,
        comparePrice: 15.99,
        discount: 18.7,
        sku: "PARA500-24",
        stock: 150,
        minStock: 20,
        maxStock: 500,
        images: JSON.stringify(["/images/products/paracetamol-500mg.jpg"]),
        featured: true,
        manufacturer: "PharmaCorp",
        ingredients: JSON.stringify(["Paracetamol 500mg"]),
        dosage: "1-2 tablets every 4-6 hours. Maximum 8 tablets in 24 hours.",
        categoryId: categories[0].id
      },
      {
        name: "Ibuprofen 200mg",
        slug: "ibuprofen-200mg", 
        description: "Anti-inflammatory pain relief medication. Effective for inflammation, pain, and fever.",
        shortDescription: "Anti-inflammatory pain relief",
        price: 8.99,
        comparePrice: 11.99,
        discount: 25.0,
        sku: "IBU200-24",
        stock: 200,
        minStock: 30,
        maxStock: 600,
        images: JSON.stringify(["/images/products/ibuprofen-200mg.jpg"]),
        featured: true,
        manufacturer: "Long Châu",
        ingredients: JSON.stringify(["Ibuprofen 200mg"]),
        dosage: "1-2 tablets every 6-8 hours with food. Maximum 6 tablets in 24 hours.",
        categoryId: categories[0].id
      },
      {
        name: "Aspirin 325mg",
        slug: "aspirin-325mg",
        description: "Low-dose aspirin for pain relief and cardiovascular health. Enteric-coated for stomach protection.",
        shortDescription: "Low-dose aspirin tablets",
        price: 9.99,
        comparePrice: 12.99,
        discount: 23.1,
        sku: "ASP325-30",
        stock: 180,
        minStock: 25,
        maxStock: 400,
        images: JSON.stringify(["/images/products/aspirin-325mg.jpg"]),
        featured: false,
        manufacturer: "CardioPharm",
        ingredients: JSON.stringify(["Aspirin 325mg"]),
        dosage: "1 tablet daily with food, or as directed by physician.",
        categoryId: categories[0].id
      },
      {
        name: "Naproxen 220mg",
        slug: "naproxen-220mg",
        description: "Long-lasting pain relief for arthritis, muscle aches, and menstrual cramps.",
        shortDescription: "Long-lasting pain relief",
        price: 14.99,
        comparePrice: 17.99,
        discount: 16.7,
        sku: "NAP220-20",
        stock: 95,
        minStock: 15,
        maxStock: 250,
        images: JSON.stringify(["/images/products/naproxen-220mg.jpg"]),
        featured: false,
        manufacturer: "ArthrisCare",
        ingredients: JSON.stringify(["Naproxen Sodium 220mg"]),
        dosage: "1 tablet every 8-12 hours. Maximum 2 tablets in 24 hours.",
        categoryId: categories[0].id
      },
      {
        name: "Cough Syrup 120ml",
        slug: "cough-syrup-120ml",
        description: "Soothing cough syrup for dry and chesty coughs. Provides fast relief from cough symptoms.",
        shortDescription: "Cough relief syrup",
        price: 15.99,
        comparePrice: null,
        discount: 0,
        sku: "COUGH120-24",
        stock: 80,
        minStock: 15,
        maxStock: 200,
        images: JSON.stringify(["/images/products/cough-syrup.jpg"]),
        featured: false,
        manufacturer: "CoughCare",
        ingredients: JSON.stringify(["Dextromethorphan", "Guaifenesin"]),
        dosage: "Adults: 10ml every 4 hours. Children 6-12: 5ml every 4 hours.",
        categoryId: categories[1].id
      },
      {
        name: "Throat Lozenges",
        slug: "throat-lozenges",
        description: "Medicated throat lozenges for sore throat relief. Contains antiseptic properties.",
        shortDescription: "Medicated throat lozenges",
        price: 7.99,
        comparePrice: null,
        discount: 0,
        sku: "THROAT-LOZ-16",
        stock: 120,
        minStock: 20,
        maxStock: 300,
        images: JSON.stringify(["/images/products/throat-lozenges.jpg"]),
        featured: false,
        manufacturer: "ThroatCare",
        ingredients: JSON.stringify(["Benzocaine", "Menthol"]),
        dosage: "Dissolve 1 lozenge slowly in mouth every 2-4 hours.",
        categoryId: categories[1].id
      },
      {
        name: "Nasal Decongestant Spray",
        slug: "nasal-decongestant-spray",
        description: "Fast-acting nasal spray for congestion relief. Provides up to 12 hours of relief.",
        shortDescription: "Nasal congestion relief spray",
        price: 11.99,
        comparePrice: 14.99,
        discount: 20.0,
        sku: "NASAL-SPRAY-15ML",
        stock: 65,
        minStock: 10,
        maxStock: 150,
        images: JSON.stringify(["/images/products/nasal-spray.jpg"]),
        featured: false,
        manufacturer: "BreathEasy",
        ingredients: JSON.stringify(["Oxymetazoline HCl 0.05%"]),
        dosage: "2-3 sprays in each nostril every 10-12 hours. Do not use for more than 3 days.",
        categoryId: categories[1].id
      },
      {
        name: "Vitamin D3 1000IU",
        slug: "vitamin-d3-1000iu",
        description: "Essential vitamin D3 supplement for bone health and immune system support.",
        shortDescription: "Vitamin D3 supplement tablets",
        price: 24.99,
        comparePrice: 29.99,
        discount: 16.7,
        sku: "VITD3-1000",
        stock: 120,
        minStock: 25,
        maxStock: 300,
        images: JSON.stringify(["/images/products/vitamin-d3.jpg"]),
        featured: true,
        manufacturer: "VitaHealth",
        ingredients: JSON.stringify(["Vitamin D3 (Cholecalciferol) 1000IU"]),
        dosage: "One tablet daily with food, or as directed by healthcare professional.",
        categoryId: categories[2].id
      },
      {
        name: "Multivitamin Complete",
        slug: "multivitamin-complete",
        description: "Complete daily multivitamin with essential vitamins and minerals for overall health.",
        shortDescription: "Complete daily multivitamin",
        price: 32.99,
        comparePrice: 39.99,
        discount: 17.5,
        sku: "MULTI-VIT-90",
        stock: 85,
        minStock: 15,
        maxStock: 200,
        images: JSON.stringify(["/images/products/multivitamin.jpg"]),
        featured: true,
        manufacturer: "VitaHealth",
        ingredients: JSON.stringify(["Vitamin A", "Vitamin C", "Vitamin D", "B-Complex", "Iron", "Calcium"]),
        dosage: "One tablet daily with breakfast.",
        categoryId: categories[2].id
      },
      {
        name: "Omega-3 Fish Oil",
        slug: "omega-3-fish-oil",
        description: "High-quality omega-3 fish oil supplement for heart and brain health.",
        shortDescription: "Omega-3 fish oil capsules",
        price: 27.99,
        comparePrice: 34.99,
        discount: 20.0,
        sku: "OMEGA3-60",
        stock: 95,
        minStock: 20,
        maxStock: 250,
        images: JSON.stringify(["/images/products/omega-3.jpg"]),
        featured: false,
        manufacturer: "OceanHealth",
        ingredients: JSON.stringify(["EPA 180mg", "DHA 120mg"]),
        dosage: "One capsule twice daily with meals.",
        categoryId: categories[2].id
      },
      {
        name: "Probiotics Advanced",
        slug: "probiotics-advanced",
        description: "Advanced probiotic formula with 10 billion CFU for digestive and immune health.",
        shortDescription: "Advanced probiotic capsules",
        price: 34.99,
        comparePrice: 41.99,
        discount: 16.7,
        sku: "PROB-ADV-30",
        stock: 70,
        minStock: 12,
        maxStock: 180,
        images: JSON.stringify(["/images/products/probiotics.jpg"]),
        featured: false,
        manufacturer: "GutHealth",
        ingredients: JSON.stringify(["Lactobacillus acidophilus", "Bifidobacterium longum", "Lactobacillus plantarum"]),
        dosage: "One capsule daily on empty stomach.",
        categoryId: categories[2].id
      },
      {
        name: "Hand Sanitizer 250ml",
        slug: "hand-sanitizer-250ml",
        description: "Alcohol-based hand sanitizer with 70% ethyl alcohol. Kills 99.9% of germs and bacteria.",
        shortDescription: "Antibacterial hand sanitizer",
        price: 6.99,
        comparePrice: null,
        discount: 0,
        sku: "HANDSANI-250",
        stock: 300,
        minStock: 50,
        maxStock: 1000,
        images: JSON.stringify(["/images/products/hand-sanitizer.jpg"]),
        featured: false,
        manufacturer: "CleanCare",
        ingredients: JSON.stringify(["Ethyl Alcohol 70%", "Glycerin", "Aloe Vera"]),
        dosage: null,
        categoryId: categories[3].id
      },
      {
        name: "Face Masks (50 pack)",
        slug: "face-masks-50-pack",
        description: "Disposable 3-layer face masks for daily protection. Comfortable and breathable.",
        shortDescription: "Disposable protective face masks",
        price: 19.99,
        comparePrice: 24.99,
        discount: 20.0,
        sku: "MASK-50PK",
        stock: 150,
        minStock: 25,
        maxStock: 500,
        images: JSON.stringify(["/images/products/face-masks.jpg"]),
        featured: false,
        manufacturer: "SafeGuard",
        ingredients: JSON.stringify(["Non-woven fabric", "Melt-blown fabric"]),
        dosage: null,
        categoryId: categories[3].id
      },
      {
        name: "Digital Thermometer",
        slug: "digital-thermometer",
        description: "Fast and accurate digital thermometer with fever alarm. Oral, rectal, and underarm use.",
        shortDescription: "Digital fever thermometer",
        price: 16.99,
        comparePrice: 21.99,
        discount: 22.7,
        sku: "THERMO-DIG-01",
        stock: 45,
        minStock: 8,
        maxStock: 120,
        images: JSON.stringify(["/images/products/thermometer.jpg"]),
        featured: false,
        manufacturer: "MediTech",
        ingredients: null,
        dosage: null,
        categoryId: categories[3].id
      },
      {
        name: "Bandages Pack",
        slug: "bandages-pack",
        description: "Sterile adhesive bandages in assorted sizes. Perfect for minor cuts and wounds.",
        shortDescription: "Assorted sterile bandages",
        price: 4.99,
        comparePrice: null,
        discount: 0,
        sku: "BANDAGE-PACK",
        stock: 250,
        minStock: 40,
        maxStock: 800,
        images: JSON.stringify(["/images/products/bandages.jpg"]),
        featured: false,
        manufacturer: "FirstAidPro",
        ingredients: null,
        dosage: null,
        categoryId: categories[4].id
      },
      {
        name: "Antiseptic Cream",
        slug: "antiseptic-cream",
        description: "Antiseptic cream for cuts, scrapes, and minor wounds. Prevents infection and promotes healing.",
        shortDescription: "Antiseptic wound cream",
        price: 8.99,
        comparePrice: 11.99,
        discount: 25.0,
        sku: "ANTISEP-30G",
        stock: 85,
        minStock: 15,
        maxStock: 200,
        images: JSON.stringify(["/images/products/antiseptic-cream.jpg"]),
        featured: false,
        manufacturer: "WoundCare",
        ingredients: JSON.stringify(["Benzalkonium Chloride", "Lidocaine"]),
        dosage: "Apply thin layer to affected area 1-3 times daily.",
        categoryId: categories[4].id
      },
      {
        name: "Elastic Bandage",
        slug: "elastic-bandage",
        description: "Reusable elastic bandage for sprains, strains, and joint support. Self-adhering design.",
        shortDescription: "Elastic support bandage",
        price: 12.99,
        comparePrice: 15.99,
        discount: 18.8,
        sku: "ELASTIC-4INCH",
        stock: 60,
        minStock: 10,
        maxStock: 150,
        images: JSON.stringify(["/images/products/elastic-bandage.jpg"]),
        featured: false,
        manufacturer: "FlexCare",
        ingredients: null,
        dosage: null,
        categoryId: categories[4].id
      }
    ]

    const createdProducts = []
    for (const productData of products) {
      const product = await prisma.product.create({ data: productData })
      createdProducts.push(product)
    }

    console.log(`✅ Created ${createdProducts.length} products`)

    // Create admin user
    console.log('👤 Creating admin user...')
    const adminPassword = await hashPassword('admin123')
    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@pharmacy.com',
        password: adminPassword,
        firstName: 'Admin',
        lastName: 'User',
        phone: '+1234567890',
        role: 'ADMIN'
      }
    })

    // Create customer user
    console.log('👤 Creating customer user...')
    const customerPassword = await hashPassword('customer123')
    const customerUser = await prisma.user.create({
      data: {
        email: 'customer@example.com',
        password: customerPassword,
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1234567891',
        role: 'CUSTOMER'
      }
    })

    console.log('✅ Created users')

    // Create sample orders for the customer
    console.log('📋 Creating sample orders...')
    const order1 = await prisma.order.create({
      data: {
        orderNumber: 'ORD-2025-001',
        userId: customerUser.id,
        status: 'DELIVERED',
        totalAmount: 45.97,
        taxAmount: 3.20,
        shippingFee: 2.80,
        shippingAddress: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipCode: '90210',
          country: 'US'
        }),
        billingAddress: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipCode: '90210',
          country: 'US'
        }),
        paymentMethod: 'credit-card',
        paymentStatus: 'PAID'
      }
    })

    const order2 = await prisma.order.create({
      data: {
        orderNumber: 'ORD-2025-002',
        userId: customerUser.id,
        status: 'SHIPPED',
        totalAmount: 23.99,
        taxAmount: 1.60,
        shippingFee: 2.40,
        shippingAddress: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipCode: '90210',
          country: 'US'
        }),
        billingAddress: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipCode: '90210',
          country: 'US'
        }),
        paymentMethod: 'credit-card',
        paymentStatus: 'PAID'
      }
    })

    // Create order items for order 1
    await prisma.orderItem.create({
      data: {
        orderId: order1.id,
        productId: createdProducts[0].id, // Ibuprofen
        quantity: 2,
        price: 12.99,
        total: 25.98
      }
    })

    await prisma.orderItem.create({
      data: {
        orderId: order1.id,
        productId: createdProducts[2].id, // Vitamin D3
        quantity: 1,
        price: 13.99,
        total: 13.99
      }
    })

    // Create order items for order 2
    await prisma.orderItem.create({
      data: {
        orderId: order2.id,
        productId: createdProducts[1].id, // Acetaminophen
        quantity: 1,
        price: 9.99,
        total: 9.99
      }
    })

    await prisma.orderItem.create({
      data: {
        orderId: order2.id,
        productId: createdProducts[4].id, // Hand Sanitizer
        quantity: 1,
        price: 9.99,
        total: 9.99
      }
    })

  
    
    console.log('🎉 Database seeding completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   Categories: ${categories.length}`)
    console.log(`   Products: ${createdProducts.length}`)
    console.log(`   Users: 2 (1 admin, 1 customer)`)
    console.log('\n👤 Test Accounts:')
    console.log('   Admin: admin@pharmacy.com / admin123')
    console.log('   Customer: customer@example.com / customer123')

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
