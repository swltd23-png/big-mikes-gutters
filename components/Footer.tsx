import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../src/constants/locations';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenColorModal: () => void;
  onOpenProfileModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenColorModal, onOpenProfileModal }) => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12 text-center md:text-left">
          
          {/* Column 1: Brand, Address, Office Hours & Call Button (Spans 4/12) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-center md:items-start">
             {/* Brand & Address */}
             <div className="w-full">
               <div className="flex items-center justify-center md:justify-start mb-8">
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-2xl font-extrabold text-white tracking-wide">BIG MIKE'S</span>
                    <span className="text-2xl font-extrabold text-green-500 tracking-wide">GUTTERS</span>
                  </div>
               </div>
               <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-blue-100">
                 <div className="mb-2 md:mb-0">
                    <MapPin className="w-6 h-6 text-green-500 flex-shrink-0" />
                 </div>
                 <div className="text-base font-medium leading-relaxed">
                   <p className="font-bold text-white mb-1">Big Mike's Gutters</p>
                   <p>PO Box 3159</p>
                   <p>Success WA 6964</p>
                 </div>
               </div>
             </div>

             {/* Office Hours */}
             <div className="w-full">
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" /> Office Hours
                </h4>
                <ul className="space-y-2 text-blue-200 text-sm mb-6 mx-auto md:mx-0 w-full max-w-[240px]">
                  <li className="flex justify-between items-center border-b border-blue-900 pb-1">
                    <span>Mon - Fri</span> 
                    <span className="font-bold text-white">7:30am - 5:00pm</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span>Weekends</span> 
                    <span className="font-bold text-white">Closed</span>
                  </li>
                   <li className="flex justify-between items-center">
                    <span>Public Holidays</span> 
                    <span className="font-bold text-white">Closed</span>
                  </li>
                </ul>

                {/* Call Button */}
                <a href="tel:0451027310" className="inline-flex items-center justify-center w-full max-w-[240px] px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition shadow-lg shadow-green-900/20 mx-auto md:mx-0">
                  <Phone className="w-4 h-4 mr-2" /> Get In Touch Now
                </a>
             </div>
          </div>

          {/* Column 2: Services & Quick Links (Spans 3/12) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-6 text-white w-full">Services</h4>
            <ul className="space-y-3 text-blue-200 text-sm font-medium w-full">
              <li><a href="#gutter-repairs" className="hover:text-green-400 transition">Gutter Repairs</a></li>
              <li><a href="#gutter-replacement" className="hover:text-green-400 transition">Gutter Installation</a></li>
              <li><a href="#gutter-replacement" className="hover:text-green-400 transition">Colorbond Gutter Replacement</a></li>
              <li><a href="#gutter-replacement" className="hover:text-green-400 transition">Gutter Replacement</a></li>
              <li><a href="#fascia-replacement" className="hover:text-green-400 transition">Fascia Replacement</a></li>
              <li><a href="#downpipe-replacement" className="hover:text-green-400 transition">Downpipe Replacement</a></li>
            </ul>

            {/* Quick Links (Under Services) */}
            <h4 className="text-lg font-bold mb-6 text-white w-full mt-8">Quick Links</h4>
            <ul className="space-y-3 text-blue-200 text-sm font-medium w-full">
              <li>
                <button onClick={onOpenColorModal} className="hover:text-green-400 transition text-left">
                  Gutter Colours
                </button>
              </li>
              <li>
                <button onClick={onOpenProfileModal} className="hover:text-green-400 transition text-left">
                  Gutter Profiles
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-green-400 transition text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (Spans 5/12) */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-6 text-white w-full">Service Areas</h4>
            <div className="text-blue-200 w-full">
              <p className="text-sm leading-relaxed mb-4">
                Servicing all areas south of Perth (WA 6000) including:
              </p>
              
              {/* Responsive Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 text-sm font-medium text-blue-300 mb-4">
                 {LOCATIONS.map((loc) => (
                   <Link 
                     key={loc.slug} 
                     to={`/${loc.slug}-gutter-repairs`}
                     className="hover:text-green-400 transition"
                   >
                     {loc.name}
                   </Link>
                 ))}
                 {/* Manually adding Kelmscott as it was in the original list but not in the requested config */}
                 <span>Kelmscott</span>
              </div>
              <p className="text-sm text-blue-400 italic">...and surrounding suburbs.</p>
            </div>
          </div>

        </div>
        
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-400 text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Big Mike's Gutters.</p>
          <p className="text-center md:text-right">WA Owned & Operated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;