import prisma from '~/lib/prisma'
import { verifyAccessToken } from '~/lib/auth'

export default defineEventHandler(async (event) => {
  try {
    // Get and verify JWT token
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

    const method = getMethod(event)

    if (method === 'GET') {
      // Get user profile
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          dateOfBirth: true,
          role: true,
          isActive: true,
          addresses: true,
          createdAt: true,
          updatedAt: true
        }
      })

      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: 'User not found'
        })
      }

      return {
        success: true,
        user: {
          ...user,
          addresses: user.addresses ? JSON.parse(user.addresses) : []
        }
      }
    }

    if (method === 'PUT') {
      // Update user profile
      const body = await readBody(event)
      
      if (!body) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Profile data is required'
        })
      }

      // Validate email uniqueness if it's being changed
      const currentUser = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { email: true }
      })

      if (body.email && body.email !== currentUser?.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: body.email }
        })

        if (existingUser) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Email address is already in use'
          })
        }
      }

      // Prepare update data
      const updateData: any = {}
      
      if (body.firstName) updateData.firstName = body.firstName.trim()
      if (body.lastName) updateData.lastName = body.lastName.trim()
      if (body.email) updateData.email = body.email.trim().toLowerCase()
      if (body.phone !== undefined) updateData.phone = body.phone?.trim() || null
      if (body.dateOfBirth) updateData.dateOfBirth = new Date(body.dateOfBirth)
      if (body.addresses) updateData.addresses = JSON.stringify(body.addresses)

      updateData.updatedAt = new Date()

      // Update user in database
      const updatedUser = await prisma.user.update({
        where: { id: decoded.userId },
        data: updateData,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          dateOfBirth: true,
          role: true,
          isActive: true,
          addresses: true,
          createdAt: true,
          updatedAt: true
        }
      })

      return {
        success: true,
        user: {
          ...updatedUser,
          addresses: updatedUser.addresses ? JSON.parse(updatedUser.addresses) : []
        },
        message: 'Profile updated successfully'
      }
    }

    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })

  } catch (error: any) {
    console.error('Profile API error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to handle profile request'
    })
  }
})
