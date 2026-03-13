import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Select from '../../components/Select'

type FinancialInfoForm = {
  investmentObjective1: string
  investmentObjective2?: string
  investmentObjective3?: string
  investmentObjective4?: string
  estimatedNetWorth: string
  estimatedLiquidNetWorth: string
  annualNetIncome: string
  tradingExperience: string
}

interface FinancialInfoProps {
  onNext: () => void
  onBack: () => void
}

const FinancialInfo: React.FC<FinancialInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit, setValue } = useForm<FinancialInfoForm>()
  const [formData, setFormData] = useState({
    estimatedNetWorth: '',
    estimatedLiquidNetWorth: '',
    annualNetIncome: ''
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setValue(field as keyof FinancialInfoForm, value)
  }

  const onSubmit = (data: FinancialInfoForm) => {
    console.log({ ...data, ...formData })
    onNext()
  }

  const netWorthOptions = [
    { value: 'under-100k', label: 'Under $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: '500k-1m', label: '$500,000 - $1,000,000' },
    { value: '1m-5m', label: '$1,000,000 - $5,000,000' },
    { value: 'over-5m', label: 'Over $5,000,000' }
  ]

  const liquidNetWorthOptions = [
    { value: 'under-50k', label: 'Under $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: '500k-1m', label: '$500,000 - $1,000,000' },
    { value: 'over-1m', label: 'Over $1,000,000' }
  ]

  const annualIncomeOptions = [
    { value: 'under-50k', label: 'Under $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-150k', label: '$100,000 - $150,000' },
    { value: '150k-250k', label: '$150,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' }
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='bg-white p-6 rounded-xl shadow-lg border border-[#fcd46a]'>
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Investment Objectives
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Primary Investment Objective{' '}
                <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('investmentObjective1', { required: true })}
                placeholder='Enter primary investment objective'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Secondary Investment Objective
              </label>
              <input
                {...register('investmentObjective2')}
                placeholder='Enter secondary investment objective (optional)'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Third Investment Objective
              </label>
              <input
                {...register('investmentObjective3')}
                placeholder='Enter third investment objective (optional)'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Fourth Investment Objective
              </label>
              <input
                {...register('investmentObjective4')}
                placeholder='Enter fourth investment objective (optional)'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-lg border border-[#fcd46a]'>
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Financial Information
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Select
                label='Estimated Net Worth'
                value={formData.estimatedNetWorth}
                onChange={value =>
                  handleSelectChange('estimatedNetWorth', value)
                }
                options={netWorthOptions}
                placeholder='Select estimated net worth'
                required
              />
            </div>
            <div>
              <Select
                label='Estimated Liquid Net Worth'
                value={formData.estimatedLiquidNetWorth}
                onChange={value =>
                  handleSelectChange('estimatedLiquidNetWorth', value)
                }
                options={liquidNetWorthOptions}
                placeholder='Select estimated liquid net worth'
                required
              />
            </div>
            <div>
              <Select
                label='Annual Net Income'
                value={formData.annualNetIncome}
                onChange={value => handleSelectChange('annualNetIncome', value)}
                options={annualIncomeOptions}
                placeholder='Select annual net income'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Trading Experience (Years){' '}
                <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('tradingExperience', { required: true })}
                placeholder='Enter years of trading experience'
                type='number'
                min='0'
                max='50'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-between'>
          <button
            type='button'
            onClick={onBack}
            className='px-6 py-3 border border-[#51779e] text-[#51779e] rounded-xl hover:bg-[#51779e] hover:text-white transition-all duration-200 font-medium'
          >
            Back
          </button>
          <div className='space-x-4'>
            <button
              type='button'
              className='px-6 py-3 border border-[#51779e] text-[#51779e] rounded-xl hover:bg-[#51779e] hover:text-white transition-all duration-200 font-medium'
            >
              Save
            </button>
            <button
              type='submit'
              className='px-6 py-3 bg-[#f8b319] text-[#0f3d66] rounded-xl hover:bg-[#fcd46a] transition-all duration-200 font-medium'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default FinancialInfo
