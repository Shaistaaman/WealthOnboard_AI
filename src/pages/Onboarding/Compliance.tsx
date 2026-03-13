import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'

type ComplianceForm = {
  amlWatcherAgreed: boolean
  dataProcessingConsent: boolean
  termsAndConditions: boolean
  privacyPolicy: boolean
}

interface ComplianceProps {
  onNext: () => void
  onBack: () => void
}

const Compliance: React.FC<ComplianceProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<ComplianceForm>({
    amlWatcherAgreed: false,
    dataProcessingConsent: false,
    termsAndConditions: false,
    privacyPolicy: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Compliance data:', formData)
    onNext()
  }

  const isFormValid = Object.values(formData).every(value => value === true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='bg-white rounded-xl p-6 shadow-sm border border-[#e0d4b8]'>
          <div className='flex items-center space-x-3 mb-6'>
            <Shield className='h-6 w-6 text-[#0f3d66]' />
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Compliance Information
            </h3>
          </div>

          <div className='space-y-6'>
            <div className='bg-[#e0d4b8]/20 p-6 rounded-xl border border-[#e0d4b8]'>
              <div className='flex items-start space-x-3 mb-4'>
                <CheckCircle className='h-5 w-5 text-[#f8b319] mt-0.5' />
                <div>
                  <h4 className='font-semibold text-[#0f3d66] mb-2'>
                    AML Watcher Integration
                  </h4>
                  <p className='text-sm text-[#3a5054] mb-4'>
                    Our Anti-Money Laundering (AML) system continuously monitors
                    transactions and activities to ensure compliance with
                    regulatory requirements and detect suspicious activities.
                  </p>
                </div>
              </div>

              <Checkbox
                label='I acknowledge and agree to AML monitoring and compliance procedures'
                checked={formData.amlWatcherAgreed}
                onChange={checked =>
                  setFormData({ ...formData, amlWatcherAgreed: checked })
                }
                required
                description='This is required for account activation and regulatory compliance'
              />
            </div>

            <div className='space-y-4'>
              <h4 className='font-semibold text-[#0f3d66]'>
                Data Processing & Privacy
              </h4>

              <Checkbox
                label='I consent to data processing for account management and compliance'
                checked={formData.dataProcessingConsent}
                onChange={checked =>
                  setFormData({ ...formData, dataProcessingConsent: checked })
                }
                required
                description='We process your data in accordance with applicable privacy laws'
              />

              <Checkbox
                label='I have read and agree to the Terms and Conditions'
                checked={formData.termsAndConditions}
                onChange={checked =>
                  setFormData({ ...formData, termsAndConditions: checked })
                }
                required
                description='Please review our terms of service before proceeding'
              />

              <Checkbox
                label='I have read and agree to the Privacy Policy'
                checked={formData.privacyPolicy}
                onChange={checked =>
                  setFormData({ ...formData, privacyPolicy: checked })
                }
                required
                description='Our privacy policy explains how we handle your personal information'
              />
            </div>

            {!isFormValid && (
              <div className='bg-red-50 border border-red-200 rounded-xl p-4'>
                <p className='text-sm text-red-600'>
                  Please accept all compliance requirements to continue.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-between'>
          <Button variant='secondary' onClick={onBack}>
            Back
          </Button>
          <div className='space-x-4'>
            <Button variant='secondary' type='button'>
              Save
            </Button>
            <Button
              variant='primary'
              type='submit'
              disabled={!isFormValid}
              className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Next
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Compliance
