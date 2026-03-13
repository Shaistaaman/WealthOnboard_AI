import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  FileText,
  User,
  Building
} from 'lucide-react'

const KYCManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const kycApplications = [
    {
      id: 1,
      userId: 'USR001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      accountType: 'Individual',
      status: 'Pending Review',
      submittedDate: '2024-03-08',
      documents: ['ID Card', 'Proof of Address', 'Bank Statement'],
      priority: 'High'
    },
    {
      id: 2,
      userId: 'USR002',
      name: 'TechCorp Inc.',
      email: 'admin@techcorp.com',
      accountType: 'Corporate',
      status: 'Under Review',
      submittedDate: '2024-03-07',
      documents: [
        'Certificate of Incorporation',
        'Director IDs',
        'Financial Statements'
      ],
      priority: 'Medium'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800'
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Under Review':
        return 'bg-blue-100 text-blue-800'
      case 'Rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>KYC Management</h2>
        <p className='text-[#3a5054] mt-2'>
          Review and manage KYC verification processes
        </p>
      </div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#3a5054]' />
            <input
              type='text'
              placeholder='Search KYC applications...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default KYCManagement
