import { verifyAccessToken } from '~/lib/auth'
import { addReminder, calculateNextReminder } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  console.log('=== MEDICATION REMINDER CREATE DEBUG ===')
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

    const body = await readBody(event)
    console.log('📝 Request body:', body)
    
    const { medicationName, dosage, frequency, timeSlots, notes } = body

    if (!medicationName || !frequency) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Medication name and frequency are required'
      })
    }

    // Validate frequency
    const validFrequencies = ['daily', 'twice-daily', 'weekly', 'monthly', 'as-needed']
    if (!validFrequencies.includes(frequency)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid frequency'
      })
    }

    // Validate time slots
    if (timeSlots && !Array.isArray(timeSlots)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Time slots must be an array'
      })
    }

    const nextReminder = calculateNextReminder(frequency, timeSlots || [])

    // Create the medication reminder using temporary storage
    console.log('🔄 Creating reminder for user ID:', decoded.userId)
    console.log('🔄 Reminder data to save:', {
      medicationName,
      dosage,
      frequency,
      timeSlots: JSON.stringify(timeSlots || []),
      notes,
      isActive: true,
      nextReminder,
      userId: decoded.userId
    })
    
    const reminder = addReminder({
      medicationName,
      dosage: dosage || null,
      frequency,
      timeSlots: JSON.stringify(timeSlots || []),
      notes: notes || null,
      isActive: true,
      nextReminder,
      userId: decoded.userId
    })
    
    console.log('✅ Successfully created reminder:', { 
      id: reminder.id, 
      name: reminder.medicationName, 
      userId: reminder.userId,
      createdAt: reminder.createdAt 
    })

    return {
      success: true,
      reminder: {
        ...reminder,
        timeSlots: JSON.parse(reminder.timeSlots)
      }
    }

  } catch (error: any) {
    console.error('Error creating medication reminder:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to create medication reminder'
    })
  }
})
