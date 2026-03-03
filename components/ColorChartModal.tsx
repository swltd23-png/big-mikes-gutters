import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ZoomIn } from 'lucide-react';

interface ColorChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const colors = [
  { name: 'Surfmist®', hex: '#E6E7E4', description: "Fresh, light and clean." },
  { name: 'Evening Haze®', hex: '#D3C9AA', description: "Subtle and earthy." },
  { name: 'Classic Cream™', hex: '#F3E5AB', description: "Warm and traditional." },
  { name: 'Paperbark®', hex: '#D6C8AE', description: "Soft and sandy." },
  { name: 'Shale Grey™', hex: '#A9ACAC', description: "Natural silver-grey." },
  { name: 'Dune®', hex: '#B9B4AB', description: "Warm, pale grey." },
  { name: 'Cove™', hex: '#969382', description: "Mid-tone warm grey." },
  { name: 'Pale Eucalypt®', hex: '#7E8D77', description: "Gentle muted green." },
  { name: 'Woodland Grey®', hex: '#585852', description: "Deep forest grey." },
  { name: 'Windspray®', hex: '#899092', description: "Cool, mid-strength grey." },
  { name: 'Gully™', hex: '#898681', description: "Warm, neutral grey." },
  { name: 'Mangrove™', hex: '#77816D', description: "Olive green tone." },
  { name: 'Deep Ocean®', hex: '#2A3B4D', description: "Strong blue-grey." },
  { name: 'Cottage Green®', hex: '#00523C', description: "Vibrant, deep green." },
  { name: 'Wallaby™', hex: '#767472', description: "Earthy, warm grey." },
  { name: 'Jasper®', hex: '#726658', description: "Solid, rocky brown." },
  { name: 'Basalt™', hex: '#747679', description: "Dark, mineral grey." },
  { name: 'Manor Red®', hex: '#5E1F1F', description: "Traditional deep red." },
  { name: 'Night Sky®', hex: '#242424', description: "Pure, neutral black." },
  { name: 'Ironstone®', hex: '#424651', description: "Deep, steely blue." },
  { name: 'Terrain®', hex: '#67473A', description: "Rich, red-earth brown." },
  { name: 'Monument®', hex: '#363737', description: "Bold, deep charcoal." },
];

const ColorChartModal: React.FC<ColorChartModalProps> = ({ isOpen, onClose }) => {
  const [activeColor, setActiveColor] = useState<typeof colors[0] | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset active color when modal closes
      setActiveColor(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col my-8 animate-fade-in-up overflow-hidden h-[85vh]">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            {activeColor && (
              <button 
                onClick={() => setActiveColor(null)}
                className="p-2 -ml-2 text-slate-400 hover:text-blue-950 hover:bg-slate-100 rounded-full transition-colors mr-2"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <div>
              <h2 className="text-2xl font-extrabold text-blue-950">
                {activeColor ? activeColor.name : 'Colorbond® Colour Chart'}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {activeColor ? 'Reviewing colour details' : 'Tap a colour to view details.'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50">
          
          {activeColor ? (
            // DETAIL VIEW (Pop up look)
            <div className="flex flex-col h-full animate-fade-in">
              <div className="flex-1 p-8 flex flex-col items-center justify-center">
                
                {/* Large Swatch Card */}
                <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all">
                  <div 
                    className="aspect-square w-full relative"
                    style={{ backgroundColor: activeColor.hex }}
                  >
                     {/* Gloss/Sheen Effect for realism */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20"></div>
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-full opacity-60"></div>
                  </div>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-extrabold text-blue-950 mb-2">{activeColor.name}</h3>
                    <p className="text-slate-500 font-medium text-lg">{activeColor.description}</p>
                    <div className="mt-6 flex justify-center">
                      <span className="px-4 py-1.5 bg-slate-100 text-slate-400 text-xs font-mono rounded-full uppercase tracking-wider">
                        {activeColor.hex}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="p-6 text-center">
                <button 
                  onClick={() => setActiveColor(null)}
                  className="text-slate-500 hover:text-blue-950 font-medium underline"
                >
                  Back to all colours
                </button>
              </div>
            </div>
          ) : (
            // GRID VIEW
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                {colors.map((color) => (
                  <button 
                    key={color.name} 
                    onClick={() => setActiveColor(color)}
                    className="group flex flex-col items-center text-center focus:outline-none"
                  >
                    {/* Square Swatch - Standalone */}
                    <div className="relative w-full aspect-square rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-out overflow-hidden bg-white">
                      <div 
                        className="w-full h-full"
                        style={{ backgroundColor: color.hex }}
                      >
                         {/* Subtle sheen */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full text-white">
                           <ZoomIn className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Separated Text Underneath */}
                    <div className="mt-4 px-2">
                      <span className="block text-sm font-bold text-slate-700 group-hover:text-blue-950 transition-colors leading-tight">
                        {color.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-16 p-4 bg-blue-100/50 rounded-xl text-sm text-blue-800 text-center max-w-2xl mx-auto border border-blue-100">
                <p><strong>Note:</strong> These are digital representations. Actual Colorbond® steel colours may vary slightly in natural light. We bring physical samples to every quote.</p>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ColorChartModal;