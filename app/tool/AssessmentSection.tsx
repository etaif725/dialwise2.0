import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssessmentSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  question: string;
  value: string;
  additionalInputs?: Array<{
    id: string;
    label: string;
    type: string;
  }>;
  additionalValues?: Record<string, string>;
  onChange: (id: string, value: string) => void;
  calculation: (value: number, additionalValues?: Record<string, number>) => {
    savings: number;
    source: string;
    citations?: Array<{ text: string; url: string }>;
  };
}

export default function AssessmentSection({
  id,
  title,
  icon: Icon,
  question,
  value,
  additionalInputs,
  additionalValues,
  onChange,
  calculation
}: AssessmentSectionProps) {
  // Convert main value and additional values to numbers, defaulting to 0 if they are NaN
  const numericValue = Number(value) || 0;
  const numericAdditionalValues = additionalValues
    ? Object.entries(additionalValues).reduce((acc, [key, val]) => ({
        ...acc,
        [key]: Number(val) || 0
      }), {})
    : undefined;

  // Calculate the result
  const result = calculation(numericValue, numericAdditionalValues);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-primary/10 rounded-xl shadow-lg p-6 border border-green-200 dark:border-green-700 transition-all ease-in-out duration-300"
    >
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="h-6 w-6 text-primary dark:text-primary-foreground" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        <label className="block text-sm text-gray-600 dark:text-gray-400">
          {question}
        </label>
        <input
          type="number"
          min="0"
          value={value || ""} // Ensure the value is always a string, including empty string case
          onChange={(e) => onChange(id, e.target.value)} // Update the value in the parent component
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-100 focus:ring-2 focus:ring-primary dark:bg-black dark:text-white focus:ring-primary dark:focus:ring-primary-foreground transition-all"
        />

        {additionalInputs?.map((input) => (
          <div key={input.id} className="space-y-2">
            <label className="block text-sm text-gray-600 dark:text-gray-400">
              {input.label}
            </label>
            <input
              type={input.type}
              min="0"
              value={additionalValues?.[input.id] || ""} // Ensure it's a string or empty string
              onChange={(e) => onChange(input.id, e.target.value)} // Update additional value in the parent
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-100 focus:ring-2 focus:ring-primary dark:bg-black dark:text-white focus:ring-primary dark:focus:ring-primary-foreground transition-all"
            />
          </div>
        ))}

        {/* Display calculated result if there's a value or any additional input filled */}
        {result && (numericValue > 0 || Object.values(additionalValues || {}).some(val => Number(val) > 0)) && (
          <div className="mt-4 space-y-4">
            <p className="text-green-600 dark:text-green-400 font-semibold">
              Potential Annual Savings: ${result.savings.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {result.source}
            </p>
            {result.citations && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Key Statistics:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {result.citations.map((citation, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      {citation.text}{' '}
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-foreground underline"
                      >
                        [Source]
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
