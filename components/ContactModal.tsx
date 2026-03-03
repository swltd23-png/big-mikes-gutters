import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Loader2, CheckCircle2, FileText, MapPin } from 'lucide-react';
import { suggestAddresses } from '../services/geminiService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Repairs",
  "Replacement",
  "Gutters",
  "Fascia",
  "Downpipes"
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Address Autocomplete State
  const [addressQuery, setAddressQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const searchTimeoutRef = useRef<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Reset state when modal opens to ensure fresh form
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
      setFileName(null);
      setSelectedServices([]);
      setAddressQuery("");
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [isOpen]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedServices(prev => {
      if (prev.includes(service)) {
        return prev.filter(s => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressQuery(value);
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (value.length > 3) {
      setIsLoadingSuggestions(true);
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          const results = await suggestAddresses(value);
          setSuggestions(results);
          setShowSuggestions(true);
        } finally {
          setIsLoadingSuggestions(false);
        }
      }, 500);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoadingSuggestions(false);
    }
  };

  const selectAddress = (addr: string) => {
    setAddressQuery(addr);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // Add custom configuration for FormSubmit
      formData.append("_subject", `New Quote Request from ${formData.get('name') || 'Customer'}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      
      // Ensure "Services_Required" is set cleanly (spaces can sometimes cause issues in email headers/tables)
      formData.delete("Services Required"); 
      formData.append("Services_Required", selectedServices.join(", ") || "None selected");
      
      // Ensure the controlled address value is used
      formData.set("address", addressQuery);

      // CRITICAL: Manually append the file if it exists to ensure FormData captures it correctly
      // This fixes issues where 'display: none' inputs might be missed or if onChange/state sync had lag
      if (fileInputRef.current?.files?.[0]) {
        formData.set("attachment", fileInputRef.current.files[0], fileInputRef.current.files[0].name);
      } else {
        // Remove attachment key if no file to avoid empty attachment errors
        formData.delete("attachment");
      }

      // Use the AJAX endpoint with the specific email
      const response = await fetch("https://formsubmit.co/ajax/bigmikesgutter@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
            // Do NOT set Content-Type header here, let the browser set it with the boundary for multipart/form-data
        }
      });
      
      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        setIsSuccess(true);
        // Auto-close after 4 seconds
        setTimeout(() => {
          onClose();
        }, 4000);
      } else {
        console.error("Submission failed:", result);
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was a technical issue sending your quote request. Please try again or call us directly on 0451 027 310.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col my-8 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 sm:p-10">
          {/* Header Branding */}
          <div className="text-center mb-8">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-3xl font-extrabold text-blue-950 uppercase tracking-tighter">Big Mike's</span>
              <span className="text-3xl font-extrabold text-green-600 uppercase tracking-tighter">Gutters</span>
            </div>
          </div>

          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-2">
                  Get in Touch for Your Gutter Replacement or Repair
                </h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form below and we'll get back to you with a free quote.
                </p>
              </div>

              {/* Form with explicit encryption type for file uploads */}
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4" 
                encType="multipart/form-data"
                method="POST"
              >
                {/* Hidden input to prevent spam bots (honeypot) */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                {/* Disable FormSubmit Captcha */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 ml-1">Phone</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      placeholder="0400 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 relative" ref={dropdownRef}>
                    <label className="text-sm font-medium text-slate-700 ml-1">Address</label>
                    <div className="relative">
                      <input 
                        required 
                        type="text" 
                        name="address"
                        value={addressQuery}
                        onChange={handleAddressChange}
                        autoComplete="off"
                        placeholder="Start typing your address..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50 focus:bg-white"
                      />
                      {isLoadingSuggestions && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                        </div>
                      )}
                    </div>
                    {/* Autocomplete Dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                      <ul className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                        {suggestions.map((addr, index) => (
                          <li 
                            key={index}
                            onClick={() => selectAddress(addr)}
                            className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm text-slate-700 flex items-center gap-2 border-b border-slate-50 last:border-0 transition-colors"
                          >
                            <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {addr}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Services Selection */}
                <div className="space-y-2 pt-2">
                  <label className="text-sm font-medium text-slate-700 ml-1 block">
                    Services Required - Do you need Gutter Repairs or Replacement?
                  </label>
                  <p className="text-xs text-slate-500 ml-1 mb-2">
                    Simply then select what you need Gutters - Fascia or Downpipes
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {SERVICES.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`
                          flex items-center gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all border whitespace-nowrap
                          ${selectedServices.includes(service) 
                            ? 'bg-blue-950 text-white border-blue-950 shadow-md transform scale-105' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-green-400 hover:text-green-600'}
                        `}
                      >
                        <div className={`
                          w-3 h-3 rounded-full border flex items-center justify-center transition-colors
                          ${selectedServices.includes(service) ? 'border-white bg-green-500' : 'border-slate-300 bg-slate-50'}
                        `}>
                          {selectedServices.includes(service) && <div className="w-1 h-1 rounded-full bg-white" />}
                        </div>
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 ml-1">Tell us what you need?</label>
                  <textarea 
                    required 
                    name="message"
                    rows={4}
                    placeholder="Tell us about your gutter issues..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                  ></textarea>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 ml-1">Add Attachment (optional)</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 hover:border-green-400 transition-colors group"
                  >
                    <input 
                      type="file" 
                      name="attachment"
                      ref={fileInputRef} 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                    />
                    {fileName ? (
                       <div className="flex items-center text-green-600 font-medium">
                         <FileText className="w-5 h-5 mr-2" />
                         {fileName}
                       </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-green-500 mb-2 transition-colors" />
                        <span className="text-slate-500 text-sm">Drop files here or <span className="text-green-600 font-bold underline">Select files</span></span>
                        <span className="text-slate-400 text-xs mt-1">Max. file size: 20 MB.</span>
                      </>
                    )}
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center mt-4"
                >
                  {isSubmitting ? <Loader2 className="animate-spin w-6 h-6" /> : 'GET A FREE QUOTE'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Thank you for contacting Big Mike’s Gutters!
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                Your enquiry about gutter repairs, replacement, or installation has been received. Our team will get back to you promptly to assist with your Perth-area gutter needs.
              </p>
              <p className="text-sm text-slate-400 mt-4">
                This window will close automatically in a few seconds...
              </p>
              <button 
                onClick={onClose}
                className="inline-flex px-8 py-3 bg-blue-950 text-white font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-lg mt-4"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;