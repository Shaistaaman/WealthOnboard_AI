import React from 'react'
import { motion } from 'framer-motion'
import { Download, QrCode, User, Bell, Shield, Palette } from 'lucide-react'
import Button from '../../components/Button'

const Settings: React.FC = () => {
  const handleDownloadQR = () => {
    const qrCodeSVG = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white" stroke="black" stroke-width="2"/>
        <text x="100" y="90" text-anchor="middle" font-family="Arial" font-size="14" fill="black">
          WealthOnboard AI
        </text>
        <text x="100" y="110" text-anchor="middle" font-family="Arial" font-size="12" fill="black">
          Settings QR
        </text>
        <text x="100" y="130" text-anchor="middle" font-family="Arial" font-size="10" fill="gray">
          Quick Access
        </text>
      </svg>
    `

    const blob = new Blob([qrCodeSVG], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'wealthonboard-settings-qr.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-6'
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-neutral-900'>Settings</h1>
          <p className='text-neutral-600'>Manage your account preferences</p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Account Settings */}
        <div className='bg-white rounded-lg shadow-sm border border-neutral-200 p-6'>
          <div className='flex items-center mb-4'>
            <User className='w-5 h-5 text-burgundy-950 mr-2' />
            <h2 className='text-lg font-semibold text-neutral-900'>Account</h2>
          </div>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-neutral-700 mb-1'>
                Display Name
              </label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500'
                defaultValue='John Doe'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-neutral-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500'
                defaultValue='john@example.com'
              />
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className='bg-white rounded-lg shadow-sm border border-neutral-200 p-6'>
          <div className='flex items-center mb-4'>
            <QrCode className='w-5 h-5 text-burgundy-950 mr-2' />
            <h2 className='text-lg font-semibold text-neutral-900'>QR Code</h2>
          </div>
          <div className='text-center'>
            <div className='bg-neutral-50 p-4 rounded-lg border-2 border-dashed border-neutral-300 mb-4'>
              <svg width='120' height='120' xmlns='http://www.w3.org/2000/svg'>
                <rect
                  width='120'
                  height='120'
                  fill='white'
                  stroke='black'
                  strokeWidth='1'
                />
                <text
                  x='60'
                  y='50'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='10'
                  fill='black'
                >
                  WealthOnboard AI
                </text>
                <text
                  x='60'
                  y='65'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='10'
                  fill='black'
                >
                  Banking
                </text>
                <text
                  x='60'
                  y='80'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='8'
                  fill='gray'
                >
                  Settings QR
                </text>
              </svg>
            </div>
            <Button
              variant='secondary'
              onClick={handleDownloadQR}
              className='inline-flex items-center'
              size='sm'
            >
              <Download className='w-4 h-4 mr-2' />
              Download
            </Button>
          </div>
        </div>

        {/* Notifications */}
        <div className='bg-white rounded-lg shadow-sm border border-neutral-200 p-6'>
          <div className='flex items-center mb-4'>
            <Bell className='w-5 h-5 text-burgundy-950 mr-2' />
            <h2 className='text-lg font-semibold text-neutral-900'>
              Notifications
            </h2>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-neutral-700'>
                Email Notifications
              </span>
              <input type='checkbox' defaultChecked className='rounded' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-neutral-700'>SMS Alerts</span>
              <input type='checkbox' className='rounded' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-neutral-700'>
                Push Notifications
              </span>
              <input type='checkbox' defaultChecked className='rounded' />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className='bg-white rounded-lg shadow-sm border border-neutral-200 p-6'>
          <div className='flex items-center mb-4'>
            <Shield className='w-5 h-5 text-burgundy-950 mr-2' />
            <h2 className='text-lg font-semibold text-neutral-900'>Security</h2>
          </div>
          <div className='space-y-4'>
            <Button variant='secondary' size='sm' fullWidth>
              Change Password
            </Button>
            <Button variant='secondary' size='sm' fullWidth>
              Two-Factor Authentication
            </Button>
            <Button variant='secondary' size='sm' fullWidth>
              Login History
            </Button>
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <Button variant='primary'>Save Changes</Button>
      </div>
    </motion.div>
  )
}

export default Settings
