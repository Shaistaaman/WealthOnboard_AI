import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import Checkbox from '../../components/Checkbox'

type TradingPermission = {
  permission: string
}

interface TradingPermissionsProps {
  onNext: () => void
  onBack: () => void
}

const TradingPermissions: React.FC<TradingPermissionsProps> = ({
  onNext,
  onBack
}) => {
  const { register, handleSubmit } = useForm<TradingPermission>()
  const [permissions, setPermissions] = useState<string[]>([''])
  const [selectedPermissions, setSelectedPermissions] = useState<{
    [key: string]: boolean
  }>({
    stocks: false,
    bonds: false,
    options: false,
    futures: false,
    forex: false,
    crypto: false,
    etfs: false,
    mutualFunds: false
  })

  const addPermission = () => {
    setPermissions([...permissions, ''])
  }

  const handlePermissionChange = (permission: string, checked: boolean) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [permission]: checked
    }))
  }

  const onSubmit = (data: TradingPermission) => {
    console.log({ ...data, selectedPermissions })
    onNext()
  }

  const tradingPermissionsList = [
    {
      key: 'stocks',
      label: 'Stocks & Equities',
      description: 'Trade individual stocks and equity securities'
    },
    {
      key: 'bonds',
      label: 'Bonds & Fixed Income',
      description: 'Government and corporate bonds'
    },
    {
      key: 'options',
      label: 'Options Trading',
      description: 'Call and put options on various securities'
    },
    {
      key: 'futures',
      label: 'Futures Contracts',
      description: 'Commodity and financial futures'
    },
    {
      key: 'forex',
      label: 'Foreign Exchange (Forex)',
      description: 'Currency trading pairs'
    },
    {
      key: 'crypto',
      label: 'Cryptocurrency',
      description: 'Digital assets and cryptocurrencies'
    },
    {
      key: 'etfs',
      label: 'ETFs & Index Funds',
      description: 'Exchange-traded funds and index investments'
    },
    {
      key: 'mutualFunds',
      label: 'Mutual Funds',
      description: 'Professionally managed investment funds'
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
            Trading Permissions
          </h3>

          <div className='mb-8'>
            <h4 className='text-lg font-medium text-[#3a5054] mb-4'>
              Select Trading Instruments
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {tradingPermissionsList.map(permission => (
                <Checkbox
                  key={permission.key}
                  label={permission.label}
                  description={permission.description}
                  checked={selectedPermissions[permission.key]}
                  onChange={checked =>
                    handlePermissionChange(permission.key, checked)
                  }
                  className='p-4 border border-[#e0d4b8] rounded-lg hover:border-[#f8b319] transition-colors'
                />
              ))}
            </div>
          </div>

          <div className='border-t border-[#e0d4b8] pt-6'>
            <h4 className='text-lg font-medium text-[#3a5054] mb-4'>
              Additional Permissions
            </h4>
            {permissions.map((_, index) => (
              <div key={index} className='mb-4'>
                <label className='block text-sm font-medium text-[#3a5054] mb-2'>
                  Custom Permission {index + 1}
                </label>
                <input
                  {...register(`permission${index}` as keyof TradingPermission)}
                  placeholder={`Enter custom permission ${index + 1}`}
                  className='w-full px-4 py-3 border border-[#e0d4b8] rounded-xl focus:ring-2 focus:ring-[#f8b319] focus:border-transparent transition-all duration-200'
                />
              </div>
            ))}

            <div className='flex justify-center mt-6'>
              <button
                type='button'
                onClick={addPermission}
                className='flex items-center space-x-2 px-4 py-2 text-[#51779e] hover:text-[#0f3d66] border border-[#51779e] hover:border-[#0f3d66] rounded-xl transition-colors'
              >
                <Plus size={20} />
                <span>Add Custom Permission</span>
              </button>
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

export default TradingPermissions
