import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import OtpInput from 'react-otp-input';

import Button from '../components/Button';

const OtpVerification: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResendOtp = () => {
    if (timeLeft > 0) return;
    
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setTimeLeft(60);
      setIsResending(false);
    }, 1000);
  };

  const handleConfirm = () => {
    if (otp.length === 4) {
      navigate('/qr-code');
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg w-full max-w-md shadow-xl overflow-hidden"
      >
        <div className="bg-burgundy-950 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Confirmation</h2>
          <button onClick={handleCancel} className="text-white hover:text-gold-300 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">OTP</h3>
            <p className="text-neutral-600 mb-4">Enter the 4 digit OTP sent to your email</p>
            
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-neutral-600">Resend request in </span>
              <span className={`font-semibold ${timeLeft === 0 ? 'text-burgundy-950' : 'text-burgundy-600'}`}>
                ({formatTime(timeLeft)}s)
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="w-4"></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle="flex justify-center gap-4"
              inputStyle={{
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                border: '1px solid #e4e4e4',
                fontSize: '24px',
                fontWeight: '500',
              }}
              focusStyle={{
                border: '2px solid #D4AF37',
                outline: 'none',
              }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            
            <Button
              variant="primary"
              onClick={handleConfirm}
              disabled={otp.length !== 4}
            >
              Confirm
            </Button>
          </div>
          
          {timeLeft === 0 && (
            <button
              onClick={handleResendOtp}
              disabled={isResending}
              className="mt-4 text-burgundy-950 hover:text-burgundy-700 font-medium text-center w-full transition-colors"
            >
              {isResending ? 'Resending...' : 'Resend OTP'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OtpVerification;