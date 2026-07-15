import type { ReactNode } from 'react';

type ButtonVariant = 'filled' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  variant = 'filled',
  size = 'md',
  onClick,
  disabled = false,
  children,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'rounded-[50px] font-semibold transition-all duration-300 ease-in-out cursor-pointer inline-flex items-center justify-center';

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const variantStyles = {
    filled: 'bg-pink-primary text-white-pure border-2 border-pink-primary hover:bg-[#d4809e] hover:border-[#d4809e] active:bg-[#c4708e]',
    outline: 'bg-white-pure text-berry border-2 border-pink-primary hover:bg-pink-primary hover:text-white-pure active:bg-[#d4809e]',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
}