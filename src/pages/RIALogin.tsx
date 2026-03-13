import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Shield, ArrowLeft, Mail, Lock } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import logoImage from '../assets/logo.png'

const RIALogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle RIA login logic here
    navigate('/admin/dashboard')
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
      <Card className='max-w-md w-full'>
        <div className='flex flex-col items-center mb-6'>
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
            <Shield className='h-8 w-8 text-[#0f3d66] mr-3' />
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-[#0f3d66]'>RIA Portal</h1>
              <p className='text-sm text-[#3a5054]'>
                Registered Investment Advisor
              </p>
            </div>
          </div>
          <p className='text-[#3a5054] text-center'>
            Access your administrative dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label='Email Address'
            type='email'
            name='email'
            placeholder='Enter your RIA email'
            value={formData.email}
            onChange={handleInputChange}
            required
            icon={<Mail size={20} />}
          />

          <div className='relative'>
            <Input
              label='Password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleInputChange}
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

          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className='w-4 h-4 text-[#f8b319] border-neutral-300 rounded focus:ring-[#f8b319]'
              />
              <label
                htmlFor='rememberMe'
                className='ml-2 text-sm text-[#3a5054]'
              >
                Remember me
              </label>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#'
              className='text-sm text-[#51779e] hover:text-[#0f3d66] font-medium'
            >
              Forgot password?
            </motion.a>
          </div>

          <Button type='submit' variant='primary' fullWidth>
            Access RIA Portal
          </Button>

          <div className='mt-6 text-center'>
            <p className='text-sm text-[#3a5054]'>
              Need RIA access?{' '}
              <Link
                to='/ria-signup'
                className='text-[#51779e] hover:text-[#0f3d66] font-semibold'
              >
                Request Account
              </Link>
            </p>
            <p className='text-xs text-[#3a5054] mt-4'>
              For investor access,{' '}
              <Link to='/login' className='text-[#f8b319] hover:underline'>
                click here
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </PageTransition>
  )
}

export default RIALogin
