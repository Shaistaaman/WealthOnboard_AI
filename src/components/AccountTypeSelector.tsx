import React from 'react';
import { motion } from 'framer-motion';

type AccountTypeSelectorProps = {
  selectedType: 'individual' | 'corporate';
  onSelectType: (type: 'individual' | 'corporate') => void;
};

const AccountTypeSelector: React.FC<AccountTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-6 relative rounded-lg overflow-hidden border border-neutral-200">
      <motion.div
        className="absolute bg-burgundy-950 h-full rounded-lg"
        initial={false}
        animate={{
          x: selectedType === 'individual' ? 0 : '100%',
          width: '50%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <button
        onClick={() => onSelectType('individual')}
        className={`py-3 px-4 rounded-lg z-10 transition-colors ${
          selectedType === 'individual' ? 'text-white' : 'text-neutral-700'
        }`}
      >
        Individual
      </button>
      <button
        onClick={() => onSelectType('corporate')}
        className={`py-3 px-4 rounded-lg z-10 transition-colors ${
          selectedType === 'corporate' ? 'text-white' : 'text-neutral-700'
        }`}
      >
        Corporate
      </button>
    </div>
  );
};

export default AccountTypeSelector;