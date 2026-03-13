import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Eye } from 'lucide-react';

interface UploadDocumentsProps {
  onNext: () => void;
  onBack: () => void;
}

type DocumentSection = {
  title: string;
  documents: {
    name: string;
    file: File | null;
  }[];
};

const UploadDocuments: React.FC<UploadDocumentsProps> = ({ onNext, onBack }) => {
  const [sections] = useState<DocumentSection[]>([
    {
      title: 'Upload Documents',
      documents: [
        { name: 'Memorandum and Articles of Association/ Establishment Charter', file: null },
        { name: 'Financial Statements', file: null },
      ],
    },
    {
      title: 'Upload License',
      documents: [
        { name: 'Commercial Registration License', file: null },
        { name: 'Import Permit/License', file: null },
      ],
    },
    {
      title: 'Upload IDs',
      documents: [
        { name: 'Computer Card', file: null },
        { name: 'QIDs of all Shareholders/Executive Management', file: null },
      ],
    },
  ]);

  const handleFileChange = (sectionIndex: number, documentIndex: number, file: File) => {
    // Handle file upload logic here
    console.log(`Uploading file for section ${sectionIndex}, document ${documentIndex}:`, file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={section.title} className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-950 mb-4">{section.title}</h3>
            <div className="grid grid-cols-2 gap-6">
              {section.documents.map((doc, docIndex) => (
                <div key={doc.name} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-burgundy-950 rounded border-neutral-300 focus:ring-gold-500"
                    />
                    <label className="text-sm font-medium text-neutral-700">
                      {doc.name}
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".jpg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange(sectionIndex, docIndex, file);
                      }}
                      className="hidden"
                      id={`file-${sectionIndex}-${docIndex}`}
                    />
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={`file-${sectionIndex}-${docIndex}`}
                        className="px-4 py-2 bg-burgundy-950 text-white rounded-md hover:bg-burgundy-800 cursor-pointer flex items-center space-x-2"
                      >
                        <Upload size={16} />
                        <span>Choose file</span>
                      </label>
                      <span className="text-sm text-neutral-500">No File Selected</span>
                    </div>
                    <div className="mt-2 flex items-center space-x-4 text-sm">
                      <span className="text-neutral-600">Accepted Format: jpg and png</span>
                      <button
                        type="button"
                        className="text-burgundy-950 hover:text-burgundy-800 flex items-center space-x-1"
                      >
                        <Eye size={16} />
                        <span>View Sample</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-burgundy-950 text-burgundy-950 rounded-md hover:bg-burgundy-50"
          >
            Back
          </button>
          <div className="space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-burgundy-950 text-burgundy-950 rounded-md hover:bg-burgundy-50"
            >
              Save
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-burgundy-950 text-white rounded-md hover:bg-burgundy-800"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default UploadDocuments;