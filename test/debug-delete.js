// Debug script to test the delete functionality
import { addReminder, deleteReminder, getReminders } from './lib/temp-reminders.js'

console.log('=== DEBUGGING DELETE REMINDER ISSUE ===\n')

// Step 1: Check initial state
console.log('1. Initial state:')
console.log('Current reminders:', getReminders('user123'))

// Step 2: Add a test reminder
console.log('\n2. Adding test reminder...')
const testReminder = addReminder({
  userId: 'user123',
  medicationName: 'Test Medicine',
  dosage: '100mg',
  frequency: 'daily'
})
console.log('Added reminder:', testReminder)
console.log('Total reminders for user123:', getReminders('user123').length)

// Step 3: Check the reminder exists
console.log('\n3. Verifying reminder exists:')
const allReminders = getReminders('user123')
console.log('All reminders for user123:', allReminders.map(r => ({ id: r.id, name: r.medicationName })))

// Step 4: Try to delete the reminder
console.log('\n4. Attempting to delete reminder ID:', testReminder.id)
const deleteResult = deleteReminder(testReminder.id, 'user123')
console.log('Delete result:', deleteResult ? 'SUCCESS' : 'FAILED')

// Step 5: Check if it was actually deleted
console.log('\n5. Checking if reminder was deleted:')
const remainingReminders = getReminders('user123')
console.log('Remaining reminders for user123:', remainingReminders.length)
console.log('Remaining reminders:', remainingReminders.map(r => ({ id: r.id, name: r.medicationName })))

// Step 6: Try to delete with string ID (like from URL)
console.log('\n6. Testing with another reminder using string ID...')
const testReminder2 = addReminder({
  userId: 'user123',
  medicationName: 'Test Medicine 2',
  dosage: '200mg',
  frequency: 'daily'
})
console.log('Added reminder 2:', testReminder2)

const deleteResult2 = deleteReminder(testReminder2.id.toString(), 'user123')
console.log('Delete result with string ID:', deleteResult2 ? 'SUCCESS' : 'FAILED')

const finalReminders = getReminders('user123')
console.log('Final reminders count:', finalReminders.length)

console.log('\n=== DEBUG COMPLETE ===')
