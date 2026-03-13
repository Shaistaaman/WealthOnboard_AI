import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';

type WealthSource = {
  source: string;
  percentage?: string;
  description?: string;
  usedToFundAccount: boolean;
};

type SourceOfWealthForm = {
  sources: WealthSource[];
};

interface SourceOfWealthProps {
  onNext: () => void;
  onBack: () => void;
}

const SourceOfWealth: React.FC<SourceOfWealthProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<SourceOfWealthForm>();
  const [sources, setSources] = useState<WealthSource[]>([
    { source: '', usedToFundAccount: true }
  ]);

  const addSource = () => {
    setSources([...sources, { source: '', usedToFundAccount: false }]);
  };

  const onSubmit = (data: SourceOfWealthForm) => {
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
        {sources.map((_, index) => (
          <div key={index} className="bg-neutral-100 p-4 rounded-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  {...register(`sources.${index}.source`)}
                  placeholder={`Source of Wealth ${index + 1}`}
                  className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-neutral-700">Used to Fund Account</span>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      {...register(`sources.${index}.usedToFundAccount`)}
                      value="true"
                      className="text-burgundy-950 focus:ring-gold-500"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      {...register(`sources.${index}.usedToFundAccount`)}
                      value="false"
                      className="text-burgundy-950 focus:ring-gold-500"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div>
                <input
                  {...register(`sources.${index}.percentage`)}
                  placeholder="Percentage (optional)"
                  type="number"
                  className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div>
                <input
                  {...register(`sources.${index}.description`)}
                  placeholder="Description (optional)"
                  className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="button"
            onClick={addSource}
            className="flex items-center space-x-2 text-burgundy-950 hover:text-burgundy-800"
          >
            <Plus size={20} />
            <span>Add another source</span>
          </button>
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

export default SourceOfWealth;