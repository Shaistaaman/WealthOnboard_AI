import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info } from 'lucide-react'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'

const riskTypes = [
  {
    type: 'Conservative',
    description: 'Focus on low-risk investments',
    percentage: 20
  },
  {
    type: 'Conservative to Moderate',
    description: 'Include a mix of bonds and stable stocks',
    percentage: 40
  },
  {
    type: 'Moderate',
    description: 'Balance between stocks and bonds',
    percentage: 60
  },
  {
    type: 'Growth & Income',
    description: 'Emphasize growth stocks with some income-generating assets',
    percentage: 80
  },
  {
    type: 'Aggressive',
    description: 'Prioritize high-risk, high-reward investments',
    percentage: 100
  }
]

const RiskAppetite = ({
  onNext,
  onBack
}: {
  onNext: () => void
  onBack: () => void
}) => {
  const [selectedRiskType, setSelectedRiskType] = useState(2)
  const [hoveredRiskType, setHoveredRiskType] = useState<number | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [timeHorizon, setTimeHorizon] = useState('')
  const [experience, setExperience] = useState('')

  const handleSubmitRequest = () => {
    setShowSuccessModal(true)
  }

  const timeHorizonOptions = [
    { value: 'up-to-1-year', label: 'Up to 1 year' },
    { value: '1-to-5-years', label: 'Between 1 and 5 years' },
    { value: 'more-than-5-years', label: 'More than 5 years' }
  ]

  const experienceOptions = [
    { value: 'little', label: 'Little Knowledge (1-5 Years)' },
    { value: 'moderate', label: 'Moderate Knowledge (5-10 Years)' },
    { value: 'very-knowledgeable', label: 'Very Knowledgeable (Over 10 Years)' }
  ]

  const renderSuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    >
      <div className='bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='w-24 h-24 mx-auto mb-6 text-green-500'
        >
          <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
            <circle
              cx='12'
              cy='12'
              r='11'
              stroke='currentColor'
              strokeWidth='2'
            />
            <path
              d='M7 13l3 3 7-7'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </motion.div>
        <h2 className='text-2xl font-bold mb-2'>SUCCESS</h2>
        <p className='text-gray-600 mb-4'>Thank you for your request.</p>
        <p className='text-gray-600 mb-8'>
          You will be notified through email when your account will be verified.
        </p>
        <Button
          variant='primary'
          onClick={() => {
            setShowSuccessModal(false)
            onNext()
          }}
          fullWidth
        >
          Continue
        </Button>
      </div>
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <div className='bg-white rounded-lg p-6'>
        <h3 className='text-lg font-medium text-burgundy-950 mb-6'>
          Risk Appetite
        </h3>
        <div className='mb-8'>
          <div className='relative h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full'>
            <div
              className='absolute w-4 h-8 bg-burgundy-950 rounded-full -top-2 transform -translate-x-1/2 transition-all duration-300'
              style={{ left: `${riskTypes[selectedRiskType].percentage}%` }}
            />
          </div>
          <div className='flex justify-between mt-2 text-sm text-gray-600'>
            <span>Low Risk</span>
            <span>High Risk</span>
          </div>
        </div>
        <div className='relative mb-20'>
          <div className='flex justify-between items-end'>
            {riskTypes.map((risk, index) => (
              <div
                key={risk.type}
                className='relative flex flex-col items-center'
              >
                <motion.button
                  className={`px-3 py-2 rounded-lg border-2 cursor-pointer transition-all whitespace-nowrap ${
                    selectedRiskType === index
                      ? 'border-burgundy-950 bg-burgundy-50'
                      : 'border-gray-200 hover:border-burgundy-300'
                  }`}
                  onClick={() => setSelectedRiskType(index)}
                  onMouseEnter={() => setHoveredRiskType(index)}
                  onMouseLeave={() => setHoveredRiskType(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='flex items-center space-x-2'>
                    <span className='font-medium text-sm'>{risk.type}</span>
                    <Info className='w-4 h-4 text-gray-400 hover:text-burgundy-950' />
                  </div>
                </motion.button>
                <AnimatePresence>
                  {hoveredRiskType === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='absolute top-full mt-2 z-10 bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-64 text-center'
                    >
                      <p className='text-sm text-gray-700'>
                        {risk.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <RadioButton
              name='timeHorizon'
              label='What is the time horizon of the investment objectives?'
              options={timeHorizonOptions}
              value={timeHorizon}
              onChange={setTimeHorizon}
              required
            />
          </div>
          <div>
            <RadioButton
              name='experience'
              label='Level of Investment Experience:'
              options={experienceOptions}
              value={experience}
              onChange={setExperience}
              required
            />
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <Button variant='secondary' onClick={onBack}>
          Back
        </Button>
        <div className='space-x-4'>
          <Button variant='secondary'>Save</Button>
          <Button variant='primary' onClick={handleSubmitRequest}>
            Submit Request
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && renderSuccessModal()}
      </AnimatePresence>
    </motion.div>
  )
}

export default RiskAppetite
