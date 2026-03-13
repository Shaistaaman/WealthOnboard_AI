import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Share2 } from 'lucide-react'
import QRCode from 'react-qr-code'
import { useAuth } from '../context/AuthContext'

import Button from '../components/Button'

const QrCode: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const qrValue = `https://wealthonboard-ai.com/verify/${user?.id || 'user123'}`

  const handleConfirm = () => {
    navigate('/dashboard')
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className='bg-white rounded-lg w-full max-w-md shadow-xl overflow-hidden'
      >
        <div className='bg-burgundy-950 text-white p-4'>
          <h2 className='text-xl font-semibold'>Your Profile QR code</h2>
        </div>

        <div className='p-6 flex flex-col items-center'>
          <div className='my-6 p-4 bg-white rounded-md shadow-sm'>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='w-48 h-48 mx-auto'
            >
              <QRCode size={256} value={qrValue} viewBox={`0 0 256 256`} />
            </motion.div>
          </div>

          <div className='w-full flex items-center justify-center my-4'>
            <div className='bg-neutral-200 h-px flex-grow'></div>
            <span className='px-4 text-neutral-500'>Or</span>
            <div className='bg-neutral-200 h-px flex-grow'></div>
          </div>

          <div className='flex justify-center gap-8 my-4'>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className='flex flex-col items-center text-neutral-700 hover:text-burgundy-950 transition-colors'
            >
              <div className='w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-1'>
                <Download size={24} />
              </div>
              <span className='text-sm'>Download</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className='flex flex-col items-center text-neutral-700 hover:text-burgundy-950 transition-colors'
            >
              <div className='w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-1'>
                <Share2 size={24} />
              </div>
              <span className='text-sm'>Share</span>
            </motion.button>
          </div>

          <Button
            variant='primary'
            onClick={handleConfirm}
            className='mt-4 w-full'
          >
            Confirm
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default QrCode
