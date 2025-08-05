import { verifyAccessToken } from '~/lib/auth'
import { deleteReminder } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  try {
    // Only handle DELETE method
    if (getMethod(event) !== 'DELETE') {
      throw createError({
        statusCode: 405,
        statusMessage: 'Method not allowed'
      })
    }

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

    const reminderId = getRouterParam(event, 'id')
    
    console.log('=== DELETE API ENDPOINT DEBUG ===')
    console.log('DELETE request - Reminder ID:', reminderId, 'User ID:', decoded.userId)
    console.log('ID type:', typeof reminderId)
    console.log('Parsed ID:', reminderId ? parseInt(reminderId) : 'undefined')
    
    // Check current state before attempting delete
    console.log('About to call deleteReminder function...')
    
    const deletedReminder = deleteReminder(reminderId, decoded.userId)
    
    console.log('DELETE API - Result from deleteReminder function:', deletedReminder)
    console.log('=== END DELETE API DEBUG ===')
    
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

  } catch (error: any) {
    console.error('Error deleting medication reminder:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to delete medication reminder'
    })
  }
})
