import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, GitBranch, Award } from 'lucide-react';

export function About() {
  const principles = [
    {
      icon: Users,
      title: 'People',
      description:
        'We serve only those who value discretion, depth, and long-term vision. Our clients are not buyers—they are custodians of capital, architects of legacy, and stewards of generational wealth. We partner with UHNW individuals, family offices, and visionary developers who understand that real estate is not a transaction, but a statement of enduring intent.',
    },
    {
      icon: GitBranch,
      title: 'Process',
      description:
        'Our methodology is relentless in its rigor. We deploy proprietary frameworks combining macroeconomic intelligence, geopolitical risk analysis, urban development trajectories, and micro-market dynamics. Every recommendation is stress-tested across multiple time horizons and ownership scenarios. We do not present options—we present convictions, backed by data, intuition, and decades of collective experience.',
    },
    {
      icon: Award,
      title: 'Product',
      description:
        "We curate, not catalog. Our portfolio spans global gateway cities and emerging wealth corridors—from Singapore's waterfront penthouses to Dubai's architectural marvels, from London's historical districts to Santorini's clifftop estates. Each property is vetted for investment pedigree, architectural significance, scarcity, and alignment with our client's strategic objectives. We present only what we ourselves would own.",
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
            We don't sell properties.
            <br />
            <span className="text-[#C9A96E]">We curate legacies.</span>
          </h1>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl text-white/90">Our Story</h2>
              
              <div className="space-y-6 text-white/60">
                <p>
                  Advent Terra was born from a singular realization: that the world's most sophisticated
                  investors were navigating global real estate markets with tools designed for mass
                  consumption, not strategic precision.
                </p>
                
                <p>
                  Based in Bengaluru—India's nerve center of innovation and capital—we operate at the
                  intersection of old-world discretion and new-age intelligence. Our team combines
                  backgrounds in private banking, institutional real estate, family office advisory, and
                  technology-driven market analysis.
                </p>
                
                <p>
                  We are not brokers. We are not agents. We are strategic partners who understand that for
                  our clients, real estate decisions echo across generations. Every recommendation we make
                  carries the weight of that responsibility.
                </p>
                
                <p>
                  Our mandate is simple: to identify, analyze, and secure properties that meet the highest
                  standards of investment rigor, architectural merit, and legacy potential. We work with a
                  select few, and we work deeply.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-4/5 overflow-hidden border border-[#C9A96E]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612303544167-5871c2331e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ0MjkwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury architectural interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#C9A96E]/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* People. Process. Product. */}
      <section className="py-32 px-8 lg:px-16 xl:px-24 bg-[#1A1A1A]/30">
        <div className="max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-center mb-24 text-white"
          >
            People. Process. Product.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Icon */}
                <div className="mb-8">
                  <principle.icon 
                    className="w-12 h-12 text-[#C9A96E]" 
                    strokeWidth={1}
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl mb-6 text-white">
                  {principle.title}
                </h3>

                {/* Accent line */}
                <div className="w-16 h-px bg-[#C9A96E] mb-8 transition-all duration-500 group-hover:w-32" />

                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Enablement */}
      <section className="py-32 px-8 lg:px-16 xl:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#C9A96E] rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#C9A96E] rotate-12" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl text-white/90">
              Technology-Enabled, Human-Led
            </h3>
            
            <p className="text-xl text-white/60 leading-relaxed">
              We leverage proprietary data analytics, AI-driven market intelligence, and real-time
              global surveillance tools—but every decision passes through the lens of human judgment,
              ethical responsibility, and strategic foresight. Technology amplifies our capabilities;
              wisdom guides our choices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl text-[#C9A96E] italic tracking-tight">
            "Strategic partners and confidants for generations."
          </h2>
        </motion.div>
      </section>
    </div>
  );
}