import React, { useState } from 'react';
import { MessageSquare, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { analyzeGutterIssue } from '../services/geminiService';
import { AIResponse } from '../types';

const AIConsultant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleAnalyze = async () => {
    if (!description.trim()) return;
    setLoading(true);
    const aiResult = await analyzeGutterIssue(description);
    setResult(aiResult);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L100 0 L100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-800 rounded-full mb-4 ring-2 ring-blue-700">
            <MessageSquare className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Not sure what's wrong? Ask our AI Technician.</h2>
          <p className="text-blue-100 text-lg">
            Describe the problem (e.g., "Water is spilling over the corner when it rains") and get an instant assessment.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-800 max-w-2xl mx-auto">
          {!result ? (
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700">Describe your gutter issue</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32 resize-none"
                placeholder="Type here... e.g., My gutter is hanging off the wall."
              />
              <button 
                onClick={handleAnalyze}
                disabled={loading || !description}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Analyze My Issue'}
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                <h3 className="font-bold text-xl text-blue-900">Assessment Result</h3>
                <button onClick={() => setResult(null)} className="text-sm text-gray-500 hover:text-blue-600 underline">Start Over</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-1 rounded-full ${result.urgency === 'High' || result.urgency === 'Emergency' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {result.urgency === 'High' || result.urgency === 'Emergency' ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Urgency Level</span>
                    <p className={`font-bold ${result.urgency === 'High' || result.urgency === 'Emergency' ? 'text-red-600' : 'text-green-600'}`}>
                      {result.urgency} Priority
                    </p>
                  </div>
                </div>

                <div>
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Analysis</span>
                   <p className="text-gray-800 font-medium">{result.analysis}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Recommended Service</span>
                  <p className="text-blue-900 font-bold text-lg">{result.recommendedService}</p>
                </div>

                <a href="#quote-form" className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition">
                  Book This Service Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;