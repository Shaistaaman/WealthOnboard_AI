import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PieChart,
  BarChart3,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw
} from 'lucide-react'

const FundDetails: React.FC = () => {
  const [selectedView, setSelectedView] = useState('allocation')

  // Mock fund data - will be replaced with DynamoDB data
  const fundData = {
    totalValue: 125750.5,
    allocation: [
      {
        name: 'US Large Cap Stocks',
        value: 45250.3,
        percentage: 36,
        color: '#0f3d66'
      },
      {
        name: 'International Stocks',
        value: 31462.65,
        percentage: 25,
        color: '#51779e'
      },
      { name: 'Bonds', value: 25150.1, percentage: 20, color: '#f8b319' },
      {
        name: 'Real Estate (REITs)',
        value: 12575.05,
        percentage: 10,
        color: '#fcd46a'
      },
      {
        name: 'Cash & Equivalents',
        value: 11312.4,
        percentage: 9,
        color: '#e0d4b8'
      }
    ],
    recentTransactions: [
      {
        type: 'Buy',
        fund: 'US Large Cap Stocks',
        amount: 5000,
        date: '2024-03-10',
        status: 'Completed'
      },
      {
        type: 'Sell',
        fund: 'Bonds',
        amount: 2500,
        date: '2024-03-08',
        status: 'Completed'
      },
      {
        type: 'Buy',
        fund: 'International Stocks',
        amount: 3000,
        date: '2024-03-05',
        status: 'Pending'
      }
    ],
    performance: {
      '1M': { return: 2.5, benchmark: 1.8 },
      '3M': { return: 7.2, benchmark: 5.9 },
      '6M': { return: 12.8, benchmark: 10.5 },
      '1Y': { return: 18.4, benchmark: 15.2 }
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Fund Details & Allocation
        </h2>
        <button className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'>
          <RefreshCw className='h-4 w-4 mr-2' />
          Refresh Data
        </button>
      </div>

      {/* View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex gap-2'>
          <button
            onClick={() => setSelectedView('allocation')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedView === 'allocation'
                ? 'bg-[#0f3d66] text-white'
                : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
            }`}
          >
            Asset Allocation
          </button>
          <button
            onClick={() => setSelectedView('performance')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedView === 'performance'
                ? 'bg-[#0f3d66] text-white'
                : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setSelectedView('transactions')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedView === 'transactions'
                ? 'bg-[#0f3d66] text-white'
                : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
            }`}
          >
            Recent Transactions
          </button>
        </div>
      </motion.div>

      {/* Total Portfolio Value */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-xl p-6 text-white shadow-xl'
      >
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-medium opacity-90'>
              Total Portfolio Value
            </h3>
            <div className='text-4xl font-bold mt-2'>
              {formatCurrency(fundData.totalValue)}
            </div>
          </div>
          <div className='p-4 bg-white/10 rounded-lg'>
            <DollarSign className='h-8 w-8' />
          </div>
        </div>
      </motion.div>

      {/* Content based on selected view */}
      {selectedView === 'allocation' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-6'
        >
          {/* Allocation Chart Placeholder */}
          <div className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'>
            <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
              Asset Allocation
            </h3>
            <div className='h-64 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a] rounded-lg flex items-center justify-center'>
              <div className='text-center'>
                <PieChart className='h-16 w-16 text-[#0f3d66] mx-auto mb-4' />
                <p className='text-[#3a5054] font-medium'>
                  Interactive Pie Chart
                </p>
                <p className='text-sm text-[#3a5054]'>
                  Asset allocation visualization
                </p>
              </div>
            </div>
          </div>

          {/* Allocation Details */}
          <div className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'>
            <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
              Allocation Breakdown
            </h3>
            <div className='space-y-4'>
              {fundData.allocation.map((asset, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-[#e0d4b8]/30 rounded-lg'
                >
                  <div className='flex items-center'>
                    <div
                      className='w-4 h-4 rounded-full mr-3'
                      style={{ backgroundColor: asset.color }}
                    ></div>
                    <div>
                      <div className='font-medium text-[#0f3d66]'>
                        {asset.name}
                      </div>
                      <div className='text-sm text-[#3a5054]'>
                        {asset.percentage}% of portfolio
                      </div>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='font-semibold text-[#0f3d66]'>
                      {formatCurrency(asset.value)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {selectedView === 'performance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Performance Overview
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
            {Object.entries(fundData.performance).map(([period, data]) => (
              <div
                key={period}
                className='bg-[#e0d4b8]/30 p-4 rounded-lg text-center'
              >
                <div className='text-sm text-[#3a5054] mb-1'>{period}</div>
                <div className='text-2xl font-bold text-[#0f3d66]'>
                  +{data.return}%
                </div>
                <div className='text-xs text-[#3a5054]'>
                  vs {data.benchmark}% benchmark
                </div>
              </div>
            ))}
          </div>

          <div className='h-64 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a] rounded-lg flex items-center justify-center'>
            <div className='text-center'>
              <BarChart3 className='h-16 w-16 text-[#0f3d66] mx-auto mb-4' />
              <p className='text-[#3a5054] font-medium'>Performance Chart</p>
              <p className='text-sm text-[#3a5054]'>
                Historical performance visualization
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {selectedView === 'transactions' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
        >
          <div className='p-6 border-b border-[#e0d4b8]'>
            <h3 className='text-xl font-semibold text-[#0f3d66]'>
              Recent Transactions
            </h3>
          </div>

          <div className='overflow-x-auto'>
            <table className='min-w-full'>
              <thead className='bg-[#e0d4b8]'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                    Type
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                    Fund
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                    Amount
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                    Date
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-[#e0d4b8]'>
                {fundData.recentTransactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className='hover:bg-[#fcd46a]/20 transition-colors'
                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        {transaction.type === 'Buy' ? (
                          <ArrowDownLeft className='h-4 w-4 text-green-600 mr-2' />
                        ) : (
                          <ArrowUpRight className='h-4 w-4 text-red-600 mr-2' />
                        )}
                        <span
                          className={`font-medium ${
                            transaction.type === 'Buy'
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[#0f3d66]'>
                      {transaction.fund}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0f3d66]'>
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[#3a5054]'>
                      {transaction.date}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          transaction.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default FundDetails
