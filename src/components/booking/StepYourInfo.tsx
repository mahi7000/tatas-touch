import { useState } from 'react';
import { User, Phone, Envelope, ChatCircleText } from '@phosphor-icons/react';
import type { CustomerInfo } from '../../types';

interface StepYourInfoProps {
  customerInfo: CustomerInfo;
  onUpdate: (info: Partial<CustomerInfo>) => void;
}

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export default function StepYourInfo({ customerInfo, onUpdate }: StepYourInfoProps) {
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) return 'This field is required';
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email';
    }
    if (name === 'phone' && value.trim().length < 10) {
      return 'Please enter a valid phone number';
    }
    return undefined;
  };

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    onUpdate({ [field]: value });
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const inputBase = `
    w-full bg-white-pure border-[1.5px] border-pink-primary rounded-[16px] 
    px-4 py-3 text-berry placeholder-berry/30 outline-none
    focus:border-berry transition-colors duration-200
  `;

  const inputError = 'border-red-400 focus:border-red-500';

  return (
    <div>
      <h2 className="font-heading text-2xl text-berry text-center mb-2">Your Information</h2>
      <p className="text-berry/60 text-center mb-8">Tell us a bit about yourself</p>

      <div className="max-w-md mx-auto space-y-5">
        {/* First Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <User size={16} weight="bold" className="text-pink-primary" />
            First Name
          </label>
          <input
            type="text"
            placeholder="Jane"
            value={customerInfo.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`${inputBase} ${errors.firstName ? inputError : ''}`}
          />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <User size={16} weight="bold" className="text-pink-primary" />
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={customerInfo.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`${inputBase} ${errors.lastName ? inputError : ''}`}
          />
          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <Phone size={16} weight="bold" className="text-pink-primary" />
            Phone
          </label>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            value={customerInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`${inputBase} ${errors.phone ? inputError : ''}`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <Envelope size={16} weight="bold" className="text-pink-primary" />
            Email
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            value={customerInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${inputBase} ${errors.email ? inputError : ''}`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Special Requests */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <ChatCircleText size={16} weight="bold" className="text-pink-primary" />
            Special Requests (optional)
          </label>
          <textarea
            placeholder="Any allergies, preferences, or special requests..."
            value={customerInfo.specialRequests}
            onChange={(e) => handleChange('specialRequests', e.target.value)}
            rows={3}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>
    </div>
  );
}