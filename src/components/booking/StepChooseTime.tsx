import { Clock, ClockAfternoon } from '@phosphor-icons/react';
import type { TimeSlot } from '../../types';

interface StepChooseTimeProps {
  timeSlots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
}

export default function StepChooseTime({
  timeSlots,
  selectedSlot,
  onSelect,
}: StepChooseTimeProps) {
  if (timeSlots.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock size={48} weight="duotone" className="text-pink-primary/40 mx-auto mb-4" />
        <h2 className="font-heading text-2xl text-berry mb-2">Choose a Time</h2>
        <p className="text-berry/50">Please select a date first to see available times.</p>
      </div>
    );
  }

  const morningSlots = timeSlots.filter((s) => s.time.includes('AM'));
  const afternoonSlots = timeSlots.filter((s) => s.time.includes('PM'));

  return (
    <div>
      <h2 className="font-heading text-2xl text-berry text-center mb-2">Choose a Time</h2>
      <p className="text-berry/60 text-center mb-8">Pick your preferred time slot</p>

      {/* Morning */}
      {morningSlots.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={20} weight="bold" className="text-pink-primary" />
            <span className="text-sm font-semibold text-berry/70">Morning</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {morningSlots.map((slot) => (
              <TimeSlotButton
                key={slot.id}
                slot={slot}
                isSelected={selectedSlot?.id === slot.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      )}

      {/* Afternoon */}
      {afternoonSlots.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ClockAfternoon size={20} weight="bold" className="text-pink-primary" />
            <span className="text-sm font-semibold text-berry/70">Afternoon</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {afternoonSlots.map((slot) => (
              <TimeSlotButton
                key={slot.id}
                slot={slot}
                isSelected={selectedSlot?.id === slot.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      )}

      {selectedSlot && (
        <div className="mt-6 text-center">
          <p className="text-berry/70 text-sm">
            Selected: <span className="font-semibold text-berry">{selectedSlot.time}</span>
          </p>
        </div>
      )}
    </div>
  );
}

function TimeSlotButton({
  slot,
  isSelected,
  onSelect,
}: {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: (slot: TimeSlot) => void;
}) {
  if (!slot.available) {
    return (
      <button
        disabled
        className="py-3 px-4 rounded-[16px] border-[1.5px] border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed text-sm font-medium line-through"
      >
        {slot.time}
      </button>
    );
  }

  return (
    <button
      onClick={() => onSelect(slot)}
      className={`py-3 px-4 rounded-[16px] border-[1.5px] transition-all duration-300 cursor-pointer text-sm font-medium ${
        isSelected
          ? 'bg-pink-primary border-pink-primary text-white-pure shadow-card-hover'
          : 'bg-white-pure border-pink-primary text-berry hover:bg-pink-primary/10'
      }`}
    >
      {slot.time}
    </button>
  );
}