import { verifyAccessToken } from '~/lib/auth'
import { getReminders } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  console.log('=== MEDICATION REMINDER GET DEBUG ===')
  console.log('Method:', getMethod(event))
  console.log('URL:', getRequestURL(event))
  
  try {
    // Get and verify JWT token
    const authorization = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
    
    if (!authorization) {
      console.log('❌ No authorization header found')
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    const decoded = verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      console.log('❌ Invalid token or missing userId')
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token'
      })
    }

    console.log('✅ Authentication successful - User ID:', decoded.userId)

    // Get query parameters
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10

    // Get reminders from temporary storage
    const allReminders = getReminders(decoded.userId)
    console.log('📊 GET reminders - User ID:', decoded.userId, 'Found reminders:', allReminders.length)
    console.log('📋 All reminders for this user:', allReminders.map(r => ({ 
      id: r.id, 
      name: r.medicationName, 
      userId: r.userId,
      createdAt: r.createdAt 
    })))
    const totalItems = allReminders.length

    // Apply pagination
    const startIndex = (page - 1) * limit
    const reminders = allReminders.slice(startIndex, startIndex + limit)

    // Transform reminders to parse JSON fields
    const transformedReminders = reminders.map(reminder => ({
      ...reminder,
      timeSlots: JSON.parse(reminder.timeSlots || '[]')
    }))

    return {
      reminders: transformedReminders,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    }

  } catch (error: any) {
    console.error('Error fetching medication reminders:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to fetch medication reminders'
    })
  }
})
