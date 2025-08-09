# Long Châu PMS Development Setup Script
# Run this script to set up and start the development environment

Write-Host "🚀 Starting Long Châu PMS Development Setup..." -ForegroundColor Green

# Set the DATABASE_URL environment variable
$env:DATABASE_URL = "file:./prisma/dev.db"

# Check if node_modules exists
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Generate Prisma client
Write-Host "🔧 Generating Prisma client..." -ForegroundColor Yellow
npm run db:generate

# Push database schema
Write-Host "📊 Setting up database..." -ForegroundColor Yellow
npm run db:push

# Check if database has data
if (!(Test-Path "prisma/dev.db")) {
    Write-Host "🌱 Seeding database with sample data..." -ForegroundColor Yellow
    npm run db:seed
} else {
    Write-Host "📋 Database already exists. Skipping seed..." -ForegroundColor Cyan
}

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host "" 
Write-Host "🔑 Test Accounts:" -ForegroundColor Cyan
Write-Host "   Admin: admin@pharmacy.com / admin123" -ForegroundColor White
Write-Host "   Customer: customer@example.com / customer123" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Starting development server..." -ForegroundColor Green
Write-Host "   Local: http://localhost:3000/" -ForegroundColor White
Write-Host ""

# Start the development server
npm run dev
