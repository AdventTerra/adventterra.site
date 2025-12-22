import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when section changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 sm:gap-3 group relative z-50 cursor-pointer"
          >
              <Logo />
            
            <span className="hidden sm:block text-[#C9A96E] tracking-[0.2em] text-xs sm:text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src="./logo-gold-no-background.png"
                alt="Advent Terra Logo"
                width={200}
                height={48}
                className="w-32 sm:w-40 md:w-48 lg:w-52 transition-all duration-300"
              />
            </span>
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-16 lg:gap-12 xl:gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#C9A96E]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#C9A96E]" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-[#C9A96E] hover:bg-white/5 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0F0F0F] border-l border-white/10 transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-left py-6 border-b border-white/10 text-xl tracking-[0.15em] uppercase transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#C9A96E]"
                  : "text-white/60 hover:text-white"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#C9A96E]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
