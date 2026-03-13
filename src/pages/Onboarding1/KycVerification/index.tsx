import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Info } from 'lucide-react';
import Button from '../../../components/Button';

type Step = 'document' | 'liveness' | 'details' | 'risk-appetite';

interface KycDetails {
  name: string;
  fatherName: string;
  dateOfBirth: string;
  id: string;
  completeAddress: string;
  permanentAddress: string;
  dateOfIssue: string;
  dateOfExpire: string;
}

const mockKycDetails: KycDetails = {
  name: 'Arsahd Saeed',
  fatherName: 'Kaeden Salah',
  dateOfBirth: '23 May 1990',
  id: '61101-7895462-5',
  completeAddress: 'Al Rayyan Complex - B, Rayyan Rd',
  permanentAddress: 'Al Rayyan Complex - B, Rayyan Rd',
  dateOfIssue: '23 May 2013',
  dateOfExpire: '23 May 2023',
};

const riskTypes = [
  {
    type: 'Conservative',
    description: 'Focus on low-risk investments',
    percentage: 20,
  },
  {
    type: 'Conservative to Moderate',
    description: 'Include a mix of bonds and stable stocks',
    percentage: 40,
  },
  {
    type: 'Moderate',
    description: 'Balance between stocks and bonds',
    percentage: 60,
  },
  {
    type: 'Growth & Income',
    description: 'Emphasize growth stocks with some income-generating assets',
    percentage: 80,
  },
  {
    type: 'Aggressive',
    description: 'Prioritize high-risk, high-reward investments',
    percentage: 100,
  },
];

const KycVerification = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState<Step>('document');
  const [showCamera, setShowCamera] = useState(false);
  const [showLivenessInstructions, setShowLivenessInstructions] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedRiskType, setSelectedRiskType] = useState(2);
  const [hoveredRiskType, setHoveredRiskType] = useState<number | null>(null);

  const handleContinue = () => {
    if (currentStep === 'document') {
      setCurrentStep('liveness');
    } else if (currentStep === 'liveness') {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      setCurrentStep('risk-appetite');
    }
  };

  const handleStartLivenessCheck = () => {
    setShowLivenessInstructions(true);
  };

  const handleStartCapturing = () => {
    setShowLivenessInstructions(false);
    setShowCamera(true);
  };

  const handleSubmitRequest = () => {
    setShowSuccessModal(true);
  };

  const renderSuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 mx-auto mb-6 text-green-500"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
            <path
              d="M7 13l3 3 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">SUCCESS</h2>
        <p className="text-gray-600 mb-4">Thank you for your request.</p>
        <p className="text-gray-600 mb-8">
          You will be notified through email when your account will be verified.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            setShowSuccessModal(false);
            onNext();
          }}
          fullWidth
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );

  const renderLivenessInstructions = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="bg-burgundy-950 text-white p-4 flex items-center justify-between rounded-t-lg">
          <h3 className="text-xl font-medium">Liveness Check</h3>
          <button onClick={() => setShowLivenessInstructions(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-burgundy-950 mb-4">
            Get ready for Liveness check
          </h2>
          <p className="text-gray-600 mb-8">
            We will open a camera to analyze your face for verification purposes,
          </p>
          <div className="flex justify-center mb-8">
            <img
              src="https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg"
              alt="Face scan"
              className="w-48 h-48 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-burgundy-950 mb-4">
            Follow These Steps
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <span>Make sure that it's just your face in the frame</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <span>Take off your sunglasses, hat or any items that obstruct your face</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <span>Make sure your face isn't backlit by a light source</span>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="secondary" onClick={() => setShowLivenessInstructions(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleStartCapturing}>
              Start Capturing
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderKycDetails = () => (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-medium text-burgundy-950 mb-6">
        Complete these steps to get started
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {Object.entries(mockKycDetails).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
            </label>
            <p className="text-gray-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRiskAppetite = () => (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-medium text-burgundy-950 mb-6">Risk Appetite</h3>
      <div className="mb-8">
        <div className="relative h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full">
          <div
            className="absolute w-4 h-8 bg-burgundy-950 rounded-full -top-2 transform -translate-x-1/2 transition-all duration-300"
            style={{ left: `${riskTypes[selectedRiskType].percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Low Risk</span>
          <span>High Risk</span>
        </div>
      </div>
      <div className="space-y-4 mb-8">
        {riskTypes.map((risk, index) => (
          <motion.div
            key={risk.type}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all relative ${
              selectedRiskType === index
                ? 'border-burgundy-950 bg-burgundy-50'
                : 'border-gray-200 hover:border-burgundy-300'
            }`}
            onClick={() => setSelectedRiskType(index)}
            onMouseEnter={() => setHoveredRiskType(index)}
            onMouseLeave={() => setHoveredRiskType(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{risk.type}</span>
              <Info
                className="w-5 h-5 text-gray-400 hover:text-burgundy-950"
                onMouseEnter={() => setHoveredRiskType(index)}
              />
            </div>
            <AnimatePresence>
              {hoveredRiskType === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 bg-white p-4 rounded-lg shadow-lg border border-gray-200 mt-2 right-0 w-64"
                >
                  {risk.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">What is the time horizon of the investment objectives?</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="timeHorizon" className="text-burgundy-950" />
              <span>Up to 1 year</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="timeHorizon" className="text-burgundy-950" />
              <span>Between 1 and 5 years</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="timeHorizon" className="text-burgundy-950" />
              <span>More than 5 years</span>
            </label>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-3">Level of Investment Experience:</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="experience" className="text-burgundy-950" />
              <span>Little Knowledge (1-5 Years)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="experience" className="text-burgundy-950" />
              <span>Moderate Knowledge (5-10 Years)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="experience" className="text-burgundy-950" />
              <span>Very Knowledgeable (Over 10 Years)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <AnimatePresence>
        {currentStep === 'document' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-lg p-6"
          >
            <h3 className="text-lg font-medium text-burgundy-950 mb-4">
              Complete these steps to get started
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className={`p-6 bg-white rounded-lg cursor-pointer transition-all ${
                  currentStep === 'document' ? 'ring-2 ring-burgundy-950' : ''
                }`}
                onClick={() => setCurrentStep('document')}
              >
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg" 
                    alt="ID Document" 
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-center font-medium mb-2">Step 1</h4>
                <p className="text-center text-sm text-neutral-600">Your Valid Document</p>
              </div>

              <div 
                className={`p-6 bg-white rounded-lg cursor-pointer transition-all ${
                  currentStep === 'liveness' ? 'ring-2 ring-burgundy-950' : ''
                }`}
                onClick={() => setCurrentStep('liveness')}
              >
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg"
                    alt="Digital Photo"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-center font-medium mb-2">Step 2</h4>
                <p className="text-center text-sm text-neutral-600">Your live Digital Photo</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">ID Verification</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setShowCamera(true)}
                  className="p-4 border-2 border-dashed border-burgundy-300 rounded-lg hover:border-burgundy-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Camera className="w-8 h-8 text-burgundy-500 mb-2" />
                    <span className="text-sm font-medium">Scan Card Front</span>
                  </div>
                </button>
                <button
                  onClick={() => setShowCamera(true)}
                  className="p-4 border-2 border-dashed border-burgundy-300 rounded-lg hover:border-burgundy-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Camera className="w-8 h-8 text-burgundy-500 mb-2" />
                    <span className="text-sm font-medium">Scan Card Back</span>
                  </div>
                </button>
                <button
                  onClick={() => setShowCamera(true)}
                  className="p-4 border-2 border-dashed border-burgundy-300 rounded-lg hover:border-burgundy-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Camera className="w-8 h-8 text-burgundy-500 mb-2" />
                    <span className="text-sm font-medium">Scan Your Passport</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 'liveness' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-lg p-6"
          >
            <h3 className="text-lg font-medium text-burgundy-950 mb-4">Liveness Check</h3>
            <div className="text-center">
              <Button
                onClick={handleStartLivenessCheck}
                variant="primary"
                className="inline-flex items-center"
              >
                <Camera className="w-5 h-5 mr-2" />
                Start Liveness Check
              </Button>
            </div>
          </motion.div>
        )}

        {currentStep === 'details' && renderKycDetails()}
        {currentStep === 'risk-appetite' && renderRiskAppetite()}

        {showLivenessInstructions && renderLivenessInstructions()}
        {showCamera && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
              <div className="bg-burgundy-950 text-white p-4 flex items-center justify-between rounded-t-lg">
                <h3 className="text-xl font-medium">Liveness Check</h3>
                <button onClick={() => setShowCamera(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="aspect-video bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-neutral-400" />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="secondary" onClick={() => setShowCamera(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setShowCamera(false);
                      handleContinue();
                    }}
                  >
                    Capture
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showSuccessModal && renderSuccessModal()}
      </AnimatePresence>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <div className="space-x-4">
          <Button variant="secondary">Save</Button>
          {currentStep === 'risk-appetite' ? (
            <Button variant="primary" onClick={handleSubmitRequest}>
              Submit Request
            </Button>
          ) : (
            <Button variant="primary" onClick={handleContinue}>
              Next
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default KycVerification;