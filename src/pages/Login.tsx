import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import logoImage from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(formData.email, formData.password)
      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <PageTransition>
      <Card className='max-w-md w-full'>
        <div className='flex flex-col items-center mb-6'>
          <img
            src={logoImage}
            alt='WealthOnboard AI'
            className='h-16 w-auto mb-6'
          />
          <h1 className='section-title text-center'>Login</h1>
          <p className='text-neutral-600 text-center'>
            Please sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
            icon={<Mail size={20} />}
          />

          <Input
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            required
            icon={<Lock size={20} />}
          />

          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                checked={formData.rememberMe}
                onChange={handleChange}
                className='w-4 h-4 text-burgundy-950 border-neutral-300 rounded focus:ring-gold-500'
              />
              <label
                htmlFor='rememberMe'
                className='ml-2 text-sm text-neutral-700'
              >
                Remember Me
              </label>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#'
              className='text-sm text-burgundy-950 hover:text-burgundy-800 font-medium'
            >
              Forgot Password?
            </motion.a>
          </div>

          <Button type='submit' variant='primary' fullWidth>
            Login
          </Button>

          <div className='mt-6 text-center'>
            <p className='text-neutral-600'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='text-burgundy-950 hover:text-burgundy-800 font-medium'
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </PageTransition>
  )
}

export default Login
