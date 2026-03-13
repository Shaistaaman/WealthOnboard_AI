import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  EyeOff,
  RefreshCw
} from 'lucide-react'

const AccountBalance: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  // Mock data - will be replaced with DynamoDB data
  const accountData = {
    totalBalance: 125750.5,
    availableBalance: 98250.3,
    investedAmount: 27500.2,
    todayChange: 1250.75,
    todayChangePercent: 1.02,
    currency: 'USD'
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: accountData.currency
    }).format(amount)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>Account Balance</h2>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors disabled:opacity-50'
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
          Refresh
        </button>
      </div>

      {/* Main Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-2xl p-8 text-white shadow-xl'
      >
        <div className='flex justify-between items-start mb-6'>
          <div>
            <h3 className='text-lg font-medium opacity-90'>
              Total Portfolio Value
            </h3>
            <div className='flex items-center mt-2'>
              {showBalance ? (
                <span className='text-4xl font-bold'>
                  {formatCurrency(accountData.totalBalance)}
                </span>
              ) : (
                <span className='text-4xl font-bold'>••••••••</span>
              )}
              <button
                onClick={() => setShowBalance(!showBalance)}
                className='ml-3 p-2 hover:bg-white/10 rounded-lg transition-colors'
              >
                {showBalance ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
          </div>
          <div className='text-right'>
            <div
              className={`flex items-center ${
                accountData.todayChange >= 0 ? 'text-green-300' : 'text-red-300'
              }`}
            >
              {accountData.todayChange >= 0 ? (
                <TrendingUp className='h-5 w-5 mr-1' />
              ) : (
                <TrendingDown className='h-5 w-5 mr-1' />
              )}
              <span className='font-semibold'>
                {accountData.todayChange >= 0 ? '+' : ''}
                {formatCurrency(accountData.todayChange)}
              </span>
            </div>
            <div className='text-sm opacity-75'>
              {accountData.todayChangePercent >= 0 ? '+' : ''}
              {accountData.todayChangePercent}% today
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='text-sm opacity-75'>Available Cash</p>
            <p className='text-xl font-semibold'>
              {showBalance
                ? formatCurrency(accountData.availableBalance)
                : '••••••••'}
            </p>
          </div>
          <div>
            <p className='text-sm opacity-75'>Invested Amount</p>
            <p className='text-xl font-semibold'>
              {showBalance
                ? formatCurrency(accountData.investedAmount)
                : '••••••••'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Account Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-[#3a5054]'>Cash Balance</p>
              <p className='text-2xl font-bold text-[#0f3d66]'>
                {showBalance
                  ? formatCurrency(accountData.availableBalance)
                  : '••••••••'}
              </p>
            </div>
            <div className='p-3 bg-green-100 rounded-lg'>
              <DollarSign className='h-6 w-6 text-green-600' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-[#3a5054]'>Investments</p>
              <p className='text-2xl font-bold text-[#0f3d66]'>
                {showBalance
                  ? formatCurrency(accountData.investedAmount)
                  : '••••••••'}
              </p>
            </div>
            <div className='p-3 bg-blue-100 rounded-lg'>
              <TrendingUp className='h-6 w-6 text-blue-600' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-[#3a5054]'>Today's P&L</p>
              <p
                className={`text-2xl font-bold ${
                  accountData.todayChange >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {showBalance
                  ? `${accountData.todayChange >= 0 ? '+' : ''}${formatCurrency(
                      accountData.todayChange
                    )}`
                  : '••••••••'}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${
                accountData.todayChange >= 0 ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              {accountData.todayChange >= 0 ? (
                <TrendingUp className='h-6 w-6 text-green-600' />
              ) : (
                <TrendingDown className='h-6 w-6 text-red-600' />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AccountBalance
