import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Send,
  User,
  TrendingUp,
  DollarSign,
  PieChart,
  MessageCircle
} from 'lucide-react'

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content:
        "Hello! I'm your AI Financial Advisor. I can help you with investment questions, portfolio analysis, and market insights. How can I assist you today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    "What's my portfolio performance?",
    'Should I rebalance my investments?',
    'Explain market trends',
    'Risk assessment advice'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response (will be replaced with Amazon Bedrock integration)
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (question: string): string => {
    // Mock AI responses - will be replaced with Amazon Bedrock
    const responses = {
      portfolio:
        'Based on your current portfolio allocation, you have a well-diversified mix with 60% stocks, 35% bonds, and 5% cash. Your portfolio has gained 8.2% this month, outperforming the benchmark by 2.1%. Consider rebalancing if any asset class deviates more than 5% from target allocation.',
      rebalance:
        'Your current allocation is slightly overweight in US stocks (38% vs 35% target). I recommend selling $2,500 in US equities and purchasing international bonds to maintain your target allocation. This will help optimize your risk-return profile.',
      market:
        "Current market conditions show moderate volatility with technology stocks leading gains. The Federal Reserve's recent policy changes suggest continued support for growth assets. Consider maintaining your current allocation while monitoring inflation indicators.",
      risk: 'Your risk profile indicates a moderate investor with 5-10 year time horizon. Your current portfolio aligns well with this profile. Consider increasing bond allocation if approaching retirement, or adding growth stocks if timeline extends beyond 10 years.'
    }

    const lowerQuestion = question.toLowerCase()
    if (
      lowerQuestion.includes('portfolio') ||
      lowerQuestion.includes('performance')
    ) {
      return responses.portfolio
    } else if (lowerQuestion.includes('rebalance')) {
      return responses.rebalance
    } else if (
      lowerQuestion.includes('market') ||
      lowerQuestion.includes('trend')
    ) {
      return responses.market
    } else if (lowerQuestion.includes('risk')) {
      return responses.risk
    } else {
      return (
        "I understand you're asking about " +
        question +
        ". Based on your portfolio data and current market conditions, I'd recommend reviewing your investment strategy quarterly. Would you like me to analyze any specific aspect of your investments?"
      )
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>
            AI Financial Advisor
          </h2>
          <p className='text-[#3a5054] mt-2'>
            Get personalized investment guidance powered by AI
          </p>
        </div>
        <div className='flex items-center px-4 py-2 bg-green-100 rounded-lg'>
          <div className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse'></div>
          <span className='text-green-700 text-sm font-medium'>AI Online</span>
        </div>
      </div>

      {/* Chat Interface */}
      <div className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'>
        {/* Chat Header */}
        <div className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] p-4'>
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-[#f8b319] rounded-full flex items-center justify-center mr-3'>
              <Bot className='h-6 w-6 text-[#0f3d66]' />
            </div>
            <div>
              <h3 className='text-white font-semibold'>
                WealthOnboard AI Assistant
              </h3>
              <p className='text-white/80 text-sm'>Powered by Amazon Bedrock</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className='h-96 overflow-y-auto p-4 space-y-4'>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex items-start max-w-xs lg:max-w-md ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user'
                      ? 'bg-[#f8b319] ml-2'
                      : 'bg-[#0f3d66] mr-2'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className='h-4 w-4 text-[#0f3d66]' />
                  ) : (
                    <Bot className='h-4 w-4 text-white' />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-[#f8b319] text-[#0f3d66]'
                      : 'bg-[#e0d4b8] text-[#0f3d66]'
                  }`}
                >
                  <p className='text-sm'>{message.content}</p>
                  <p className='text-xs opacity-70 mt-1'>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex justify-start'
            >
              <div className='flex items-start'>
                <div className='w-8 h-8 bg-[#0f3d66] rounded-full flex items-center justify-center mr-2'>
                  <Bot className='h-4 w-4 text-white' />
                </div>
                <div className='bg-[#e0d4b8] rounded-lg p-3'>
                  <div className='flex space-x-1'>
                    <div className='w-2 h-2 bg-[#0f3d66] rounded-full animate-bounce'></div>
                    <div
                      className='w-2 h-2 bg-[#0f3d66] rounded-full animate-bounce'
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-[#0f3d66] rounded-full animate-bounce'
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className='p-4 border-t border-[#e0d4b8]'>
          <p className='text-sm text-[#3a5054] mb-2'>Quick questions:</p>
          <div className='flex flex-wrap gap-2'>
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className='px-3 py-1 bg-[#e0d4b8] text-[#0f3d66] rounded-full text-sm hover:bg-[#fcd46a] transition-colors'
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className='p-4 border-t border-[#e0d4b8]'>
          <div className='flex space-x-2'>
            <input
              type='text'
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder='Ask me about your investments...'
              className='flex-1 px-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className='px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <Send className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center mb-4'>
            <TrendingUp className='h-8 w-8 text-[#f8b319] mr-3' />
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Market Insight
            </h3>
          </div>
          <p className='text-[#3a5054] text-sm'>
            Technology stocks are showing strong momentum. Consider reviewing
            your tech allocation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center mb-4'>
            <PieChart className='h-8 w-8 text-[#51779e] mr-3' />
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Rebalancing
            </h3>
          </div>
          <p className='text-[#3a5054] text-sm'>
            Your portfolio is well-balanced. Next rebalancing recommended in 2
            months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
        >
          <div className='flex items-center mb-4'>
            <DollarSign className='h-8 w-8 text-green-600 mr-3' />
            <h3 className='text-lg font-semibold text-[#0f3d66]'>
              Opportunity
            </h3>
          </div>
          <p className='text-[#3a5054] text-sm'>
            Consider increasing your international exposure for better
            diversification.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AIAdvisor
