import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Edit,
  Save,
  CheckCircle,
  AlertCircle,
  Camera,
  Shield
} from 'lucide-react'
import DatePicker from '../../components/DatePicker'
import Select from '../../components/Select'

const ProfileManagement: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    investmentExperience: 'Intermediate',
    riskTolerance: 'Moderate',
    investmentGoals: 'Long-term growth',
    annualIncome: '$75,000 - $100,000',
    netWorth: '$250,000 - $500,000'
  })

  // Profile completion calculation
  const calculateCompletion = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'dateOfBirth',
      'address',
      'city',
      'state',
      'zipCode',
      'investmentExperience',
      'riskTolerance',
      'investmentGoals'
    ]

    const completedFields = requiredFields.filter(
      field =>
        profileData[field as keyof typeof profileData] &&
        profileData[field as keyof typeof profileData].trim() !== ''
    )

    return Math.round((completedFields.length / requiredFields.length) * 100)
  }

  const completionPercentage = calculateCompletion()

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // Save profile data (will integrate with DynamoDB)
    setIsEditing(false)
    console.log('Saving profile data:', profileData)
  }

  // Define field types
  type BaseField = {
    key: string
    label: string
    required: boolean
  }

  type InputField = BaseField & {
    type: 'text' | 'email' | 'tel'
  }

  type DateField = BaseField & {
    type: 'date'
  }

  type SelectField = BaseField & {
    type: 'select'
    options: string[]
  }

  type Field = InputField | DateField | SelectField

  type ProfileSection = {
    title: string
    fields: Field[]
  }

  const profileSections: ProfileSection[] = [
    {
      title: 'Personal Information',
      fields: [
        { key: 'firstName', label: 'First Name', type: 'text', required: true },
        { key: 'lastName', label: 'Last Name', type: 'text', required: true },
        { key: 'email', label: 'Email Address', type: 'email', required: true },
        { key: 'phone', label: 'Phone Number', type: 'tel', required: true },
        {
          key: 'dateOfBirth',
          label: 'Date of Birth',
          type: 'date',
          required: true
        }
      ]
    },
    {
      title: 'Address Information',
      fields: [
        {
          key: 'address',
          label: 'Street Address',
          type: 'text',
          required: true
        },
        { key: 'city', label: 'City', type: 'text', required: true },
        { key: 'state', label: 'State/Province', type: 'text', required: true },
        {
          key: 'zipCode',
          label: 'ZIP/Postal Code',
          type: 'text',
          required: true
        },
        { key: 'country', label: 'Country', type: 'text', required: false }
      ]
    },
    {
      title: 'Investment Profile',
      fields: [
        {
          key: 'investmentExperience',
          label: 'Investment Experience',
          type: 'select',
          required: true,
          options: ['Beginner', 'Intermediate', 'Advanced', 'Professional']
        },
        {
          key: 'riskTolerance',
          label: 'Risk Tolerance',
          type: 'select',
          required: true,
          options: ['Conservative', 'Moderate', 'Aggressive', 'Very Aggressive']
        },
        {
          key: 'investmentGoals',
          label: 'Investment Goals',
          type: 'select',
          required: true,
          options: [
            'Capital preservation',
            'Income generation',
            'Long-term growth',
            'Aggressive growth'
          ]
        }
      ]
    },
    {
      title: 'Financial Information',
      fields: [
        {
          key: 'annualIncome',
          label: 'Annual Income',
          type: 'select',
          required: false,
          options: [
            'Under $50,000',
            '$50,000 - $75,000',
            '$75,000 - $100,000',
            '$100,000 - $150,000',
            'Over $150,000'
          ]
        },
        {
          key: 'netWorth',
          label: 'Net Worth',
          type: 'select',
          required: false,
          options: [
            'Under $100,000',
            '$100,000 - $250,000',
            '$250,000 - $500,000',
            '$500,000 - $1M',
            'Over $1M'
          ]
        }
      ]
    }
  ]

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>
            Profile Management
          </h2>
          <p className='text-[#3a5054] mt-2'>
            Manage your personal and investment information
          </p>
        </div>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'
        >
          {isEditing ? (
            <Save className='h-4 w-4 mr-2' />
          ) : (
            <Edit className='h-4 w-4 mr-2' />
          )}
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Completion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold text-[#0f3d66]'>
            Profile Completion
          </h3>
          <span
            className={`text-2xl font-bold ${
              completionPercentage === 100 ? 'text-green-600' : 'text-[#f8b319]'
            }`}
          >
            {completionPercentage}%
          </span>
        </div>

        <div className='w-full bg-[#e0d4b8] rounded-full h-3 mb-4'>
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              completionPercentage === 100 ? 'bg-green-500' : 'bg-[#f8b319]'
            }`}
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        <div className='flex items-center'>
          {completionPercentage === 100 ? (
            <>
              <CheckCircle className='h-5 w-5 text-green-600 mr-2' />
              <span className='text-green-600 font-medium'>
                Profile Complete
              </span>
            </>
          ) : (
            <>
              <AlertCircle className='h-5 w-5 text-[#f8b319] mr-2' />
              <span className='text-[#3a5054]'>
                Complete your profile to unlock all features
              </span>
            </>
          )}
        </div>
      </motion.div>

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <h3 className='text-lg font-semibold text-[#0f3d66] mb-4'>
          Profile Photo
        </h3>
        <div className='flex items-center space-x-4'>
          <div className='w-20 h-20 bg-[#f8b319] rounded-full flex items-center justify-center'>
            <User className='h-10 w-10 text-[#0f3d66]' />
          </div>
          <div>
            <button className='flex items-center px-4 py-2 bg-[#e0d4b8] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'>
              <Camera className='h-4 w-4 mr-2' />
              Upload Photo
            </button>
            <p className='text-sm text-[#3a5054] mt-1'>JPG, PNG up to 5MB</p>
          </div>
        </div>
      </motion.div>

      {/* Profile Sections */}
      {profileSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + sectionIndex * 0.1 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>
            {section.title}
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {section.fields.map(field => (
              <div key={field.key}>
                {field.type === 'select' ? (
                  <Select
                    label={field.label}
                    value={profileData[field.key as keyof typeof profileData]}
                    onChange={value => handleInputChange(field.key, value)}
                    options={(field as SelectField).options.map(option => ({
                      value: option,
                      label: option
                    }))}
                    placeholder={`Select ${field.label}`}
                    required={field.required}
                    disabled={!isEditing}
                  />
                ) : field.type === 'date' ? (
                  <DatePicker
                    label={field.label}
                    value={profileData[field.key as keyof typeof profileData]}
                    onChange={value => handleInputChange(field.key, value)}
                    placeholder={`Select ${field.label}`}
                    required={field.required}
                  />
                ) : (
                  <div>
                    <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                      {field.label}
                      {field.required && (
                        <span className='text-red-500 ml-1'>*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      value={profileData[field.key as keyof typeof profileData]}
                      onChange={e =>
                        handleInputChange(field.key, e.target.value)
                      }
                      disabled={!isEditing}
                      className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200'
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex items-center mb-4'>
          <Shield className='h-6 w-6 text-[#51779e] mr-3' />
          <h3 className='text-lg font-semibold text-[#0f3d66]'>
            Security Settings
          </h3>
        </div>

        <div className='space-y-4'>
          <button className='w-full md:w-auto px-4 py-2 bg-[#51779e] text-white rounded-lg hover:bg-[#0f3d66] transition-colors'>
            Change Password
          </button>
          <button className='w-full md:w-auto px-4 py-2 border border-[#51779e] text-[#51779e] rounded-lg hover:bg-[#51779e] hover:text-white transition-colors ml-0 md:ml-4'>
            Enable Two-Factor Authentication
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileManagement
