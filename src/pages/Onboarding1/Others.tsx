import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type OthersForm = {
  taxReturnName: string;
  certifyTIN: boolean;
  certifyUSPerson: boolean;
  agreeToCertification: boolean;
  beneficialOwner: boolean;
  agreeToPartIII: boolean;
};

interface OthersProps {
  onNext: () => void;
  onBack: () => void;
}

const Others: React.FC<OthersProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<OthersForm>();

  const onSubmit = (data: OthersForm) => {
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
          <h3 className="text-lg font-medium mb-4">W-9</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <input
                {...register('taxReturnName')}
                placeholder="Name as on Tax Return"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span>Certify TIN is Correct</span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('certifyTIN')}
                  value="true"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('certifyTIN')}
                  value="false"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">W-8BEN</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <span>Name of Beneficial Owner in Part I</span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('beneficialOwner')}
                  value="true"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('beneficialOwner')}
                  value="false"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>No</span>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <span>Agree to Part III Certification</span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('agreeToPartIII')}
                  value="true"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('agreeToPartIII')}
                  value="false"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">Advisor Wrap Fees</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span>Agree to Advisor Wrap Fee Terms</span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('agreeToCertification')}
                  value="true"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('agreeToCertification')}
                  value="false"
                  className="text-burgundy-950 focus:ring-gold-500"
                />
                <span>No</span>
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

export default Others;