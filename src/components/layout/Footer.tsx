import { Link } from 'react-router-dom';
import { InstagramLogo, FacebookLogo, PinterestLogo, TiktokLogo, MapPin, Phone, Envelope, Clock } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-white-pure border-t border-pink-primary/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl text-berry mb-4">TATA'S TOUCH</h3>
            <p className="text-berry/70 text-sm leading-relaxed mb-4">
              Where every nail tells a story.<br />
              Relax, unwind, and let us pamper you.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: InstagramLogo, key: 'ig' },
                { Icon: FacebookLogo, key: 'fb' },
                { Icon: PinterestLogo, key: 'pin' },
                { Icon: TiktokLogo, key: 'tt' },
              ].map(({ Icon, key }) => (
                <span
                  key={key}
                  className="w-9 h-9 rounded-full border-2 border-pink-primary flex items-center justify-center cursor-pointer hover:bg-pink-primary/10 transition-colors duration-200 text-pink-primary"
                >
                  <Icon size={16} weight="bold" />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-lg text-berry mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/book', label: 'Book Appointment' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-berry/70 hover:text-pink-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg text-berry mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-berry/70">
              <li className="flex items-start gap-2">
                <MapPin size={18} weight="bold" className="text-pink-primary mt-0.5 flex-shrink-0" />
                <span>123 Blossom Street, Suite 4<br />Beauty District, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} weight="bold" className="text-pink-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Envelope size={18} weight="bold" className="text-pink-primary flex-shrink-0" />
                <span>hello@tatastouch.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} weight="bold" className="text-pink-primary mt-0.5 flex-shrink-0" />
                <span>
                  Mon–Sat: 9am–7pm<br />
                  Sun: 10am–5pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-pink-primary/20 text-center">
          <p className="text-berry/50 text-sm">
            © {new Date().getFullYear()} TATA'S TOUCH — Made with 💅 and love
          </p>
        </div>
      </div>
    </footer>
  );
}