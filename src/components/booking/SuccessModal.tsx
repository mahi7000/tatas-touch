import { CheckCircle, CalendarPlus, House } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  confirmationNumber: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  confirmationNumber,
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center py-4">
        <div className="mb-6">
          <CheckCircle size={64} weight="fill" className="text-berry mx-auto" />
        </div>
        <h2 className="font-heading text-2xl text-berry mb-2">
          You're all set!
        </h2>
        <p className="text-berry/60 mb-6">
          Your appointment has been booked successfully.
        </p>

        <div className="bg-pink-primary/5 rounded-[16px] p-4 mb-6">
          <p className="text-berry/50 text-xs uppercase tracking-wide mb-1">Confirmation Number</p>
          <p className="font-heading text-xl text-berry font-bold">{confirmationNumber}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            onClick={() => {}}
            className="flex items-center gap-2"
          >
            <CalendarPlus size={20} weight="bold" />
            Add to Calendar
          </Button>
          <Link to="/">
            <Button className="flex items-center gap-2">
              <House size={20} weight="bold" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}