import React from 'react';
import { Mail, CheckCircle2, ShieldCheck, Phone, Star } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

interface HeroProps {
  onOpenQuote?: () => void;
  locationName?: string;
  locationPostcode?: string;
  serviceName?: string;
  heroTitle?: string;
  heroParagraph?: string;
  tagLine?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  onOpenQuote, 
  locationName = "Perth", 
  locationPostcode = "6164", 
  serviceName = "Gutter Repairs",
  heroTitle,
  heroParagraph,
  tagLine
}) => {
  return (
    <section className="relative bg-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-stretch">
          
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left mb-16 lg:mb-0">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold tracking-wide w-fit mb-8">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="truncate">
                {tagLine || `${serviceName} in ${locationName} ${locationPostcode}`}
              </span>
            </div>

            <h1 className="font-extrabold tracking-tight mb-8">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-blue-950 mb-6">
                {heroTitle || `We provide ${serviceName} in ${locationName}.`}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="block text-green-600 mb-2">No mess. No fuss.</span>
                <span className="block text-blue-950">Just a great job.</span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              {heroParagraph || `Professional ${serviceName.toLowerCase()} and new gutter installation across ${locationName} by a local roof plumber with 27+ years roof & gutter experience.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 shadow-xl shadow-green-600/20 transition-all hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email Free Quote
              </button>
              <a 
                href="tel:0451027310"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-950 hover:bg-blue-900 shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <Phone className="w-6 h-6 mr-2" />
                Book a Gutter Inspection
              </a>
            </div>

            {/* Trust Indicators Section */}
            <div className="flex flex-col gap-5">
              
              {/* Row 1: Social Proof */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                 {/* Avatars */}
                 <div className="flex -space-x-3 overflow-hidden p-1 pl-0">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100" alt="Customer" />
                    <div className="h-10 w-10 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">
                      +1k
                    </div>
                 </div>

                 {/* Stars & Text */}
                 <div className="flex flex-col">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm font-bold text-blue-950">Trusted by 1,000+ happy customers</p>
                 </div>
              </div>

              {/* Row 2: Badges */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                 <div className="flex items-center gap-2.5">
                   <div className="bg-green-100 p-1 rounded-full">
                     <CheckCircle2 className="w-4 h-4 text-green-700" />
                   </div>
                   <span className="font-bold text-slate-700">Fully Insured</span>
                 </div>
                 <div className="flex items-center gap-2.5">
                   <div className="bg-green-100 p-1 rounded-full">
                     <ShieldCheck className="w-4 h-4 text-green-700" />
                   </div>
                   <span className="font-bold text-slate-700">10-Year Workmanship Warranty</span>
                 </div>
              </div>

            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 lg:h-full">
             {/* Rotated Background */}
             <div className="absolute -inset-4 bg-green-100 rounded-3xl transform rotate-2 lg:h-full lg:w-full"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-600/20 border-4 border-white aspect-[4/5] lg:aspect-auto lg:h-full bg-gray-100">
                {/* Main Image */}
                <img
                  src={IMAGES.HERO.src}
                  alt={IMAGES.HERO.alt}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay to match style */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950/90 to-transparent p-8">
                   <div className="flex items-center gap-3 text-white">
                      <ShieldCheck className="w-6 h-6 text-green-400" />
                      <p className="font-bold text-lg">Perth's Local Experts</p>
                   </div>
                   <p className="text-gray-200 text-sm mt-1">Providing quality gutter solutions for over 27 years.</p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;