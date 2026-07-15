import type { Service, TimeSlot, CustomerInfo } from '../../types';
import Card from '../ui/Card';
import { HandHeart, Calendar, Clock, User, Phone, Envelope, ChatCircleText } from '@phosphor-icons/react';

interface StepReviewProps {
  service: Service;
  date: Date;
  timeSlot: TimeSlot;
  customerInfo: CustomerInfo;
}

export default function StepReview({
  service,
  date,
  timeSlot,
  customerInfo,
}: StepReviewProps) {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div>
      <h2 className="font-heading text-2xl text-berry text-center mb-2">Review & Confirm</h2>
      <p className="text-berry/60 text-center mb-8">Make sure everything looks right</p>

      <div className="max-w-lg mx-auto space-y-4">
        {/* Service Details */}
        <Card className="p-5">
          <h3 className="font-heading text-lg text-berry mb-4">Service</h3>
          <div className="flex items-center gap-3">
            <HandHeart size={24} weight="duotone" className="text-pink-primary" />
            <div>
              <p className="font-semibold text-berry">{service.name}</p>
              <p className="text-berry/50 text-sm">{service.duration} min</p>
            </div>
            <span className="ml-auto font-bold text-berry text-lg">${service.price}</span>
          </div>
        </Card>

        {/* Date & Time */}
        <Card className="p-5">
          <h3 className="font-heading text-lg text-berry mb-4">Date & Time</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar size={20} weight="bold" className="text-pink-primary" />
              <span className="text-berry">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} weight="bold" className="text-pink-primary" />
              <span className="text-berry">{timeSlot.time}</span>
            </div>
          </div>
        </Card>

        {/* Customer Info */}
        <Card className="p-5">
          <h3 className="font-heading text-lg text-berry mb-4">Your Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User size={20} weight="bold" className="text-pink-primary" />
              <span className="text-berry">
                {customerInfo.firstName} {customerInfo.lastName}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} weight="bold" className="text-pink-primary" />
              <span className="text-berry">{customerInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={20} weight="bold" className="text-pink-primary" />
              <span className="text-berry">{customerInfo.email}</span>
            </div>
            {customerInfo.specialRequests && (
              <div className="flex items-start gap-3">
                <ChatCircleText size={20} weight="bold" className="text-pink-primary mt-0.5" />
                <span className="text-berry/70 text-sm">{customerInfo.specialRequests}</span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}