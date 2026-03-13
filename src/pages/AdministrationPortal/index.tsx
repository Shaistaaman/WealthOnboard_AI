import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import Dashboard from './Dashboard'
import UserManagement from './UserManagement'
import KYCManagement from './KYCManagement'
import ApplicationTracking from './ApplicationTracking'
import FundTransfers from './FundTransfers'
import AccountReconciliation from './AccountReconciliation'
import FinancialReports from './FinancialReports'
import DocumentManagement from './DocumentManagement'
import TransactionRecords from './TransactionRecords'
import AuditTrail from './AuditTrail'

const AdministrationPortal: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='user-management' element={<UserManagement />} />
        <Route path='kyc-management' element={<KYCManagement />} />
        <Route path='application-tracking' element={<ApplicationTracking />} />
        <Route path='fund-transfers' element={<FundTransfers />} />
        <Route
          path='account-reconciliation'
          element={<AccountReconciliation />}
        />
        <Route path='financial-reports' element={<FinancialReports />} />
        <Route path='document-management' element={<DocumentManagement />} />
        <Route path='transaction-records' element={<TransactionRecords />} />
        <Route path='audit-trail' element={<AuditTrail />} />
        <Route path='*' element={<Navigate to='dashboard' replace />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdministrationPortal
