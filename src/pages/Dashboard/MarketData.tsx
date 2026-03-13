import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Globe,
  RefreshCw,
  Search
} from 'lucide-react'

const MarketData: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState('US')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Mock market data - will be replaced with real API integration
  const marketData = {
    indices: [
      {
        symbol: 'SPY',
        name: 'S&P 500',
        price: 4185.47,
        change: 23.45,
        changePercent: 0.56
      },
      {
        symbol: 'QQQ',
        name: 'NASDAQ 100',
        price: 350.82,
        change: -2.15,
        changePercent: -0.61
      },
      {
        symbol: 'DIA',
        name: 'Dow Jones',
        price: 340.25,
        change: 8.92,
        changePercent: 2.69
      },
      {
        symbol: 'IWM',
        name: 'Russell 2000',
        price: 195.73,
        change: 1.84,
        changePercent: 0.95
      }
    ],
    trending: [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 175.43,
        change: 2.87,
        changePercent: 1.66
      },
      {
        symbol: 'MSFT',
        name: 'Microsoft Corp.',
        price: 338.54,
        change: -1.23,
        changePercent: -0.36
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 125.89,
        change: 4.21,
        changePercent: 3.46
      },
      {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        price: 248.5,
        change: -8.75,
        changePercent: -3.4
      },
      {
        symbol: 'NVDA',
        name: 'NVIDIA Corp.',
        price: 875.28,
        change: 15.67,
        changePercent: 1.82
      }
    ],
    sectors: [
      { name: 'Technology', change: 1.25, color: 'text-green-600' },
      { name: 'Healthcare', change: 0.87, color: 'text-green-600' },
      { name: 'Financial', change: -0.45, color: 'text-red-600' },
      { name: 'Energy', change: 2.34, color: 'text-green-600' },
      { name: 'Consumer', change: -1.12, color: 'text-red-600' }
    ]
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const formatChange = (change: number, isPercent = false) => {
    const formatted = isPercent
      ? `${change.toFixed(2)}%`
      : formatPrice(Math.abs(change))
    return change >= 0 ? `+${formatted}` : `-${formatted}`
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl font-bold text-[#0f3d66]'>Market Data</h2>
          <p className='text-[#3a5054] mt-2'>
            Real-time market information and trends
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className='flex items-center px-4 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors disabled:opacity-50'
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
          Refresh Data
        </button>
      </div>

      {/* Market Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex gap-2'>
            {['US', 'International', 'Crypto'].map(market => (
              <button
                key={market}
                onClick={() => setSelectedMarket(market)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedMarket === market
                    ? 'bg-[#0f3d66] text-white'
                    : 'bg-[#e0d4b8] text-[#3a5054] hover:bg-[#fcd46a]'
                }`}
              >
                {market}
              </button>
            ))}
          </div>

          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#3a5054]' />
            <input
              type='text'
              placeholder='Search symbols...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='pl-10 pr-4 py-2 border border-[#e0d4b8] rounded-lg focus:ring-2 focus:ring-[#f8b319] focus:border-transparent'
            />
          </div>
        </div>
      </motion.div>

      {/* Rolling Banner - Major Indices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='bg-gradient-to-r from-[#0f3d66] to-[#51779e] rounded-xl p-4 text-white overflow-hidden'
      >
        <div className='flex items-center mb-2'>
          <Globe className='h-5 w-5 mr-2' />
          <span className='font-semibold'>Major Indices</span>
        </div>
        <div className='flex space-x-8 animate-scroll'>
          {marketData.indices.map((index, i) => (
            <div
              key={i}
              className='flex items-center space-x-2 whitespace-nowrap'
            >
              <span className='font-semibold'>{index.symbol}</span>
              <span>{formatPrice(index.price)}</span>
              <span
                className={`flex items-center ${
                  index.change >= 0 ? 'text-green-300' : 'text-red-300'
                }`}
              >
                {index.change >= 0 ? (
                  <TrendingUp className='h-3 w-3 mr-1' />
                ) : (
                  <TrendingDown className='h-3 w-3 mr-1' />
                )}
                {formatChange(index.changePercent, true)}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Market Overview Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Trending Stocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
        >
          <div className='p-6 border-b border-[#e0d4b8]'>
            <h3 className='text-xl font-semibold text-[#0f3d66]'>
              Trending Stocks
            </h3>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              {marketData.trending.map((stock, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-[#e0d4b8]/20 rounded-lg hover:bg-[#fcd46a]/30 transition-colors'
                >
                  <div>
                    <div className='font-semibold text-[#0f3d66]'>
                      {stock.symbol}
                    </div>
                    <div className='text-sm text-[#3a5054]'>{stock.name}</div>
                  </div>
                  <div className='text-right'>
                    <div className='font-semibold text-[#0f3d66]'>
                      {formatPrice(stock.price)}
                    </div>
                    <div
                      className={`text-sm flex items-center ${
                        stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stock.change >= 0 ? (
                        <TrendingUp className='h-3 w-3 mr-1' />
                      ) : (
                        <TrendingDown className='h-3 w-3 mr-1' />
                      )}
                      {formatChange(stock.changePercent, true)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sector Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='bg-white rounded-xl shadow-lg border border-[#fcd46a] overflow-hidden'
        >
          <div className='p-6 border-b border-[#e0d4b8]'>
            <h3 className='text-xl font-semibold text-[#0f3d66]'>
              Sector Performance
            </h3>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              {marketData.sectors.map((sector, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-[#e0d4b8]/20 rounded-lg'
                >
                  <div className='flex items-center'>
                    <BarChart3 className='h-5 w-5 text-[#51779e] mr-3' />
                    <span className='font-medium text-[#0f3d66]'>
                      {sector.name}
                    </span>
                  </div>
                  <div className={`font-semibold ${sector.color}`}>
                    {formatChange(sector.change, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='bg-white rounded-xl p-6 shadow-lg border border-[#fcd46a]'
      >
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-semibold text-[#0f3d66]'>Market Chart</h3>
          <div className='flex gap-2'>
            {['1D', '1W', '1M', '3M', '1Y'].map(period => (
              <button
                key={period}
                className='px-3 py-1 bg-[#e0d4b8] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors text-sm'
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className='h-64 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a] rounded-lg flex items-center justify-center'>
          <div className='text-center'>
            <BarChart3 className='h-16 w-16 text-[#0f3d66] mx-auto mb-4' />
            <p className='text-[#3a5054] font-medium'>
              Interactive Market Chart
            </p>
            <p className='text-sm text-[#3a5054]'>
              Real-time market data visualization
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MarketData
