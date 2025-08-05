import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const searchQuery = (query.q as string)?.toLowerCase() || '';
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 12;
    const category = query.category as string;
    const brand = query.brand as string;
    const minPrice = parseFloat(query.minPrice as string) || 0;
    const maxPrice = parseFloat(query.maxPrice as string) || 999999;
    const inStock = query.inStock === 'true';
    const sortBy = query.sortBy as string || 'relevance';
    const sortOrder = query.sortOrder as string || 'desc';

    // Build where clause for database search
    const where: any = {
      isActive: true,
      price: {
        gte: minPrice,
        lte: maxPrice
      }
    };

    // Add search conditions only if searchQuery is provided
    if (searchQuery.trim()) {
      where.OR = [
        {
          name: {
            contains: searchQuery
          }
        },
        {
          description: {
            contains: searchQuery
          }
        },
        {
          manufacturer: {
            contains: searchQuery
          }
        }
      ];
    }

    // Apply additional filters
    if (category) {
      where.category = {
        slug: category
      };
    }

    if (brand) {
      where.manufacturer = {
        contains: brand
      };
    }

    if (inStock) {
      where.stock = {
        gt: 0
      };
    }

    // Build orderBy clause
    let orderBy: any = {};
    switch (sortBy) {
      case 'price':
        orderBy.price = sortOrder;
        break;
      case 'name':
        orderBy.name = sortOrder;
        break;
      case 'createdAt':
        orderBy.createdAt = sortOrder;
        break;
      case 'relevance':
      default:
        orderBy.name = 'asc';
        break;
    }

    // Get total count for pagination
    const totalItems = await prisma.product.count({ where });

    // Get products with pagination
    const products = await prisma.product.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        reviews: {
          select: {
            rating: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * limit,
      take: limit
    });

    // Transform products for frontend compatibility
    const searchResults = products.map(product => {
      // Parse JSON fields safely
      let images = [];
      let ingredients = [];
      
      try {
        images = product.images ? JSON.parse(product.images) : [];
      } catch (e) {
        images = [];
      }
      
      try {
        ingredients = product.ingredients ? JSON.parse(product.ingredients) : [];
      } catch (e) {
        ingredients = [];
      }

      // Calculate average rating
      const rating = product.reviews.length > 0 
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0;

      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDescription: product.shortDescription,
        price: product.price,
        originalPrice: product.comparePrice,
        discount: product.discount,
        image: images[0] || null,
        images,
        categoryId: product.categoryId,
        category: product.category,
        brand: product.manufacturer,
        stock: product.stock,
        sku: product.sku,
        featured: product.featured,
        prescription: product.requiresPrescription,
        rating,
        reviewCount: product.reviews.length,
        tags: ingredients, // Using ingredients as tags for search compatibility
        inStock: product.stock > 0,
        specifications: {
          "Pack Size": product.sku,
          "Manufacturer": product.manufacturer,
          "Dosage": product.dosage
        },
        dosage: product.dosage,
        storage: "Store in a cool, dry place. Keep out of reach of children."
      };
    });

    return {
      results: searchResults,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      },
      searchQuery,
      resultCount: searchResults.length,
      totalResults: totalItems
    };

  } catch (error) {
    console.error('Search error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to search products'
    });
  }
});