import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

const Dashboard = () => {
  const navigate = useNavigate()
  const isProfileComplete = false // This should come from your user state management

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <main className='p-8'>
          {!isProfileComplete && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-burgundy-50 border-l-4 border-burgundy-950 p-4 rounded-md mb-6'
            >
              <h2 className='text-lg font-semibold text-burgundy-950 mb-2'>
                Welcome to WealthOnboard AI!
              </h2>
              <p className='text-burgundy-800 mb-4'>
                You don't have any Application yet. Please complete the forms to
                unlock all WealthOnboard AI features.
              </p>
              <button
                onClick={() => navigate('/onboarding/customer-info')}
                className='bg-burgundy-950 text-white px-4 py-2 rounded-md hover:bg-burgundy-800 transition-colors'
              >
                Submit Request
              </button>
            </motion.div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
