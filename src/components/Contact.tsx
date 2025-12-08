import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 text-white">
            Let's discuss
            <br />
            <span className="text-[#C9A96E]">your legacy.</span>
          </h1>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm tracking-wider text-white/60 mb-3 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] py-3 text-white outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm tracking-wider text-white/60 mb-3 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] py-3 text-white outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm tracking-wider text-white/60 mb-3 uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] py-3 text-white outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm tracking-wider text-white/60 mb-3 uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] py-3 text-white outline-none resize-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative px-12 py-4 border border-[#C9A96E] overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/80 w-full md:w-auto"
                >
                  <span className="relative z-10 text-[#C9A96E] tracking-[0.2em] uppercase text-sm group-hover:text-white transition-colors duration-500">
                    {submitted ? 'Message Sent' : 'Submit'}
                  </span>
                  <div className="absolute inset-0 bg-[#C9A96E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Headquarters */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-[#C9A96E] mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl mb-3 text-white">Bengaluru Headquarters</h3>
                    <p className="text-white/60 leading-relaxed">
                      Indiranagar, Bengaluru
                      <br />
                      Karnataka, India
                      <br />
                      <span className="text-sm text-[#C9A96E] mt-2 inline-block">
                        By Appointment Only
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#C9A96E]" strokeWidth={1.5} />
                  <div>
                    <p className="text-white/60">+91 80 XXXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#C9A96E]" strokeWidth={1.5} />
                  <div>
                    <p className="text-white/60">advisory@adventterra.com</p>
                  </div>
                </div>
              </div>

              {/* Global Reach */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl mb-6 text-white">Global Reach</h3>
                <div className="relative w-full h-64 border border-[#C9A96E]/20 bg-[#1A1A1A]/40 overflow-hidden">
                  {/* Simplified world map visualization */}
                  <svg
                    viewBox="0 0 800 400"
                    className="w-full h-full opacity-30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Continents outline - simplified */}
                    <path
                      d="M100 150 L180 140 L220 160 L250 150 L280 180 L260 220 L200 240 L150 220 Z"
                      stroke="#C9A96E"
                      strokeWidth="1"
                    />
                    <path
                      d="M350 120 L450 110 L500 140 L520 180 L480 220 L420 230 L380 200 L340 170 Z"
                      stroke="#C9A96E"
                      strokeWidth="1"
                    />
                    <path
                      d="M560 140 L640 130 L680 160 L660 200 L600 210 L570 180 Z"
                      stroke="#C9A96E"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Key markets dots */}
                  <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#C9A96E] rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#C9A96E] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-2/5 right-1/4 w-2 h-2 bg-[#C9A96E] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <p className="text-sm text-white/60 mt-4 tracking-wide">
                  Operating across Singapore • Dubai • London • Santorini • New York
                </p>
              </div>

              {/* Confidentiality Note */}
              <div className="pt-8">
                <p className="text-sm text-white/40 italic leading-relaxed">
                  All communications are treated with the utmost confidentiality. We operate under
                  strict non-disclosure protocols and never disclose client relationships or
                  transaction details.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
