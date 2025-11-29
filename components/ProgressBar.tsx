interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Contacts' },
  { number: 2, label: 'Emails' },
  { number: 3, label: 'CRM' },
  { number: 4, label: 'Results' },
  { number: 5, label: 'Revenue' }
];

export function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  step.number === currentStep
                    ? 'bg-teal-500 text-white'
                    : step.number < currentStep
                    ? 'bg-teal-400 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step.number}
              </div>
              <span
                className={`mt-2 transition-colors ${
                  step.number === currentStep
                    ? 'text-teal-600'
                    : step.number < currentStep
                    ? 'text-teal-500'
                    : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-2 transition-colors ${
                  step.number < currentStep ? 'bg-teal-400' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
