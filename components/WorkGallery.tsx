import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../src/constants/images';

const workItems = [
  {
    id: 1,
    title: "Full Gutter Replacement",
    description: "Colorbond Monument installation",
    location: "Waikiki",
    img: IMAGES.GALLERY[0].src, 
    colSpanDesktop: "lg:col-span-2",
    colSpanTablet: "md:col-span-1"
  },
  {
    id: 2,
    title: "Downpipe Upgrade",
    description: "High capacity PVC upgrade",
    location: "Rockingham",
    img: IMAGES.GALLERY[1].src,
    colSpanDesktop: "lg:col-span-2",
    colSpanTablet: "md:col-span-1"
  },
  {
    id: 3,
    title: "Fascia & Gutter Combo",
    description: "Complete eaves restoration",
    location: "Bibra Lake",
    img: IMAGES.GALLERY[2].src,
    colSpanDesktop: "lg:col-span-2",
    colSpanTablet: "md:col-span-1"
  },
  {
    id: 4,
    title: "Commercial Box Gutters",
    description: "Large scale replacement",
    location: "Leeming",
    img: IMAGES.GALLERY[3].src,
    colSpanDesktop: "lg:col-span-3", // Wider on desktop
    colSpanTablet: "md:col-span-1"
  },
  {
    id: 5,
    title: "Residential Repair",
    description: "Leak fixing and alignment",
    location: "Success",
    img: IMAGES.GALLERY[4].src,
    colSpanDesktop: "lg:col-span-3", // Wider on desktop
    colSpanTablet: "md:col-span-2" // Full width on tablet to close the row
  }
];

const testimonials = [
  {
    id: 1,
    text: "We had a full gutter replacement done on our home in Jandakot. The team was respectful of the property, completed the work on time, and the new Colorbond profile looks amazing. It's rare to find such professional tradesmen these days.",
    name: "Sarah Jenkins",
    suburb: "Jandakot 6164"
  },
  {
    id: 2,
    text: "Big Mike's team handled our roof plumbing repairs in Beeliar with total professionalism. They identified the cause of our leaks immediately, fixed the box gutters, and cleaned up all the mess afterwards. Great value for money and a job well done.",
    name: "David Thompson",
    suburb: "Beeliar 6164"
  },
  {
    id: 3,
    text: "I can't recommend them enough for gutter installation. We built a new patio in Kardinya and needed matching gutters. They provided excellent advice on profiles, matched the colour perfectly, and the installation was seamless. Very happy with the result.",
    name: "Jessica Lee",
    suburb: "Kardinya 6163"
  },
  {
    id: 4,
    text: "We hired them to replace old rusted downpipes and fascia at our Leeming rental property. The quote was detailed, the price was competitive, and the communication was excellent throughout. The new downpipes work perfectly and have improved the property's drainage significantly.",
    name: "Michael Stevens",
    suburb: "Leeming 6149"
  },
  {
    id: 5,
    text: "After years of blocked gutters, we had gutter guards installed at our Willetton property. The team explained the options clearly and did a fantastic job fitting them. No more overflowing gutters during heavy rain! A friendly, honest, and reliable local service.",
    name: "Emma Wilson",
    suburb: "Willetton 6155"
  },
  {
    id: 6,
    text: "Excellent quality work on our gutter replacement in Thornlie. The team arrived promptly, worked hard all day, and the attention to detail was impressive. They even fixed a few broken tiles while they were up there. Five-star service all round.",
    name: "Robert Brown",
    suburb: "Thornlie 6108"
  },
  {
    id: 7,
    text: "We recently had gutter repairs and fascia replacement completed at our home in Canning Vale WA 6155. The team identified problem areas quickly and recommended a practical solution. The new Colorbond gutter replacement has completely improved drainage. Honest advice, competitive pricing, and professional workmanship throughout.",
    name: "Daniel Mcmanis",
    suburb: "Canning Vale WA 6155"
  },
  {
    id: 8,
    text: "Big Mike’s Gutters carried out a full gutter replacement and new gutter installation at our Seville Grove WA 6112 property. The crew worked efficiently and ensured the gutters were installed with the correct fall. Everything looks fantastic, and we’ve had no overflow issues since.",
    name: "Rebecca Thompson",
    suburb: "Seville Grove WA 6112"
  },
  {
    id: 9,
    text: "We organised fascia repair and replacement of worn down pipes at our Camillo WA 6111 home. The new installation has strengthened the gutter system and improved overall performance. Communication was clear, the pricing competitive, and the final result looks clean and professionally finished.",
    name: "Mark Lawson",
    suburb: "Camillo WA 6111"
  },
  {
    id: 10,
    text: "Our Kwinana WA 6167 property needed urgent gutter repairs and Colorbond gutters replacement due to rust and sagging sections. The team delivered a durable solution and ensured correct fall for proper drainage. Professional, punctual, and very easy to deal with from start to finish.",
    name: "Natalie Parker",
    suburb: "Kwinana WA 6167"
  },
  {
    id: 11,
    text: "We booked gutter replacement and stormwater pipe upgrades at our Rockingham WA 6168 home. The new system handles heavy rainfall perfectly. The team was respectful of our property, worked efficiently, and left everything clean and tidy. High-quality installation and genuine tradesmanship.",
    name: "Christopher Harris",
    suburb: "Rockingham WA 6168"
  },
  {
    id: 12,
    text: "After years of aging gutters, we arranged gutter installation and fascia replacement at our Southern River WA 6110 property. The transformation is impressive. Strong, well-aligned gutters and improved drainage performance. Friendly team, fair pricing, and excellent attention to detail throughout the project.",
    name: "Amanda Sullivan",
    suburb: "Southern River WA 6110"
  }
];

const WorkGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure currentIndex is valid when itemsPerPage changes
  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, testimonials.length]);

  const next = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
    if (currentIndex < maxIndex) {
      // Move by itemsPerPage, but don't exceed maxIndex
      setCurrentIndex(prev => Math.min(prev + itemsPerPage, maxIndex));
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      // Move back by itemsPerPage, but don't go below 0
      setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0));
    }
  };

  const goToPage = (pageIndex: number) => {
    // Calculate target index based on page
    // Ensure we don't exceed max possible index
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
    const targetIndex = pageIndex * itemsPerPage;
    setCurrentIndex(Math.min(targetIndex, maxIndex));
  };

  // Calculate total pages based on items per page
  // This is an approximation for the dots. 
  // If we have 6 items and 3 per page -> 2 pages.
  // If we have 6 items and 2 per page -> 3 pages.
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Determine current page for dots active state
  // We use Math.ceil to handle cases where we might be "between" pages due to clamping, 
  // though with this logic we should align to pages mostly.
  const currentPage = Math.ceil(currentIndex / itemsPerPage);

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex >= testimonials.length - itemsPerPage;

  return (
    <section id="work" className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
            Real jobs. Real results.
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at the team in action. No mess, no fuss, just a great job.
          </p>
        </div>

        {/* 
           Grid Layout Strategy:
           Mobile: 1 column
           Tablet: 2 columns
           Desktop: 6 columns (to allow 3 on top, 2 on bottom)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {workItems.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg bg-gray-200 h-64 sm:h-80 ${item.colSpanTablet} ${item.colSpanDesktop}`}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay - Gradient appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.location}
                </p>
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
                <p className="text-gray-300 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 opacity-0 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-950">What our clients say</h3>
          </div>

          <div className="relative group px-0 md:px-12">
            {/* Left Button */}
            <button 
              onClick={prev}
              disabled={isFirstPage}
              className={`absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 md:-translate-x-6 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center ${isFirstPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col h-full relative">
                      {/* Text Box */}
                      <div className="bg-slate-50 p-6 rounded-xl mb-6 flex-grow relative">
                        {/* Quote Icon Decoration */}
                        <div className="absolute -top-3 -left-2 text-[#003056] transform -scale-x-100 opacity-20">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.925 14.929 15.087C15.537 14.249 16.425 13.525 17.593 12.915V11.235C16.273 11.235 15.269 10.92 14.581 10.29C13.893 9.65999 13.549 8.61 13.549 7.13999V3H21.017V10.29C21.017 12.684 20.488 14.67 19.43 16.248C18.372 17.826 16.568 19.41 14.017 21ZM5.01697 21L5.01697 18C5.01697 16.896 5.32097 15.925 5.92897 15.087C6.53697 14.249 7.42497 13.525 8.59297 12.915V11.235C7.27297 11.235 6.26897 10.92 5.58097 10.29C4.89297 9.65999 4.54897 8.61 4.54897 7.13999V3H12.017V10.29C12.017 12.684 11.488 14.67 10.43 16.248C9.37297 17.826 7.56897 19.41 5.01697 21Z" />
                          </svg>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic relative z-10">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between px-2">
                        {/* Stars Left */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                          ))}
                        </div>
                        
                        {/* Name Right */}
                        <div className="text-right">
                          <p className="font-bold text-blue-950 text-sm">{testimonial.name}</p>
                          <p className="text-xs text-slate-400">{testimonial.suburb}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button 
              onClick={next}
              disabled={isLastPage}
              className={`absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-6 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center ${isLastPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentPage ? 'bg-blue-600 w-6' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;