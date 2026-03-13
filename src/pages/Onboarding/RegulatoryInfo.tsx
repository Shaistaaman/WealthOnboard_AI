import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Checkbox from '../../components/Checkbox'
import RadioButton from '../../components/RadioButton'

type RegulatoryInfoForm = {
  question1: boolean
  question2: boolean
  politicallyExposed: string
  taxResident: string
}

interface RegulatoryInfoProps {
  onNext: () => void
  onBack: () => void
}

const RegulatoryInfo: React.FC<RegulatoryInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<RegulatoryInfoForm>()
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [politicallyExposed, setPoliticallyExposed] = useState('')
  const [taxResident, setTaxResident] = useState('')

  const onSubmit = (data: RegulatoryInfoForm) => {
    console.log({
      ...data,
      question1,
      question2,
      politicallyExposed,
      taxResident
    })
    onNext()
  }

  const politicallyExposedOptions = [
    {
      value: 'yes',
      label: 'Yes',
      description: 'I am a politically exposed person'
    },
    {
      value: 'no',
      label: 'No',
      description: 'I am not a politically exposed person'
    },
    {
      value: 'family',
      label: 'Family Member',
      description: 'I am a family member of a politically exposed person'
    }
  ]

  const taxResidentOptions = [
    {
      value: 'us-only',
      label: 'US Only',
      description: 'I am a tax resident of the US only'
    },
    {
      value: 'us-and-other',
      label: 'US and Other',
      description: 'I am a tax resident of the US and other countries'
    },
    {
      value: 'non-us',
      label: 'Non-US',
      description: 'I am not a US tax resident'
    }
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='bg-white p-6 rounded-xl shadow-lg border border-[#fcd46a]'>
          <h3 className='text-xl font-semibold text-[#0f3d66] mb-6'>
            Regulatory Questions
          </h3>

          <div className='space-y-6'>
            <div className='border-b border-[#e0d4b8] pb-6'>
              <h4 className='text-lg font-medium text-[#3a5054] mb-4'>
                Disclosure Questions
              </h4>
              <div className='space-y-4'>
                <Checkbox
                  label='Are you a director, 10% shareholder or policy-making officer of a publicly traded company?'
                  checked={question1}
                  onChange={setQuestion1}
                  className='p-4 border border-[#e0d4b8] rounded-lg hover:border-[#f8b319] transition-colors'
                />
                <Checkbox
                  label='Are you or any member of your immediate family employed by a broker-dealer?'
                  checked={question2}
                  onChange={setQuestion2}
                  className='p-4 border border-[#e0d4b8] rounded-lg hover:border-[#f8b319] transition-colors'
                />
              </div>
            </div>

            <div className='border-b border-[#e0d4b8] pb-6'>
              <RadioButton
                name='politicallyExposed'
                label='Are you a Politically Exposed Person (PEP)?'
                options={politicallyExposedOptions}
                value={politicallyExposed}
                onChange={setPoliticallyExposed}
                required
              />
            </div>

            <div>
              <RadioButton
                name='taxResident'
                label='Tax Residency Status'
                options={taxResidentOptions}
                value={taxResident}
                onChange={setTaxResident}
                required
              />
            </div>
          </div>
        </div>

        <div className='flex justify-between'>
          <button
            type='button'
            onClick={onBack}
            className='px-6 py-3 border border-[#51779e] text-[#51779e] rounded-xl hover:bg-[#51779e] hover:text-white transition-all duration-200 font-medium'
          >
            Back
          </button>
          <div className='space-x-4'>
            <button
              type='button'
              className='px-6 py-3 border border-[#51779e] text-[#51779e] rounded-xl hover:bg-[#51779e] hover:text-white transition-all duration-200 font-medium'
            >
              Save
            </button>
            <button
              type='submit'
              className='px-6 py-3 bg-[#f8b319] text-[#0f3d66] rounded-xl hover:bg-[#fcd46a] transition-all duration-200 font-medium'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default RegulatoryInfo
