import React from 'react'
import { motion } from 'framer-motion'
import { Download, QrCode } from 'lucide-react'
import Button from '../../components/Button'

const QRCodePage: React.FC = () => {
  const handleDownload = () => {
    // Create a simple QR code SVG
    const qrCodeSVG = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white" stroke="black" stroke-width="2"/>
        <text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="12" fill="black">
          WealthOnboard AI
        </text>
        <text x="100" y="120" text-anchor="middle" font-family="Arial" font-size="10" fill="black">
          QR Code
        </text>
      </svg>
    `

    const blob = new Blob([qrCodeSVG], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'wealthonboard-banking-qr.svg'
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
          <h1 className='text-2xl font-bold text-neutral-900'>QR Code</h1>
          <p className='text-neutral-600'>Your personal banking QR code</p>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-sm border border-neutral-200 p-8'>
        <div className='text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-burgundy-100 rounded-full mb-6'>
            <QrCode className='w-8 h-8 text-burgundy-950' />
          </div>

          <h2 className='text-xl font-semibold text-neutral-900 mb-2'>
            Your Banking QR Code
          </h2>
          <p className='text-neutral-600 mb-8'>
            Use this QR code for quick access to your banking services
          </p>

          <div className='flex justify-center mb-8'>
            <div className='bg-neutral-50 p-8 rounded-lg border-2 border-dashed border-neutral-300'>
              <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
                <rect
                  width='200'
                  height='200'
                  fill='white'
                  stroke='black'
                  strokeWidth='2'
                />
                <text
                  x='100'
                  y='90'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='14'
                  fill='black'
                >
                  WealthOnboard AI
                </text>
                <text
                  x='100'
                  y='110'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='12'
                  fill='black'
                >
                  QR Code
                </text>
                <text
                  x='100'
                  y='130'
                  textAnchor='middle'
                  fontFamily='Arial'
                  fontSize='10'
                  fill='gray'
                >
                  Scan to access
                </text>
              </svg>
            </div>
          </div>

          <Button
            variant='primary'
            onClick={handleDownload}
            className='inline-flex items-center'
          >
            <Download className='w-4 h-4 mr-2' />
            Download QR Code
          </Button>

          <div className='mt-6 text-sm text-neutral-500'>
            <p>This QR code is unique to your account and can be used for:</p>
            <ul className='mt-2 space-y-1'>
              <li>• Quick login verification</li>
              <li>• Account identification</li>
              <li>• Secure transactions</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default QRCodePage
