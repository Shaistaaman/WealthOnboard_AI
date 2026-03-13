import React from 'react'

const AdminDashboard: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>
          Administrative Dashboard
        </h1>
        <p className='mt-2 text-gray-600'>
          Manage users, KYC verification, and system operations
        </p>

        {/* Dashboard content will be implemented */}
        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center'>
                    <span className='text-white font-semibold'>U</span>
                  </div>
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Total Users
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-green-500 rounded-md flex items-center justify-center'>
                    <span className='text-white font-semibold'>K</span>
                  </div>
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Pending KYC
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center'>
                    <span className='text-white font-semibold'>T</span>
                  </div>
                </div>
                <div className='ml-5 w-0 flex-1'>
                  <dl>
                    <dt className='text-sm font-medium text-gray-500 truncate'>
                      Transactions Today
                    </dt>
                    <dd className='text-lg font-medium text-gray-900'>0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
