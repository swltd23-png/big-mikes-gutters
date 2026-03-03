import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

interface TransparencyProps {
  process?: { title: string; steps: string[] };
}

const Transparency: React.FC<TransparencyProps> = ({ process }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultSteps = [
    {
      title: "Free Gutter Inspection & Quote",
      desc: "We’ll book your inspection at the next available time that suits you. There’s no need to be home — we simply require clear access around the property.\n\nMost quotes take 30 minutes or less. We use satellite imagery for accurate measurements, then carry out a visual inspection of your gutters and fascia to assess condition, access points, and any structures like pergolas that may affect installation.\n\nClear. Accurate. No obligation."
    },
    {
      title: "We Inspect & Assess the Problem",
      desc: "Our experienced roof plumbers know exactly what to look for. We assess the condition of your gutters, fascia and downpipes, identify the root cause of the issue, and determine whether repair or replacement is the right solution.\n\nYou’ll receive a clear, detailed written quote by email outlining the recommended work. Take your time to review it. If you have questions or would like clarification, simply call us or request a callback — we’re always available to talk things through.\n\nWe believe informed customers make confident decisions. Ask anything."
    },
    {
      title: "Receive Your Clear Written Quote",
      desc: "After the inspection, we prepare a detailed written quote outlining exactly what’s required. You’ll receive it by email, along with supporting information and brochures to help you review your options properly.\n\nThere’s no pressure and no obligation. Take your time to look it over. Everything is clearly itemised so you know exactly what’s included.\n\nIf you’re ready to move forward — or just want to discuss it further — we’re only a phone call away."
    },
    {
      title: "Approve & We Schedule Your Job",
      desc: "Once you’ve reviewed your quote and are ready to move forward, simply confirm your acceptance. If you have any questions beforehand, we’re always available to talk through the details and make sure you’re completely comfortable.\n\nUpon acceptance, we’ll issue a 30% deposit invoice and confirm your chosen gutter profile and colour selections so materials can be ordered correctly. Once your deposit is received and materials are secured, we’ll provide you with a confirmed booking date and time to commence works — typically within 2–3 weeks of approval.\n\nChoosing the right company matters. We want you to feel confident and assured before proceeding, and we’re always available to answer questions, clarify details, and ensure you’re completely comfortable before works begin."
    },
    {
      title: "Job Completed. Warranty Provided.",
      desc: "On your scheduled date, our team arrives with all required materials ready for installation. Everything is installed correctly by our experienced staff, with attention to proper installation, secure fixing, and clean finishes.\n\nGutter replacement can create some temporary mess during removal and installation, but we tidy the site at the end of each day and leave your property clean once the job is complete.\n\nAfter works are finished, we’ll issue your final invoice. Once payment is received, you’ll be provided with a statement of payment along with your written workmanship warranty for complete peace of mind."
    }
  ];

  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-stretch">
          
          <div className="order-2 lg:order-1 relative w-full mt-12 lg:mt-0">
             {/* Original Rotated Background */}
             <div className="absolute -inset-4 bg-green-100 rounded-3xl transform -rotate-2 w-full h-full"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-auto lg:h-full bg-gray-100">
               <img 
                 src={IMAGES.HOW_IT_WORKS.src}
                 alt={IMAGES.HOW_IT_WORKS.alt}
                 className="w-full h-full object-cover object-center"
                 loading="lazy"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950/90 to-transparent p-8">
                 <div className="flex items-center gap-3 text-white">
                    <Search className="w-6 h-6 text-green-400" />
                    <p className="font-bold text-lg">Thorough Inspections</p>
                 </div>
                 <p className="text-gray-200 text-sm mt-1">We check downpipes, valleys, and fascia boards too.</p>
               </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 w-full">
             <h2 className="text-blue-950 font-bold tracking-wide uppercase text-sm mb-3">Process</h2>
             <h2 className="text-4xl font-extrabold text-blue-950 mb-6">
               {process ? process.title : "How It Works"}
             </h2>
             <p className="text-xl text-blue-950 mb-6 leading-relaxed">
               Simple. Clear. Step-by-step.
               <br />
               Never replaced gutters before? No problem. Here’s exactly what happens from your free inspection through to completion and warranty — so you know what to expect at every stage.
             </p>
             
             <div className="space-y-4">
                {process ? (
                  process.steps.map((step, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <span className="font-bold text-lg text-blue-950">{step}</span>
                    </div>
                  ))
                ) : (
                  defaultSteps.map((step, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                      >
                        <span className="font-bold text-lg text-blue-950 pr-4 group-hover:text-green-600 transition-colors">
                          {step.title}
                        </span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-colors group-hover:bg-green-50`}>
                          <ChevronDown 
                            className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-green-600' : ''}`}
                          />
                        </div>
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-gray-50 mt-2 whitespace-pre-line">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Transparency;