import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Heart, X } from '@phosphor-icons/react';

type ToastType = 'success' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type = 'info',
  isVisible,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const accentColor = type === 'success' ? 'border-l-berry' : 'border-l-pink-primary';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
          className={`fixed bottom-6 right-6 z-50 bg-white-pure border-l-4 ${accentColor} rounded-[16px] shadow-card-hover px-6 py-4 max-w-sm`}
        >
          <div className="flex items-center gap-3">
            {type === 'success' ? (
              <CheckCircle size={24} weight="fill" className="text-berry" />
            ) : (
              <Heart size={24} weight="fill" className="text-pink-primary" />
            )}
            <p className="text-berry font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-auto text-berry/50 hover:text-berry cursor-pointer transition-colors"
            >
              <X size={18} weight="bold" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}