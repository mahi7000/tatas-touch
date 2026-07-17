import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Flower, Sparkle, PaintBrush, PlusCircle, Clock, HandsPraying } from '@phosphor-icons/react';
import Card from '../components/ui/Card';
import PillFilter from '../components/ui/PillFilter';
import Button from '../components/ui/Button';
import { services } from '../constants/services';
import type { ServiceCategory } from '../types';

const filterOptions: { value: ServiceCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'manicure', label: 'Manicure' },
  { value: 'pedicure', label: 'Pedicure' },
  { value: 'gel-acrylic', label: 'Gel & Acrylic' },
  { value: 'nail-art', label: 'Nail Art' },
  { value: 'add-ons', label: 'Add-Ons' },
];

const categoryIcons: Record<string, React.ComponentType<any>> = {
  manicure: HandHeart,
  pedicure: Flower,
  'gel-acrylic': Sparkle,
  'nail-art': PaintBrush,
  'add-ons': PlusCircle,
};

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | 'all'>('all');

  const filteredServices =
    activeFilter === 'all'
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <HandsPraying size={36} weight="duotone" className="text-pink-primary" />
          </div>
          <h1 className="font-heading text-4xl text-berry mb-3">Our Services</h1>
          <p className="text-berry/70 text-lg">
            Choose from our range of pampering treatments
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-10">
          <PillFilter
            options={filterOptions}
            selected={activeFilter}
            onSelect={setActiveFilter}
          />
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = categoryIcons[service.category] || PlusCircle;
              return (
                <Card key={service.id} className="p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <Icon size={32} weight="duotone" className="text-pink-primary" />
                    {service.popular && (
                      <span className="bg-pink-primary text-white-pure text-xs font-semibold px-3 py-1 rounded-[50px]">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg text-berry mb-2">{service.name}</h3>
                  <p className="text-berry/60 text-sm mb-4 flex-1">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-pink-primary/20">
                    <span className="text-berry/50 text-sm flex items-center gap-1">
                      <Clock size={16} weight="bold" />
                      {service.duration} min
                    </span>
                    <span className="font-bold text-berry text-xl">ETB{service.price}</span>
                  </div>
                  <Link to="/book" className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <HandHeart size={48} weight="duotone" className="text-pink-primary/40 mx-auto mb-4" />
            <p className="text-berry/60">No services found in this category.</p>
          </div>
        )}

        {/* Footnote */}
        <p className="text-center text-berry/40 text-sm mt-10 italic">
          Prices starting from • Subject to nail condition
        </p>
      </div>
    </div>
  );
}