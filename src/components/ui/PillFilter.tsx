interface PillFilterProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T;
  onSelect: (value: T) => void;
}

export default function PillFilter<T extends string>({
  options,
  selected,
  onSelect,
}: PillFilterProps<T>) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`px-5 py-2 rounded-[50px] font-semibold text-sm transition-all duration-300 ease-in-out cursor-pointer border-2 ${
            selected === option.value
              ? 'bg-pink-primary text-white-pure border-pink-primary'
              : 'bg-white-pure text-berry border-pink-primary hover:bg-pink-primary/10'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}