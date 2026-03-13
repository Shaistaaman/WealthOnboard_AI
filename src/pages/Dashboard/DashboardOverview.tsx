import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  FileText,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
  PieChart,
  AlertCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const DashboardOverview: React.FC = () => {
  // Mock user state - will be replaced with real data from DynamoDB
  const [userState] = useState({
    isFirstTime: false, // Set to true to see first-time user experience
    profileComplete: true,
    onboardingComplete: true,
    hasInvestments: true
  })

  // Mock profile data
  const profileData = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    joinDate: '2024-01-15',
    completionPercentage: 85
  }

  // Mock portfolio data
  const portfolioData = {
    totalValue: 125750.5,
    todayChange: 1250.75,
    todayChangePercent: 1.02,
    positions: 12,
    allocation: {
      stocks: 65,
      bonds: 25,
      cash: 10
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  // First-time user experience
  if (userState.isFirstTime || !userState.onboardingComplete) {
    return (
      <div className='space-y-6'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-[#0f3d66] mb-2'>
            Welcome to WealthOnboard AI!
          </h1>
          <p className='text-xl text-[#3a5054]'>
            Let's get you started on your investment journey
          </p>
        </div>

        {/* Submit Request Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-2xl p-8 text-white text-center'
        >
          <FileText className='h-16 w-16 mx-auto mb-6 text-[#f8b319]' />
          <h2 className='text-3xl font-bold mb-4'>
            Submit Your Investment Request
          </h2>
          <p className='text-lg mb-8 opacity-90'>
            Complete your profile and start your personalized investment journey
            with our AI-powered platform
          </p>
          <Link
            to='/onboarding/customer-info'
            className='inline-flex items-center px-8 py-4 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-all duration-300 font-semibold text-lg'
          >
            Start Onboarding
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </motion.div>

        {/* Profile Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-4'>
            Your Profile
          </h3>
          <div className='flex items-center space-x-4'>
            <div className='w-16 h-16 bg-[#f8b319] rounded-full flex items-center justify-center'>
              <User className='h-8 w-8 text-[#0f3d66]' />
            </div>
            <div>
              <h4 className='text-lg font-semibold text-[#0f3d66]'>
                {profileData.name}
              </h4>
              <p className='text-[#3a5054]'>{profileData.email}</p>
              <p className='text-sm text-[#3a5054]'>
                Member since {profileData.joinDate}
              </p>
            </div>
          </div>

          <div className='mt-6'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-[#3a5054]'>Profile Completion</span>
              <span className='text-sm font-semibold text-[#f8b319]'>
                {profileData.completionPercentage}%
              </span>
            </div>
            <div className='w-full bg-[#e0d4b8] rounded-full h-2'>
              <div
                className='bg-[#f8b319] h-2 rounded-full transition-all duration-500'
                style={{ width: `${profileData.completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-4'>
            Next Steps
          </h3>
          <div className='space-y-3'>
            <div className='flex items-center p-3 bg-[#e0d4b8]/30 rounded-lg'>
              <div className='w-8 h-8 bg-[#f8b319] rounded-full flex items-center justify-center mr-3'>
                <span className='text-[#0f3d66] font-semibold text-sm'>1</span>
              </div>
              <span className='text-[#0f3d66] font-medium'>
                Complete your onboarding process
              </span>
            </div>
            <div className='flex items-center p-3 bg-[#e0d4b8]/30 rounded-lg opacity-50'>
              <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3'>
                <span className='text-gray-600 font-semibold text-sm'>2</span>
              </div>
              <span className='text-gray-600 font-medium'>
                Take risk assessment
              </span>
            </div>
            <div className='flex items-center p-3 bg-[#e0d4b8]/30 rounded-lg opacity-50'>
              <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3'>
                <span className='text-gray-600 font-semibold text-sm'>3</span>
              </div>
              <span className='text-gray-600 font-medium'>
                Choose investment model
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Experienced user dashboard
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-[#0f3d66]'>
            Welcome back, {profileData.name.split(' ')[0]}!
          </h1>
          <p className='text-[#3a5054] mt-1'>Here's your portfolio overview</p>
        </div>
        <div className='text-right'>
          <div className='text-sm text-[#3a5054]'>Last updated</div>
          <div className='text-sm font-semibold text-[#0f3d66]'>Just now</div>
        </div>
      </div>

      {/* Portfolio Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-2xl p-8 text-white'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h3 className='text-lg font-medium opacity-90 mb-2'>
              Total Portfolio Value
            </h3>
            <div className='text-4xl font-bold'>
              {formatCurrency(portfolioData.totalValue)}
            </div>
            <div
              className={`flex items-center mt-2 ${
                portfolioData.todayChange >= 0
                  ? 'text-green-300'
                  : 'text-red-300'
              }`}
            >
              <TrendingUp className='h-4 w-4 mr-1' />
              <span>
                {portfolioData.todayChange >= 0 ? '+' : ''}
                {formatCurrency(portfolioData.todayChange)}(
                {portfolioData.todayChangePercent >= 0 ? '+' : ''}
                {portfolioData.todayChangePercent}%) today
              </span>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium opacity-90 mb-2'>
              Active Positions
            </h3>
            <div className='text-4xl font-bold'>{portfolioData.positions}</div>
            <div className='text-sm opacity-75 mt-2'>
              Across multiple asset classes
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium opacity-90 mb-2'>
              Asset Allocation
            </h3>
            <div className='flex space-x-4 mt-2'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>
                  {portfolioData.allocation.stocks}%
                </div>
                <div className='text-xs opacity-75'>Stocks</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>
                  {portfolioData.allocation.bonds}%
                </div>
                <div className='text-xs opacity-75'>Bonds</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>
                  {portfolioData.allocation.cash}%
                </div>
                <div className='text-xs opacity-75'>Cash</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to='/dashboard/account-balance'
            className='block bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a] hover:shadow-xl transition-shadow'
          >
            <DollarSign className='h-8 w-8 text-[#f8b319] mb-3' />
            <h3 className='font-semibold text-[#0f3d66]'>Account Balance</h3>
            <p className='text-sm text-[#3a5054] mt-1'>View detailed balance</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to='/dashboard/performance-charts'
            className='block bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a] hover:shadow-xl transition-shadow'
          >
            <TrendingUp className='h-8 w-8 text-[#51779e] mb-3' />
            <h3 className='font-semibold text-[#0f3d66]'>Performance</h3>
            <p className='text-sm text-[#3a5054] mt-1'>Charts & analytics</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to='/dashboard/fund-details'
            className='block bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a] hover:shadow-xl transition-shadow'
          >
            <PieChart className='h-8 w-8 text-[#3a5054] mb-3' />
            <h3 className='font-semibold text-[#0f3d66]'>Fund Details</h3>
            <p className='text-sm text-[#3a5054] mt-1'>Asset allocation</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to='/dashboard/ai-advisor'
            className='block bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a] hover:shadow-xl transition-shadow'
          >
            <CheckCircle className='h-8 w-8 text-green-600 mb-3' />
            <h3 className='font-semibold text-[#0f3d66]'>AI Advisor</h3>
            <p className='text-sm text-[#3a5054] mt-1'>Get guidance</p>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardOverview
