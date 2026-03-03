import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import ProductOptions from './ProductOptions';
import WhyChooseUs from './WhyChooseUs';
import Transparency from './Transparency'; // Serves as "How It Works"
import FAQ from './FAQ';
import CallToAction from './CallToAction';
import WorkGallery from './WorkGallery';
import Footer from './Footer';
import ContactModal from './ContactModal';
import ColorChartModal from './ColorChartModal';
import ProfileChartModal from './ProfileChartModal';
import VoiceAssistant from './VoiceAssistant';
import { LocationConfig, LOCATIONS } from '../src/constants/locations';
import { ServiceConfig, SERVICES } from '../src/constants/services';

interface LandingPageProps {
  location?: LocationConfig;
  service?: ServiceConfig;
}

const LandingPage: React.FC<LandingPageProps> = ({ location, service }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);

  const openQuoteModal = () => setIsContactModalOpen(true);
  const openColorModal = () => setIsColorModalOpen(true);
  const openProfileModal = () => setIsProfileModalOpen(true);
  const openVoiceAssistant = () => setIsVoiceAssistantOpen(true);

  // Default values if no location is provided (Perth)
  // We explicitly look for 'perth' and 'gutter-repairs' to ensure the root path / 
  // loads the full Perth Gutter Repairs experience.
  const defaultLocation = LOCATIONS.find(l => l.slug === 'perth') || LOCATIONS[0];
  const defaultService = SERVICES.find(s => s.slug === 'gutter-repairs') || SERVICES[0];

  const activeLocation = location || defaultLocation;
  const activeService = service || defaultService;

  const locationName = activeLocation?.name || "Perth";
  const locationPostcode = activeLocation?.postcode || "6000";
  const serviceName = activeService?.name || "Gutter Repairs";

  // Helper to format strings
  const formatString = (str?: string) => {
    if (!str) return undefined;
    return str
      .replace(/{suburb}/g, locationName)
      .replace(/{service}/g, serviceName)
      .replace(/{service_lower}/g, serviceName.toLowerCase());
  };

  const heroTitle = formatString(activeService?.heroTitleFormat);
  const heroParagraph = formatString(activeService?.heroParagraphFormat);
  const introContent = formatString(activeService?.introContent);

  const tagLine = activeService.slug === 'gutter-repairs' 
    ? `Gutter Repairs, Gutter Replacement & Installation in ${locationName} WA ${locationPostcode}`
    : `${serviceName} in ${locationName} WA ${locationPostcode}`;

  const formatBenefits = (benefits?: { title: string; content: string }[]) => {
    if (!benefits) return undefined;
    return benefits.map(b => ({
      title: formatString(b.title) || b.title,
      content: formatString(b.content) || b.content
    }));
  };

  const formatProcess = (process?: { title: string; steps: string[] }) => {
    if (!process) return undefined;
    return {
      title: formatString(process.title) || process.title,
      steps: process.steps.map(s => formatString(s) || s)
    };
  };

  const formatFaqs = (faqs?: { question: string; answer: string }[]) => {
    if (!faqs) return undefined;
    return faqs.map(f => ({
      question: formatString(f.question) || f.question,
      answer: formatString(f.answer) || f.answer
    }));
  };

  const formatCta = (cta?: { headline: string; text: string }) => {
    if (!cta) return undefined;
    return {
      headline: formatString(cta.headline) || cta.headline,
      text: formatString(cta.text) || cta.text
    };
  };

  const benefits = formatBenefits(activeService?.benefits);
  const process = formatProcess(activeService?.process);
  const faqs = formatFaqs(activeService?.faqs);
  const cta = formatCta(activeService?.cta);

  // Update document title and meta tags
  useEffect(() => {
    if (activeLocation && activeService) {
      const pageTitle = activeService.pageTitleFormat
        .replace('{service}', activeService.name)
        .replace('{suburb}', activeLocation.name);
      
      const metaDescription = activeService.metaDescriptionFormat
        .replace('{service}', activeService.name)
        .replace('{service_lower}', activeService.name.toLowerCase())
        .replace('{suburb}', activeLocation.name);

      document.title = pageTitle;
      
      // Update meta description
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) {
        metaDescEl.setAttribute('content', metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = metaDescription;
        document.head.appendChild(meta);
      }
    } else {
      // Reset to default if needed, or keep initial index.html values
      document.title = "Gutter Repairs Perth | Replacement & Installation";
    }
  }, [activeLocation, activeService]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      <Navbar onOpenQuote={openQuoteModal} onOpenVoiceAssistant={openVoiceAssistant} />
      <main>
        {/* 1. Hero (Service + Location + CTA) */}
        <Hero 
          onOpenQuote={openQuoteModal} 
          locationName={locationName}
          locationPostcode={locationPostcode}
          serviceName={serviceName}
          heroTitle={heroTitle}
          heroParagraph={heroParagraph}
          tagLine={tagLine}
        />

        {/* 2. Services We Offer */}
        <Services 
          onOpenQuote={openQuoteModal} 
          locationName={locationName}
          introContent={introContent}
        />
        
        {/* 2.5. Product Options (Colours & Profiles) */}
        <ProductOptions 
          onOpenColorModal={openColorModal}
          onOpenProfileModal={openProfileModal}
          locationName={locationName}
        />
        
        {/* 3. Why Choose Us (Generic Trust Signals) */}
        <WhyChooseUs />
        
        {/* 4. How It Works (Generic Workflow) */}
        <Transparency />
        
        {/* 5. FAQ (Generic + Service Specific) */}
        <FAQ onOpenQuote={openQuoteModal} faqs={faqs} />

        {/* 5.5. Call To Action (Full Screen) */}
        <div id="contact">
          <CallToAction onOpenQuote={openQuoteModal} cta={cta} />
        </div>
        
        {/* 6. Gallery (3 images only) */}
        <WorkGallery />
      </main>
      <Footer 
        onOpenQuote={openQuoteModal}
        onOpenColorModal={openColorModal}
        onOpenProfileModal={openProfileModal}
      />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <ColorChartModal 
        isOpen={isColorModalOpen} 
        onClose={() => setIsColorModalOpen(false)} 
      />

      <ProfileChartModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
      
      <VoiceAssistant 
        isOpen={isVoiceAssistantOpen} 
        onClose={() => setIsVoiceAssistantOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;
