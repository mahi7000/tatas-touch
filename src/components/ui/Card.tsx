import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  onClick,
  selected = false,
  className = '',
  hoverable = true,
}: CardProps) {
  const baseStyles = 'rounded-[20px] border-[1.5px] border-pink-primary bg-white-pure shadow-card transition-all duration-300 ease-in-out';

  const hoverStyles = hoverable && !selected
    ? 'hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer'
    : '';

  const selectedStyles = selected
    ? 'bg-pink-primary text-white-pure shadow-card-hover'
    : '';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${selectedStyles} ${clickableStyles} ${className}`}
    >
      {children}
    </div>
  );
}