// Debug script to check reminders in temporary storage
import { getReminders } from './lib/temp-reminders.js'

console.log('All reminders in temporary storage:')
console.log(getReminders('any-user-id'))
