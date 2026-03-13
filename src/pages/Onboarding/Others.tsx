import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/Button'
import Input from '../../components/Input'
import RadioButton from '../../components/RadioButton'

type OthersForm = {
  taxReturnName: string
  certifyTIN: boolean
  certifyUSPerson: boolean
  agreeToCertification: boolean
  beneficialOwner: boolean
  agreeToPartIII: boolean
}

interface OthersProps {
  onNext: () => void
  onBack: () => void
}

const Others: React.FC<OthersProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<OthersForm>({
    taxReturnName: '',
    certifyTIN: false,
    certifyUSPerson: false,
    agreeToCertification: false,
    beneficialOwner: false,
    agreeToPartIII: false
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    onNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <form onSubmit={onSubmit} className='space-y-6'>
        <div className='bg-white p-6 rounded-xl shadow-sm border border-[#e0d4b8]'>
          <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>W-9</h3>
          <div className='space-y-6'>
            <Input
              label='Name as on Tax Return'
              value={formData.taxReturnName}
              onChange={e =>
                setFormData({ ...formData, taxReturnName: e.target.value })
              }
              placeholder='Enter name as it appears on tax return'
              required
            />

            <RadioButton
              name='certifyTIN'
              label='Certify TIN is Correct'
              options={[
                { value: 'true', label: 'Yes' },
                { value: 'false', label: 'No' }
              ]}
              value={formData.certifyTIN ? 'true' : 'false'}
              onChange={value =>
                setFormData({ ...formData, certifyTIN: value === 'true' })
              }
              layout='horizontal'
              required
            />
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-sm border border-[#e0d4b8]'>
          <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>W-8BEN</h3>
          <div className='space-y-6'>
            <RadioButton
              name='beneficialOwner'
              label='Name of Beneficial Owner in Part I'
              options={[
                { value: 'true', label: 'Yes' },
                { value: 'false', label: 'No' }
              ]}
              value={formData.beneficialOwner ? 'true' : 'false'}
              onChange={value =>
                setFormData({ ...formData, beneficialOwner: value === 'true' })
              }
              layout='horizontal'
              required
            />

            <RadioButton
              name='agreeToPartIII'
              label='Agree to Part III Certification'
              options={[
                { value: 'true', label: 'Yes' },
                { value: 'false', label: 'No' }
              ]}
              value={formData.agreeToPartIII ? 'true' : 'false'}
              onChange={value =>
                setFormData({ ...formData, agreeToPartIII: value === 'true' })
              }
              layout='horizontal'
              required
            />
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-sm border border-[#e0d4b8]'>
          <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>
            Advisor Wrap Fees
          </h3>
          <RadioButton
            name='agreeToCertification'
            label='Agree to Advisor Wrap Fee Terms'
            options={[
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' }
            ]}
            value={formData.agreeToCertification ? 'true' : 'false'}
            onChange={value =>
              setFormData({
                ...formData,
                agreeToCertification: value === 'true'
              })
            }
            layout='horizontal'
            required
          />
        </div>

        <div className='flex justify-between'>
          <Button variant='secondary' onClick={onBack}>
            Back
          </Button>
          <div className='space-x-4'>
            <Button variant='secondary' type='button'>
              Save
            </Button>
            <Button variant='primary' type='submit'>
              Next
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Others
