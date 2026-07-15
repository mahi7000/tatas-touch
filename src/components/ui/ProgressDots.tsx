interface ProgressDotsProps {
  totalSteps: number;
  currentStep: number;
}

export default function ProgressDots({ totalSteps, currentStep }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-0">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Dot */}
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              step < currentStep
                ? 'bg-pink-primary scale-100'
                : step === currentStep
                ? 'bg-pink-primary scale-110 animate-pulse'
                : 'bg-pink-primary/30 scale-100'
            }`}
          />

          {/* Connecting Line */}
          {index < totalSteps - 1 && (
            <div
              className={`w-8 sm:w-12 h-0.5 mx-1 transition-colors duration-300 ${
                step < currentStep ? 'bg-pink-primary' : 'bg-pink-primary/30'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}