import { useState } from 'react';
import { User, Envelope, ChatCircleText, PaperPlaneTilt } from '@phosphor-icons/react';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setForm({ name: '', email: '', message: '' });
  };

  const inputBase = `
    w-full bg-white-pure border-[1.5px] border-pink-primary rounded-[16px] 
    px-4 py-3 text-berry placeholder-berry/30 outline-none
    focus:border-berry transition-colors duration-200
  `;

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <User size={16} weight="bold" className="text-pink-primary" />
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className={inputBase}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <Envelope size={16} weight="bold" className="text-pink-primary" />
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className={inputBase}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-berry mb-1.5">
            <ChatCircleText size={16} weight="bold" className="text-pink-primary" />
            Message
          </label>
          <textarea
            placeholder="How can we help you?"
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            rows={4}
            className={`${inputBase} resize-none`}
            required
          />
        </div>

        <Button type="submit" className="flex items-center gap-2">
          <PaperPlaneTilt size={18} weight="bold" />
          Send Message
        </Button>
      </form>

      <Toast
        message="Thanks for reaching out! We'll get back to you soon."
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}