import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  FileText,
  Filter
} from 'lucide-react'

const ProfitLoss: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [selectedYear, setSelectedYear] = useState('2024')

  // Mock P&L data - will be replaced with DynamoDB data
  const plData = {
    monthly: [
      { month: 'January', realized: 2500.5, unrealized: 1200.3, total: 3700.8 },
      {
        month: 'February',
        realized: -800.25,
        unrealized: 2100.75,
        total: 1300.5
      },
      { month: 'March', realized: 4200.0, unrealized: -500.25, total: 3699.75 }
    ],
    quarterly: [
      {
        period: 'Q1 2024',
        realized: 5900.25,
        unrealized: 2800.8,
        total: 8701.05
      },
      {
        period: 'Q2 2024',
        realized: 3200.5,
        unrealized: 1500.25,
        total: 4700.75
      }
    ],
    yearly: [
      { year: '2024', realized: 12500.75, unrealized: 4800.3, total: 17301.05 },
      { year: '2023', realized: 8900.5, unrealized: 3200.25, total: 12100.75 }
    ]
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getCurrentData = () => {
    switch (selectedPeriod) {
      case 'monthly':
        return plData.monthly
      case 'quarterly':
        return plData.quarterly
      case 'yearly':
        return plData.yearly
      default:
        return plData.monthly
    }
  }

  const handleDownload = (format: string) => {
    // Mock download functionality
    console.log(`Downloading P&L statement in ${format} format`)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Profit & Loss Statements
        </h2>
        <div className='flex gap-2'>
          <button
            onClick={() => handleDownload('PDF')}
            className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'
          >
            <Download className='h-4 w-4 mr-2' />
            Download PDF
          </button>
          <button
            onClick={() => handleDownload('Excel')}
            className='flex items-center px-4 py-2 bg-[#51779e] text-white rounded-lg hover:bg-[#0f3d66] transition-colors'
          >
            <FileText className='h-4 w-4 mr-2' />
            Export Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-2'>
              <Calendar className='h-5 w-5 text-[#3a5054]' />
              <span className='font-medium text-[#3a5054]'>Period:</span>
            </div>
            <select
              value={selectedPeriod}
              onChange={e => setSelectedPeriod(e.target.value)}
              className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            >
              <option value='monthly'>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='yearly'>Yearly</option>
            </select>
          </div>

          <div className='flex gap-4 items-center'>
            <span className='font-medium text-[#3a5054]'>Year:</span>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            >
              <option value='2024'>2024</option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* P&L Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Realized P&L
            </h3>
            <div className='p-2 bg-green-100 rounded-lg'>
              <TrendingUp className='h-5 w-5 text-green-600' />
            </div>
          </div>
          <div className='text-3xl font-bold text-green-600'>
            {formatCurrency(
              getCurrentData().reduce(
                (sum, item) => sum + (item.realized || 0),
                0
              )
            )}
          </div>
          <p className='text-sm text-[#3a5054] mt-2'>
            Gains/losses from closed positions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Unrealized P&L
            </h3>
            <div className='p-2 bg-blue-100 rounded-lg'>
              <TrendingUp className='h-5 w-5 text-blue-600' />
            </div>
          </div>
          <div className='text-3xl font-bold text-blue-600'>
            {formatCurrency(
              getCurrentData().reduce(
                (sum, item) => sum + (item.unrealized || 0),
                0
              )
            )}
          </div>
          <p className='text-sm text-[#3a5054] mt-2'>
            Current market value changes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-[#0f3d66]'>Total P&L</h3>
            <div className='p-2 bg-[#f8b319] rounded-lg'>
              <TrendingUp className='h-5 w-5 text-[#0f3d66]' />
            </div>
          </div>
          <div className='text-3xl font-bold text-[#0f3d66]'>
            {formatCurrency(
              getCurrentData().reduce((sum, item) => sum + (item.total || 0), 0)
            )}
          </div>
          <p className='text-sm text-[#3a5054] mt-2'>
            Combined realized + unrealized
          </p>
        </motion.div>
      </div>

      {/* P&L Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
      >
        <div className='p-6 border-b border-[#e0d4b8]'>
          <h3 className='text-xl font-semibold text-[#0f3d66]'>
            Detailed P&L Breakdown
          </h3>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full'>
            <thead className='bg-[#e0d4b8]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Period
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Realized P&L
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Unrealized P&L
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Total P&L
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-[#0f3d66] uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-[#e0d4b8]'>
              {getCurrentData().map((item, index) => (
                <tr
                  key={index}
                  className='hover:bg-[#fcd46a]/20 transition-colors'
                >
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0f3d66]'>
                    {item.month || item.period || item.year}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span
                      className={`font-semibold ${
                        (item.realized || 0) >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {formatCurrency(item.realized || 0)}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span
                      className={`font-semibold ${
                        (item.unrealized || 0) >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {formatCurrency(item.unrealized || 0)}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span
                      className={`font-bold ${
                        (item.total || 0) >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {formatCurrency(item.total || 0)}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <button className='text-[#51779e] hover:text-[#0f3d66] transition-colors'>
                      <Download className='h-4 w-4' />
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

export default ProfitLoss
