import { useState, useMemo } from 'react';
import type { TimeSlot } from '../types';

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM',
];

export function useTimeSlots(date: Date | null) {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const timeSlots: TimeSlot[] = useMemo(() => {
    if (!date) return [];

    // Use the date as a seed for pseudo-random availability
    const seed = date.getDate() + date.getMonth() * 31;
    const pseudoRandom = (n: number) => (seed * n * 7 + 13) % 100;

    return TIME_SLOTS.map((time, index) => ({
      id: `slot-${index}`,
      time,
      available: pseudoRandom(index) > 25, // ~75% available
    }));
  }, [date]);

  const selectSlot = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
    }
  };

  return { timeSlots, selectedSlot, selectSlot, setSelectedSlot };
}