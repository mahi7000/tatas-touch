export type ServiceCategory = 'manicure' | 'pedicure' | 'gel-acrylic' | 'nail-art' | 'add-ons';

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  duration: number; // minutes
  price: number;
  description: string;
  popular?: boolean;
}

export interface TimeSlot {
  id: string;
  time: string; // "10:00 AM"
  available: boolean;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  specialRequests: string;
}

export interface BookingState {
  step: number;
  service: Service | null;
  date: Date | null;
  timeSlot: TimeSlot | null;
  customerInfo: CustomerInfo;
  confirmed: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarPlaceholder: string;
}

export type GalleryCategory = 'gel' | 'acrylic' | 'nail-art' | 'pedicure';

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  src: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}