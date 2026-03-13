import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Shield,
  ClipboardList,
  ArrowLeftRight,
  Calculator,
  FileText,
  FolderOpen,
  Receipt,
  Search,
  LogOut,
  Settings
} from 'lucide-react'

type AdminLayoutProps = {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation()

  const navigationItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'User Management', href: '/admin/user-management', icon: Users },
    { name: 'KYC Management', href: '/admin/kyc-management', icon: Shield },
    {
      name: 'Application Tracking',
      href: '/admin/application-tracking',
      icon: ClipboardList
    },
    {
      name: 'Fund Transfers',
      href: '/admin/fund-transfers',
      icon: ArrowLeftRight
    },
    {
      name: 'Account Reconciliation',
      href: '/admin/account-reconciliation',
      icon: Calculator
    },
    {
      name: 'Financial Reports',
      href: '/admin/financial-reports',
      icon: FileText
    },
    {
      name: 'Document Management',
      href: '/admin/document-management',
      icon: FolderOpen
    },
    {
      name: 'Transaction Records',
      href: '/admin/transaction-records',
      icon: Receipt
    },
    { name: 'Audit Trail', href: '/admin/audit-trail', icon: Search }
  ]

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      {/* Sidebar */}
      <div className='w-64 bg-white border-r border-neutral-200 shadow-xl'>
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <div className='flex items-center px-6 py-4 border-b border-neutral-200'>
            <img
              src='/src/assets/logo.png'
              alt='WealthOnboard AI'
              className='h-8 w-auto'
            />
            <span className='ml-3 text-xl font-bold text-[#0f3d66]'>
              Admin Portal
            </span>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4 py-6 space-y-1'>
            <h2 className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-3'>
              Administration
            </h2>
            {navigationItems.map(item => {
              const isActive = location.pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0f3d66] bg-[#fcd46a]'
                      : 'text-neutral-700 hover:text-[#0f3d66] hover:bg-neutral-50'
                  }`}
                >
                  <Icon className='mr-3 h-5 w-5' />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className='px-4 py-4 border-t border-neutral-200'>
            <div className='space-y-1'>
              <button className='flex items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:text-[#0f3d66] hover:bg-neutral-50 rounded-md w-full transition-colors'>
                <Settings className='h-5 w-5 mr-3' />
                Settings
              </button>
              <button className='flex items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:text-[#0f3d66] hover:bg-neutral-50 rounded-md w-full transition-colors'>
                <LogOut className='h-5 w-5 mr-3' />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm border-b border-neutral-200'>
          <div className='px-6 py-4'>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold text-[#0f3d66]'>
                WealthOnboard AI - Administration Portal
              </h1>
              <div className='flex items-center space-x-4'>
                <div className='text-sm text-[#3a5054]'>Admin User</div>
                <div className='w-8 h-8 bg-[#f8b319] rounded-full flex items-center justify-center'>
                  <span className='text-[#0f3d66] font-semibold text-sm'>
                    A
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className='flex-1 overflow-y-auto p-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
