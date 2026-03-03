import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Are quotes free?",
    answer: "Yes — all quotes are 100% free with no obligation.\n\nSimply contact us and let us know what you’re looking to have done. We’ll provide a time and date to attend your property for inspection. Most quotes take 30 minutes or less. We use satellite imagery for accurate measurements and only need to visually inspect areas that can’t be seen from above.\n\nYou don’t need to be home, as long as we have clear access around the property, including the rear. If you prefer to be present, please allow around 30 minutes for the appointment.\n\nWe quote Monday to Friday, 8:00am – 4:00pm (closed weekends and public holidays)."
  },
  {
    question: "Do you offer online estimates?",
    answer: "Yes — we can provide an online estimate if you’re short on time.\n\nSimply submit your details and send a few clear photos of your gutters and downpipes, along with the number of downpipes on the property. We use satellite imagery to measure your roof, so colours aren’t important at this stage.\n\nThere’s no pressure — if the estimate suits you, we’ll arrange a site visit to complete a final inspection and confirm measurements before proceeding."
  },
  {
    question: "Do I need to be home?",
    answer: "No — most of our customers aren’t home during the inspection.\n\nAs long as we have clear access around the property, including the rear, we can complete your quote without you being there. If there are locked gates or pets on site, please let us know beforehand so we can plan accordingly.\n\nIf you prefer to be home, just allow around 30 minutes for the appointment."
  },

  {
    question: "What areas do you service?",
    answer: "We service all suburbs south of the river across Perth — down to Rockingham and surrounding coastal areas.\n\nOur primary service areas include Rockingham, Waikiki, Cockburn Central, Bibra Lake, Beeliar, Success, Atwell, Hammond Park, Aubin Grove, Jandakot, Canning Vale, Booragoon, Bull Creek, Leeming, Murdoch, Kardinya, Thornlie, Gosnells, Kelmscott and Armadale — plus surrounding suburbs within those regions.\n\nFor complete gutter replacement projects, we can also assist north of the river. However, for smaller repair work, we recommend engaging a local tradesperson in your area to keep your costs down."
  },
  {
    question: "Do you do double storey homes?",
    answer: "Yes — but it depends on safe access.\n\nIf the gutters can be safely reached from a lower roof level, we can usually complete the work without additional equipment. If scaffolding is required, this can sometimes exceed the cost of the gutter replacement itself.\n\nAll height work must comply with WorkSafe WA regulations. If needed, we can recommend trusted scaffolding companies for you to engage directly, or organise it on your behalf at additional cost.\n\nWe’ll always inspect first and clearly advise what’s required before providing your quote."
  },
  {
    question: "Do you require a deposit?",
    answer: "Yes — we require a 30% deposit once you accept your quote.\n\nAfter acceptance, we’ll issue your deposit invoice. Once received, we confirm your selected colours and profiles, place your material order, and secure your installation date.\n\nAll materials are delivered to site on the day of installation. We remove and dispose of all old guttering and waste, leaving your property clean and tidy once the job is complete."
  },
  {
    question: "What warranties do you offer?",
    answer: "We provide a 12-month leak warranty on all gutter repairs and replacements. If an issue is going to appear, it usually shows up within the first few rains — and if it does, we come back and fix it. Simple.\n\nFull gutter replacement also includes a 10-year workmanship warranty. We build gutter systems to perform properly and, more importantly, to last.\n\nWe only install genuine BlueScope Colorbond® steel products, which come with up to a 20-year manufacturer’s material warranty direct from Colorbond."
  },
  {
    question: "When can you start?",
    answer: "Once your deposit is received and colours confirmed, we place your material order and secure your installation date. Your booking details are sent by email or text for confirmation.\n\nMost projects are scheduled within 2–3 weeks of acceptance, depending on workload, material supply, and weather conditions — particularly during the wetter months.\n\nAfter the job is completed, we issue your final invoice. Once payment is received, you’ll be provided with a paid-in-full receipt and your written warranty documentation."
  },

];

interface FAQProps {
  onOpenQuote: () => void;
  faqs?: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ onOpenQuote, faqs: serviceFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const allFaqs = serviceFaqs ? [...serviceFaqs, ...faqs] : faqs;

  const midPoint = Math.ceil(allFaqs.length / 2);
  const leftFaqs = allFaqs.slice(0, midPoint);
  const rightFaqs = allFaqs.slice(midPoint);

  const renderFaq = (faq: { question: string; answer: string }, index: number) => (
    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <span className="font-bold text-lg text-blue-950 pr-4">{faq.question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-colors group-hover:bg-green-50`}>
          {openIndex === index ? (
             <ChevronDown className="w-5 h-5 text-green-600 transform rotate-180 transition-transform duration-300" />
          ) : (
             <ChevronDown className="w-5 h-5 text-slate-600 transition-transform duration-300" />
          )}
        </div>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-gray-50 mt-2 whitespace-pre-line">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <section className="pt-8 lg:pt-12 pb-16 lg:pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-950">Common Questions</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16 items-start">
          <div className="flex-1 space-y-6 w-full">
            {leftFaqs.map((faq, index) => renderFaq(faq, index))}
          </div>
          <div className="flex-1 space-y-6 w-full">
            {rightFaqs.map((faq, index) => renderFaq(faq, index + midPoint))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
