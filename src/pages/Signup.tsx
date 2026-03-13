import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import AccountTypeSelector from '../components/AccountTypeSelector'
import logoImage from '../assets/logo.png'

const Signup: React.FC = () => {
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState<'individual' | 'corporate'>(
    'individual'
  )
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and create the account here
    navigate('/dashboard')
  }

  return (
    <PageTransition>
      <Card className='max-w-md w-full'>
        <div className='flex flex-col items-center mb-6'>
          <img
            src={logoImage}
            alt='WealthOnboard AI'
            className='h-16 w-auto mb-4'
          />
          <h1 className='section-title text-center'>Signup</h1>
          <p className='text-neutral-600 text-center'>
            Please Signup to continue
          </p>
        </div>

        <AccountTypeSelector
          selectedType={accountType}
          onSelectType={setAccountType}
        />

        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            label='Username'
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
            icon={<User size={20} />}
          />

          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            icon={<Mail size={20} />}
          />

          <Input
            label='Password'
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            icon={<Lock size={20} />}
          />

          <Button type='submit' variant='primary' fullWidth className='mt-4'>
            Signup
          </Button>

          <div className='text-center pt-4'>
            <p className='text-neutral-600'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-burgundy-950 hover:text-burgundy-800 font-medium'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </PageTransition>
  )
}

export default Signup
