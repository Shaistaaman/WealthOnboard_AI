import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Select from '../../components/Select'

type EmploymentInfoForm = {
  employmentType: string
  occupation: string
  employerName: string
  businessNature: string
  employerAddress: {
    country: string
    state: string
    city: string
    address: string
  }
}

interface EmploymentInfoProps {
  onNext: () => void
  onBack: () => void
}

const EmploymentInfo: React.FC<EmploymentInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit, setValue } = useForm<EmploymentInfoForm>()
  const [formData, setFormData] = useState({
    employmentType: '',
    occupation: '',
    country: '',
    state: '',
    city: ''
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setValue(`${parent}.${child}` as keyof EmploymentInfoForm, value)
    } else {
      setValue(field as keyof EmploymentInfoForm, value)
    }
  }

  const onSubmit = (data: EmploymentInfoForm) => {
    console.log({ ...data, ...formData })
    onNext()
  }

  const employmentTypeOptions = [
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' },
    { value: 'self-employed', label: 'Self Employed' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'retired', label: 'Retired' },
    { value: 'student', label: 'Student' }
  ]

  const occupationOptions = [
    { value: 'engineer', label: 'Engineer' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'teacher', label: 'Teacher' }
  ]
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ]

  const stateOptions = [
    { value: 'ny', label: 'New York' },
    { value: 'ca', label: 'California' },
    { value: 'tx', label: 'Texas' },
    { value: 'fl', label: 'Florida' }
  ]

  const cityOptions = [
    { value: 'nyc', label: 'New York City' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'houston', label: 'Houston' }
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
            Employment Info
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Select
                label='Employment Type'
                value={formData.employmentType}
                onChange={value => handleSelectChange('employmentType', value)}
                options={employmentTypeOptions}
                placeholder='Select employment type'
                required
              />
            </div>
            <div>
              <Select
                label='Occupation'
                value={formData.occupation}
                onChange={value => handleSelectChange('occupation', value)}
                options={occupationOptions}
                placeholder='Select occupation'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Name Of Employer <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('employerName', { required: true })}
                placeholder='Enter employer name'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Nature of Business <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('businessNature', { required: true })}
                placeholder='Nature of employer business/activities'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-lg border border-[#fcd46a]'>
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Employer Address
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Select
                label='Country'
                value={formData.country}
                onChange={value =>
                  handleSelectChange('employerAddress.country', value)
                }
                options={countryOptions}
                placeholder='Select country'
                required
              />
            </div>
            <div>
              <Select
                label='State/Province'
                value={formData.state}
                onChange={value =>
                  handleSelectChange('employerAddress.state', value)
                }
                options={stateOptions}
                placeholder='Select state/province'
                required
              />
            </div>
            <div>
              <Select
                label='City'
                value={formData.city}
                onChange={value =>
                  handleSelectChange('employerAddress.city', value)
                }
                options={cityOptions}
                placeholder='Select city'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Employer Address <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('employerAddress.address', { required: true })}
                placeholder='Enter employer address'
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

export default EmploymentInfo
