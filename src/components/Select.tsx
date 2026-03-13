import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Option = {
  value: string
  label: string
}

type SelectProps = {
  label?: string
  value?: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  className = '',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selectedOption = options.find(option => option.value === value)

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
    setSearchTerm('')
  }

  const handleToggle = () => {
    if (disabled) return
    setIsOpen(!isOpen)
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && (
        <label className='block text-sm font-medium text-[#3a5054] mb-2'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <div
        onClick={handleToggle}
        className={`w-full px-4 py-3 border rounded-xl bg-white cursor-pointer transition-all duration-200 flex items-center justify-between ${
          disabled
            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
            : isOpen
            ? 'border-[#f8b319] ring-2 ring-[#f8b319]/20'
            : 'border-[#e0d4b8] hover:border-[#f8b319]'
        }`}
      >
        <span className={selectedOption ? 'text-[#0f3d66]' : 'text-gray-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#51779e] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 right-0 mt-2 bg-white border border-[#e0d4b8] rounded-xl shadow-xl z-50 max-h-60 overflow-hidden'
          >
            {/* Search input for large option lists */}
            {options.length > 5 && (
              <div className='p-3 border-b border-[#e0d4b8]'>
                <input
                  ref={inputRef}
                  type='text'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder='Search options...'
                  className='w-full px-3 py-2 border border-[#e0d4b8] rounded-lg text-sm focus:border-[#f8b319] focus:ring-2 focus:ring-[#f8b319]/20 outline-none'
                />
              </div>
            )}

            {/* Options list */}
            <div className='max-h-48 overflow-y-auto'>
              {filteredOptions.length > 0 ? (
                filteredOptions.map(option => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full px-4 py-3 text-left hover:bg-[#e0d4b8] transition-colors flex items-center justify-between ${
                      value === option.value
                        ? 'bg-[#fcd46a] text-[#0f3d66]'
                        : 'text-[#3a5054]'
                    }`}
                  >
                    <span>{option.label}</span>
                    {value === option.value && (
                      <Check className='h-4 w-4 text-[#0f3d66]' />
                    )}
                  </button>
                ))
              ) : (
                <div className='px-4 py-3 text-gray-400 text-sm'>
                  No options found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
