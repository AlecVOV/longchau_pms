<template>
  <div class="image-uploader">
    <!-- Drop zone -->
    <div
      @drop="handleDrop"
      @dragover.prevent
      @dragenter.prevent
      @dragleave="handleDragLeave"
      :class="[
        'border-2 border-dashed rounded-lg p-6 text-center transition-colors',
        isDragOver ? 'border-primary-500 bg-primary-50' : 'border-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-primary-400'
      ]"
      @click="!disabled && $refs.fileInput.click()"
    >
      <!-- Upload icon and text -->
      <div v-if="!uploading && !images.length" class="space-y-2">
        <svg class="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <div>
          <p class="text-sm text-gray-600">
            <span class="font-medium text-primary-600">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500">PNG, JPG, GIF up to {{ maxSizeMB }}MB each</p>
        </div>
      </div>

      <!-- Upload progress -->
      <div v-if="uploading" class="space-y-3">
        <div class="animate-spin w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full mx-auto"></div>
        <p class="text-sm text-gray-600">Uploading {{ uploadingCount }} of {{ totalUploadCount }} images...</p>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-primary-600 h-2 rounded-full transition-all duration-300" :style="{ width: uploadProgress + '%' }"></div>
        </div>
      </div>

      <!-- Image preview grid -->
      <div v-if="images.length && !uploading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="image.id || index" class="relative group">
          <img
            :src="image.preview || image.url"
            :alt="image.alt || `Image ${index + 1}`"
            class="w-full h-24 object-cover rounded-lg"
            @error="handleImageError(image)"
          />
          
          <!-- Image overlay actions -->
          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
            <button
              @click.stop="setAsPrimary(index)"
              :class="[
                'p-1 rounded text-xs',
                image.isPrimary ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              ]"
              :title="image.isPrimary ? 'Primary image' : 'Set as primary'"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            
            <button
              @click.stop="removeImage(index)"
              class="p-1 bg-red-500 text-white rounded hover:bg-red-600"
              title="Remove image"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Primary badge -->
          <div v-if="image.isPrimary" class="absolute top-1 left-1">
            <span class="bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">Primary</span>
          </div>
        </div>

        <!-- Add more button -->
        <div
          v-if="images.length < maxImages"
          @click="$refs.fileInput.click()"
          class="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary-400 hover:bg-gray-50 transition-colors"
        >
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Hidden file input -->
    <input
      ref="fileInput"
      type="file"
      multiple
      :accept="acceptedTypes"
      @change="handleFileSelect"
      class="hidden"
      :disabled="disabled"
    />

    <!-- Error messages -->
    <div v-if="errors.length" class="mt-3 space-y-1">
      <p v-for="error in errors" :key="error" class="text-sm text-red-600">{{ error }}</p>
    </div>

    <!-- Image details form -->
    <div v-if="showImageDetails && selectedImage" class="mt-4 p-4 border rounded-lg bg-gray-50">
      <h4 class="font-medium mb-3">Image Details</h4>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
          <input
            v-model="selectedImage.alt"
            type="text"
            class="input"
            placeholder="Describe this image for accessibility"
            @input="updateImageDetails"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Caption</label>
          <input
            v-model="selectedImage.caption"
            type="text"
            class="input"
            placeholder="Optional image caption"
            @input="updateImageDetails"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNotificationsStore } from '~/stores/notifications'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  maxImages: {
    type: Number,
    default: 10
  },
  maxSizeMB: {
    type: Number,
    default: 5
  },
  acceptedTypes: {
    type: String,
    default: 'image/jpeg,image/jpg,image/png,image/gif,image/webp'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showImageDetails: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'upload-complete', 'upload-error'])

const notifications = useNotificationsStore()

// Reactive data
const images = ref([...props.modelValue])
const isDragOver = ref(false)
const uploading = ref(false)
const uploadingCount = ref(0)
const totalUploadCount = ref(0)
const uploadProgress = ref(0)
const errors = ref([])
const selectedImage = ref(null)

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  images.value = [...newValue]
}, { deep: true })

// Emit changes
watch(images, (newImages) => {
  emit('update:modelValue', newImages)
}, { deep: true })

// Methods
const handleDrop = (e) => {
  e.preventDefault()
  isDragOver.value = false
  
  if (props.disabled) return
  
  const files = Array.from(e.dataTransfer.files)
  processFiles(files)
}

const handleDragLeave = (e) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    isDragOver.value = false
  }
}

const handleFileSelect = (e) => {
  const files = Array.from(e.target.files)
  processFiles(files)
  e.target.value = '' // Reset input
}

const processFiles = async (files) => {
  errors.value = []
  
  // Filter valid files
  const validFiles = files.filter(file => {
    if (!file.type.startsWith('image/')) {
      errors.value.push(`${file.name} is not a valid image file`)
      return false
    }
    
    if (file.size > props.maxSizeMB * 1024 * 1024) {
      errors.value.push(`${file.name} is too large (max ${props.maxSizeMB}MB)`)
      return false
    }
    
    return true
  })

  if (images.value.length + validFiles.length > props.maxImages) {
    errors.value.push(`Cannot upload more than ${props.maxImages} images`)
    return
  }

  if (validFiles.length === 0) return

  // Start upload process
  uploading.value = true
  uploadingCount.value = 0
  totalUploadCount.value = validFiles.length
  uploadProgress.value = 0

  try {
    for (const file of validFiles) {
      await uploadSingleFile(file)
      uploadingCount.value++
      uploadProgress.value = (uploadingCount.value / totalUploadCount.value) * 100
    }
    
    notifications.success(`Successfully uploaded ${validFiles.length} image(s)`)
    emit('upload-complete', images.value)
  } catch (error) {
    console.error('Upload error:', error)
    notifications.error('Failed to upload some images')
    emit('upload-error', error)
  } finally {
    uploading.value = false
    uploadingCount.value = 0
    totalUploadCount.value = 0
    uploadProgress.value = 0
  }
}

const uploadSingleFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
      const imageData = {
        id: Date.now() + Math.random(),
        file,
        preview: e.target.result,
        url: e.target.result, // In real app, this would be the server URL
        alt: '',
        caption: '',
        isPrimary: images.value.length === 0, // First image is primary by default
        size: file.size,
        type: file.type,
        name: file.name
      }
      
      images.value.push(imageData)
      resolve(imageData)
    }
    
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  const removedImage = images.value[index]
  images.value.splice(index, 1)
  
  // If removed image was primary, make first image primary
  if (removedImage.isPrimary && images.value.length > 0) {
    images.value[0].isPrimary = true
  }
}

const setAsPrimary = (index) => {
  // Remove primary from all images
  images.value.forEach(img => img.isPrimary = false)
  // Set selected as primary
  images.value[index].isPrimary = true
}

const handleImageError = (image) => {
  console.error('Image failed to load:', image)
  notifications.error(`Failed to load image: ${image.name}`)
}

const updateImageDetails = () => {
  // Emit change event when image details are updated
  emit('update:modelValue', images.value)
}

// Select image for editing details
const selectImage = (image) => {
  selectedImage.value = image
}
</script>

<style scoped>
.image-uploader .input {
  @apply w-full rounded border border-gray-300 px-3 py-2 text-sm;
}
</style>
