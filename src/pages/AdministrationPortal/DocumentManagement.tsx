import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Upload,
  Download,
  Eye,
  Trash2,
  FileText,
  Image,
  File,
  Filter,
  FolderOpen
} from 'lucide-react'

const DocumentManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const documents = [
    {
      id: 1,
      name: 'John_Smith_ID_Card.pdf',
      type: 'Identity Document',
      size: '2.4 MB',
      uploadDate: '2024-03-08',
      status: 'Verified',
      userId: 'USR001',
      userName: 'John Smith'
    },
    {
      id: 2,
      name: 'TechCorp_Certificate.pdf',
      type: 'Corporate Document',
      size: '1.8 MB',
      uploadDate: '2024-03-07',
      status: 'Pending Review',
      userId: 'USR002',
      userName: 'TechCorp Inc.'
    },
    {
      id: 3,
      name: 'Bank_Statement_March.pdf',
      type: 'Financial Document',
      size: '3.2 MB',
      uploadDate: '2024-03-06',
      status: 'Approved',
      userId: 'USR003',
      userName: 'Sarah Johnson'
    }
  ]

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'pdf':
        return <FileText className='h-5 w-5 text-red-500' />
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <Image className='h-5 w-5 text-blue-500' />
      default:
        return <File className='h-5 w-5 text-gray-500' />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
      case 'Approved':
        return 'bg-green-100 text-green-800'
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>
            Document Management
          </h2>
          <p className='text-[#3a5054] mt-2'>
            Manage and review uploaded documents
          </p>
        </div>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
          <Upload className='h-5 w-5 mr-2' />
          Upload Document
        </button>
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
              placeholder='Search documents...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
            />
          </div>
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
          >
            <option value='all'>All Types</option>
            <option value='identity'>Identity Documents</option>
            <option value='financial'>Financial Documents</option>
            <option value='corporate'>Corporate Documents</option>
          </select>
        </div>
      </motion.div>

      {/* Documents Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
      >
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-[#e0d4b8]'>
            <thead className='bg-[#e0d4b8]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Document
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  User
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Type
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Size
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Upload Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Status
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-[#e0d4b8]'>
              {documents.map(doc => (
                <tr
                  key={doc.id}
                  className='hover:bg-[#fcd46a]/20 transition-colors'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      {getFileIcon(doc.name)}
                      <span className='ml-3 text-sm font-medium text-[#0f3d66]'>
                        {doc.name}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {doc.userName}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {doc.type}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {doc.size}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {doc.uploadDate}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        doc.status
                      )}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <div className='flex space-x-2'>
                      <button className='text-[#51779e] hover:text-[#0f3d66] transition-colors'>
                        <Eye className='h-4 w-4' />
                      </button>
                      <button className='text-[#f8b319] hover:text-[#fcd46a] transition-colors'>
                        <Download className='h-4 w-4' />
                      </button>
                      <button className='text-red-600 hover:text-red-800 transition-colors'>
                        <Trash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default DocumentManagement
