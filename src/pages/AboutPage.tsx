import { MapPin, Clock, Heart } from '@phosphor-icons/react';
import Card from '../components/ui/Card';
import TeamCard from '../components/about/TeamCard';
import ContactForm from '../components/about/ContactForm';
import FaqAccordion from '../components/about/FaqAccordion';
import { team } from '../constants/team';
import { faqItems } from '../constants/faq';

const hours = [
  { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 5:00 PM' },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl text-berry mb-3">About Us</h1>
          <p className="text-berry/70 text-lg">Get to know TATA'S TOUCH</p>
        </div>

        <div className="space-y-20">
          {/* Our Story */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-berry mb-6">Our Story</h2>
            <p className="text-berry/80 leading-relaxed mb-4">
              TATA'S TOUCH was born from a simple belief: every set of nails is a tiny canvas for
              self-expression. What started as a passion project in Tata's cozy apartment has grown
              into a beloved neighborhood salon in the heart of the Beauty District.
            </p>
            <p className="text-berry/80 leading-relaxed mb-6">
              We're committed to creating a space that feels like home — warm, welcoming, and
              filled with good vibes. Every appointment is an opportunity to relax, unwind, and
              leave feeling more beautiful than when you walked in.
            </p>
            <div className="flex justify-center">
              <Heart size={24} weight="fill" className="text-pink-primary" />
            </div>
          </section>

          {/* Meet the Team */}
          <section>
            <h2 className="font-heading text-3xl text-berry text-center mb-10">Meet the Team</h2>
            {team.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <p className="text-center text-berry/50">Team coming soon!</p>
            )}
          </section>

          {/* Salon Hours */}
          <section className="max-w-md mx-auto">
            <h2 className="font-heading text-3xl text-berry text-center mb-8">Salon Hours</h2>
            <Card className="p-6">
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-3 px-4 rounded-[12px] even:bg-pink-primary/5"
                  >
                    <span className="text-berry font-semibold text-sm">{day}</span>
                    <span className="text-berry/70 text-sm flex items-center gap-2">
                      <Clock size={16} weight="bold" className="text-pink-primary" />
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Location */}
          <section>
            <h2 className="font-heading text-3xl text-berry text-center mb-8">Find Us</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={24} weight="bold" className="text-pink-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-lg text-berry mb-2">Our Location</h3>
                      <p className="text-berry/70 text-sm leading-relaxed">
                        123 Blossom Street, Suite 4<br />
                        Beauty District, NY 10001
                      </p>
                    </div>
                  </div>
                  <p className="text-berry/50 text-sm">
                    We're located on the second floor, right above the Blossom Café. Street parking
                    available.
                  </p>
                </Card>
              </div>
              <div className="rounded-[24px] border-[1.5px] border-pink-primary h-64 bg-pink-primary/5 flex items-center justify-center">
                <MapPin size={48} weight="duotone" className="text-pink-primary/30" />
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="max-w-lg mx-auto">
            <h2 className="font-heading text-3xl text-berry text-center mb-8">Get in Touch</h2>
            <ContactForm />
          </section>

          {/* FAQ */}
          <section className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl text-berry text-center mb-8">
              Frequently Asked Questions
            </h2>
            {faqItems.length > 0 ? (
              <FaqAccordion items={faqItems} />
            ) : (
              <p className="text-center text-berry/50">FAQ coming soon!</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}