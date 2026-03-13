import React from 'react'
import { motion } from 'framer-motion'

type RadioOption = {
  value: string
  label: string
  description?: string
}

type RadioButtonProps = {
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  label?: string
  required?: boolean
  disabled?: boolean
  className?: string
  layout?: 'vertical' | 'horizontal'
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  required = false,
  disabled = false,
  className = '',
  layout = 'vertical'
}) => {
  return (
    <div className={className}>
      {label && (
        <label className='block text-sm font-medium text-[#3a5054] mb-3'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <div
        className={`space-y-3 ${
          layout === 'horizontal' ? 'flex space-x-6 space-y-0' : ''
        }`}
      >
        {options.map(option => (
          <div key={option.value} className='flex items-start space-x-3'>
            <div className='flex items-center h-5'>
              <button
                type='button'
                onClick={() => !disabled && onChange(option.value)}
                disabled={disabled}
                className={`relative w-5 h-5 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f8b319]/20 ${
                  value === option.value
                    ? 'bg-white border-[#f8b319]'
                    : 'bg-white border-[#e0d4b8] hover:border-[#f8b319]'
                } ${
                  disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {value === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.15 }}
                    className='absolute inset-1 bg-[#f8b319] rounded-full'
                  />
                )}
              </button>
            </div>

            <div className='flex-1'>
              <label
                onClick={() => !disabled && onChange(option.value)}
                className={`text-sm font-medium text-[#3a5054] cursor-pointer ${
                  disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {option.label}
              </label>
              {option.description && (
                <p className='text-xs text-[#3a5054]/70 mt-1'>
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioButton
