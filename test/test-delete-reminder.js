// Test script for deleteReminder function
import { addReminder, deleteReminder, getReminders } from './lib/temp-reminders.js'

console.log('=== TESTING DELETE REMINDER FUNCTION ===\n')

// Test 1: Add some test reminders
console.log('1. Adding test reminders...')
const reminder1 = addReminder({
  userId: 'user123',
  medicationName: 'Aspirin',
  dosage: '100mg',
  frequency: 'daily'
})

const reminder2 = addReminder({
  userId: 'user123',
  medicationName: 'Vitamin D',
  dosage: '1000 IU',
  frequency: 'daily'
})

const reminder3 = addReminder({
  userId: 'user456',
  medicationName: 'Metformin',
  dosage: '500mg',
  frequency: 'twice daily'
})

console.log('Added reminders:', { reminder1: reminder1.id, reminder2: reminder2.id, reminder3: reminder3.id })
console.log('Current reminders for user123:', getReminders('user123').length)
console.log('Current reminders for user456:', getReminders('user456').length)

// Test 2: Delete valid reminder
console.log('\n2. Testing valid deletion...')
const deleted1 = deleteReminder(reminder1.id, 'user123')
console.log('Deletion result:', deleted1 ? 'SUCCESS' : 'FAILED')
console.log('Remaining reminders for user123:', getReminders('user123').length)

// Test 3: Try to delete non-existent reminder
console.log('\n3. Testing non-existent reminder...')
const deleted2 = deleteReminder(999, 'user123')
console.log('Deletion result:', deleted2 ? 'SUCCESS' : 'FAILED (expected)')

// Test 4: Try to delete other user's reminder
console.log('\n4. Testing cross-user security...')
const deleted3 = deleteReminder(reminder3.id, 'user123')
console.log('Deletion result:', deleted3 ? 'SECURITY BREACH!' : 'BLOCKED (expected)')
console.log('Reminder still exists for user456:', getReminders('user456').length > 0)

// Test 5: String ID conversion
console.log('\n5. Testing string ID (URL param simulation)...')
const deleted4 = deleteReminder(reminder2.id.toString(), 'user123')
console.log('Deletion result:', deleted4 ? 'SUCCESS' : 'FAILED')

console.log('\n=== TEST COMPLETE ===')
