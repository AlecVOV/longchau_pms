# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

1. **Create a MongoDB Atlas Account**
   - Visit https://www.mongodb.com/atlas
   - Sign up for a free account
   - Create a new cluster (free tier M0)

2. **Get Connection String**
   - In Atlas dashboard, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<database>` with your values

3. **Update .env file**
   ```
   DATABASE_URL="mongodb+srv://your-username:your-password@cluster0.mongodb.net/pharmacy_db?retryWrites=true&w=majority"
   ```

## Option 2: Local MongoDB Installation

1. **Download MongoDB Community Server**
   - Visit https://www.mongodb.com/try/download/community
   - Download for Windows
   - Install with default settings

2. **Start MongoDB Service**
   ```powershell
   net start MongoDB
   ```

3. **Use Local Connection**
   ```
   DATABASE_URL="mongodb://localhost:27017/pharmacy_db"
   ```

## Option 3: Docker MongoDB (If you have Docker)

1. **Run MongoDB Container**
   ```powershell
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

2. **Use Local Connection**
   ```
   DATABASE_URL="mongodb://localhost:27017/pharmacy_db"
   ```

## Quick Setup with MongoDB Atlas

For immediate testing, you can use this temporary Atlas connection:
- Username: pharmacy-user
- Password: pharmacy123
- Database: pharmacy_db

**Note: This is for development only. Create your own Atlas cluster for production.**
