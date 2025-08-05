// Check current state of reminders
import { getReminders } from './lib/temp-reminders.js'

console.log('=== CURRENT REMINDERS STATE ===')

// Check different user IDs that might exist
const possibleUserIds = ['user123', 'user456', '1', '2', 'testuser', 'admin']

for (const userId of possibleUserIds) {
  const userReminders = getReminders(userId)
  if (userReminders.length > 0) {
    console.log(`User ${userId} has ${userReminders.length} reminders:`)
    userReminders.forEach(r => {
      console.log(`  - ID: ${r.id}, Name: ${r.medicationName}, User: ${r.userId}`)
    })
  }
}

// Check the raw reminders array
const fs = await import('fs')
const tempRemindersPath = './lib/temp-reminders.js'
const content = fs.readFileSync(tempRemindersPath, 'utf8')

// Try to get all reminders (hack to see internal state)
import * as tempReminders from './lib/temp-reminders.js'
console.log('\n=== INTERNAL DEBUG ===')
console.log('Available functions:', Object.keys(tempReminders))
