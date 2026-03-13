import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Shield,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-[#f8b319]'
    },
    {
      name: 'Pending KYC',
      value: '23',
      change: '-5%',
      changeType: 'decrease',
      icon: Shield,
      color: 'bg-[#51779e]'
    },
    {
      name: 'Total AUM',
      value: '$45.2M',
      change: '+8.2%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-[#3a5054]'
    },
    {
      name: 'Active Accounts',
      value: '1,924',
      change: '+15%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-[#0f3d66]'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'KYC Approval',
      user: 'John Smith',
      time: '2 minutes ago',
      status: 'approved',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'Fund Transfer',
      user: 'Sarah Johnson',
      time: '15 minutes ago',
      status: 'pending',
      icon: Clock
    },
    {
      id: 3,
      type: 'Document Upload',
      user: 'Michael Chen',
      time: '1 hour ago',
      status: 'review',
      icon: FileText
    },
    {
      id: 4,
      type: 'Account Creation',
      user: 'Lisa Rodriguez',
      time: '2 hours ago',
      status: 'completed',
      icon: Users
    }
  ]

  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <div>
        <h2 className='text-3xl font-bold text-[#0f3d66]'>
          Dashboard Overview
        </h2>
        <p className='text-[#3a5054] mt-2'>
          Monitor system performance and user activities
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-[#3a5054]'>
                    {stat.name}
                  </p>
                  <p className='text-3xl font-bold text-[#0f3d66] mt-2'>
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      stat.changeType === 'increase'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className='h-6 w-6 text-white' />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activities and Alerts */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <h3 className='text-xl font-bold text-[#0f3d66] mb-4'>
            Recent Activities
          </h3>
          <div className='space-y-4'>
            {recentActivities.map(activity => {
              const Icon = activity.icon
              return (
                <div
                  key={activity.id}
                  className='flex items-center space-x-4 p-3 rounded-lg hover:bg-[#e0d4b8] transition-colors'
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.status === 'approved' ||
                      activity.status === 'completed'
                        ? 'bg-green-100'
                        : activity.status === 'pending'
                        ? 'bg-yellow-100'
                        : 'bg-blue-100'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        activity.status === 'approved' ||
                        activity.status === 'completed'
                          ? 'text-green-600'
                          : activity.status === 'pending'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-[#0f3d66]'>
                      {activity.type}
                    </p>
                    <p className='text-xs text-[#3a5054]'>{activity.user}</p>
                  </div>
                  <div className='text-xs text-[#3a5054]'>{activity.time}</div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* System Alerts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
        >
          <h3 className='text-xl font-bold text-[#0f3d66] mb-4'>
            System Alerts
          </h3>
          <div className='space-y-4'>
            <div className='flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200'>
              <AlertCircle className='h-5 w-5 text-yellow-600 mt-0.5' />
              <div>
                <p className='text-sm font-medium text-yellow-800'>
                  KYC Review Backlog
                </p>
                <p className='text-xs text-yellow-600'>
                  23 applications pending review for more than 48 hours
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200'>
              <AlertCircle className='h-5 w-5 text-blue-600 mt-0.5' />
              <div>
                <p className='text-sm font-medium text-blue-800'>
                  System Maintenance
                </p>
                <p className='text-xs text-blue-600'>
                  Scheduled maintenance window: Tonight 2:00 AM - 4:00 AM EST
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200'>
              <CheckCircle className='h-5 w-5 text-green-600 mt-0.5' />
              <div>
                <p className='text-sm font-medium text-green-800'>
                  All Systems Operational
                </p>
                <p className='text-xs text-green-600'>
                  All services running normally with 99.9% uptime
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='bg-white rounded-xl shadow-lg p-6 border border-[#fcd46a]'
      >
        <h3 className='text-xl font-bold text-[#0f3d66] mb-4'>Quick Actions</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <button className='flex items-center justify-center p-4 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-colors font-semibold'>
            <Users className='h-5 w-5 mr-2' />
            Add New User
          </button>
          <button className='flex items-center justify-center p-4 bg-[#51779e] text-white rounded-lg hover:bg-[#0f3d66] transition-colors font-semibold'>
            <Shield className='h-5 w-5 mr-2' />
            Review KYC
          </button>
          <button className='flex items-center justify-center p-4 bg-[#3a5054] text-white rounded-lg hover:bg-[#0f3d66] transition-colors font-semibold'>
            <FileText className='h-5 w-5 mr-2' />
            Generate Report
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
