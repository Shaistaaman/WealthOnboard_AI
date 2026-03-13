import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import DatePicker from '../../components/DatePicker'
import Select from '../../components/Select'

type CustomerInfoForm = {
  firstName: string
  middleName?: string
  lastName: string
  salutation: string
  dateOfBirth: string
  countryOfBirth: string
  gender?: string
  maritalStatus: string
  address: {
    street: string
    city: string
    state: string
    country: string
    postalCode: string
  }
}

interface CustomerInfoProps {
  onNext: () => void
  onBack: () => void
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit, setValue } = useForm<CustomerInfoForm>()
  const [formData, setFormData] = useState({
    salutation: '',
    dateOfBirth: '',
    countryOfBirth: '',
    gender: '',
    maritalStatus: '',
    addressCountry: ''
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setValue(field as keyof CustomerInfoForm, value)
  }

  const handleDateChange = (value: string) => {
    setFormData(prev => ({ ...prev, dateOfBirth: value }))
    setValue('dateOfBirth', value)
  }

  const onSubmit = (data: CustomerInfoForm) => {
    console.log({ ...data, ...formData })
    onNext()
  }

  const salutationOptions = [
    { value: 'mr', label: 'Mr.' },
    { value: 'mrs', label: 'Mrs.' },
    { value: 'ms', label: 'Ms.' },
    { value: 'dr', label: 'Dr.' }
  ]

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' }
  ]

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ]

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
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
            Customer Info
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                First Name <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('firstName', { required: true })}
                placeholder='Enter your first name'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Middle Name
              </label>
              <input
                {...register('middleName')}
                placeholder='Enter your middle name (optional)'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Last Name <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('lastName', { required: true })}
                placeholder='Enter your last name'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <Select
                label='Salutation'
                value={formData.salutation}
                onChange={value => handleSelectChange('salutation', value)}
                options={salutationOptions}
                placeholder='Select salutation'
                required
              />
            </div>
            <div>
              <DatePicker
                label='Date of Birth'
                value={formData.dateOfBirth}
                onChange={handleDateChange}
                placeholder='Select date of birth'
                required
              />
            </div>
            <div>
              <Select
                label='Country of Birth'
                value={formData.countryOfBirth}
                onChange={value => handleSelectChange('countryOfBirth', value)}
                options={countryOptions}
                placeholder='Select country'
                required
              />
            </div>
            <div>
              <Select
                label='Gender (optional)'
                value={formData.gender}
                onChange={value => handleSelectChange('gender', value)}
                options={genderOptions}
                placeholder='Select gender'
              />
            </div>
            <div>
              <Select
                label='Marital Status'
                value={formData.maritalStatus}
                onChange={value => handleSelectChange('maritalStatus', value)}
                options={maritalStatusOptions}
                placeholder='Select marital status'
                required
              />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-lg border border-[#fcd46a]'>
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Customer Address
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Street Address <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('address.street', { required: true })}
                placeholder='Enter your street address'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                City <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('address.city', { required: true })}
                placeholder='Enter your city'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                State/Province <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('address.state', { required: true })}
                placeholder='Enter your state/province'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
            <div>
              <Select
                label='Country'
                value={formData.addressCountry}
                onChange={value => {
                  setFormData(prev => ({ ...prev, addressCountry: value }))
                  setValue('address.country', value)
                }}
                options={countryOptions}
                placeholder='Select country'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                Postal Code <span className='text-red-500'>*</span>
              </label>
              <input
                {...register('address.postalCode', { required: true })}
                placeholder='Enter your postal code'
                className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-end space-x-4'>
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
      </form>
    </motion.div>
  )
}

export default CustomerInfo
