// lib/api-response.ts
// Standardized API response format for consistency across all endpoints

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  pagination?: {
    total: number
    limit: number
    offset: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface ErrorResponse {
  success: false
  error: string
  message?: string
  statusCode?: number
}

// Success response helper
export function createSuccessResponse<T>(
  data?: T, 
  message?: string, 
  pagination?: ApiResponse['pagination']
): ApiResponse<T> {
  const response: ApiResponse<T> = {
    success: true
  }

  if (data !== undefined) response.data = data
  if (message) response.message = message
  if (pagination) response.pagination = pagination

  return response
}

// Error response helper
export function createErrorResponse(
  error: string, 
  message?: string, 
  statusCode: number = 500
): ErrorResponse {
  return {
    success: false,
    error,
    message,
    statusCode
  }
}

// Pagination helper
export function createPaginationInfo(
  total: number,
  limit: number,
  offset: number
): ApiResponse['pagination'] {
  return {
    total,
    limit,
    offset,
    hasNext: offset + limit < total,
    hasPrev: offset > 0
  }
}
