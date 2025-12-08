import { useState, useEffect } from "react";
import { Logo } from "./Logo";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact"];

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
            onClick={() => onNavigate("Home")}
            className="flex items-center gap-3 group"
          >
            <Logo />
            <span className="text-[#C9A96E] tracking-[0.2em] text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src="./logo-gold-no-background.png"
                alt="Advent Terra Logo"
                width={200}
                height={48}
                className="transition-all duration-300"
              />
            </span>
          </button>

          {/* Navigation Menu */}
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`relative text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  currentPage === item
                    ? "text-[#C9A96E]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item}
                {currentPage === item && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#C9A96E]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
