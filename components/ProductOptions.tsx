import React from 'react';
import { Palette, Layers } from 'lucide-react';

interface ProductOptionsProps {
  onOpenColorModal: () => void;
  onOpenProfileModal: () => void;
  locationName?: string;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ onOpenColorModal, onOpenProfileModal, locationName = "Perth" }) => {
  return (
    <>
      <section id="products" className="py-16 bg-blue-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Gutter Profiles & Genuine Colorbond® Colours
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                We specialise in gutter repairs, gutter replacement and installation servicing {locationName} and surrounding areas, offering modern gutter profiles and the full range of genuine Colorbond® steel gutters to perfectly match your home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-wrap justify-center">
               <button 
                 onClick={onOpenColorModal}
                 className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-950 hover:bg-green-50 font-bold text-lg rounded-xl transition-all shadow-lg hover:-translate-y-1 group cursor-pointer"
               >
                 <Palette className="w-5 h-5 mr-2 text-green-600 group-hover:scale-110 transition-transform" />
                 Check Our Gutter Colours
               </button>
               <button 
                 onClick={onOpenProfileModal}
                 className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white hover:bg-green-700 font-bold text-lg rounded-xl transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1 cursor-pointer"
               >
                 <Layers className="w-5 h-5 mr-2" />
                 Check Our Gutter Profiles
               </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOptions;