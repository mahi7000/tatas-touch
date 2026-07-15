import { useState, useCallback } from 'react';
import type { BookingState, Service, TimeSlot, CustomerInfo } from '../types';

const initialCustomerInfo: CustomerInfo = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  specialRequests: '',
};

const initialState: BookingState = {
  step: 1,
  service: null,
  date: null,
  timeSlot: null,
  customerInfo: initialCustomerInfo,
  confirmed: false,
};

export function useBookingSteps() {
  const [booking, setBooking] = useState<BookingState>(initialState);

  const nextStep = useCallback(() => {
    setBooking((prev) => ({ ...prev, step: Math.min(prev.step + 1, 5) }));
  }, []);

  const prevStep = useCallback(() => {
    setBooking((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
  }, []);

  const setService = useCallback((service: Service) => {
    setBooking((prev) => ({ ...prev, service }));
  }, []);

  const setDate = useCallback((date: Date) => {
    setBooking((prev) => ({ ...prev, date, timeSlot: null }));
  }, []);

  const setTimeSlot = useCallback((timeSlot: TimeSlot) => {
    setBooking((prev) => ({ ...prev, timeSlot }));
  }, []);

  const updateCustomerInfo = useCallback((info: Partial<CustomerInfo>) => {
    setBooking((prev) => ({
      ...prev,
      customerInfo: { ...prev.customerInfo, ...info },
    }));
  }, []);

  const confirmBooking = useCallback(() => {
    setBooking((prev) => ({ ...prev, confirmed: true }));
  }, []);

  const resetBooking = useCallback(() => {
    setBooking(initialState);
  }, []);

  const canProceed = useCallback((): boolean => {
    switch (booking.step) {
      case 1:
        return booking.service !== null;
      case 2:
        return booking.date !== null;
      case 3:
        return booking.timeSlot !== null;
      case 4:
        return (
          booking.customerInfo.firstName.trim() !== '' &&
          booking.customerInfo.lastName.trim() !== '' &&
          booking.customerInfo.phone.trim() !== '' &&
          booking.customerInfo.email.trim() !== '' &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.customerInfo.email)
        );
      case 5:
        return true;
      default:
        return false;
    }
  }, [booking]);

  return {
    booking,
    nextStep,
    prevStep,
    setService,
    setDate,
    setTimeSlot,
    updateCustomerInfo,
    confirmBooking,
    resetBooking,
    canProceed,
  };
}