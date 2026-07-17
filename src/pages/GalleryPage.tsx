import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CaretLeft, CaretRight, Images } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import PillFilter from '../components/ui/PillFilter';
import Button from '../components/ui/Button';
import { galleryImages } from '../constants/gallery';
import type { GalleryCategory } from '../types';

const filterOptions: { value: GalleryCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'gel', label: 'Gel' },
  { value: 'acrylic', label: 'Acrylic' },
  { value: 'nail-art', label: 'Nail Art' },
  { value: 'pedicure', label: 'Pedicure' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Images size={36} weight="duotone" className="text-pink-primary" />
          </div>
          <h1 className="font-heading text-4xl text-berry mb-3">Our Work</h1>
          <p className="text-berry/70 text-lg">A peek at some of our favorite nail art</p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-10">
          <PillFilter
            options={filterOptions}
            selected={filter}
            onSelect={setFilter}
          />
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="rounded-[20px] border-[1.5px] border-pink-primary bg-pink-primary/5 overflow-hidden cursor-pointer group relative aspect-square"
              >
                {/* Actual image */}
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-pink-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <span className="text-white-pure font-semibold text-sm text-center">
                    {image.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Images size={48} weight="duotone" className="text-pink-primary/40 mx-auto mb-4" />
            <p className="text-berry/60">No images in this category yet.</p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 pt-10 border-t-2 border-dashed border-pink-primary/30 text-center">
          <h3 className="font-heading text-2xl text-berry mb-4">
            Love what you see?
          </h3>
          <p className="text-berry/70 mb-6">Book your appointment and let us create your dream nails</p>
          <Link to="/book">
            <Button size="lg">Book Your Appointment</Button>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white-pure/90"
            onClick={closeLightbox}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, type: 'spring', bounce: 0.3 }}
            className="relative z-10 max-w-2xl w-full"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white-pure border-[1.5px] border-pink-primary flex items-center justify-center text-berry hover:bg-pink-primary/10 transition-colors cursor-pointer"
            >
              <X size={20} weight="bold" />
            </button>

            {/* Image */}
            <div className="aspect-square rounded-[24px] border-[1.5px] border-pink-primary bg-pink-primary/5 overflow-hidden mb-4">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caption */}
            <p className="text-center text-berry font-medium">
              {filteredImages[lightboxIndex].caption}
            </p>

            {/* Navigation arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white-pure border-[1.5px] border-pink-primary flex items-center justify-center text-berry hover:bg-pink-primary/10 transition-colors cursor-pointer"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white-pure border-[1.5px] border-pink-primary flex items-center justify-center text-berry hover:bg-pink-primary/10 transition-colors cursor-pointer"
                >
                  <CaretRight size={20} weight="bold" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}