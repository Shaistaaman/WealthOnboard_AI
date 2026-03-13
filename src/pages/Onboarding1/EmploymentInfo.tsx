import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type EmploymentInfoForm = {
  employmentType: string;
  occupation: string;
  employerName: string;
  businessNature: string;
  employerAddress: {
    country: string;
    state: string;
    city: string;
    address: string;
  };
};

interface EmploymentInfoProps {
  onNext: () => void;
  onBack: () => void;
}

const EmploymentInfo: React.FC<EmploymentInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<EmploymentInfoForm>();

  const onSubmit = (data: EmploymentInfoForm) => {
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
          <h3 className="text-lg font-medium mb-4">Employment Info</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                {...register('employmentType')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Employment Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="self-employed">Self Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
            <div>
              <select
                {...register('occupation')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Occupation</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <input
                {...register('employerName')}
                placeholder="Name Of Employer"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <input
                {...register('businessNature')}
                placeholder="Nature of Employer Business/Activities"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">Employer Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                {...register('employerAddress.country')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <div>
              <select
                {...register('employerAddress.state')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">State/Province</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
              </select>
            </div>
            <div>
              <select
                {...register('employerAddress.city')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">City</option>
                <option value="nyc">New York City</option>
                <option value="la">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div>
              <input
                {...register('employerAddress.address')}
                placeholder="Employer Address"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
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

export default EmploymentInfo;