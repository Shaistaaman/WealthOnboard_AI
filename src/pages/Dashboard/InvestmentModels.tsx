import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const InvestmentModels: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  // Mock investment models data
  const investmentModels = [
    {
      id: 'conservative',
      name: 'Conservative Growth',
      riskLevel: 'Low',
      expectedReturn: '5-7%',
      timeHorizon: '3-5 years',
      allocation: { stocks: 30, bonds: 60, cash: 10 },
      description:
        'Focused on capital preservation with modest growth potential',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      features: ['Capital preservation', 'Low volatility', 'Steady income']
    },
    {
      id: 'moderate',
      name: 'Balanced Portfolio',
      riskLevel: 'Medium',
      expectedReturn: '7-10%',
      timeHorizon: '5-10 years',
      allocation: { stocks: 60, bonds: 35, cash: 5 },
      description: 'Balanced approach between growth and stability',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Balanced risk/return',
        'Diversified holdings',
        'Moderate growth'
      ]
    },
    {
      id: 'aggressive',
      name: 'Growth Focused',
      riskLevel: 'High',
      expectedReturn: '10-15%',
      timeHorizon: '10+ years',
      allocation: { stocks: 85, bonds: 10, cash: 5 },
      description: 'Maximum growth potential with higher volatility',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      features: [
        'High growth potential',
        'Long-term focus',
        'Higher volatility'
      ]
    }
  ]

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId)
    setShowDetails(true)
  }

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>Investment Models</h2>
        <p className='text-[#3a5054] mt-2'>
          Choose an investment strategy that matches your goals and risk
          tolerance
        </p>
      </div>

      {/* Model Selection Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {investmentModels.map((model, index) => {
          const Icon = model.icon
          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedModel === model.id
                  ? 'border-[#f8b319] shadow-xl'
                  : 'border-[#fcd46a] hover:border-[#f8b319] hover:shadow-xl'
              }`}
              onClick={() => handleModelSelect(model.id)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon className='h-8 w-8 text-white' />
              </div>

              <h3 className='text-xl font-bold text-[#0f3d66] mb-2'>
                {model.name}
              </h3>
              <p className='text-[#3a5054] text-sm mb-4'>{model.description}</p>

              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span className='text-sm text-[#3a5054]'>Risk Level:</span>
                  <span
                    className={`text-sm font-semibold ${
                      model.riskLevel === 'Low'
                        ? 'text-green-600'
                        : model.riskLevel === 'Medium'
                        ? 'text-blue-600'
                        : 'text-red-600'
                    }`}
                  >
                    {model.riskLevel}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm text-[#3a5054]'>
                    Expected Return:
                  </span>
                  <span className='text-sm font-semibold text-[#0f3d66]'>
                    {model.expectedReturn}
                  </span>
                </div>
              </div>

              {selectedModel === model.id && (
                <div className='flex items-center text-[#f8b319] font-semibold'>
                  <CheckCircle className='h-4 w-4 mr-2' />
                  Selected
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default InvestmentModels
