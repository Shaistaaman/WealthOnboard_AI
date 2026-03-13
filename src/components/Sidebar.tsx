import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Bell,
  Settings,
  User,
  LogOut,
  Home,
  BarChart2,
  QrCode,
  DollarSign,
  TrendingUp,
  PieChart,
  Shield,
  Target,
  Brain,
  Activity,
  UserCheck,
  Wallet
} from 'lucide-react'
import logoImage from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard/overview' },
  {
    icon: DollarSign,
    label: 'Account Balance',
    path: '/dashboard/account-balance'
  },
  { icon: TrendingUp, label: 'Performance', path: '/dashboard/performance' },
  { icon: BarChart2, label: 'Profit & Loss', path: '/dashboard/profit-loss' },
  { icon: PieChart, label: 'Fund Details', path: '/dashboard/fund-details' },
  {
    icon: Shield,
    label: 'Trading Permissions',
    path: '/dashboard/trading-permissions'
  },
  {
    icon: Target,
    label: 'Investment Models',
    path: '/dashboard/investment-models'
  },
  {
    icon: Activity,
    label: 'Risk Assessment',
    path: '/dashboard/risk-assessment'
  },
  { icon: Brain, label: 'AI Advisor', path: '/dashboard/ai-advisor' },
  { icon: Wallet, label: 'Market Data', path: '/dashboard/market-data' }
]

const Sidebar = () => {
  const { logout } = useAuth()

  return (
    <div className='w-64 h-screen bg-white border-r border-neutral-200 flex flex-col'>
      <div className='p-4 border-b border-neutral-200'>
        <img src={logoImage} alt='WealthOnboard AI' className='h-12 w-auto' />
      </div>

      <div className='flex-1 overflow-y-auto py-4'>
        <div className='px-4 mb-6'>
          <h2 className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3'>
            Menu
          </h2>
          <nav className='space-y-1'>
            {menuItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-burgundy-950 bg-burgundy-50'
                      : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                  }`
                }
              >
                <item.icon className='w-5 h-5 mr-3' />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className='px-4'>
          <h2 className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3'>
            General
          </h2>
          <nav className='space-y-1'>
            <NavLink
              to='/dashboard/notifications'
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-burgundy-950 bg-burgundy-50'
                    : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                }`
              }
            >
              <Bell className='w-5 h-5 mr-3' />
              Notifications
            </NavLink>
            <NavLink
              to='/dashboard/qr-code'
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-burgundy-950 bg-burgundy-50'
                    : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                }`
              }
            >
              <QrCode className='w-5 h-5 mr-3' />
              QR Code
            </NavLink>
            <NavLink
              to='/dashboard/settings'
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-burgundy-950 bg-burgundy-50'
                    : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                }`
              }
            >
              <Settings className='w-5 h-5 mr-3' />
              Settings
            </NavLink>
            <NavLink
              to='/dashboard/profile-management'
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-burgundy-950 bg-burgundy-50'
                    : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                }`
              }
            >
              <UserCheck className='w-5 h-5 mr-3' />
              Profile Management
            </NavLink>
            <NavLink
              to='/dashboard/profile'
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-burgundy-950 bg-burgundy-50'
                    : 'text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50'
                }`
              }
            >
              <User className='w-5 h-5 mr-3' />
              Profile
            </NavLink>
          </nav>
        </div>
      </div>

      <div className='p-4 border-t border-neutral-200'>
        <button
          onClick={logout}
          className='flex items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:text-burgundy-950 hover:bg-neutral-50 rounded-md w-full transition-colors'
        >
          <LogOut className='w-5 h-5 mr-3' />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
