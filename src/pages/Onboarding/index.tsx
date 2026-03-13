import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CustomerInfo from './CustomerInfo';
import EmploymentInfo from './EmploymentInfo';
import RegulatoryInfo from './RegulatoryInfo';
import FinancialInfo from './FinancialInfo';
import SourceOfWealth from './SourceOfWealth';
import TradingPermissions from './TradingPermissions';
import Others from './Others';
import UploadDocuments from './UploadDocuments';
import KycVerification from './KycVerification';
import RiskAppetite from './RiskAppetite';
import Compliance from './Compliance';
import OnboardingLayout from './OnboardingLayout';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleNext = (currentPath: string) => {
    const routes = [
      'customer-info',
      'employment-info',
      'regulatory-info',
      'financial-info',
      'source-of-wealth',
      'trading-permissions',
      'others',
      'upload-documents',
      'kyc-verification',
      'compliance',
      'risk-appetite'
    ];
    
    const currentIndex = routes.indexOf(currentPath);
    if (currentIndex < routes.length - 1) {
      navigate(`/onboarding/${routes[currentIndex + 1]}`);
    } else {
      navigate('/dashboard');
    }
  };

  const handleBack = (currentPath: string) => {
    const routes = [
      'customer-info',
      'employment-info',
      'regulatory-info',
      'financial-info',
      'source-of-wealth',
      'trading-permissions',
      'others',
      'upload-documents',
      'kyc-verification',
      'compliance',
      'risk-appetite'
    ];
    
    const currentIndex = routes.indexOf(currentPath);
    if (currentIndex > 0) {
      navigate(`/onboarding/${routes[currentIndex - 1]}`);
    }
  };

  return (
    <OnboardingLayout>
      <Routes>
        <Route path="customer-info" element={<CustomerInfo onNext={() => handleNext('customer-info')} onBack={() => handleBack('customer-info')} />} />
        <Route path="employment-info" element={<EmploymentInfo onNext={() => handleNext('employment-info')} onBack={() => handleBack('employment-info')} />} />
        <Route path="regulatory-info" element={<RegulatoryInfo onNext={() => handleNext('regulatory-info')} onBack={() => handleBack('regulatory-info')} />} />
        <Route path="financial-info" element={<FinancialInfo onNext={() => handleNext('financial-info')} onBack={() => handleBack('financial-info')} />} />
        <Route path="source-of-wealth" element={<SourceOfWealth onNext={() => handleNext('source-of-wealth')} onBack={() => handleBack('source-of-wealth')} />} />
        <Route path="trading-permissions" element={<TradingPermissions onNext={() => handleNext('trading-permissions')} onBack={() => handleBack('trading-permissions')} />} />
        <Route path="others" element={<Others onNext={() => handleNext('others')} onBack={() => handleBack('others')} />} />
        <Route path="upload-documents" element={<UploadDocuments onNext={() => handleNext('upload-documents')} onBack={() => handleBack('upload-documents')} />} />
        <Route path="kyc-verification" element={<KycVerification onNext={() => handleNext('kyc-verification')} onBack={() => handleBack('kyc-verification')} />} />
        <Route path="compliance" element={<Compliance onNext={() => handleNext('compliance')} onBack={() => handleBack('compliance')} />} />
        <Route path="risk-appetite" element={<RiskAppetite onNext={() => handleNext('risk-appetite')} onBack={() => handleBack('risk-appetite')} />} />
        <Route path="*" element={<Navigate to="customer-info" replace />} />
      </Routes>
    </OnboardingLayout>
  );
};

export default Onboarding;