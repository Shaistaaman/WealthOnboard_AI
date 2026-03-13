import React from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  RefreshCw
} from 'lucide-react'

const AccountReconciliation: React.FC = () => {
  const reconciliationStats = [
    {
      title: 'Accounts Reconciled',
      value: '1,847',
      change: '+12%',
      status: 'success',
      icon: CheckCircle
    },
    {
      title: 'Pending Reconciliation',
      value: '23',
      change: '-8%',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      title: 'Total Balance',
      value: '$45.2M',
      change: '+5.4%',
      status: 'success',
      icon: TrendingUp
    },
    {
      title: 'Discrepancies',
      value: '3',
      change: '-50%',
      status: 'error',
      icon: RefreshCw
    }
  ]

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Account Reconciliation
        </h2>
        <p className='text-[#3a5054] mt-2'>
          Monitor and reconcile account balances and transactions
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {reconciliationStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-[#3a5054]'>
                    {stat.title}
                  </p>
                  <p className='text-3xl font-bold text-[#0f3d66] mt-2'>
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      stat.status === 'success'
                        ? 'text-green-600'
                        : stat.status === 'warning'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change} from last period
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    stat.status === 'success'
                      ? 'bg-green-100'
                      : stat.status === 'warning'
                      ? 'bg-yellow-100'
                      : 'bg-red-100'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      stat.status === 'success'
                        ? 'text-green-600'
                        : stat.status === 'warning'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Reconciliation Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-bold text-[#0f3d66]'>
            Daily Reconciliation
          </h3>
          <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'>
            <RefreshCw className='h-4 w-4 mr-2' />
            Run Reconciliation
          </button>
        </div>

        <div className='text-center text-[#3a5054] py-12'>
          Account reconciliation dashboard will be implemented here
        </div>
      </motion.div>
    </div>
  )
}

export default AccountReconciliation
