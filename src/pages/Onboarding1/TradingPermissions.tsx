import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';

type TradingPermission = {
  permission: string;
};

interface TradingPermissionsProps {
  onNext: () => void;
  onBack: () => void;
}

const TradingPermissions: React.FC<TradingPermissionsProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<TradingPermission>();
  const [permissions, setPermissions] = useState<string[]>(['']);

  const addPermission = () => {
    setPermissions([...permissions, '']);
  };

  const onSubmit = (data: TradingPermission) => {
    console.log(data);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-neutral-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">Trading Permissions</h3>
          {permissions.map((_, index) => (
            <div key={index} className="mb-4">
              <input
                {...register(`permission${index}`)}
                placeholder={`Permission ${index + 1}`}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={addPermission}
              className="flex items-center space-x-2 text-burgundy-950 hover:text-burgundy-800"
            >
              <Plus size={20} />
              <span>Add another permission</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-burgundy-950 text-burgundy-950 rounded-md hover:bg-burgundy-50"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-burgundy-950 text-white rounded-md hover:bg-burgundy-800"
          >
            Next
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default TradingPermissions;