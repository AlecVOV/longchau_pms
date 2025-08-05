// Temporary in-memory storage for medication reminders
// This will be replaced with proper database once Prisma client is regenerated
let reminders = []
let nextId = 1

export function addReminder(reminder) {
  const newReminder = {
    id: nextId++,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...reminder
  }
  reminders.push(newReminder)
  return newReminder
}

export function getReminders(userId) {
  return reminders.filter(r => r.userId === userId)
}

export function getReminderById(id, userId) {
  return reminders.find(r => r.id === parseInt(id) && r.userId === userId)
}

export function updateReminder(id, userId, updates) {
  const index = reminders.findIndex(r => r.id === parseInt(id) && r.userId === userId)
  if (index !== -1) {
    reminders[index] = {
      ...reminders[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }
    return reminders[index]
  }
  return null
}

export function deleteReminder(id, userId) {
  console.log('=== DELETE REMINDER FUNCTION CALLED ===')
  console.log('deleteReminder called with:', { id, userId, type: typeof id })
  console.log('Current reminders in array:', reminders.map(r => ({ id: r.id, userId: r.userId, name: r.medicationName })))
  console.log('Total reminders count:', reminders.length)
  
  const index = reminders.findIndex(r => r.id === parseInt(id) && r.userId === userId)
  console.log('Search criteria:', { targetId: parseInt(id), targetUserId: userId })
  console.log('Found index:', index)
  
  if (index !== -1) {
    const deleted = reminders.splice(index, 1)[0]
    console.log('Successfully deleted reminder:', deleted)
    console.log('Remaining reminders count:', reminders.length)
    return deleted
  }
  
  console.log('❌ Reminder not found - possible reasons:')
  console.log('1. No reminder with ID', parseInt(id), 'exists')
  console.log('2. Reminder exists but belongs to different user')
  console.log('3. Reminder was already deleted')
  console.log('Current user trying to delete:', userId)
  console.log('All reminders:', reminders.map(r => `ID:${r.id} User:${r.userId} Name:${r.medicationName}`))
  return null
}

export function calculateNextReminder(frequency, timeSlots) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  
  if (!timeSlots || timeSlots.length === 0) {
    // Default to next day at 9 AM if no time slots
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0)
    return tomorrow.toISOString()
  }
  
  // Find next time slot
  for (const timeSlot of timeSlots.sort()) {
    const [hours, minutes] = timeSlot.split(':').map(Number)
    const nextTime = new Date(today)
    nextTime.setHours(hours, minutes, 0, 0)
    
    if (nextTime > now) {
      return nextTime.toISOString()
    }
  }
  
  // If all times have passed today, use first time tomorrow
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [hours, minutes] = timeSlots[0].split(':').map(Number)
  tomorrow.setHours(hours, minutes, 0, 0)
  return tomorrow.toISOString()
}

// Debug function to help troubleshoot
export function debugState() {
  return {
    totalReminders: reminders.length,
    nextId: nextId,
    allReminders: reminders.map(r => ({
      id: r.id,
      userId: r.userId,
      medicationName: r.medicationName,
      createdAt: r.createdAt
    }))
  }
}
