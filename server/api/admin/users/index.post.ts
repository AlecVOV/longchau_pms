import prisma from '~/lib/prisma'
import { verifyAccessToken } from '~/lib/auth'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    // Verify admin authentication
    const authorization = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
    
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    const decoded = verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token'
      })
    }

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    })

    if (!currentUser || currentUser.role !== 'ADMIN') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Admin access required'
      })
    }

    // Get user data from request
    const userData = await readBody(event)
    
    if (!userData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'User data is required'
      })
    }

    // Validate required fields
    const { email, password, firstName, lastName, role = 'USER' } = userData

    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email, password, first name, and last name are required'
      })
    }

    // Validate role
    const validRoles = ['USER', 'ADMIN', 'PHARMACIST']
    if (!validRoles.includes(role)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid role. Must be USER, ADMIN, or PHARMACIST'
      })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: 'User with this email already exists'
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role,
        isActive: true // Admin-created users are auto-activated
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    })

    return {
      success: true,
      user: newUser,
      message: `${role} user created successfully`
    }

  } catch (error: any) {
    console.error('Error creating user:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create user'
    })
  }
})
