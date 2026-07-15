import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import Button from '../ui/Button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/book', label: 'Book' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white-pure shadow-[0_2px_15px_rgba(225,150,181,0.1)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-xl sm:text-2xl text-berry hover:text-pink-primary transition-colors duration-200"
          >
            TATA'S TOUCH
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-all duration-200 pb-1 border-b-2 ${
                  isActive(link.path)
                    ? 'text-pink-primary border-pink-primary'
                    : 'text-berry border-transparent hover:text-pink-primary hover:border-pink-primary/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/book">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-berry hover:text-pink-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white-pure border-t border-pink-primary/30 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded-[16px] transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-pink-primary text-white-pure'
                  : 'text-berry hover:bg-pink-primary/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="mt-2">
            <Button size="md" className="w-full">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}