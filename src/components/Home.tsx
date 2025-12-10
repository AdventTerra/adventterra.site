import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentCard, setCurrentCard] = useState(0);

  // Subtle animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create subtle particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = '#0F0F0F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201, 169, 110, 0.15)';
        ctx.fill();
      });

      // Draw subtle connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 169, 110, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const featuredOpportunities = [
    {
      title: 'Ultra-Luxury Waterfront Residences',
      location: 'Singapore',
      //type: 'Ultra-Luxury Waterfront',
      image: 'https://images.unsplash.com/photo-1644025470506-f98ba7b08948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBtYXJpbmElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NDk3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Investment Grade Portfolio',
      location: 'UAE',
      //type: 'Investment Grade',
      image: 'https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreUxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ0MTIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Legacy Estate Collection',
      location: 'Greece',
      //type: 'Legacy Estate',
      image: 'https://images.unsplash.com/photo-1599916382059-2968a101a410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW50b3JpbmklMjBjbGlmZiUyMHZpbGxhfGVufDF8fHx8MTc2NDQ5Nzg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Prime Central Residence',
      location: 'UK',
      //type: 'Prime Central',
      image: 'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBsdXh1cnklMjBwZW50aG91c2V8ZW58MXx8fHwxNzY0NDk3ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % featuredOpportunities.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + featuredOpportunities.length) % featuredOpportunities.length);
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.6 }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-8 flex justify-center overflow-hidden"
          >
            {/* Import the luxury font */}
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&display=swap');`}
            </style>
            
            <svg 
              viewBox="0 0 1000 150" 
              className="h-24 md:h-32 lg:h-48 w-auto"
              aria-label="ADVENT TERRA"
            >
              <text 
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fill="#C9A96E" 
                style={{ 
                  fontFamily: "'Cinzel', serif", 
                  fontSize: '100px', 
                  letterSpacing: '0.15em',
                  fontWeight: '400',
                  textTransform: 'uppercase'
                }}
              >
                AdvenT TerrA
              </text>
            </svg>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white/60 tracking-wide"
          >
            Curating Enduring Legacies in Global Real Estate
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl text-white mb-16">
              People. Process. Product.
            </h2>
            <div className="w-32 h-[1px] bg-[#C9A96E] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Featured Opportunities Carousel */}
      <section className="py-32 px-8 lg:px-16 xl:px-24 bg-[#1A1A1A]/30">
        <div className="max-w-[1920px] mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl text-center mb-16 text-white/90"
          >
            Featured Opportunities
          </motion.h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                {featuredOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="min-w-full px-16"
                  >
                    <div className="relative group cursor-pointer border border-[#C9A96E]/30 overflow-hidden bg-[#1A1A1A]">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <ImageWithFallback
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-12">
                        <h4 className="text-3xl md:text-4xl mb-2 text-white">
                          {opportunity.title}
                        </h4>
                        <p className="text-[#C9A96E] tracking-wider">
                          {opportunity.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons - Hidden on mobile, positioned better on desktop */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 px-4 py-4 lg:w-12 lg:h-12 border border-[#C9A96E]/50 hover:bg-[#C9A96E]/10 transition-all duration-300 items-center justify-center group"
              aria-label="Previous"
            >
              <ChevronLeft className="text-[#C9A96E] group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 px-4 py-4 lg:w-12 lg:h-12 border border-[#C9A96E]/50 hover:bg-[#C9A96E]/10 transition-all duration-300 items-center justify-center group"
              aria-label="Next"
            >
              <ChevronRight className="text-[#C9A96E] group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {featuredOpportunities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`h-[1px] transition-all duration-300 ${
                    index === currentCard 
                      ? 'w-12 sm:w-16 bg-[#C9A96E]' 
                      : 'w-6 sm:w-8 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => onNavigate('Contact')}
                            className="group relative px-16 py-6 border border-[#C9A96E] overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/80"
            >
              <span className="relative z-10 text-[#C9A96E] tracking-[0.2em] uppercase text-sm group-hover:text-white transition-colors duration-500">
                Begin Your Journey
              </span>
              <div className="absolute inset-0 bg-[#C9A96E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
