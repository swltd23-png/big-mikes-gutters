import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-14 h-14 text-green-600" />,
    title: "27+ Years Roof Plumbing Experience",
    desc: "Local. Proven. Trusted across Perth’s south. A family business working with mates delivering nothing but quality services that customers happily recommend to their friends."
  },
  {
    icon: <Clock className="w-14 h-14 text-green-600" />,
    title: "Free Inspections In 30 Mins Or Less",
    desc: "Free onsite inspections completed in 30 minutes or less. Quotes are written, detailed, and emailed to you with colour charts so you can review everything before deciding."
  },
  {
    icon: <CheckCircle2 className="w-14 h-14 text-green-600" />,
    title: "Quality Workmanship — No Shortcuts",
    desc: "We install new gutters correctly using genuine Colorbond gutter materials. Every job is completed to industry standards, clean finishes, and careful attention to detail — Gutters built to last."
  },
  {
    icon: <ShieldCheck className="w-14 h-14 text-green-600" />,
    title: "Written Warranty on All Works",
    desc: "All gutter, fascia, and downpipe installations include a written workmanship warranty. Once complete, you receive documentation for confidence, protection, and long-term peace of mind."
  }
];

interface WhyChooseUsProps {
  benefits?: { title: string; content: string }[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ benefits }) => {
  const displayFeatures = benefits ? benefits.map((b, i) => ({
    icon: features[i % features.length].icon,
    title: b.title,
    desc: b.content
  })) : features;

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs - lighter for light background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Why Us?</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-950">
            Why locals choose Big Mike's Gutters
          </h2>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            We keep it simple. Quality workmanship, fair prices, and a family friendly team you can trust around your home. No Mess, No Fuss, Just A Great Job...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden text-center">
               {/* Hover Accent Line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
               
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-950">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;