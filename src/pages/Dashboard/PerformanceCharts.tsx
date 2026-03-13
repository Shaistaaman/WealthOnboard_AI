import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Calendar, Download } from 'lucide-react'

const PerformanceCharts: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1M')
  const [chartType, setChartType] = useState('portfolio')

  // Mock performance data - will be replaced with real data
  const performanceData = {
    portfolio: {
      '1W': { return: 2.5, benchmark: 1.8 },
      '1M': { return: 8.2, benchmark: 6.1 },
      '3M': { return: 15.7, benchmark: 12.3 },
      '6M': { return: 22.4, benchmark: 18.9 },
      '1Y': { return: 28.6, benchmark: 24.2 }
    },
    allocation: {
      stocks: 65,
      bonds: 25,
      cash: 10
    }
  }

  const periods = ['1W', '1M', '3M', '6M', '1Y']

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Performance Analytics
        </h2>
        <button className='flex items-center px-4 py-2 bg-[#51779e] text-white rounded-lg hover:bg-[#0f3d66] transition-colors'>
          <Download className='h-4 w-4 mr-2' />
          Export Report
        </button>
      </div>

      {/* Chart Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex gap-2'>
            {periods.map(period => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-[#f8b319] text-[#0f3d66]'
                    : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <div className='flex gap-2'>
            <button
              onClick={() => setChartType('portfolio')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                chartType === 'portfolio'
                  ? 'bg-[#0f3d66] text-white'
                  : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
              }`}
            >
              Portfolio Performance
            </button>
            <button
              onClick={() => setChartType('allocation')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                chartType === 'allocation'
                  ? 'bg-[#0f3d66] text-white'
                  : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
              }`}
            >
              Asset Allocation
            </button>
          </div>
        </div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        {chartType === 'portfolio' ? (
          <div>
            <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
              Portfolio vs Benchmark Performance
            </h3>

            {/* Performance Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-[#f8b319]/10 p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <span className='text-[#3a5054] font-medium'>
                    Your Portfolio
                  </span>
                  <TrendingUp className='h-5 w-5 text-[#f8b319]' />
                </div>
                <div className='text-3xl font-bold text-[#0f3d66] mt-2'>
                  +
                  {
                    performanceData.portfolio[
                      selectedPeriod as keyof typeof performanceData.portfolio
                    ].return
                  }
                  %
                </div>
                <div className='text-sm text-[#3a5054] mt-1'>
                  {selectedPeriod} Return
                </div>
              </div>

              <div className='bg-[#51779e]/10 p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <span className='text-[#3a5054] font-medium'>Benchmark</span>
                  <BarChart3 className='h-5 w-5 text-[#51779e]' />
                </div>
                <div className='text-3xl font-bold text-[#51779e] mt-2'>
                  +
                  {
                    performanceData.portfolio[
                      selectedPeriod as keyof typeof performanceData.portfolio
                    ].benchmark
                  }
                  %
                </div>
                <div className='text-sm text-[#3a5054] mt-1'>
                  {selectedPeriod} Return
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className='h-64 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a] rounded-lg flex items-center justify-center'>
              <div className='text-center'>
                <BarChart3 className='h-16 w-16 text-[#0f3d66] mx-auto mb-4' />
                <p className='text-[#3a5054] font-medium'>
                  Interactive Performance Chart
                </p>
                <p className='text-sm text-[#3a5054]'>
                  Chart will be implemented with real-time data
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
              Asset Allocation
            </h3>

            {/* Allocation Summary */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <div className='text-2xl font-bold text-blue-600'>
                  {performanceData.allocation.stocks}%
                </div>
                <div className='text-sm text-[#3a5054]'>Stocks</div>
              </div>
              <div className='bg-green-50 p-4 rounded-lg'>
                <div className='text-2xl font-bold text-green-600'>
                  {performanceData.allocation.bonds}%
                </div>
                <div className='text-sm text-[#3a5054]'>Bonds</div>
              </div>
              <div className='bg-yellow-50 p-4 rounded-lg'>
                <div className='text-2xl font-bold text-yellow-600'>
                  {performanceData.allocation.cash}%
                </div>
                <div className='text-sm text-[#3a5054]'>Cash</div>
              </div>
            </div>

            {/* Pie Chart Placeholder */}
            <div className='h-64 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a] rounded-lg flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-[#0f3d66] rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>
                    Pie Chart
                  </span>
                </div>
                <p className='text-[#3a5054] font-medium'>
                  Asset Allocation Chart
                </p>
                <p className='text-sm text-[#3a5054]'>
                  Interactive pie chart will be implemented
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default PerformanceCharts
