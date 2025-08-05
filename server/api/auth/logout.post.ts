export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })
  }

  // In a real implementation, you might want to:
  // 1. Invalidate the refresh token in a blacklist/database
  // 2. Clear any server-side sessions
  // 3. Log the logout event for security audit

  return {
    success: true,
    message: 'Logged out successfully'
  }
})
