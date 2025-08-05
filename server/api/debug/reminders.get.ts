import { debugState, getReminders } from '~/lib/temp-reminders.js'

export default defineEventHandler(async (event) => {
  const debug = debugState()
  
  // Get reminders for specific users if they exist
  const userIds = ['cmdg5wbeq0014z86ojnhimrw5', 'cmdg7mhfy0000z820qxchthfl']
  const userReminders: Record<string, any[]> = {}
  
  for (const userId of userIds) {
    userReminders[userId] = getReminders(userId)
  }
  
  return {
    message: 'Debug state of medication reminders',
    debug,
    userReminders,
    serverTime: new Date().toISOString(),
    note: 'This shows the current state of the temporary storage'
  }
})
