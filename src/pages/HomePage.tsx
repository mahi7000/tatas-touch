import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Sparkle, HandHeart, Flower, PaintBrush, Clock } from '@phosphor-icons/react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { services } from '../constants/services';
import { testimonials } from '../constants/testimonials';

const previewServices = services.filter((s) => s.popular).slice(0, 3);

const whyChooseUs = [
  { Icon: Sparkle, text: 'Sanitized Tools' },
  { Icon: Flower, text: 'Relaxing Atmosphere' },
  { Icon: PaintBrush, text: 'Trending Designs' },
];

const floatingIcons = [Sparkle, HandHeart, Flower, Sparkle, HandHeart];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'manicure': return <HandHeart size={32} weight="duotone" className="text-pink-primary" />;
      case 'pedicure': return <Flower size={32} weight="duotone" className="text-pink-primary" />;
      default: return <Sparkle size={32} weight="duotone" className="text-pink-primary" />;
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-primary/30"
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon size={28} weight="duotone" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-berry mb-6"
          >
            TATA'S TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-berry/80 mb-8"
          >
            Where every nail tells a story
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/book">
              <Button size="lg">Book Your Appointment</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl text-berry mb-4">Welcome to TATA'S TOUCH</h2>
              <p className="text-berry/80 leading-relaxed mb-4">
                Nestled in the heart of the Beauty District, TATA'S TOUCH is your cozy escape for
                stunning nails and soothing pampering. Our licensed technicians bring passion,
                precision, and a sprinkle of magic to every appointment.
              </p>
              <p className="text-berry/80 leading-relaxed">
                From classic manicures to intricate nail art, we use only cruelty-free products in a
                clean, welcoming space designed for your comfort.
              </p>
            </div>
            <div className="rounded-[24px] border-[1.5px] border-pink-primary h-64 sm:h-80 bg-pink-primary/10 flex items-center justify-center">
              <HandHeart size={64} weight="duotone" className="text-pink-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-pink-primary/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl text-berry mb-3">Our Services</h2>
            <p className="text-berry/70">Your favorites, loved by everyone</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <Card key={service.id} className="p-6">
                <div className="mb-3">{getServiceIcon(service.category)}</div>
                <h3 className="font-heading text-lg text-berry mb-2">{service.name}</h3>
                <p className="text-berry/60 text-sm mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-berry/50 text-sm flex items-center gap-1">
                    <Clock size={16} weight="bold" /> {service.duration} min
                  </span>
                  <span className="font-bold text-berry text-lg">${service.price}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {whyChooseUs.map(({ Icon, text }) => (
              <Card key={text} hoverable={false} className="px-8 py-5 text-center">
                <Icon size={28} weight="duotone" className="text-pink-primary mx-auto mb-2" />
                <span className="font-semibold text-berry">{text}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-pink-primary/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-berry text-center mb-10">What Our Clients Say</h2>
          <div className="relative max-w-2xl mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 text-center border-l-4 border-l-pink-primary">
                    <div className="flex justify-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={20} weight="fill" className="text-pink-primary" />
                      ))}
                    </div>
                    <p className="text-berry/80 italic mb-4 leading-relaxed">"{t.quote}"</p>
                    <p className="font-heading text-berry font-bold">{t.name}</p>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentTestimonial ? 'bg-pink-primary scale-125' : 'bg-pink-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl text-berry mb-2">
              Follow Us <span className="text-pink-primary">@tatastouch</span>
            </h2>
            <p className="text-berry/70">Tag us to be featured!</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              HandHeart, Sparkle, Flower, PaintBrush, HandHeart, Sparkle
            ].map((Icon, i) => (
              <div
                key={i}
                className="aspect-square rounded-[20px] border-[1.5px] border-pink-primary bg-pink-primary/5 flex items-center justify-center cursor-pointer hover:bg-pink-primary/20 transition-colors duration-200"
              >
                <Icon size={36} weight="duotone" className="text-pink-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}