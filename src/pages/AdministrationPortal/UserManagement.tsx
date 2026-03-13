import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Download,
  Mail
} from 'lucide-react'

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      accountType: 'Individual',
      status: 'Active',
      kycStatus: 'Approved',
      joinDate: '2024-01-15',
      lastLogin: '2024-03-10'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      accountType: 'Corporate',
      status: 'Active',
      kycStatus: 'Pending',
      joinDate: '2024-02-20',
      lastLogin: '2024-03-09'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      accountType: 'Individual',
      status: 'Inactive',
      kycStatus: 'Approved',
      joinDate: '2024-01-08',
      lastLogin: '2024-02-28'
    },
    {
      id: 4,
      name: 'Lisa Rodriguez',
      email: 'lisa.rodriguez@email.com',
      accountType: 'Individual',
      status: 'Active',
      kycStatus: 'Under Review',
      joinDate: '2024-03-01',
      lastLogin: '2024-03-10'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Inactive':
        return 'bg-red-100 text-red-800'
      case 'Suspended':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getKYCStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800'
      case 'Pending':
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
      {/* Page Header */}
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>User Management</h2>
          <p className='text-[#3a5054] mt-2'>
            Manage user accounts, permissions, and onboarding status
          </p>
        </div>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
          <Plus className='h-5 w-5 mr-2' />
          Add New User
        </button>
      </div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#3a5054]' />
            <input
              type='text'
              placeholder='Search users by name, email, or ID...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            />
          </div>
          <div className='flex gap-2'>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            >
              <option value='all'>All Status</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
              <option value='suspended'>Suspended</option>
            </select>
            <button className='flex items-center px-4 py-2 border border-[#e0d4b8] rounded-lg hover:bg-[#e0d4b8] transition-colors'>
              <Filter className='h-5 w-5 mr-2' />
              More Filters
            </button>
            <button className='flex items-center px-4 py-2 bg-[#51779e] text-white rounded-lg hover:bg-[#0f3d66] transition-colors'>
              <Download className='h-5 w-5 mr-2' />
              Export
            </button>
          </div>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
      >
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-[#e0d4b8]'>
            <thead className='bg-[#e0d4b8]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  User
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Account Type
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  KYC Status
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Join Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Last Login
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-[#e0d4b8]'>
              {users.map(user => (
                <tr
                  key={user.id}
                  className='hover:bg-[#fcd46a]/20 transition-colors'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <div className='h-10 w-10 rounded-full bg-[#f8b319] flex items-center justify-center'>
                          <span className='text-[#0f3d66] font-semibold text-sm'>
                            {user.name
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </span>
                        </div>
                      </div>
                      <div className='ml-4'>
                        <div className='text-sm font-medium text-[#0f3d66]'>
                          {user.name}
                        </div>
                        <div className='text-sm text-[#3a5054]'>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span className='text-sm text-[#3a5054]'>
                      {user.accountType}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getKYCStatusColor(
                        user.kycStatus
                      )}`}
                    >
                      {user.kycStatus}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {user.joinDate}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {user.lastLogin}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <div className='flex space-x-2'>
                      <button className='text-[#51779e] hover:text-[#0f3d66] transition-colors'>
                        <Eye className='h-4 w-4' />
                      </button>
                      <button className='text-[#f8b319] hover:text-[#fcd46a] transition-colors'>
                        <Edit className='h-4 w-4' />
                      </button>
                      <button className='text-[#3a5054] hover:text-[#0f3d66] transition-colors'>
                        <Mail className='h-4 w-4' />
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

        {/* Pagination */}
        <div className='bg-[#e0d4b8] px-6 py-3 flex items-center justify-between'>
          <div className='text-sm text-[#3a5054]'>
            Showing 1 to 4 of 2,847 users
          </div>
          <div className='flex space-x-2'>
            <button className='px-3 py-1 border border-[#51779e] text-[#51779e] rounded hover:bg-[#51779e] hover:text-white transition-colors'>
              Previous
            </button>
            <button className='px-3 py-1 bg-[#f8b319] text-[#0f3d66] rounded'>
              1
            </button>
            <button className='px-3 py-1 border border-[#51779e] text-[#51779e] rounded hover:bg-[#51779e] hover:text-white transition-colors'>
              2
            </button>
            <button className='px-3 py-1 border border-[#51779e] text-[#51779e] rounded hover:bg-[#51779e] hover:text-white transition-colors'>
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default UserManagement
