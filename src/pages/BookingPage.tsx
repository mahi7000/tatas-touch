import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import ProgressDots from '../components/ui/ProgressDots';
import StepSelectService from '../components/booking/StepSelectService';
import StepChooseDate from '../components/booking/StepChooseDate';
import StepChooseTime from '../components/booking/StepChooseTime';
import StepYourInfo from '../components/booking/StepYourInfo';
import StepReview from '../components/booking/StepReview';
import SuccessModal from '../components/booking/SuccessModal';
import { useBookingSteps } from '../hooks/useBookingSteps';
import { useTimeSlots } from '../hooks/useTimeSlots';
import { services } from '../constants/services';

export default function BookingPage() {
  const {
    booking,
    nextStep,
    prevStep,
    setService,
    setDate,
    setTimeSlot,
    updateCustomerInfo,
    confirmBooking,
    canProceed,
  } = useBookingSteps();

  const { timeSlots, selectedSlot, selectSlot } = useTimeSlots(booking.date);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    confirmBooking();
    setShowSuccess(true);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl text-berry mb-3">Book Appointment</h1>
          <p className="text-berry/60">Let's get you scheduled</p>
        </div>

        {/* Progress Dots */}
        <div className="mb-10">
          <ProgressDots totalSteps={5} currentStep={booking.step} />
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={booking.step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              {booking.step === 1 && (
                <StepSelectService
                  services={services}
                  selectedService={booking.service}
                  onSelect={(service) => {
                    setService(service);
                    nextStep();
                  }}
                />
              )}

              {booking.step === 2 && (
                <StepChooseDate
                  selectedDate={booking.date}
                  onSelect={(date) => {
                    setDate(date);
                    nextStep();
                  }}
                />
              )}

              {booking.step === 3 && (
                <StepChooseTime
                  timeSlots={timeSlots}
                  selectedSlot={selectedSlot}
                  onSelect={(slot) => {
                    selectSlot(slot);
                    setTimeSlot(slot);
                    nextStep();
                  }}
                />
              )}

              {booking.step === 4 && (
                <StepYourInfo
                  customerInfo={booking.customerInfo}
                  onUpdate={updateCustomerInfo}
                />
              )}

              {booking.step === 5 && booking.service && booking.date && booking.timeSlot && (
                <StepReview
                  service={booking.service}
                  date={booking.date}
                  timeSlot={booking.timeSlot}
                  customerInfo={booking.customerInfo}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          {booking.step > 1 && booking.step < 5 && (
            <Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
              <CaretLeft size={18} weight="bold" />
              Back
            </Button>
          )}
          {booking.step < 5 && (
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2"
            >
              Next
              <CaretRight size={18} weight="bold" />
            </Button>
          )}
          {booking.step === 5 && (
            <Button onClick={handleConfirm} size="lg">
              Confirm Booking
            </Button>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        confirmationNumber={`TT-${Date.now().toString(36).toUpperCase().slice(-6)}`}
      />
    </div>
  );
}