import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RIALogin from './pages/RIALogin'
import RIASignup from './pages/RIASignup'
import OtpVerification from './pages/OtpVerification'
import QrCode from './pages/QrCode'
import Dashboard from './pages/Dashboard/index'
import Settings from './pages/Dashboard/Settings'
import Notifications from './pages/Notifications'
import Onboarding from './pages/Onboarding'
import AdministrationPortal from './pages/AdministrationPortal'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

// Dashboard Pages
import QRCodePage from './pages/Dashboard/QRCodePage'
import DashboardOverview from './pages/Dashboard/DashboardOverview'
import AccountBalance from './pages/Dashboard/AccountBalance'
import PerformanceCharts from './pages/Dashboard/PerformanceCharts'
import ProfitLoss from './pages/Dashboard/ProfitLoss'
import FundDetails from './pages/Dashboard/FundDetails'
import TradingPermissions from './pages/Dashboard/TradingPermissions'
import InvestmentModels from './pages/Dashboard/InvestmentModels'
import RiskAssessment from './pages/Dashboard/RiskAssessment'
import AIAdvisor from './pages/Dashboard/AIAdvisor'
import MarketData from './pages/Dashboard/MarketData'
import ProfileManagement from './pages/Dashboard/ProfileManagement'

function App () {
  return (
    <AuthProvider>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ria-login' element={<RIALogin />} />
          <Route path='/ria-signup' element={<RIASignup />} />
          <Route path='/verify-otp' element={<OtpVerification />} />
          <Route path='/qr-code' element={<QrCode />} />
          <Route
            path='/onboarding/*'
            element={
              <PrivateRoute>
                <Onboarding />
              </PrivateRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={<Navigate to='/dashboard/overview' replace />}
            />
            <Route path='overview' element={<DashboardOverview />} />
            <Route path='account-balance' element={<AccountBalance />} />
            <Route path='performance' element={<PerformanceCharts />} />
            <Route path='profit-loss' element={<ProfitLoss />} />
            <Route path='fund-details' element={<FundDetails />} />
            <Route
              path='trading-permissions'
              element={<TradingPermissions />}
            />
            <Route path='investment-models' element={<InvestmentModels />} />
            <Route path='risk-assessment' element={<RiskAssessment />} />
            <Route path='ai-advisor' element={<AIAdvisor />} />
            <Route path='market-data' element={<MarketData />} />
            <Route path='profile-management' element={<ProfileManagement />} />
            <Route
              path='profile'
              element={<Navigate to='/dashboard/profile-management' replace />}
            />
            <Route path='qr-code' element={<QRCodePage />} />
            <Route path='settings' element={<Settings />} />
            <Route path='notifications' element={<Notifications />} />
          </Route>
          <Route
            path='/admin/*'
            element={
              <PrivateRoute>
                <AdministrationPortal />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  )
}

export default App
