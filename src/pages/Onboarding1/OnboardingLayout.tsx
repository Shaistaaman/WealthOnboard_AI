import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoImage from '../../assets/logo.png'

const steps = [
  { id: 1, label: 'Account Info' },
  { id: 2, label: 'Upload Documents' },
  { id: 3, label: 'KYC Verification' },
  { id: 4, label: 'Compliance' },
  { id: 5, label: 'Risk Appetite' }
]

const tabs = [
  { id: 'customer-info', label: 'Customer Info' },
  { id: 'employment-info', label: 'Employment Info' },
  { id: 'regulatory-info', label: 'Regulatory Info' },
  { id: 'financial-info', label: 'Financial Information' },
  { id: 'source-of-wealth', label: 'Source of Wealth' },
  { id: 'trading-permissions', label: 'Trading Permissions' },
  { id: 'others', label: 'Others' }
]

const OnboardingLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentTab = location.pathname.split('/').pop()

  const handleTabClick = (tabId: string) => {
    navigate(`/onboarding/${tabId}`)
  }

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='mb-8'>
          <img src={logoImage} alt='WealthOnboard AI' className='h-12 w-auto' />
        </div>

        <div className='bg-white rounded-xl shadow-sm p-8'>
          <div className='mb-8'>
            <h1 className='text-2xl font-semibold text-burgundy-950 mb-2'>
              Sign up
            </h1>
            <p className='text-neutral-600'>
              Please fill the following information to create your account
            </p>
          </div>

          {/* Progress Steps */}
          <div className='flex justify-between mb-8'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center'>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step.id === 1
                      ? 'bg-burgundy-950 text-white'
                      : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  {step.id}
                </div>
                <span className='ml-2 text-sm font-medium text-neutral-600'>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className='w-24 h-px bg-neutral-200 mx-4' />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className='border-b border-neutral-200 mb-8'>
            <nav className='flex space-x-8'>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    currentTab === tab.id
                      ? 'border-burgundy-950 text-burgundy-950'
                      : 'border-transparent text-neutral-500 hover:text-burgundy-800 hover:border-burgundy-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingLayout
