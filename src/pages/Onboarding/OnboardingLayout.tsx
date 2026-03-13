import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LayoutDashboard } from 'lucide-react'
import logoImage from '../../assets/logo.png'
import Button from '../../components/Button'
import SaveConfirmationModal from '../../components/SaveConfirmationModal'

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
  const [showSaveModal, setShowSaveModal] = useState(false)

  const handleTabClick = (tabId: string) => {
    navigate(`/onboarding/${tabId}`)
  }

  const handleStepClick = (stepId: number) => {
    const stepRoutes = {
      1: 'customer-info',
      2: 'upload-documents',
      3: 'kyc-verification',
      4: 'compliance',
      5: 'risk-appetite'
    }
    navigate(`/onboarding/${stepRoutes[stepId as keyof typeof stepRoutes]}`)
  }

  const handleDashboardClick = () => {
    setShowSaveModal(true)
  }

  const handleSaveAndContinue = () => {
    // Save logic here - you can implement actual save functionality
    console.log('Saving onboarding progress...')
    setShowSaveModal(false)
    navigate('/dashboard')
  }

  const handleDontSave = () => {
    setShowSaveModal(false)
    navigate('/dashboard')
  }

  const handleCloseSaveModal = () => {
    setShowSaveModal(false)
  }

  const getCurrentStep = () => {
    const accountInfoTabs = [
      'customer-info',
      'employment-info',
      'regulatory-info',
      'financial-info',
      'source-of-wealth',
      'trading-permissions',
      'others'
    ]
    if (accountInfoTabs.includes(currentTab || '')) return 1
    if (currentTab === 'upload-documents') return 2
    if (currentTab === 'kyc-verification') return 3
    if (currentTab === 'compliance') return 4
    if (currentTab === 'risk-appetite') return 5
    return 1
  }

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Header with Logo and Dashboard Button */}
        <div className='mb-8 flex items-center justify-between'>
          <img src={logoImage} alt='WealthOnboard AI' className='h-12 w-auto' />

          {/* Dashboard Button */}
          <Button
            variant='secondary'
            onClick={handleDashboardClick}
            className='flex items-center space-x-2 px-6 py-3'
          >
            <LayoutDashboard className='h-4 w-4' />
            <span>Dashboard</span>
          </Button>
        </div>

        <div className='bg-white rounded-xl shadow-sm p-8'>
          <div className='mb-8'>
            <h1 className='text-2xl font-semibold text-[#0f3d66] mb-2'>
              Sign up
            </h1>
            <p className='text-[#3a5054]'>
              Please fill the following information to create your account
            </p>
          </div>

          {/* Progress Steps */}
          <div className='flex justify-between mb-8'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center'>
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors ${
                    step.id === getCurrentStep()
                      ? 'bg-[#0f3d66] text-white'
                      : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#f8b319] hover:text-[#0f3d66]'
                  }`}
                >
                  {step.id}
                </button>
                <span className='ml-2 text-sm font-medium text-[#3a5054]'>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className='w-24 h-px bg-[#e0d4b8] mx-4' />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className='border-b border-[#e0d4b8] mb-8'>
            <nav className='flex space-x-8'>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    currentTab === tab.id
                      ? 'border-[#f8b319] text-[#0f3d66]'
                      : 'border-transparent text-[#3a5054] hover:text-[#0f3d66] hover:border-[#f8b319]'
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

        {/* Save Confirmation Modal */}
        <SaveConfirmationModal
          isOpen={showSaveModal}
          onClose={handleCloseSaveModal}
          onSave={handleSaveAndContinue}
          onDontSave={handleDontSave}
        />
      </div>
    </div>
  )
}

export default OnboardingLayout
