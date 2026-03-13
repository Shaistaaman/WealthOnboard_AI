import React, { useState } from 'react';
import { Bell, User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { logout, user } = useAuth();

  const notifications = [
    {
      title: 'Portfolio Update',
      message: 'Your portfolio has increased by 2.3% today',
      time: '10 minutes ago'
    },
    {
      title: 'New Report Available',
      message: 'Your Q2 performance report is now available',
      time: '2 hours ago'
    },
    {
      title: 'Transaction Completed',
      message: 'Purchase of 10 AAPL shares was successful',
      time: '5 hours ago'
    }
  ];

  return (
    <header className="bg-white border-b border-neutral-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-burgundy-950">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-neutral-100 rounded-full relative"
            >
              <Bell className="w-6 h-6 text-neutral-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
                <div className="p-4 border-b border-neutral-200">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="p-4 border-b border-neutral-100 hover:bg-neutral-50"
                    >
                      <h3 className="font-medium text-neutral-900">{notification.title}</h3>
                      <p className="text-sm text-neutral-600">{notification.message}</p>
                      <span className="text-xs text-neutral-500">{notification.time}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 text-center">
                  <Link
                    to="/dashboard/notifications"
                    className="text-burgundy-950 hover:text-burgundy-800 text-sm font-medium"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-neutral-100 rounded-lg"
            >
              <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-burgundy-950" />
              </div>
              <span className="text-neutral-700">{user?.name || 'User'}</span>
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-neutral-50"
                >
                  <User className="w-5 h-5 text-neutral-600" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/dashboard/settings"
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-neutral-50"
                >
                  <Settings className="w-5 h-5 text-neutral-600" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-neutral-50 w-full text-left text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;