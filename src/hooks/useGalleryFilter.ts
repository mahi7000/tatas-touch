import { useState, useMemo } from 'react';
import type { GalleryImage, GalleryCategory } from '../types';

export function useGalleryFilter(images: GalleryImage[]) {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');

  const filteredImages = useMemo(() => {
    if (filter === 'all') return images;
    return images.filter((img) => img.category === filter);
  }, [images, filter]);

  return { filter, setFilter, filteredImages };
}