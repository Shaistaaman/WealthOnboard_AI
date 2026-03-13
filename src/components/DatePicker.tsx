import React, { useState, useRef, useEffect } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type DatePickerProps = {
  label?: string
  value?: string
  onChange: (date: string) => void
  placeholder?: string
  required?: boolean
  className?: string
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Select Date',
  required = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  )
  const containerRef = useRef<HTMLDivElement>(null)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onChange(date.toISOString().split('T')[0])
    setIsOpen(false)
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    )
  }

  const handleToday = () => {
    const today = new Date()
    setSelectedDate(today)
    setCurrentDate(today)
    onChange(today.toISOString().split('T')[0])
    setIsOpen(false)
  }

  const handleClear = () => {
    setSelectedDate(null)
    onChange('')
    setIsOpen(false)
  }

  const formatDisplayDate = (date: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && (
        <label className='block text-sm font-medium text-[#3a5054] mb-2'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl bg-white cursor-pointer hover:border-[#f8b319] focus:border-[#f8b319] focus:ring-2 focus:ring-[#f8b319]/20 transition-all duration-200 flex items-center justify-between'
      >
        <span className={selectedDate ? 'text-[#0f3d66]' : 'text-gray-400'}>
          {selectedDate ? formatDisplayDate(selectedDate) : placeholder}
        </span>
        <Calendar className='h-5 w-5 text-[#51779e]' />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 right-0 mt-2 bg-white border border-[#e0d4b8] rounded-xl shadow-xl z-50 p-4'
          >
            {/* Header */}
            <div className='flex items-center justify-between mb-4'>
              <button
                type='button'
                onClick={handlePrevMonth}
                className='p-2 hover:bg-[#e0d4b8] rounded-lg transition-colors'
              >
                <ChevronLeft className='h-4 w-4 text-[#3a5054]' />
              </button>

              <h3 className='text-lg font-semibold text-[#0f3d66]'>
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>

              <button
                type='button'
                onClick={handleNextMonth}
                className='p-2 hover:bg-[#e0d4b8] rounded-lg transition-colors'
              >
                <ChevronRight className='h-4 w-4 text-[#3a5054]' />
              </button>
            </div>

            {/* Week days */}
            <div className='grid grid-cols-7 gap-1 mb-2'>
              {weekDays.map(day => (
                <div
                  key={day}
                  className='text-center text-sm font-medium text-[#3a5054] py-2'
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className='grid grid-cols-7 gap-1 mb-4'>
              {days.map((day, index) => (
                <div key={index} className='aspect-square'>
                  {day && (
                    <button
                      type='button'
                      onClick={() => handleDateSelect(day)}
                      className={`w-full h-full rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedDate &&
                        day.toDateString() === selectedDate.toDateString()
                          ? 'bg-[#0f3d66] text-white'
                          : day.toDateString() === new Date().toDateString()
                          ? 'bg-[#f8b319] text-[#0f3d66]'
                          : 'text-[#3a5054] hover:bg-[#e0d4b8]'
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between pt-3 border-t border-[#e0d4b8]'>
              <button
                type='button'
                onClick={handleClear}
                className='text-sm text-[#51779e] hover:text-[#0f3d66] font-medium'
              >
                Clear
              </button>
              <button
                type='button'
                onClick={handleToday}
                className='text-sm text-[#51779e] hover:text-[#0f3d66] font-medium'
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DatePicker
