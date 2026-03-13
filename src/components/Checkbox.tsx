import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

type CheckboxProps = {
  id?: string
  label?: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  className?: string
  description?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  required = false,
  className = '',
  description
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      <div className='flex items-center h-5'>
        <button
          type='button'
          onClick={handleChange}
          disabled={disabled}
          className={`relative w-5 h-5 rounded-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f8b319]/20 ${
            checked
              ? 'bg-[#f8b319] border-[#f8b319]'
              : 'bg-white border-[#e0d4b8] hover:border-[#f8b319]'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {checked && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className='absolute inset-0 flex items-center justify-center'
            >
              <Check className='h-3 w-3 text-[#0f3d66] font-bold' />
            </motion.div>
          )}
        </button>
      </div>

      {(label || description) && (
        <div className='flex-1'>
          {label && (
            <label
              htmlFor={id}
              onClick={handleChange}
              className={`text-sm font-medium text-[#3a5054] cursor-pointer ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {label}
              {required && <span className='text-red-500 ml-1'>*</span>}
            </label>
          )}
          {description && (
            <p className='text-xs text-[#3a5054]/70 mt-1'>{description}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Checkbox
