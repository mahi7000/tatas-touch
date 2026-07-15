import { useMemo } from 'react';
import { Calendar } from '@phosphor-icons/react';

interface StepChooseDateProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function StepChooseDate({
  selectedDate,
  onSelect,
}: StepChooseDateProps) {
  const dates = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });
  }, []);

  const formatDay = (date: Date) =>
    date.toLocaleDateString('en-US', { weekday: 'short' });
  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const isSelected = (date: Date) =>
    selectedDate?.toDateString() === date.toDateString();

  const isToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.toDateString() === today.toDateString();
  };

  return (
    <div>
      <h2 className="font-heading text-2xl text-berry text-center mb-2">Choose a Date</h2>
      <p className="text-berry/60 text-center mb-8">Select your preferred appointment date</p>

      <div className="flex justify-center mb-6">
        <Calendar size={24} weight="duotone" className="text-pink-primary" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => onSelect(date)}
            className={`flex flex-col items-center py-4 px-3 rounded-[20px] border-[1.5px] transition-all duration-300 cursor-pointer ${
              isSelected(date)
                ? 'bg-pink-primary border-pink-primary text-white-pure shadow-card-hover'
                : 'bg-white-pure border-pink-primary text-berry hover:bg-pink-primary/10'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-wide">
              {formatDay(date)}
            </span>
            <span className="text-xl font-bold mt-1">
              {date.getDate()}
            </span>
            <span className="text-xs mt-1">
              {formatDate(date)}
            </span>
            {isToday(date) && (
              <span className={`text-[10px] font-bold mt-1 px-2 py-0.5 rounded-[50px] ${
                isSelected(date) ? 'bg-white-pure/20' : 'bg-pink-primary/10 text-pink-primary'
              }`}>
                Today
              </span>
            )}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-6 text-center">
          <p className="text-berry/70 text-sm">
            Selected: <span className="font-semibold text-berry">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}