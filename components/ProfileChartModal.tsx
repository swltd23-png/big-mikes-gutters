import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ProfileDiagram from './ProfileDiagram';

interface ProfileChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const profiles = [
  {
    title: 'Longline Gutter',
    description: "The Longline gutter profile delivers a sleek and durable solution for gutter replacement and repair projects. Featuring a high capacity 6,319mm² cross-sectional area (125mm x 104mm), its streamlined shape complements tile and metal roofing styles while improving water flow performance. Designed for strength and longevity, Longline gutters provide reliable drainage efficiency and enhance the clean, modern appearance of your home."
  },
  {
    title: 'Ovolo Gutter',
    description: "The Ovolo gutter profile combines traditional style with dependable performance for gutter replacement or repair applications. Its distinctive curved front suits a variety of roofing materials, maintaining architectural character while supporting effective water drainage. Ovolo gutters restore functionality, improve runoff control, and add a refined finish to your home’s exterior."
  },
  {
    title: 'Patio Gutter',
    description: "Patio gutters are a popular solution for pergolas, patios, sheds, and outdoor living areas. Their wide front design manages heavy rainfall efficiently while providing convenient access for maintenance and cleaning. This profile creates a clean, finished edge, enhancing the overall appearance of your structure while delivering dependable drainage performance and long-term durability."
  },
  {
    title: 'Quarter Round Gutter',
    description: "The Quarter Round gutter profile is engineered for durability and higher water capacity applications. Manufactured from heavier gauge steel, it efficiently manages increased roof runoff while maintaining structural strength. Its smooth curved design enhances visual appeal, delivering dependable drainage performance and a timeless architectural finish suited to modern and classic homes."
  },
  {
    title: 'Slotted Gutter',
    description: "Slotted gutter profiles are designed to improve overflow control during heavy rainfall. Featuring precision slots along the front and beneath the rear edge, they help reduce eave flooding and manage excess water effectively. Available in Longline, Ovolo, Settlers, and Patio styles, slotted gutters enhance drainage performance and reliability."
  },
  {
    title: 'Rebate Fascia',
    description: "Rebate fascia plays an important role in supporting your gutter system and completing the roofline finish. Upgrading fascia during a gutter project can significantly improve appearance without adding major cost. Because fascia cannot be replaced once gutters are installed, planning ahead ensures long-term performance and a clean, professional result."
  },
  {
    title: 'Rectangle Down Pipes',
    description: "Rectangular downpipes are a reliable and widely used solution for efficient stormwater management. Available in multiple sizes to suit different gutter profiles, they ensure consistent water flow during heavy rainfall. Their clean lines complement modern exteriors while delivering dependable drainage performance, making them a practical choice for gutter replacement or repair projects."
  },
  {
    title: 'Round Down Pipes',
    description: "Round downpipes provide a refined finish while delivering reliable stormwater performance. Their smooth cylindrical design pairs seamlessly with modern gutter systems and contemporary architecture. Suitable for wall-mounted or offset installation, round downpipes offer flexible positioning options while maintaining efficient water flow, enhancing both drainage function and the overall exterior appearance of your home."
  }
];

const ProfileChartModal: React.FC<ProfileChartModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col my-8 animate-fade-in-up overflow-hidden max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-extrabold text-blue-950">Gutter Profiles</h2>
            <p className="text-slate-500 text-sm mt-1">
              Learning about your gutters - the different gutter profiles available.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {profiles.map((profile, index) => {
              const hasPerspective = ['Longline Gutter', 'Ovolo Gutter', 'Patio Gutter', 'Quarter Round Gutter'].includes(profile.title);
              
              return (
                <div 
                  key={index} 
                  className="flex flex-col p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all bg-white h-full"
                >
                  {/* Text Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-blue-950 mb-3">{profile.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {profile.description}
                    </p>
                  </div>

                  {/* Images Container */}
                  <div className={`grid ${hasPerspective ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mt-auto`}>
                    {/* Cross Section Diagram */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 bg-slate-50/50 flex items-center justify-center p-2">
                        <ProfileDiagram title={profile.title} view="cross-section" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 mt-2">Cross Section</span>
                    </div>

                    {/* Perspective Image (Conditional) */}
                    {hasPerspective && (
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 bg-slate-50/50 flex items-center justify-center p-2">
                          <ProfileDiagram title={profile.title} view="perspective" />
                        </div>
                        <span className="text-xs font-medium text-slate-400 mt-2">Perspective</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Footer Action */}
        <div className="p-6 border-t border-gray-100 bg-slate-50 flex justify-center sticky bottom-0 z-10">
            <button 
                onClick={onClose}
                className="px-8 py-3 bg-blue-950 text-white font-bold rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20"
            >
                Close Profiles
            </button>
        </div>

      </div>
    </div>
  );
};

export default ProfileChartModal;