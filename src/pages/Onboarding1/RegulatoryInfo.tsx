import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type RegulatoryInfoForm = {
  question1: boolean;
  question2: boolean;
};

interface RegulatoryInfoProps {
  onNext: () => void;
  onBack: () => void;
}

const RegulatoryInfo: React.FC<RegulatoryInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<RegulatoryInfoForm>();

  const onSubmit = (data: RegulatoryInfoForm) => {
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
          <h3 className="text-lg font-medium mb-4">Regulatory Questions</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('question1')}
                className="mt-1 h-4 w-4 text-burgundy-950 border-neutral-300 rounded focus:ring-gold-500"
              />
              <label className="text-sm text-neutral-700">
                Are you a director, 10% shareholder or policy-making officer of a publicly traded company?
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('question2')}
                className="mt-1 h-4 w-4 text-burgundy-950 border-neutral-300 rounded focus:ring-gold-500"
              />
              <label className="text-sm text-neutral-700">
                Are you or any member of your immediate family employed by a broker-dealer?
              </label>
            </div>
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

export default RegulatoryInfo;