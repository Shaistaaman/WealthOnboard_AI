import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Settings,
  FileText
} from 'lucide-react'

const TradingPermissions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock permissions data - will be replaced with DynamoDB data
  const permissionsData = {
    account: {
      level: 'Level 2 - Options Trading',
      status: 'Active',
      approvedDate: '2024-01-15',
      expiryDate: '2025-01-15'
    },
    permissions: [
      {
        category: 'Equities',
        name: 'Stock Trading',
        status: 'approved',
        description: 'Buy and sell individual stocks',
        riskLevel: 'Low',
        requirements: ['Basic KYC', 'Investment Experience']
      },
      {
        category: 'Equities',
        name: 'Margin Trading',
        status: 'approved',
        description: 'Trade with borrowed funds',
        riskLevel: 'Medium',
        requirements: ['Advanced KYC', 'Minimum Balance $25,000']
      },
      {
        category: 'Options',
        name: 'Covered Calls',
        status: 'approved',
        description: 'Sell call options on owned stocks',
        riskLevel: 'Medium',
        requirements: ['Options Agreement', 'Level 1 Options']
      },
      {
        category: 'Options',
        name: 'Cash-Secured Puts',
        status: 'approved',
        description: 'Sell put options with cash backing',
        riskLevel: 'Medium',
        requirements: ['Options Agreement', 'Level 2 Options']
      },
      {
        category: 'Options',
        name: 'Naked Options',
        status: 'pending',
        description: 'Advanced options strategies',
        riskLevel: 'High',
        requirements: ['Level 3 Options', 'High Net Worth', 'Experience']
      },
      {
        category: 'Derivatives',
        name: 'Futures Trading',
        status: 'restricted',
        description: 'Trade commodity and financial futures',
        riskLevel: 'High',
        requirements: ['Futures Agreement', 'Substantial Experience']
      },
      {
        category: 'International',
        name: 'Foreign Markets',
        status: 'approved',
        description: 'Trade in international markets',
        riskLevel: 'Medium',
        requirements: ['International Trading Agreement']
      },
      {
        category: 'Crypto',
        name: 'Cryptocurrency',
        status: 'pending',
        description: 'Trade digital assets',
        riskLevel: 'Very High',
        requirements: ['Crypto Agreement', 'Risk Acknowledgment']
      }
    ]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className='h-5 w-5 text-green-600' />
      case 'pending':
        return <AlertTriangle className='h-5 w-5 text-yellow-600' />
      case 'restricted':
        return <XCircle className='h-5 w-5 text-red-600' />
      default:
        return <Shield className='h-5 w-5 text-gray-600' />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'restricted':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-600 bg-green-100'
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'High':
        return 'text-orange-600 bg-orange-100'
      case 'Very High':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredPermissions =
    selectedCategory === 'all'
      ? permissionsData.permissions
      : permissionsData.permissions.filter(p => p.category === selectedCategory)

  const categories = [
    'all',
    ...Array.from(new Set(permissionsData.permissions.map(p => p.category)))
  ]

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Trading Permissions
        </h2>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'>
          <FileText className='h-4 w-4 mr-2' />
          Request New Permission
        </button>
      </div>

      {/* Account Level Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-xl p-6 text-white shadow-xl'
      >
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-medium opacity-90'>
              Current Trading Level
            </h3>
            <div className='text-3xl font-bold mt-2'>
              {permissionsData.account.level}
            </div>
            <div className='text-sm opacity-75 mt-1'>
              Approved: {permissionsData.account.approvedDate} | Expires:{' '}
              {permissionsData.account.expiryDate}
            </div>
          </div>
          <div className='p-4 bg-white/10 rounded-lg'>
            <Shield className='h-8 w-8' />
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex flex-wrap gap-2'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-[#0f3d66] text-white'
                  : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Permissions Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {filteredPermissions.map((permission, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a] hover:shadow-xl transition-shadow'
          >
            <div className='flex items-start justify-between mb-4'>
              <div className='flex items-center'>
                {getStatusIcon(permission.status)}
                <h3 className='text-lg font-semibold text-[#0f3d66] ml-3'>
                  {permission.name}
                </h3>
              </div>
              <div className='flex flex-col items-end gap-2'>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    permission.status
                  )} capitalize`}
                >
                  {permission.status}
                </span>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(
                    permission.riskLevel
                  )}`}
                >
                  {permission.riskLevel} Risk
                </span>
              </div>
            </div>

            <p className='text-[#3a5054] mb-4'>{permission.description}</p>

            <div className='space-y-3'>
              <div>
                <span className='text-sm font-medium text-[#0f3d66]'>
                  Category:
                </span>
                <span className='text-sm text-[#3a5054] ml-2'>
                  {permission.category}
                </span>
              </div>

              <div>
                <span className='text-sm font-medium text-[#0f3d66]'>
                  Requirements:
                </span>
                <div className='mt-2 space-y-1'>
                  {permission.requirements.map((req, reqIndex) => (
                    <div
                      key={reqIndex}
                      className='flex items-center text-sm text-[#3a5054]'
                    >
                      <CheckCircle className='h-3 w-3 text-green-600 mr-2' />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {permission.status === 'pending' && (
              <div className='mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200'>
                <div className='flex items-center'>
                  <AlertTriangle className='h-4 w-4 text-yellow-600 mr-2' />
                  <span className='text-sm text-yellow-800'>
                    Application under review
                  </span>
                </div>
              </div>
            )}

            {permission.status === 'restricted' && (
              <div className='mt-4 p-3 bg-red-50 rounded-lg border border-red-200'>
                <div className='flex items-center'>
                  <XCircle className='h-4 w-4 text-red-600 mr-2' />
                  <span className='text-sm text-red-800'>
                    Additional requirements needed
                  </span>
                </div>
              </div>
            )}

            <div className='mt-4 flex gap-2'>
              {permission.status !== 'approved' && (
                <button className='flex-1 px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors text-sm font-medium'>
                  Apply Now
                </button>
              )}
              <button className='px-4 py-2 border border-[#51779e] text-[#51779e] rounded-lg hover:bg-[#51779e] hover:text-white transition-colors text-sm font-medium'>
                <Settings className='h-4 w-4' />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TradingPermissions
