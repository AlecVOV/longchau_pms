export default {
  name: 'ImageOptimizer',
  
  // Supported formats and their quality settings
  formats: {
    'image/jpeg': { quality: 0.8, extension: 'jpg' },
    'image/jpg': { quality: 0.8, extension: 'jpg' },
    'image/png': { quality: 0.9, extension: 'png' },
    'image/webp': { quality: 0.8, extension: 'webp' }
  },

  // Size presets for different use cases
  sizePresets: {
    thumbnail: { width: 150, height: 150, crop: true },
    small: { width: 300, height: 300, crop: false },
    medium: { width: 600, height: 600, crop: false },
    large: { width: 1200, height: 1200, crop: false },
    hero: { width: 1920, height: 1080, crop: true }
  },

  /**
   * Optimize an image file
   * @param {File} file - The image file to optimize
   * @param {Object} options - Optimization options
   * @returns {Promise<Object>} Optimized image data
   */
  async optimizeImage(file, options = {}) {
    const {
      maxWidth = 800,
      maxHeight = 600,
      quality = 0.8,
      format = file.type,
      crop = false,
      generateThumbnail = false
    } = options

    try {
      // Create canvas and context
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // Load image
      const img = await this.loadImage(file)
      
      // Calculate dimensions
      const dimensions = this.calculateDimensions(img.width, img.height, maxWidth, maxHeight, crop)
      
      // Set canvas size
      canvas.width = dimensions.width
      canvas.height = dimensions.height

      // Draw image with optimization
      if (crop) {
        this.drawCroppedImage(ctx, img, dimensions)
      } else {
        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height)
      }

      // Convert to blob
      const blob = await this.canvasToBlob(canvas, format, quality)
      
      // Generate thumbnail if requested
      let thumbnail = null
      if (generateThumbnail) {
        thumbnail = await this.generateThumbnail(img)
      }

      return {
        original: {
          file,
          size: file.size,
          width: img.width,
          height: img.height,
          type: file.type
        },
        optimized: {
          blob,
          size: blob.size,
          width: dimensions.width,
          height: dimensions.height,
          type: format,
          url: URL.createObjectURL(blob),
          compressionRatio: ((file.size - blob.size) / file.size * 100).toFixed(1)
        },
        thumbnail,
        metadata: {
          optimizedAt: new Date().toISOString(),
          originalName: file.name,
          optimizedName: this.generateOptimizedName(file.name, dimensions, format)
        }
      }
    } catch (error) {
      console.error('Image optimization failed:', error)
      throw new Error(`Failed to optimize image: ${error.message}`)
    }
  },

  /**
   * Generate multiple sizes of an image
   * @param {File} file - The image file
   * @param {Array} sizes - Array of size preset names or custom dimensions
   * @returns {Promise<Object>} Object with different sized versions
   */
  async generateMultipleSizes(file, sizes = ['thumbnail', 'small', 'medium', 'large']) {
    const results = {}
    
    for (const size of sizes) {
      try {
        const preset = this.sizePresets[size] || size
        const optimized = await this.optimizeImage(file, {
          maxWidth: preset.width,
          maxHeight: preset.height,
          crop: preset.crop,
          quality: 0.8
        })
        
        results[typeof size === 'string' ? size : 'custom'] = optimized
      } catch (error) {
        console.error(`Failed to generate ${size} version:`, error)
        results[size] = { error: error.message }
      }
    }
    
    return results
  },

  /**
   * Load image file into HTMLImageElement
   * @param {File} file - Image file
   * @returns {Promise<HTMLImageElement>}
   */
  loadImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = URL.createObjectURL(file)
    })
  },

  /**
   * Calculate optimal dimensions for resizing
   * @param {number} originalWidth - Original image width
   * @param {number} originalHeight - Original image height
   * @param {number} maxWidth - Maximum width
   * @param {number} maxHeight - Maximum height
   * @param {boolean} crop - Whether to crop or maintain aspect ratio
   * @returns {Object} Calculated dimensions
   */
  calculateDimensions(originalWidth, originalHeight, maxWidth, maxHeight, crop = false) {
    if (crop) {
      return { width: maxWidth, height: maxHeight }
    }

    const aspectRatio = originalWidth / originalHeight
    
    let width = originalWidth
    let height = originalHeight

    // Scale down if needed
    if (width > maxWidth) {
      width = maxWidth
      height = width / aspectRatio
    }

    if (height > maxHeight) {
      height = maxHeight
      width = height * aspectRatio
    }

    return {
      width: Math.round(width),
      height: Math.round(height)
    }
  },

  /**
   * Draw cropped image on canvas
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {HTMLImageElement} img - Image element
   * @param {Object} dimensions - Target dimensions
   */
  drawCroppedImage(ctx, img, dimensions) {
    const { width: targetWidth, height: targetHeight } = dimensions
    const { width: imgWidth, height: imgHeight } = img

    // Calculate crop dimensions
    const targetAspect = targetWidth / targetHeight
    const imgAspect = imgWidth / imgHeight

    let sourceWidth, sourceHeight, sourceX, sourceY

    if (imgAspect > targetAspect) {
      // Image is wider than target
      sourceHeight = imgHeight
      sourceWidth = imgHeight * targetAspect
      sourceX = (imgWidth - sourceWidth) / 2
      sourceY = 0
    } else {
      // Image is taller than target
      sourceWidth = imgWidth
      sourceHeight = imgWidth / targetAspect
      sourceX = 0
      sourceY = (imgHeight - sourceHeight) / 2
    }

    ctx.drawImage(
      img,
      sourceX, sourceY, sourceWidth, sourceHeight,
      0, 0, targetWidth, targetHeight
    )
  },

  /**
   * Convert canvas to blob
   * @param {HTMLCanvasElement} canvas - Canvas element
   * @param {string} format - Output format
   * @param {number} quality - Quality setting
   * @returns {Promise<Blob>}
   */
  canvasToBlob(canvas, format, quality) {
    return new Promise((resolve) => {
      canvas.toBlob(resolve, format, quality)
    })
  },

  /**
   * Generate thumbnail from image
   * @param {HTMLImageElement} img - Image element
   * @returns {Promise<Object>} Thumbnail data
   */
  async generateThumbnail(img) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    const thumbSize = 150
    canvas.width = thumbSize
    canvas.height = thumbSize

    // Draw centered and cropped thumbnail
    this.drawCroppedImage(ctx, img, { width: thumbSize, height: thumbSize })

    const blob = await this.canvasToBlob(canvas, 'image/jpeg', 0.7)
    
    return {
      blob,
      url: URL.createObjectURL(blob),
      width: thumbSize,
      height: thumbSize,
      size: blob.size
    }
  },

  /**
   * Generate optimized filename
   * @param {string} originalName - Original filename
   * @param {Object} dimensions - Image dimensions
   * @param {string} format - Output format
   * @returns {string} Optimized filename
   */
  generateOptimizedName(originalName, dimensions, format) {
    const nameWithoutExt = originalName.split('.').slice(0, -1).join('.')
    const extension = this.formats[format]?.extension || 'jpg'
    return `${nameWithoutExt}_${dimensions.width}x${dimensions.height}.${extension}`
  },

  /**
   * Batch optimize multiple images
   * @param {FileList|Array} files - Array of image files
   * @param {Object} options - Optimization options
   * @param {Function} progressCallback - Progress callback function
   * @returns {Promise<Array>} Array of optimization results
   */
  async batchOptimize(files, options = {}, progressCallback = null) {
    const results = []
    const total = files.length

    for (let i = 0; i < total; i++) {
      try {
        const result = await this.optimizeImage(files[i], options)
        results.push({ success: true, data: result })
        
        if (progressCallback) {
          progressCallback({
            current: i + 1,
            total,
            percentage: ((i + 1) / total) * 100,
            currentFile: files[i].name
          })
        }
      } catch (error) {
        results.push({
          success: false,
          error: error.message,
          file: files[i].name
        })
      }
    }

    return results
  },

  /**
   * Validate image file
   * @param {File} file - File to validate
   * @param {Object} constraints - Validation constraints
   * @returns {Object} Validation result
   */
  validateImage(file, constraints = {}) {
    const {
      maxSize = 10 * 1024 * 1024, // 10MB
      minWidth = 100,
      minHeight = 100,
      maxWidth = 4000,
      maxHeight = 4000,
      allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    } = constraints

    const errors = []

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      errors.push(`File type ${file.type} is not allowed`)
    }

    // Check file size
    if (file.size > maxSize) {
      errors.push(`File size (${(file.size / 1024 / 1024).toFixed(1)}MB) exceeds maximum (${(maxSize / 1024 / 1024).toFixed(1)}MB)`)
    }

    return {
      valid: errors.length === 0,
      errors
    }
  },

  /**
   * Calculate total storage saved from optimization
   * @param {Array} optimizationResults - Array of optimization results
   * @returns {Object} Storage statistics
   */
  calculateStorageSavings(optimizationResults) {
    let totalOriginalSize = 0
    let totalOptimizedSize = 0
    let successfulOptimizations = 0

    optimizationResults.forEach(result => {
      if (result.success && result.data) {
        totalOriginalSize += result.data.original.size
        totalOptimizedSize += result.data.optimized.size
        successfulOptimizations++
      }
    })

    const totalSaved = totalOriginalSize - totalOptimizedSize
    const savingsPercentage = totalOriginalSize > 0 ? (totalSaved / totalOriginalSize) * 100 : 0

    return {
      originalSize: totalOriginalSize,
      optimizedSize: totalOptimizedSize,
      totalSaved,
      savingsPercentage: savingsPercentage.toFixed(1),
      optimizedCount: successfulOptimizations,
      humanReadable: {
        originalSize: this.formatFileSize(totalOriginalSize),
        optimizedSize: this.formatFileSize(totalOptimizedSize),
        totalSaved: this.formatFileSize(totalSaved)
      }
    }
  },

  /**
   * Format file size in human readable format
   * @param {number} bytes - File size in bytes
   * @returns {string} Formatted file size
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
}
