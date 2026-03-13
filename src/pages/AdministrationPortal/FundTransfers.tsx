import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftRight, DollarSign, Clock, CheckCircle } from 'lucide-react'

const FundTransfers: React.FC = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Fund Transfer Management
        </h2>
        <p className='text-[#3a5054] mt-2'>
          Process and monitor fund transfers between accounts
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <h3 className='text-xl font-bold text-[#0f3d66] mb-4'>
          Transfer Overview
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-[#f8b319] p-4 rounded-lg text-center'>
            <DollarSign className='h-8 w-8 text-[#0f3d66] mx-auto mb-2' />
            <div className='text-2xl font-bold text-[#0f3d66]'>$2.4M</div>
            <div className='text-sm text-[#0f3d66]'>Total Transfers Today</div>
          </div>
          <div className='bg-[#51779e] p-4 rounded-lg text-center'>
            <Clock className='h-8 w-8 text-white mx-auto mb-2' />
            <div className='text-2xl font-bold text-white'>12</div>
            <div className='text-sm text-white'>Pending Transfers</div>
          </div>
          <div className='bg-green-500 p-4 rounded-lg text-center'>
            <CheckCircle className='h-8 w-8 text-white mx-auto mb-2' />
            <div className='text-2xl font-bold text-white'>89</div>
            <div className='text-sm text-white'>Completed Today</div>
          </div>
        </div>

        <div className='text-center text-[#3a5054]'>
          Fund transfer management interface will be implemented here
        </div>
      </motion.div>
    </div>
  )
}

export default FundTransfers
