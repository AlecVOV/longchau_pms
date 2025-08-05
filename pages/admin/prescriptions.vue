<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Prescription Management</h1>
              <p class="mt-1 text-sm text-gray-500">Review and manage customer prescriptions</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {{ totalPrescriptions }} Total Prescriptions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select v-model="filters.status" class="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">All Status</option>
              <option value="pending">Pending Review</option>
              <option value="approved">Approved</option>
              <option value="filled">Filled</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date From</label>
            <input 
              v-model="filters.dateFrom" 
              type="date" 
              class="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date To</label>
            <input 
              v-model="filters.dateTo" 
              type="date" 
              class="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div class="flex items-end">
            <button 
              @click="loadPrescriptions"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Prescriptions Table -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prescription ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Submitted
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="prescription in prescriptions" :key="prescription.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #RX{{ prescription.id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ prescription.patientName }}</div>
                  <div class="text-sm text-gray-500">DOB: {{ formatDate(prescription.patientDOB) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ prescription.doctorName }}</div>
                  <div class="text-sm text-gray-500">{{ prescription.doctorLicense }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ prescription.medicationName }}</div>
                  <div class="text-sm text-gray-500">{{ prescription.dosage }} - {{ prescription.quantity }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatDate(prescription.submittedAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusClass(prescription.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                    {{ prescription.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button @click="viewPrescription(prescription)" class="text-blue-600 hover:text-blue-900">
                      View
                    </button>
                    <button v-if="prescription.status === 'pending'" @click="approvePrescription(prescription)" class="text-green-600 hover:text-green-900">
                      Approve
                    </button>
                    <button v-if="prescription.status === 'pending'" @click="rejectPrescription(prescription)" class="text-red-600 hover:text-red-900">
                      Reject
                    </button>
                    <button v-if="prescription.status === 'approved'" @click="fillPrescription(prescription)" class="text-purple-600 hover:text-purple-900">
                      Fill
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-gray-50 px-6 py-3 flex items-center justify-between">
          <div class="text-sm text-gray-700">
            Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to {{ Math.min(currentPage * itemsPerPage, totalPrescriptions) }} of {{ totalPrescriptions }} prescriptions
          </div>
          <div class="flex space-x-2">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              @click="currentPage++" 
              :disabled="currentPage * itemsPerPage >= totalPrescriptions"
              class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Prescription Details Modal -->
    <div v-if="selectedPrescription" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="selectedPrescription = null">
      <div class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-96 overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium">Prescription #RX{{ selectedPrescription.id }}</h3>
            <button @click="selectedPrescription = null" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-900">Patient Information</h4>
                <div class="mt-2 text-sm text-gray-600">
                  <p><strong>Name:</strong> {{ selectedPrescription.patientName }}</p>
                  <p><strong>Date of Birth:</strong> {{ formatDate(selectedPrescription.patientDOB) }}</p>
                  <p><strong>Phone:</strong> {{ selectedPrescription.patientPhone }}</p>
                  <p><strong>Address:</strong> {{ selectedPrescription.patientAddress }}</p>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-900">Doctor Information</h4>
                <div class="mt-2 text-sm text-gray-600">
                  <p><strong>Name:</strong> {{ selectedPrescription.doctorName }}</p>
                  <p><strong>License:</strong> {{ selectedPrescription.doctorLicense }}</p>
                  <p><strong>Contact:</strong> {{ selectedPrescription.doctorContact }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-900">Prescription Details</h4>
                <div class="mt-2 text-sm text-gray-600">
                  <p><strong>Medication:</strong> {{ selectedPrescription.medicationName }}</p>
                  <p><strong>Dosage:</strong> {{ selectedPrescription.dosage }}</p>
                  <p><strong>Quantity:</strong> {{ selectedPrescription.quantity }}</p>
                  <p><strong>Refills:</strong> {{ selectedPrescription.refills }}</p>
                  <p><strong>Instructions:</strong> {{ selectedPrescription.instructions }}</p>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-900">Prescription Image</h4>
                <div class="mt-2">
                  <img 
                    :src="selectedPrescription.imageUrl" 
                    :alt="`Prescription ${selectedPrescription.id}`"
                    class="w-full h-48 object-cover border rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 flex justify-end space-x-3">
            <button 
              v-if="selectedPrescription.status === 'pending'"
              @click="rejectPrescription(selectedPrescription)"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Reject
            </button>
            <button 
              v-if="selectedPrescription.status === 'pending'"
              @click="approvePrescription(selectedPrescription)"
              class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Approve
            </button>
            <button 
              v-if="selectedPrescription.status === 'approved'"
              @click="fillPrescription(selectedPrescription)"
              class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Mark as Filled
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin'
})

useHead({
  title: 'Prescriptions - Admin - Long Châu'
})

// Reactive data
const prescriptions = ref([])
const totalPrescriptions = ref(0)
const currentPage = ref(1)
const itemsPerPage = ref(20)
const selectedPrescription = ref(null)

const filters = ref({
  status: '',
  dateFrom: '',
  dateTo: ''
})

// Mock data - replace with actual API calls
const loadPrescriptions = async () => {
  // This would typically be an API call
  const mockPrescriptions = [
    {
      id: 2001,
      patientName: 'John Doe',
      patientDOB: new Date('1985-03-15'),
      patientPhone: '(555) 123-4567',
      patientAddress: '123 Main St, City, State 12345',
      doctorName: 'Dr. Sarah Wilson',
      doctorLicense: 'MD12345',
      doctorContact: 'sarah.wilson@hospital.com',
      medicationName: 'Lisinopril',
      dosage: '10mg',
      quantity: '30 tablets',
      refills: '3',
      instructions: 'Take once daily with food',
      submittedAt: new Date('2024-01-15'),
      status: 'pending',
      imageUrl: '/images/prescription-sample.jpg'
    },
    {
      id: 2002,
      patientName: 'Jane Smith',
      patientDOB: new Date('1978-07-22'),
      patientPhone: '(555) 987-6543',
      patientAddress: '456 Oak Ave, City, State 12345',
      doctorName: 'Dr. Michael Chen',
      doctorLicense: 'MD67890',
      doctorContact: 'michael.chen@clinic.com',
      medicationName: 'Metformin',
      dosage: '500mg',
      quantity: '60 tablets',
      refills: '5',
      instructions: 'Take twice daily with meals',
      submittedAt: new Date('2024-01-14'),
      status: 'approved',
      imageUrl: '/images/prescription-sample2.jpg'
    },
    {
      id: 2003,
      patientName: 'Bob Johnson',
      patientDOB: new Date('1962-11-08'),
      patientPhone: '(555) 456-7890',
      patientAddress: '789 Pine St, City, State 12345',
      doctorName: 'Dr. Emily Rodriguez',
      doctorLicense: 'MD54321',
      doctorContact: 'emily.rodriguez@medical.com',
      medicationName: 'Atorvastatin',
      dosage: '20mg',
      quantity: '90 tablets',
      refills: '6',
      instructions: 'Take once daily at bedtime',
      submittedAt: new Date('2024-01-13'),
      status: 'filled',
      imageUrl: '/images/prescription-sample3.jpg'
    }
  ]

  prescriptions.value = mockPrescriptions
  totalPrescriptions.value = mockPrescriptions.length
}

// Methods
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getStatusClass = (status) => {
  const statusClasses = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    filled: 'bg-blue-100 text-blue-800',
    rejected: 'bg-red-100 text-red-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}

const viewPrescription = (prescription) => {
  selectedPrescription.value = prescription
}

const approvePrescription = (prescription) => {
  prescription.status = 'approved'
  console.log('Approved prescription:', prescription.id)
  selectedPrescription.value = null
}

const rejectPrescription = (prescription) => {
  prescription.status = 'rejected'
  console.log('Rejected prescription:', prescription.id)
  selectedPrescription.value = null
}

const fillPrescription = (prescription) => {
  prescription.status = 'filled'
  console.log('Filled prescription:', prescription.id)
  selectedPrescription.value = null
}

// Load prescriptions on mount
onMounted(() => {
  loadPrescriptions()
})
</script>
