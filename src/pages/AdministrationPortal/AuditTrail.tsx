import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Download,
  Eye,
  Shield,
  User,
  Settings,
  AlertTriangle
} from 'lucide-react'

const AuditTrail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterAction, setFilterAction] = useState('all')

  const auditLogs = [
    {
      id: 1,
      action: 'User Login',
      user: 'admin@wealthonboard.ai',
      target: 'System',
      timestamp: '2024-03-10 16:45:23',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Administrator login successful'
    },
    {
      id: 2,
      action: 'KYC Approval',
      user: 'admin@wealthonboard.ai',
      target: 'USR001 - John Smith',
      timestamp: '2024-03-10 16:30:15',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'KYC documents approved for user'
    },
    {
      id: 3,
      action: 'Fund Transfer',
      user: 'system@wealthonboard.ai',
      target: 'TXN002',
      timestamp: '2024-03-10 15:45:12',
      ipAddress: 'System',
      status: 'Success',
      details: 'Transfer of $25,000 processed'
    }
  ]

  const getActionIcon = (action: string) => {
    if (action.includes('Login'))
      return <User className='h-4 w-4 text-blue-600' />
    if (action.includes('KYC'))
      return <Shield className='h-4 w-4 text-green-600' />
    if (action.includes('Transfer'))
      return <AlertTriangle className='h-4 w-4 text-yellow-600' />
    return <Settings className='h-4 w-4 text-gray-600' />
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-800'
      case 'Failed':
        return 'bg-red-100 text-red-800'
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>Audit Trail</h2>
          <p className='text-[#3a5054] mt-2'>
            Monitor system activities and generate audit reports
          </p>
        </div>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
          <Download className='h-5 w-5 mr-2' />
          Export Audit Log
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
              placeholder='Search audit logs...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
            />
          </div>
          <select
            value={filterAction}
            onChange={e => setFilterAction(e.target.value)}
            className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
          >
            <option value='all'>All Actions</option>
            <option value='login'>Login Events</option>
            <option value='kyc'>KYC Actions</option>
            <option value='transfer'>Fund Transfers</option>
          </select>
        </div>
      </motion.div>

      {/* Audit Logs Table */}
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
                  Action
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  User
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Target
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Timestamp
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  IP Address
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
              {auditLogs.map(log => (
                <tr
                  key={log.id}
                  className='hover:bg-[#fcd46a]/20 transition-colors'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      {getActionIcon(log.action)}
                      <span className='ml-3 text-sm font-medium text-[#0f3d66]'>
                        {log.action}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {log.user}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {log.target}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {log.timestamp}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {log.ipAddress}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        log.status
                      )}`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <button className='text-[#51779e] hover:text-[#0f3d66] transition-colors'>
                      <Eye className='h-4 w-4' />
                    </button>
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

export default AuditTrail
