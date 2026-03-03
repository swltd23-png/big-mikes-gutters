import React from 'react';
import { Phone, Mic } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
  onOpenVoiceAssistant?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenVoiceAssistant }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-0 md:h-24 gap-4 md:gap-0">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col items-center md:items-start leading-none">
              <span className="text-2xl font-extrabold text-blue-950 tracking-wide">BIG MIKE'S</span>
              <span className="text-2xl font-extrabold text-green-600 tracking-wide">GUTTERS</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            {/* Voice Assistant Button */}
            <button 
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 md:py-2.5 md:px-4 rounded-xl shadow-lg shadow-green-600/20 transition-all hover:-translate-y-0.5"
              onClick={onOpenVoiceAssistant}
            >
              <Mic className="w-5 h-5" />
              <span>Talk to Voice Assistant</span>
            </button>

            {/* Book Inspection Button */}
            <a 
              href="tel:0451027310"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-4 md:py-2.5 md:px-4 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>Book a Gutter Inspection</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
