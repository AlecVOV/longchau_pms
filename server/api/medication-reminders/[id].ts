import { verifyAccessToken } from '~/lib/auth'
import { updateReminder, deleteReminder, getReminderById } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  console.log('=== MEDICATION REMINDER API [ID] DEBUG ===')
  console.log('Method:', getMethod(event))
  console.log('URL:', getRequestURL(event))
  console.log('Headers:', getHeaders(event))
  
  try {
    // Get and verify JWT token
    const authorization = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
    
    if (!authorization) {
      console.log('No authorization found')
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    const decoded = verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      console.log('Invalid token')
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token'
      })
    }

    const reminderId = getRouterParam(event, 'id')
    const method = getMethod(event)
    
    console.log('Processing:', { method, reminderId, userId: decoded.userId })
    
    if (method === 'PATCH') {
      // Update reminder using temporary storage
      const body = await readBody(event)
      console.log('PATCH - Update data:', body)
      
      const updatedReminder = updateReminder(reminderId, decoded.userId, {
        ...body,
        timeSlots: body.timeSlots ? JSON.stringify(body.timeSlots) : undefined
      })
      
      console.log('PATCH - Update result:', updatedReminder)
      
      if (!updatedReminder) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Reminder not found'
        })
      }

      return {
        success: true,
        reminder: {
          ...updatedReminder,
          timeSlots: updatedReminder.timeSlots ? JSON.parse(updatedReminder.timeSlots) : []
        }
      }
    }
    
    if (method === 'DELETE') {
      // Delete reminder using temporary storage
      console.log('DELETE request - Reminder ID:', reminderId, 'User ID:', decoded.userId)
      const deletedReminder = deleteReminder(reminderId, decoded.userId)
      
      console.log('Delete result:', deletedReminder)
      
      if (!deletedReminder) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Reminder not found'
        })
      }

      return {
        success: true,
        message: 'Reminder deleted successfully'
      }
    }

    if (method === 'GET') {
      // Get specific reminder using temporary storage
      const reminder = getReminderById(reminderId, decoded.userId)

      if (!reminder) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Reminder not found'
        })
      }

      return {
        reminder: {
          ...reminder,
          timeSlots: reminder.timeSlots ? JSON.parse(reminder.timeSlots) : []
        }
      }
    }

    // Method not allowed
    throw createError({
      statusCode: 405,
      statusMessage: `Method ${method} not allowed`
    })

  } catch (error: any) {
    console.error('Error handling medication reminder:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to handle medication reminder'
    })
  }
})
