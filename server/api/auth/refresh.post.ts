import prisma from '~/lib/prisma'
import { verifyRefreshToken, generateAccessToken, generateRefreshToken } from '~/lib/auth'
import { z } from 'zod'

const refreshSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required')
})

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })
  }

  try {
    const body = await readBody(event)
    const { refreshToken } = refreshSchema.parse(body)
    
    // Verify refresh token
    const payload = verifyRefreshToken(refreshToken)
    
    if (!payload) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid or expired refresh token'
      })
    }
    
    // Check if user still exists and is active
    const user = await prisma.user.findUnique({
      where: { id: payload.userId }
    })
    
    if (!user || !user.isActive) {
      throw createError({
        statusCode: 401,
        statusMessage: 'User not found or inactive'
      })
    }
    
    // Generate new tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role
    }
    
    const newAccessToken = generateAccessToken(tokenPayload)
    const newRefreshToken = generateRefreshToken(tokenPayload)
    
    return {
      success: true,
      token: newAccessToken,
      refreshToken: newRefreshToken,
      expiresIn: 15 * 60 // 15 minutes in seconds
    }
    
  } catch (error: any) {
    if (error.issues) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation error',
        data: error.issues
      })
    }
    
    if (error.statusCode) {
      throw error
    }
    
    console.error('Token refresh error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
