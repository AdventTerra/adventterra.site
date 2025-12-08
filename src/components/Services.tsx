import { motion } from 'motion/react';
import { TrendingUp, Briefcase, Building2, Shield } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description:
        'We provide bespoke investment strategies for global real estate portfolios, aligned with your risk appetite, return expectations, and generational wealth objectives. From identifying emerging markets to stress-testing legacy holdings, we offer clarity in complexity.',
      gradient: 'from-[#C9A96E]/20 to-transparent',
    },
    {
      icon: Briefcase,
      title: 'Portfolio Structuring',
      description:
        'Tax efficiency, legal structuring, cross-border ownership, and succession planning are woven into every recommendation. We work in concert with your legal, tax, and wealth management advisors to ensure seamless integration and maximum strategic advantage.',
      gradient: 'from-transparent via-[#C9A96E]/10 to-transparent',
    },
    {
      icon: Building2,
      title: 'Developer Collaborations',
      description:
        "We partner with world-class developers to bring exclusive, pre-launch, and bespoke opportunities to our clients. Early access, preferential terms, and customization privileges are standard. Our relationships unlock what isn't publicly available.",
      gradient: 'from-transparent to-[#C9A96E]/20',
    },
    {
      icon: Shield,
      title: 'Family Office Alignment',
      description:
        'We understand the unique needs of family offices—confidentiality, multi-generational thinking, values alignment, and impact considerations. We serve as an extension of your office, operating with the discretion and rigor you demand.',
      gradient: 'from-[#C9A96E]/15 to-transparent',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-12 text-white">
            Boutique Advisory for
            <br />
            <span className="text-[#C9A96E]">Discerning Capital</span>
          </h1>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1920px] mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${
                index % 2 === 0 ? 'md:ml-24' : 'md:mr-24'
              }`}
            >
              <div className="relative border border-[#C9A96E]/20 p-12 lg:p-16 bg-[#1A1A1A]/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/40">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <service.icon
                    className="w-14 h-14 text-[#C9A96E] mb-8"
                    strokeWidth={1}
                  />

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl mb-6 text-white">
                    {service.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="w-24 h-[1px] bg-[#C9A96E] mb-8 transition-all duration-500 group-hover:w-48" />

                  {/* Description */}
                  <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A96E]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-white/60 mb-12 tracking-wide">
              Our services are tailored, our approach is bespoke.
            </p>
            
            <button
              onClick={() => onNavigate('Contact')}
              className="group relative px-16 py-6 border border-[#C9A96E] overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/80"
            >
              <span className="relative z-10 text-[#C9A96E] tracking-[0.2em] uppercase text-sm group-hover:text-white transition-colors duration-500">
                Begin a Conversation
              </span>
              <div className="absolute inset-0 bg-[#C9A96E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}