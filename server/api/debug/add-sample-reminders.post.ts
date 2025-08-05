import { addReminder } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  try {
    // Add some sample reminders for testing
    const sampleReminders = [
      {
        userId: 'user123', // You'll need to use your actual user ID
        medicationName: 'Aspirin',
        dosage: '100mg',
        frequency: 'daily',
        timeSlots: ['08:00', '20:00'],
        isActive: true,
        instructions: 'Take with food'
      },
      {
        userId: 'user123',
        medicationName: 'Vitamin D',
        dosage: '1000 IU',
        frequency: 'daily',
        timeSlots: ['09:00'],
        isActive: true,
        instructions: 'Take in the morning'
      }
    ]

    const addedReminders = sampleReminders.map(reminder => addReminder(reminder))

    return {
      message: 'Sample reminders added successfully',
      reminders: addedReminders,
      note: 'You can now test the delete functionality'
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to add sample reminders'
    })
  }
})
