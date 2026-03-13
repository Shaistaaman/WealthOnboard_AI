import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type CustomerInfoForm = {
  firstName: string;
  middleName?: string;
  lastName: string;
  salutation: string;
  dateOfBirth: string;
  countryOfBirth: string;
  gender?: string;
  maritalStatus: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
};

interface CustomerInfoProps {
  onNext: () => void;
  onBack: () => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ onNext, onBack }) => {
  const { register, handleSubmit } = useForm<CustomerInfoForm>();

  const onSubmit = (data: CustomerInfoForm) => {
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
          <h3 className="text-lg font-medium mb-4">Customer Info</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register('firstName')}
                placeholder="First Name"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <input
                {...register('middleName')}
                placeholder="Middle Name (optional)"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <input
                {...register('lastName')}
                placeholder="Last Name"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <select
                {...register('salutation')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Salutation</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
                <option value="dr">Dr.</option>
              </select>
            </div>
            <div>
              <input
                {...register('dateOfBirth')}
                type="date"
                placeholder="Date of Birth"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <select
                {...register('countryOfBirth')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Country of Birth</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <div>
              <select
                {...register('gender')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Gender (optional)</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <select
                {...register('maritalStatus')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-4">Customer Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <input
                {...register('address.street')}
                placeholder="Street Address"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <input
                {...register('address.city')}
                placeholder="City"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <input
                {...register('address.state')}
                placeholder="State/Province"
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <select
                {...register('address.country')}
                className="w-full p-3 border border-l-4 border-l-burgundy-950 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <div>
              <input
                {...register('address.postalCode')}
                placeholder="Postal Code"
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

export default CustomerInfo;