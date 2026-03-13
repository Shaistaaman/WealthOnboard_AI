import React from 'react'

const UserManagement: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>User Management</h1>
        <p className='mt-2 text-gray-600'>
          Manage user accounts, permissions, and onboarding status
        </p>

        {/* User management interface will be implemented */}
        <div className='mt-8'>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <div className='px-4 py-5 sm:p-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                User Accounts
              </h3>
              <div className='mt-2 max-w-xl text-sm text-gray-500'>
                <p>View and manage all user accounts in the system.</p>
              </div>
              {/* User table will be implemented here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
