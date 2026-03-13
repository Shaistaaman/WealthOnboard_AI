import React from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ApplicationTracking: React.FC = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Application Tracking
        </h2>
        <p className='text-[#3a5054] mt-2'>
          Track onboarding application status and progress
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <h3 className='text-xl font-bold text-[#0f3d66] mb-4'>
          Application Status Overview
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
          <div className='bg-[#f8b319] p-4 rounded-lg text-center'>
            <div className='text-2xl font-bold text-[#0f3d66]'>45</div>
            <div className='text-sm text-[#0f3d66]'>New Applications</div>
          </div>
          <div className='bg-[#51779e] p-4 rounded-lg text-center'>
            <div className='text-2xl font-bold text-white'>23</div>
            <div className='text-sm text-white'>In Progress</div>
          </div>
          <div className='bg-green-500 p-4 rounded-lg text-center'>
            <div className='text-2xl font-bold text-white'>156</div>
            <div className='text-sm text-white'>Completed</div>
          </div>
          <div className='bg-red-500 p-4 rounded-lg text-center'>
            <div className='text-2xl font-bold text-white'>8</div>
            <div className='text-sm text-white'>Rejected</div>
          </div>
        </div>

        <div className='text-center text-[#3a5054]'>
          Application tracking interface will be implemented here
        </div>
      </motion.div>
    </div>
  )
}

export default ApplicationTracking
