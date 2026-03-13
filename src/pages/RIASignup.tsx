import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Building,
  User,
  Mail,
  Lock,
  Phone
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import logoImage from '../assets/logo.png'

const RIASignup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firmName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    crdNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle RIA signup logic here
    navigate('/ria-login')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <PageTransition>
      <Card className='max-w-2xl w-full'>
        <div className='flex flex-col items-center mb-8'>
          <Link
            to='/'
            className='inline-flex items-center text-[#51779e] hover:text-[#0f3d66] mb-4 self-start'
          >
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Home
          </Link>
          <img
            src={logoImage}
            alt='WealthOnboard AI'
            className='h-16 w-auto mb-4'
          />
          <div className='flex items-center justify-center mb-4'>
            <Building className='h-8 w-8 text-[#0f3d66] mr-3' />
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-[#0f3d66]'>
                RIA Registration
              </h1>
              <p className='text-sm text-[#3a5054]'>
                Registered Investment Advisor
              </p>
            </div>
          </div>
          <p className='text-[#3a5054] text-center'>
            Request access to the administrative portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Firm Information */}
          <div className='bg-[#e0d4b8]/30 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-[#0f3d66] mb-4'>
              Firm Information
            </h3>
            <div className='grid grid-cols-1 gap-4'>
              <Input
                label='Firm Name'
                type='text'
                name='firmName'
                value={formData.firmName}
                onChange={handleInputChange}
                placeholder='Enter your firm name'
                required
                icon={<Building size={20} />}
              />
              <Input
                label='CRD Number'
                type='text'
                name='crdNumber'
                value={formData.crdNumber}
                onChange={handleInputChange}
                placeholder='Enter your CRD number'
                required
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className='bg-[#51779e]/10 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold text-[#0f3d66] mb-4'>
              Personal Information
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Input
                label='First Name'
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder='Enter your first name'
                required
                icon={<User size={20} />}
              />
              <Input
                label='Last Name'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Enter your last name'
                required
                icon={<User size={20} />}
              />
              <Input
                label='Email Address'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your business email'
                required
                icon={<Mail size={20} />}
              />
              <Input
                label='Phone Number'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='Enter your phone number'
                required
                icon={<Phone size={20} />}
              />
            </div>
          </div>

          {/* Password Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='relative'>
              <Input
                label='Password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Create a password'
                required
                icon={<Lock size={20} />}
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-9 text-[#3a5054] hover:text-[#0f3d66]'
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
            <div className='relative'>
              <Input
                label='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirm your password'
                required
                icon={<Lock size={20} />}
              />
              <button
                type='button'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute right-3 top-9 text-[#3a5054] hover:text-[#0f3d66]'
              >
                {showConfirmPassword ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className='flex items-start'>
            <input
              type='checkbox'
              name='agreeToTerms'
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className='w-4 h-4 text-[#f8b319] border-neutral-300 rounded focus:ring-[#f8b319] mt-1'
              required
            />
            <label className='ml-3 text-sm text-[#3a5054]'>
              I agree to the{' '}
              <Link to='/terms' className='text-[#51779e] hover:text-[#0f3d66]'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to='/privacy'
                className='text-[#51779e] hover:text-[#0f3d66]'
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type='submit' variant='primary' fullWidth>
            Request RIA Access
          </Button>

          <div className='mt-6 text-center'>
            <p className='text-sm text-[#3a5054]'>
              Already have RIA access?{' '}
              <Link
                to='/ria-login'
                className='text-[#51779e] hover:text-[#0f3d66] font-semibold'
              >
                Sign In
              </Link>
            </p>
            <p className='text-xs text-[#3a5054] mt-4'>
              For investor access,{' '}
              <Link to='/signup' className='text-[#f8b319] hover:underline'>
                click here
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </PageTransition>
  )
}

export default RIASignup
