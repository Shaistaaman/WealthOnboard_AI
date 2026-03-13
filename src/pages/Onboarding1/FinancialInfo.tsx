import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FinancialInfoForm = {
  investmentObjective1: string;
  investmentObjective2?: string;
  investmentObjective3?: string;
  investmentObjective4?: string;
  estimatedNetWorth: string;
  estimatedLiquidNetWorth: string;
  annualNetIncome: string;
  tradingExperience: string;
};

interface FinancialInfoProps {
  onNext: () => void;
  onBack: () => void;
}

const FinancialInfo: React.FC<FinancialInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<FinancialInfoForm>();

  const onSubmit = (data: FinancialInfoForm) => {
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register('investmentObjective1')}
              placeholder="Investment Objective 1"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('investmentObjective2')}
              placeholder="Investment Objective 2 (optional)"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('investmentObjective3')}
              placeholder="Investment Objective 3 (optional)"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('investmentObjective4')}
              placeholder="Investment Objective 4 (optional)"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('estimatedNetWorth')}
              placeholder="Estimated Net Worth"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('estimatedLiquidNetWorth')}
              placeholder="Estimated Liquid Net Worth"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('annualNetIncome')}
              placeholder="Annual Net Income"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <input
              {...register('tradingExperience')}
              placeholder="Trading Experience in Years"
              type="number"
              className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
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

export default FinancialInfo;