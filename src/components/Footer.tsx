import { Logo } from './Logo';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-24 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Logo />
            <div className="text-xs text-white/40 tracking-wider">
              <div>© 2025 Advent Terra</div>
              <div className="mt-1">Privacy & Confidentiality Assured</div>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#C9A96E] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
