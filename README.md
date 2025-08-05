# Long Châu PMS (Pharmacy Management System)

A modern, full-stack pharmacy e-commerce platform built with Nuxt 3, Prisma, and Tailwind CSS. This system provides a comprehensive solution for online pharmacy operations, including product management, user authentication, order processing, and medical services.

## 🚀 Features

### Customer Features
- **Product Browsing**: Browse and search medications and medical equipment
- **Shopping Cart**: Add/remove items with real-time updates
- **User Authentication**: Secure registration, login, and profile management
- **Order Management**: Place orders, track deliveries, and view order history
- **Prescription Upload**: Upload and manage prescriptions
- **Medication Reminders**: Set up medication schedules and reminders
- **Health Assessment**: Access health assessment tools
- **Medical Consultation**: Book consultation appointments

### Admin Features
- **Product Management**: Add, edit, and manage product inventory
- **Order Processing**: Manage customer orders and fulfillment
- **User Management**: Manage customer accounts and permissions
- **Inventory Control**: Track stock levels and manage suppliers
- **Analytics Dashboard**: View sales reports and system analytics

### Additional Features
- **Mobile Responsive**: Optimized for all device types
- **SEO Optimized**: Server-side rendering with Nuxt 3
- **Real-time Updates**: Live cart and inventory updates
- **Secure Payments**: Integrated payment processing
- **Docker Support**: Containerized deployment

## 🛠️ Tech Stack

- **Frontend**: Vue 3 + Nuxt 3
- **Styling**: Tailwind CSS + UnoCSS
- **Backend**: Nuxt 3 API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT with bcryptjs
- **State Management**: Pinia
- **Image Processing**: Nuxt Image
- **Icons**: Heroicons + Iconify
- **Containerization**: Docker

## 📦 Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd longchau_pms
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-super-secure-jwt-secret"
JWT_REFRESH_SECRET="your-super-secure-refresh-secret"
JWT_EXPIRES_IN="1h"
JWT_REFRESH_EXPIRES_IN="7d"
NUXT_PUBLIC_API_BASE="/api"
```

### 4. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed the database with sample data
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🐳 Docker Development

### Using Docker Compose
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Build and start in detached mode
docker-compose -f docker-compose.dev.yml up -d --build
```

### Using Development Script
```bash
# Make script executable (Linux/Mac)
chmod +x scripts/docker-dev.sh

# Run development environment
./scripts/docker-dev.sh
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate static site |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema changes to database |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:reset` | Reset database and reseed |

## 🏗️ Project Structure

```
longchau_pms/
├── components/           # Vue components
│   ├── AdminTableSkeleton.vue
│   ├── ProductCard.vue
│   ├── SiteHeader.vue
│   └── ...
├── layouts/             # Layout components
├── pages/               # Application pages
│   ├── admin/          # Admin panel pages
│   ├── account/        # User account pages
│   ├── product/        # Product pages
│   └── ...
├── server/             # API routes and server logic
├── stores/             # Pinia state management
├── prisma/             # Database schema and migrations
├── lib/                # Utility libraries
├── middleware/         # Route middleware
├── plugins/            # Nuxt plugins
├── public/             # Static assets
└── scripts/            # Utility scripts
```

## 🔐 Authentication & Authorization

The system uses JWT-based authentication with role-based access control:

- **CUSTOMER**: Regular users with shopping capabilities
- **ADMIN**: Full system access for management
- **PHARMACIST**: Medical professional access
- **STAFF**: Limited administrative access

### Protected Routes
- `/admin/*` - Admin only
- `/account/*` - Authenticated users only
- `/checkout` - Authenticated users only

## 🗄️ Database Schema

The application uses Prisma with SQLite and includes the following main models:

- **User**: Customer and admin accounts
- **Product**: Medications and medical equipment
- **Category**: Product categorization
- **Order**: Customer orders and fulfillment
- **CartItem**: Shopping cart management
- **Prescription**: Uploaded prescriptions
- **MedicationReminder**: User medication schedules

## 🎨 Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **UnoCSS**: Atomic CSS engine
- **Color Mode**: Light/dark theme support
- **Responsive Design**: Mobile-first approach
- **Component Library**: Custom Vue components

## 🔧 Configuration

### Nuxt Configuration
Key configurations in `nuxt.config.ts`:
- SSR enabled for SEO
- Tailwind CSS integration
- Pinia state management
- Image optimization
- Color mode support

### Environment Variables
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: Secret for JWT tokens
- `NODE_ENV`: Environment (development/production)

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - List products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)

### Orders
- `GET /api/orders` - List user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details

## 🧪 Testing

The project includes comprehensive testing documentation:
- Unit tests for components
- API endpoint testing
- Integration testing
- User acceptance testing

See `all_readme_files/TESTING-REPORT.md` for detailed testing information.

## 🚢 Deployment

### Production Build
```bash
npm run build
npm run preview
```

### Docker Production
```bash
docker build -t longchau-pms .
docker run -p 3000:3000 longchau-pms
```

## 📋 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Implement proper error handling
- Use meaningful component and variable names

### Database Changes
1. Update Prisma schema
2. Generate migration: `npm run db:push`
3. Update seed data if needed
4. Test changes thoroughly

### Adding New Features
1. Create feature branch
2. Implement components and pages
3. Add API routes if needed
4. Update documentation
5. Test thoroughly before merging

## 🐛 Troubleshooting

### Common Issues

**Database Connection Issues**
```bash
# Reset database
npm run db:reset
```

**Missing Dependencies**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Prisma Issues**
```bash
# Regenerate Prisma client
npm run db:generate
```

## 📚 Documentation

Additional documentation is available in the `all_readme_files/` directory:

- `IMPLEMENTATION_SUMMARY.md` - Implementation details
- `TESTING-REPORT.md` - Testing documentation
- `MONGODB_SETUP.md` - Database setup guide
- `LOGIN-TEST-GUIDE.md` - Authentication testing
- Various version update summaries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for Long Châu Pharmacy Management System.

## 📞 Support

For technical support or questions:
- Check the documentation in `all_readme_files/`
- Review the troubleshooting section
- Contact the development team

---

**Built with ❤️ for Long Châu Pharmacy**
