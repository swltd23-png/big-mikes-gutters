import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, VolumeX, X } from 'lucide-react';

const SYSTEM_PROMPT = `You are the virtual assistant for Big Mike’s Gutters in South of Perth, WA.

Business Facts:
- 27+ years experience
- Services: gutter repairs, gutter replacement, gutter installation, fascia replacement, downpipe replacement, Colorbond gutters
- Free 30-minute on-site quotes
- No need to be home (side gate access required)
- Written workmanship warranty
- Work typically starts within 2 weeks of quote acceptance
- Tagline: No mess, no fuss, just a great job.

Rules:
- Keep answers under 100 words
- Be professional and clear
- Never mention AI
- If asked about pricing: say we provide free on-site quotes
- If booking intent is detected, respond:
  “Would you like me to book a free gutter inspection?”

If the user says yes:
Respond:
“Great. Please complete the quote form below and our team will confirm your inspection shortly.”`;

interface VoiceAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ isOpen, onClose }) => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingIntent, setBookingIntent] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTranscript('');
      setResponse('');
      setError(null);
      setBookingIntent(false);
      // Removed startListening() to prevent auto-start
    } else {
      stopListening();
      stopSpeaking();
    }
  }, [isOpen]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.lang = 'en-AU';

      recognitionRef.current.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        recognitionRef.current.stop(); // Stop immediately after capturing result
        handleGeminiRequest(text);
      };

      recognitionRef.current.onspeechend = () => {
        recognitionRef.current.stop();
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setListening(false);
        if (event.error === 'not-allowed') {
          setError('Microphone access is required to use voice assistant.');
        } else {
          // Don't show generic error immediately to avoid flickering on silence
          // setError('Error listening. Please try again.');
        }
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };
    } else {
      setError('Voice recognition not supported in this browser.');
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const startListening = () => {
    setError(null);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch (e) {
        console.error("Error starting recognition:", e);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      setTranscript('');
      setResponse('');
      startListening();
    }
  };

  const speakResponse = (text: string) => {
    if (!synthRef.current) return;
    
    // Cancel any current speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-AU';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setSpeaking(false);
    }
  };

  const handleGeminiRequest = async (userText: string) => {
    setLoading(true);
    
    // Check for booking confirmation if intent was previously set
    if (bookingIntent) {
      const lowerText = userText.toLowerCase();
      if (lowerText.includes('yes') || lowerText.includes('yeah') || lowerText.includes('please') || lowerText.includes('book it')) {
        const confirmMsg = "Great. Please complete the quote form below and our team will confirm your inspection shortly.";
        setResponse(confirmMsg);
        speakResponse(confirmMsg);
        setLoading(false);
        setBookingIntent(false);
        
        // Scroll to contact form
        setTimeout(() => {
          onClose(); // Close modal before scrolling
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1500);
        return;
      }
    }

    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error('API Key missing');
      }

      const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userText }]
            }
          ],
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          }
        })
      });

      if (!apiResponse.ok) {
        throw new Error('Gemini API request failed');
      }

      const data = await apiResponse.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I didn't catch that. Could you please repeat?";
      
      setResponse(aiText);
      speakResponse(aiText);

      if (aiText.includes("Would you like me to book a free gutter inspection?")) {
        setBookingIntent(true);
      } else {
        setBookingIntent(false);
      }

    } catch (err) {
      console.error(err);
      const fallback = "I'm currently having trouble connecting. Please try again or give us a call.";
      setResponse(fallback);
      speakResponse(fallback);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-[#003056] p-4 flex items-center justify-between">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Mic className="w-5 h-5 text-[#5dae58]" />
            Voice Assistant
          </h3>
          <div className="flex items-center gap-2">
            {speaking && (
              <button onClick={stopSpeaking} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors" title="Stop speaking">
                <VolumeX className="w-5 h-5" />
              </button>
            )}
            <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div className="p-6 flex flex-col items-center min-h-[300px]">
          
          {error ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4">
               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                 <MicOff className="w-8 h-8 text-red-500" />
               </div>
               <p className="text-red-600 font-medium">{error}</p>
               <button 
                 onClick={onClose}
                 className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
               >
                 Close
               </button>
            </div>
          ) : (
            <>
              {/* Conversation Area */}
              <div className="w-full flex-1 space-y-4 mb-6 overflow-y-auto max-h-[300px] px-1">
                {transcript && (
                  <div className="flex justify-end">
                    <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                      <p className="text-sm">{transcript}</p>
                    </div>
                  </div>
                )}
                
                {loading && (
                  <div className="flex justify-start">
                     <div className="flex items-center gap-2 text-slate-500 text-sm bg-blue-50 px-4 py-2 rounded-full">
                        <Loader2 className="w-4 h-4 animate-spin text-[#003056]" />
                        Thinking...
                     </div>
                  </div>
                )}

                {response && !loading && (
                  <div className="flex justify-start">
                    <div className="bg-blue-50 text-[#003056] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] border border-blue-100 shadow-sm">
                      <p className="text-sm leading-relaxed">{response}</p>
                    </div>
                  </div>
                )}
                
                {!transcript && !response && !loading && (
                   <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 mt-8">
                      <p>Go ahead, I'm listening...</p>
                   </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-3 mt-auto">
                <button
                  onClick={toggleListening}
                  disabled={loading}
                  className={`
                    relative group flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300
                    ${listening 
                      ? 'bg-red-500 shadow-lg shadow-red-500/30 animate-pulse scale-110' 
                      : 'bg-[#003056] hover:bg-[#002040] shadow-xl shadow-blue-900/20 hover:scale-105'
                    }
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {listening ? (
                    <div className="flex gap-1 items-center justify-center h-4">
                       <div className="w-1 h-4 bg-white rounded-full animate-[bounce_1s_infinite_0ms]"></div>
                       <div className="w-1 h-6 bg-white rounded-full animate-[bounce_1s_infinite_200ms]"></div>
                       <div className="w-1 h-4 bg-white rounded-full animate-[bounce_1s_infinite_400ms]"></div>
                    </div>
                  ) : (
                    <Mic className="w-8 h-8 text-white" />
                  )}
                </button>
                <p className="text-slate-400 text-xs font-medium">
                  {listening ? 'Listening...' : 'Tap to speak'}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
