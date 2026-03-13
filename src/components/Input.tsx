import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  required = false,
  className = '',
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="text-burgundy-600">*</span>}
        </label>
      )}
      <div className="relative">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500"
          animate={{ 
            height: isFocused ? '100%' : '80%',
            y: isFocused ? 0 : '10%'
          }}
          transition={{ duration: 0.2 }}
        />
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-primary ${icon ? 'pl-12' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-burgundy-800 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;