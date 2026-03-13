import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign
} from 'lucide-react'

const TransactionRecords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const transactions = [
    {
      id: 'TXN001',
      type: 'Deposit',
      amount: 50000,
      currency: 'USD',
      fromAccount: 'External Bank',
      toAccount: 'USR001 - John Smith',
      status: 'Completed',
      timestamp: '2024-03-10 14:30:25',
      reference: 'DEP-2024-001'
    },
    {
      id: 'TXN002',
      type: 'Transfer',
      amount: 25000,
      currency: 'USD',
      fromAccount: 'USR001 - John Smith',
      toAccount: 'Investment Portfolio A',
      status: 'Completed',
      timestamp: '2024-03-10 15:45:12',
      reference: 'TRF-2024-002'
    },
    {
      id: 'TXN003',
      type: 'Withdrawal',
      amount: 10000,
      currency: 'USD',
      fromAccount: 'USR002 - Sarah Johnson',
      toAccount: 'External Bank',
      status: 'Pending',
      timestamp: '2024-03-10 16:20:08',
      reference: 'WTH-2024-003'
    }
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'Deposit':
        return <ArrowDownLeft className='h-5 w-5 text-green-600' />
      case 'Withdrawal':
        return <ArrowUpRight className='h-5 w-5 text-red-600' />
      case 'Transfer':
        return <ArrowUpRight className='h-5 w-5 text-blue-600' />
      default:
        return <DollarSign className='h-5 w-5 text-gray-600' />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>
            Transaction Records
          </h2>
          <p className='text-[#3a5054] mt-2'>
            Monitor and maintain all transaction records
          </p>
        </div>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
          <Download className='h-5 w-5 mr-2' />
          Export Records
        </button>
      </div>

      {/* Transaction Stats */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <div className='flex items-center'>
            <div className='p-3 bg-green-100 rounded-lg'>
              <ArrowDownLeft className='h-6 w-6 text-green-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-[#3a5054]'>
                Total Deposits
              </p>
              <p className='text-2xl font-bold text-[#0f3d66]'>$2.4M</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <div className='flex items-center'>
            <div className='p-3 bg-red-100 rounded-lg'>
              <ArrowUpRight className='h-6 w-6 text-red-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-[#3a5054]'>
                Total Withdrawals
              </p>
              <p className='text-2xl font-bold text-[#0f3d66]'>$890K</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <div className='flex items-center'>
            <div className='p-3 bg-blue-100 rounded-lg'>
              <DollarSign className='h-6 w-6 text-blue-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-[#3a5054]'>Net Flow</p>
              <p className='text-2xl font-bold text-[#0f3d66]'>$1.51M</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <div className='flex items-center'>
            <div className='p-3 bg-yellow-100 rounded-lg'>
              <Filter className='h-6 w-6 text-yellow-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-[#3a5054]'>Pending</p>
              <p className='text-2xl font-bold text-[#0f3d66]'>12</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#3a5054]' />
            <input
              type='text'
              placeholder='Search transactions...'
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
            <option value='deposit'>Deposits</option>
            <option value='withdrawal'>Withdrawals</option>
            <option value='transfer'>Transfers</option>
          </select>
        </div>
      </motion.div>

      {/* Transactions Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
      >
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-[#e0d4b8]'>
            <thead className='bg-[#e0d4b8]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Transaction
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Amount
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  From
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  To
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Status
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Timestamp
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-[#e0d4b8]'>
              {transactions.map(txn => (
                <tr
                  key={txn.id}
                  className='hover:bg-[#fcd46a]/20 transition-colors'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      {getTransactionIcon(txn.type)}
                      <div className='ml-3'>
                        <div className='text-sm font-medium text-[#0f3d66]'>
                          {txn.id}
                        </div>
                        <div className='text-sm text-[#3a5054]'>{txn.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-[#0f3d66]'>
                      {formatAmount(txn.amount, txn.currency)}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {txn.fromAccount}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {txn.toAccount}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        txn.status
                      )}`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                    {txn.timestamp}
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

export default TransactionRecords
