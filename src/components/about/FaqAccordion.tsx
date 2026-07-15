import { useState } from 'react';
import { Plus, Minus, Question } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FaqItem } from '../../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="border-l-[3px] border-l-pink-primary rounded-r-[20px] overflow-hidden"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 p-5 bg-white-pure border-[1.5px] border-pink-primary border-l-0 rounded-r-[20px] cursor-pointer hover:bg-pink-primary/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 text-left">
                <Question size={18} weight="bold" className="text-pink-primary flex-shrink-0" />
                <span className="font-semibold text-berry">{item.question}</span>
              </div>
              <span className="flex-shrink-0 text-pink-primary">
                {isOpen ? (
                  <Minus size={18} weight="bold" />
                ) : (
                  <Plus size={18} weight="bold" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 ml-7 text-berry/70 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}