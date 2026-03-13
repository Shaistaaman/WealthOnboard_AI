import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Save, X, AlertCircle } from 'lucide-react'
import Button from './Button'

type SaveConfirmationModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  onDontSave: () => void
}

const SaveConfirmationModal: React.FC<SaveConfirmationModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDontSave
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className='bg-white rounded-xl shadow-xl max-w-md w-full p-6'
            onClick={e => e.stopPropagation()}
          >
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-[#f8b319]/20 rounded-full flex items-center justify-center'>
                  <AlertCircle className='h-5 w-5 text-[#f8b319]' />
                </div>
                <h3 className='text-lg font-semibold text-[#0f3d66]'>
                  Save Progress?
                </h3>
              </div>
              <button
                onClick={onClose}
                className='text-[#3a5054] hover:text-[#0f3d66] transition-colors'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='mb-6'>
              <p className='text-[#3a5054] mb-4'>
                You have unsaved changes in your onboarding form. Would you like
                to save your progress before going to the dashboard?
              </p>
              <div className='bg-[#e0d4b8]/20 p-4 rounded-xl border border-[#e0d4b8]'>
                <p className='text-sm text-[#3a5054]'>
                  <strong>Save:</strong> Your current progress will be saved and
                  you can continue later.
                </p>
                <p className='text-sm text-[#3a5054] mt-2'>
                  <strong>Don't Save:</strong> Your current changes will be
                  lost.
                </p>
              </div>
            </div>

            <div className='flex space-x-3'>
              <Button
                variant='secondary'
                onClick={onDontSave}
                className='flex-1'
              >
                Don't Save
              </Button>
              <Button
                variant='primary'
                onClick={onSave}
                className='flex-1 flex items-center justify-center space-x-2'
              >
                <Save className='h-4 w-4' />
                <span>Save & Continue</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SaveConfirmationModal
