import type { Service } from '../../types';
import Card from '../ui/Card';
import { HandHeart, Flower, Sparkle, PaintBrush, PlusCircle } from '@phosphor-icons/react';

interface StepSelectServiceProps {
  services: Service[];
  selectedService: Service | null;
  onSelect: (service: Service) => void;
}

const categoryIcons: Record<string, { Icon: React.ComponentType<any>; label: string }> = {
  manicure: { Icon: HandHeart, label: 'Manicure' },
  pedicure: { Icon: Flower, label: 'Pedicure' },
  'gel-acrylic': { Icon: Sparkle, label: 'Gel & Acrylic' },
  'nail-art': { Icon: PaintBrush, label: 'Nail Art' },
  'add-ons': { Icon: PlusCircle, label: 'Add-On' },
};

export default function StepSelectService({
  services,
  selectedService,
  onSelect,
}: StepSelectServiceProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-berry text-center mb-2">Select a Service</h2>
      <p className="text-berry/60 text-center mb-8">Choose the treatment you'd like to book</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => {
          const { Icon, label } = categoryIcons[service.category] || categoryIcons['add-ons'];
          const isSelected = selectedService?.id === service.id;

          return (
            <Card
              key={service.id}
              selected={isSelected}
              onClick={() => onSelect(service)}
              className="p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`${isSelected ? 'text-white-pure' : 'text-pink-primary'}`}>
                  <Icon size={28} weight="duotone" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-[50px] ${
                  isSelected ? 'bg-white-pure/20 text-white-pure' : 'bg-pink-primary/10 text-pink-primary'
                }`}>
                  {label}
                </span>
              </div>
              <h3 className={`font-heading text-base mb-1 ${isSelected ? 'text-white-pure' : 'text-berry'}`}>
                {service.name}
              </h3>
              <p className={`text-xs mb-3 ${isSelected ? 'text-white-pure/70' : 'text-berry/50'}`}>
                {service.duration} min
              </p>
              <p className={`font-bold text-lg ${isSelected ? 'text-white-pure' : 'text-berry'}`}>
                ETB{service.price}
              </p>
            </Card>
          );
        })}
      </div>

      {selectedService && (
        <div className="mt-6 text-center">
          <p className="text-berry/70 text-sm">
            Selected: <span className="font-semibold text-berry">{selectedService.name}</span> — ${selectedService.price}
          </p>
        </div>
      )}
    </div>
  );
}