import React from 'react';
import { Phone, ArrowRight, Mail } from 'lucide-react';

interface CallToActionProps {
  onOpenQuote: () => void;
  cta?: { headline: string; text: string };
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuote, cta }) => {
  return (
    <section className="py-16 bg-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {cta ? cta.headline : "Need your Gutters Fixed?"}
            </h2>
            <div className="text-blue-100 text-lg leading-relaxed space-y-4">
              <p>
                {cta ? cta.text : (
                  <>
                    Honest advise, professional gutter repairs and replacements — done right the first time. <span className="font-bold text-green-400">No mess. No fuss. Just a great job.</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 w-full lg:w-auto justify-center">
             <button 
               onClick={onOpenQuote}
               className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 py-3 sm:px-8 sm:py-4 bg-white text-blue-950 hover:bg-green-50 font-bold text-sm sm:text-lg rounded-xl transition-all shadow-lg hover:-translate-y-1 group cursor-pointer text-center leading-tight"
             >
               <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 group-hover:scale-110 transition-transform flex-shrink-0" />
               Email Free Quote
             </button>
             <a 
               href="tel:0451027310"
               className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 py-3 sm:px-8 sm:py-4 bg-green-600 text-white hover:bg-green-700 font-bold text-sm sm:text-lg rounded-xl transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1 cursor-pointer text-center leading-tight"
             >
               <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
               Book a Gutter Inspection
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
