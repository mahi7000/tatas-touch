import { CheckCircle, CalendarPlus, House, Copy, Check } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(confirmationNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = confirmationNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

        <div 
          className="bg-pink-primary/5 rounded-[16px] p-4 mb-6 cursor-pointer hover:bg-pink-primary/10 transition-colors group"
          onClick={handleCopy}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopy();
            }
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-berry/50 text-xs uppercase tracking-wide mb-1">
                Confirmation Number
              </p>
              <p className="font-heading text-xl text-berry font-bold">
                {confirmationNumber}
              </p>
            </div>
            <div className="ml-3">
              {copied ? (
                <Check size={24} weight="bold" className="text-berry" />
              ) : (
                <Copy 
                  size={24} 
                  weight="bold" 
                  className="text-berry/40 group-hover:text-berry/70 transition-colors" 
                />
              )}
            </div>
          </div>
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