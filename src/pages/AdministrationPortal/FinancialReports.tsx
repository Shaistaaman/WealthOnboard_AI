import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp
} from 'lucide-react'

const FinancialReports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [selectedReport, setSelectedReport] = useState('all')

  const reportTypes = [
    {
      name: 'Portfolio Performance',
      description: 'Comprehensive portfolio performance analysis',
      icon: TrendingUp,
      lastGenerated: '2024-03-10'
    },
    {
      name: 'Transaction Summary',
      description: 'Detailed transaction reports and summaries',
      icon: BarChart3,
      lastGenerated: '2024-03-10'
    },
    {
      name: 'Asset Allocation',
      description: 'Asset allocation and diversification reports',
      icon: PieChart,
      lastGenerated: '2024-03-09'
    },
    {
      name: 'Compliance Report',
      description: 'Regulatory compliance and audit reports',
      icon: FileText,
      lastGenerated: '2024-03-08'
    }
  ]

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>Financial Reports</h2>
        <p className='text-[#3a5054] mt-2'>
          Generate and manage financial reports and analytics
        </p>
      </div>

      {/* Report Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex gap-4'>
            <select
              value={selectedPeriod}
              onChange={e => setSelectedPeriod(e.target.value)}
              className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
            >
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='yearly'>Yearly</option>
            </select>

            <select
              value={selectedReport}
              onChange={e => setSelectedReport(e.target.value)}
              className='px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319]'
            >
              <option value='all'>All Reports</option>
              <option value='performance'>Performance</option>
              <option value='transactions'>Transactions</option>
              <option value='compliance'>Compliance</option>
            </select>
          </div>

          <button className='flex items-center px-6 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
            <Download className='h-4 w-4 mr-2' />
            Generate Report
          </button>
        </div>
      </motion.div>

      {/* Report Types Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {reportTypes.map((report, index) => {
          const Icon = report.icon
          return (
            <motion.div
              key={report.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a] hover:shadow-xl transition-shadow'
            >
              <div className='flex items-start justify-between'>
                <div className='flex items-center'>
                  <div className='p-3 bg-[#f8b319] rounded-lg'>
                    <Icon className='h-6 w-6 text-[#0f3d66]' />
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg font-semibold text-[#0f3d66]'>
                      {report.name}
                    </h3>
                    <p className='text-sm text-[#3a5054] mt-1'>
                      {report.description}
                    </p>
                    <p className='text-xs text-[#51779e] mt-2'>
                      Last generated: {report.lastGenerated}
                    </p>
                  </div>
                </div>
                <button className='text-[#51779e] hover:text-[#0f3d66] transition-colors'>
                  <Download className='h-5 w-5' />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FinancialReports
