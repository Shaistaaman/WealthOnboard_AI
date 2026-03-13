import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import RadioButton from '../../components/RadioButton'

type WealthSource = {
  source: string
  percentage?: string
  description?: string
  usedToFundAccount: boolean
}

interface SourceOfWealthProps {
  onNext: () => void
  onBack: () => void
}

const SourceOfWealth: React.FC<SourceOfWealthProps> = ({ onNext, onBack }) => {
  const [sources, setSources] = useState<WealthSource[]>([
    { source: '', usedToFundAccount: true }
  ])

  const addSource = () => {
    setSources([...sources, { source: '', usedToFundAccount: false }])
  }

  const updateSource = (
    index: number,
    field: keyof WealthSource,
    value: any
  ) => {
    const updatedSources = [...sources]
    updatedSources[index] = { ...updatedSources[index], [field]: value }
    setSources(updatedSources)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ sources })
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
        {sources.map((source, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-xl shadow-sm border border-[#e0d4b8]'
          >
            <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>
              Source of Wealth {index + 1}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input
                label='Source of Wealth'
                value={source.source}
                onChange={e => updateSource(index, 'source', e.target.value)}
                placeholder='Enter source of wealth'
                required
              />

              <div className='space-y-4'>
                <RadioButton
                  name={`usedToFundAccount-${index}`}
                  label='Used to Fund Account'
                  options={[
                    { value: 'true', label: 'Yes' },
                    { value: 'false', label: 'No' }
                  ]}
                  value={source.usedToFundAccount ? 'true' : 'false'}
                  onChange={value =>
                    updateSource(index, 'usedToFundAccount', value === 'true')
                  }
                  layout='horizontal'
                />
              </div>

              <Input
                label='Percentage (optional)'
                type='number'
                value={source.percentage || ''}
                onChange={e =>
                  updateSource(index, 'percentage', e.target.value)
                }
                placeholder='Enter percentage (0-100)'
              />

              <Input
                label='Description (optional)'
                value={source.description || ''}
                onChange={e =>
                  updateSource(index, 'description', e.target.value)
                }
                placeholder='Enter description'
              />
            </div>
          </div>
        ))}

        <div className='flex justify-center'>
          <button
            type='button'
            onClick={addSource}
            className='flex items-center space-x-2 px-6 py-3 text-[#0f3d66] hover:text-[#f8b319] border border-[#e0d4b8] hover:border-[#f8b319] rounded-xl transition-all duration-200'
          >
            <Plus size={20} />
            <span>Add another source</span>
          </button>
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

export default SourceOfWealth
