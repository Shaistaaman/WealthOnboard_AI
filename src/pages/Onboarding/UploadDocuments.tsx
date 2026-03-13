import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Eye, Check } from 'lucide-react'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'

interface UploadDocumentsProps {
  onNext: () => void
  onBack: () => void
}

type DocumentSection = {
  title: string
  documents: {
    name: string
    file: File | null
    selected: boolean
  }[]
}

const UploadDocuments: React.FC<UploadDocumentsProps> = ({
  onNext,
  onBack
}) => {
  const [sections, setSections] = useState<DocumentSection[]>([
    {
      title: 'Upload Documents',
      documents: [
        {
          name: 'Memorandum and Articles of Association/ Establishment Charter',
          file: null,
          selected: false
        },
        {
          name: 'Financial Statements',
          file: null,
          selected: false
        }
      ]
    },
    {
      title: 'Upload License',
      documents: [
        {
          name: 'Commercial Registration License',
          file: null,
          selected: false
        },
        {
          name: 'Import Permit/License',
          file: null,
          selected: false
        }
      ]
    },
    {
      title: 'Upload IDs',
      documents: [
        {
          name: 'Computer Card',
          file: null,
          selected: false
        },
        {
          name: 'QIDs of all Shareholders/Executive Management',
          file: null,
          selected: false
        }
      ]
    }
  ])

  const handleFileChange = (
    sectionIndex: number,
    documentIndex: number,
    file: File
  ) => {
    const updatedSections = [...sections]
    updatedSections[sectionIndex].documents[documentIndex].file = file
    setSections(updatedSections)
    console.log(
      `Uploading file for section ${sectionIndex}, document ${documentIndex}:`,
      file
    )
  }

  const handleCheckboxChange = (
    sectionIndex: number,
    documentIndex: number,
    checked: boolean
  ) => {
    const updatedSections = [...sections]
    updatedSections[sectionIndex].documents[documentIndex].selected = checked
    setSections(updatedSections)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='space-y-6'
    >
      <form onSubmit={handleSubmit} className='space-y-8'>
        {sections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className='bg-white p-6 rounded-xl shadow-sm border border-[#e0d4b8]'
          >
            <h3 className='text-lg font-semibold text-[#0f3d66] mb-6'>
              {section.title}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {section.documents.map((doc, docIndex) => (
                <div key={doc.name} className='space-y-4'>
                  <Checkbox
                    label={doc.name}
                    checked={doc.selected}
                    onChange={checked =>
                      handleCheckboxChange(sectionIndex, docIndex, checked)
                    }
                    className='mb-4'
                  />

                  <div className='space-y-3'>
                    <input
                      type='file'
                      accept='.jpg,.png,.pdf'
                      onChange={e => {
                        const file = e.target.files?.[0]
                        if (file) handleFileChange(sectionIndex, docIndex, file)
                      }}
                      className='hidden'
                      id={`file-${sectionIndex}-${docIndex}`}
                    />

                    <div className='flex items-center space-x-3'>
                      <label
                        htmlFor={`file-${sectionIndex}-${docIndex}`}
                        className='px-4 py-2 bg-[#0f3d66] text-white rounded-xl hover:bg-[#51779e] cursor-pointer flex items-center space-x-2 transition-all duration-200'
                      >
                        <Upload size={16} />
                        <span>Choose file</span>
                      </label>

                      <div className='flex items-center space-x-2'>
                        {doc.file ? (
                          <div className='flex items-center space-x-2 text-green-600'>
                            <Check size={16} />
                            <span className='text-sm font-medium'>
                              {doc.file.name}
                            </span>
                          </div>
                        ) : (
                          <span className='text-sm text-[#3a5054]/70'>
                            No File Selected
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-[#3a5054]/70'>
                        Accepted Format: jpg, png, and pdf
                      </span>
                      <button
                        type='button'
                        className='text-[#0f3d66] hover:text-[#f8b319] flex items-center space-x-1 transition-colors duration-200'
                      >
                        <Eye size={16} />
                        <span>View Sample</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

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

export default UploadDocuments
