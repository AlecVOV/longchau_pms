import prisma from '~/lib/prisma'
import { verifyAccessToken } from '~/lib/auth'

export default defineEventHandler(async (event) => {
  try {
    // Get and verify JWT token
    const authorization = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
    
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    const decoded = verifyAccessToken(token)
    
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token'
      })
    }

    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const status = query.status as string
    const search = query.search as string

    // Build where clause for user's prescriptions only
    const where: any = {
      userId: decoded.userId // This ensures prescriptions are filtered by user
    }

    if (status && status !== 'All') {
      where.status = status
    }

    if (search) {
      where.OR = [
        {
          id: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          doctorName: {
            contains: search,
            mode: 'insensitive'
          }
        },
        {
          notes: {
            contains: search,
            mode: 'insensitive'
          }
        }
      ]
    }

    // Get user's prescriptions with pagination
    const prescriptions = await prisma.prescription.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit
    })

    // Get total count for pagination
    const totalItems = await prisma.prescription.count({
      where
    })

    // Transform prescriptions to match frontend format
    const transformedPrescriptions = prescriptions.map(prescription => {
      // For now, create placeholder data since the current schema is minimal
      // In a real app, you'd want to extend the schema to include these fields
      return {
        id: prescription.id,
        status: prescription.status,
        doctorName: prescription.doctorName || 'Unknown Doctor',
        issueDate: prescription.createdAt.toISOString().split('T')[0],
        expiryDate: '', // Would need to add this field to schema
        medications: [], // Would need to add this field to schema
        medicationDetails: [], // Would need to add this field to schema
        orderStatus: 'Processing', // Would need to add this field to schema
        uploadDate: prescription.createdAt.toISOString().split('T')[0],
        notes: prescription.notes || '',
        imageUrl: prescription.imageUrl
      }
    })

    return {
      prescriptions: transformedPrescriptions,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    }

  } catch (error: any) {
    console.error('Prescriptions fetch error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to fetch prescriptions'
    })
  }
})
