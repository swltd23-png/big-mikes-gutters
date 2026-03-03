import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { IMAGES } from '../src/constants/images';

interface ServicesProps {
  onOpenQuote?: () => void;
  locationName?: string;
  introContent?: string;
}

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Gutter Repairs',
    description: 'Professional gutter repairs for leaking, sagging or damaged gutters across South of Perth. We fix loose brackets, rusted sections and blocked systems before they cause costly water damage. Reliable gutter repairs restore proper drainage, protect foundations and extend gutter lifespan. Fast inspections, honest advice, durable long-lasting repair solutions guaranteed.',
    imageUrl: IMAGES.SERVICES[0].src
  },
  {
    id: '2',
    title: 'Gutter Replacement',
    description: 'Complete gutter replacement and gutter installation using genuine Colorbond steel designed for Perth conditions. We remove rusted or failing gutters and install durable, correctly aligned systems ensuring proper fall and secure fixing. Trusted gutter replacement Perth homeowners rely on, delivering long-lasting performance, improved drainage, and enhanced street appeal to your home.',
    imageUrl: IMAGES.SERVICES[1].src
  },
  {
    id: '3',
    title: 'Fascia Replacement',
    description: 'Fascia replacement strengthens your gutter system and protects roof edges from water damage. We repair or replace deteriorated fascia across South of Perth, ensuring secure gutter alignment and long-term structural support. We also supply and install genuine Colorbond gutter replacement, built for Perth conditions, improving durability, appearance, and overall drainage performance.',
    imageUrl: IMAGES.SERVICES[2].src
  },
  {
    id: '4',
    title: 'Downpipe Replacement',
    description: 'Downpipes are essential to the overall performance of your gutter system. When there are too few downpipes, or they become blocked or damaged, water cannot flow away efficiently. This can cause overflowing gutters, roof leaks, and serious structural damage during heavy rainfall. Our experienced team inspects, repairs, and advises on replacement when necessary.',
    imageUrl: IMAGES.SERVICES[3].src
  }
];

const Services: React.FC<ServicesProps> = ({ onOpenQuote, locationName = "Perth", introContent }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-green-600 font-extrabold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl font-extrabold text-blue-950 sm:text-4xl mb-6">
            {locationName === "Perth" ? "Perth’s" : `${locationName}’s`} Trusted Gutter Specialists — Gutters Built to Last
          </h3>
          <div className="mt-4 text-lg text-slate-600 leading-relaxed text-left sm:text-center">
            {introContent ? (
              introContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))
            ) : (
              <p>
                For 27 years, {locationName === "Perth" ? "Perth homeowners" : `homeowners in ${locationName}`} have trusted us for expert gutter repairs, complete gutter replacement, and premium Colorbond gutter installation. Colorbond stands up to our sun, salt, and storms—rust-resistant, fade-proof, and colour-matched to your roof in 22+ shades or colour.
                <br /><br />
                We also replace fascia and downpipes to complete your new gutter system delivering quality workmanship backed by our written warranties to Perth home owners for the past 27 years. Call now for trusted gutter repairs, replacement & installation in {locationName} WA.
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 group scroll-mt-28"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-blue-950 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={onOpenQuote}
                  className="inline-flex items-center text-green-600 text-sm font-bold hover:text-green-700 group-hover:underline bg-transparent border-none p-0 cursor-pointer"
                >
                  Get a Quote <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;