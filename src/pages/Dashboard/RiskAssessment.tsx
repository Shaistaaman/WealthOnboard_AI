import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Target,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'

const RiskAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      question: 'What is your primary investment objective?',
      options: [
        { value: 'preservation', text: 'Capital preservation', score: 1 },
        { value: 'income', text: 'Generate income', score: 2 },
        { value: 'growth', text: 'Long-term growth', score: 3 },
        { value: 'aggressive', text: 'Aggressive growth', score: 4 }
      ]
    },
    {
      id: 1,
      question: 'What is your investment time horizon?',
      options: [
        { value: 'short', text: 'Less than 3 years', score: 1 },
        { value: 'medium', text: '3-7 years', score: 2 },
        { value: 'long', text: '7-15 years', score: 3 },
        { value: 'very_long', text: 'More than 15 years', score: 4 }
      ]
    },
    {
      id: 2,
      question: 'How would you react to a 20% decline in your portfolio?',
      options: [
        { value: 'panic', text: 'Sell everything immediately', score: 1 },
        { value: 'concerned', text: 'Sell some investments', score: 2 },
        { value: 'hold', text: 'Hold and wait for recovery', score: 3 },
        { value: 'buy_more', text: 'Buy more at lower prices', score: 4 }
      ]
    },
    {
      id: 3,
      question: 'What percentage of your income do you save annually?',
      options: [
        { value: 'low', text: 'Less than 5%', score: 1 },
        { value: 'moderate', text: '5-15%', score: 2 },
        { value: 'good', text: '15-25%', score: 3 },
        { value: 'high', text: 'More than 25%', score: 4 }
      ]
    },
    {
      id: 4,
      question: 'How much investment experience do you have?',
      options: [
        { value: 'none', text: 'No experience', score: 1 },
        { value: 'basic', text: 'Basic knowledge', score: 2 },
        { value: 'intermediate', text: 'Intermediate experience', score: 3 },
        { value: 'advanced', text: 'Advanced investor', score: 4 }
      ]
    }
  ]

  const handleAnswer = (optionValue: string, score: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionValue })

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const calculateRiskProfile = () => {
    const totalScore = Object.keys(answers).reduce((sum, questionId) => {
      const question = questions[parseInt(questionId)]
      const selectedOption = question.options.find(
        opt => opt.value === answers[parseInt(questionId)]
      )
      return sum + (selectedOption?.score || 0)
    }, 0)

    if (totalScore <= 8)
      return {
        level: 'Conservative',
        color: 'text-green-600',
        description: 'Low risk tolerance'
      }
    if (totalScore <= 12)
      return {
        level: 'Moderate',
        color: 'text-blue-600',
        description: 'Balanced approach'
      }
    if (totalScore <= 16)
      return {
        level: 'Growth',
        color: 'text-orange-600',
        description: 'Higher risk tolerance'
      }
    return {
      level: 'Aggressive',
      color: 'text-red-600',
      description: 'High risk tolerance'
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const riskProfile = calculateRiskProfile()

    return (
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>
            Risk Assessment Results
          </h2>
          <p className='text-[#3a5054] mt-2'>
            Based on your responses, here's your risk profile
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='bg-white rounded-xl p-8 shadow-xl border border-[#fcd46a] text-center'
        >
          <div className='mb-6'>
            <Target className='h-16 w-16 mx-auto text-[#f8b319] mb-4' />
            <h3 className={`text-4xl font-bold ${riskProfile.color} mb-2`}>
              {riskProfile.level}
            </h3>
            <p className='text-[#3a5054] text-lg'>{riskProfile.description}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
            <div className='bg-[#e0d4b8]/30 p-4 rounded-lg'>
              <BarChart3 className='h-8 w-8 text-[#0f3d66] mx-auto mb-2' />
              <div className='text-sm text-[#3a5054]'>
                Recommended Allocation
              </div>
              <div className='font-semibold text-[#0f3d66]'>
                {riskProfile.level === 'Conservative'
                  ? '30/60/10'
                  : riskProfile.level === 'Moderate'
                  ? '60/35/5'
                  : riskProfile.level === 'Growth'
                  ? '75/20/5'
                  : '85/10/5'}
              </div>
              <div className='text-xs text-[#3a5054]'>Stocks/Bonds/Cash</div>
            </div>

            <div className='bg-[#e0d4b8]/30 p-4 rounded-lg'>
              <AlertTriangle className='h-8 w-8 text-[#f8b319] mx-auto mb-2' />
              <div className='text-sm text-[#3a5054]'>Risk Level</div>
              <div className={`font-semibold ${riskProfile.color}`}>
                {riskProfile.level}
              </div>
            </div>

            <div className='bg-[#e0d4b8]/30 p-4 rounded-lg'>
              <CheckCircle className='h-8 w-8 text-green-600 mx-auto mb-2' />
              <div className='text-sm text-[#3a5054]'>Assessment Complete</div>
              <div className='font-semibold text-[#0f3d66]'>Profile Ready</div>
            </div>
          </div>

          <div className='flex gap-4 justify-center'>
            <button
              onClick={resetAssessment}
              className='flex items-center px-6 py-3 border-2 border-[#51779e] text-[#51779e] rounded-lg hover:bg-[#51779e] hover:text-white transition-colors'
            >
              <ArrowLeft className='h-4 w-4 mr-2' />
              Retake Assessment
            </button>
            <button className='flex items-center px-6 py-3 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors'>
              View Recommended Models
              <ArrowRight className='h-4 w-4 ml-2' />
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Risk Tolerance Assessment
        </h2>
        <p className='text-[#3a5054] mt-2'>
          Help us understand your investment preferences
        </p>
      </div>

      {/* Progress Bar */}
      <div className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-sm font-medium text-[#3a5054]'>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className='text-sm font-medium text-[#0f3d66]'>
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            Complete
          </span>
        </div>
        <div className='w-full bg-[#e0d4b8] rounded-full h-2'>
          <div
            className='bg-[#f8b319] h-2 rounded-full transition-all duration-300'
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className='bg-white rounded-xl p-8 shadow-xl border border-[#fcd46a]'
      >
        <h3 className='text-2xl font-bold text-[#0f3d66] mb-8 text-center'>
          {questions[currentQuestion].question}
        </h3>

        <div className='space-y-4'>
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleAnswer(option.value, option.score)}
              className='w-full p-4 text-left bg-[#e0d4b8]/30 rounded-lg hover:bg-[#f8b319]/20 hover:border-[#f8b319] border-2 border-transparent transition-all duration-200'
            >
              <div className='flex items-center justify-between'>
                <span className='text-[#0f3d66] font-medium'>
                  {option.text}
                </span>
                <ArrowRight className='h-5 w-5 text-[#3a5054]' />
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <div className='flex justify-center'>
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className='flex items-center px-6 py-3 border-2 border-[#51779e] text-[#51779e] rounded-lg hover:bg-[#51779e] hover:text-white transition-colors'
          >
            <ArrowLeft className='h-4 w-4 mr-2' />
            Previous Question
          </button>
        </div>
      )}
    </div>
  )
}

export default RiskAssessment
