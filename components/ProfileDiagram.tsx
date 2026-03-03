import React from 'react';

const ProfileDiagram = ({ title, view = 'cross-section' }: { title: string, view?: 'cross-section' | 'perspective' }) => {
  const getPath = () => {
    switch (title) {
      case 'Longline Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="longlineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                <linearGradient id="longlineInside" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
              </defs>
              
              {/* Inside Back Wall */}
              <path d="M80 30 L190 10 L190 70 L100 90" fill="#cbd5e1" stroke="none" />
              
              {/* Inside Bottom */}
              <path d="M60 90 L100 90 L190 70 L150 70" fill="#e2e8f0" stroke="none" />
              
              {/* Back Wall Top Edge */}
              <line x1="80" y1="30" x2="190" y2="10" stroke="#64748b" strokeWidth="0.5" />

              {/* Front Face Surface */}
              <path d="M60 90 L40 30 L150 10 L170 70 Z" fill="url(#longlineGrad)" stroke="#334155" strokeWidth="0.5" />
              
              {/* Ribs on Front Face - Clean Lines */}
              <line x1="55" y1="75" x2="165" y2="55" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.4" />
              <line x1="50" y1="60" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.4" />
              <line x1="45" y1="45" x2="155" y2="25" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.4" />
              
              {/* Top Lip on Front Face */}
              <path d="M40 30 L45 30 L155 10 L150 10 Z" fill="#475569" stroke="none" />
              
               {/* End Cap (Left Side - Thickness) */}
               <path d="M40 30 L60 90 L100 90 L100 30" fill="none" stroke="#334155" strokeWidth="1" />
               <path d="M40 30 L42 30 L62 90 L60 90 Z" fill="#334155" />
            </g>
          );
        }
        // Cross Section - Exact Match to New Image
        return (
          <g>
            {/* Shape Fill */}
            <path d="M60 20 L70 20 L90 100 L160 100 L160 40 L60 40 Z" fill="#f1f5f9" stroke="none" opacity="0" /> 
            {/* Note: The image shows an open shape, not filled. I'll draw the outline exactly. */}
            
            {/* Main Profile Line */}
            <path d="M60 20 L70 20 L90 100 L160 100 L160 40 L60 40" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* The image shows the profile line going:
                Start top left hook -> down angled front -> bottom flat -> back vertical wall -> top back edge
            */}
            <path d="M65 25 L60 25 L60 30 L85 110 L165 110 L165 40 L65 40" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Ribs on angled front */}
            <path d="M72 50 L74 50" stroke="#1e293b" strokeWidth="1" />
            <path d="M78 70 L80 70" stroke="#1e293b" strokeWidth="1" />
            
            {/* Dimensions */}
            {/* Height 104 (Left) */}
            <line x1="45" y1="25" x2="45" y2="110" stroke="#1e293b" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <line x1="40" y1="25" x2="60" y2="25" stroke="#1e293b" strokeWidth="0.5" />
            <line x1="40" y1="110" x2="85" y2="110" stroke="#1e293b" strokeWidth="0.5" />
            <text x="40" y="70" textAnchor="end" fontSize="12" fill="#1e293b" fontFamily="sans-serif">104</text>
            
            {/* Width 125 (Bottom) */}
            <line x1="65" y1="125" x2="165" y2="125" stroke="#1e293b" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <line x1="65" y1="110" x2="65" y2="130" stroke="#1e293b" strokeWidth="0.5" />
            <line x1="165" y1="110" x2="165" y2="130" stroke="#1e293b" strokeWidth="0.5" />
            <rect x="105" y="118" width="20" height="14" fill="white" />
            <text x="115" y="129" textAnchor="middle" fontSize="12" fill="#1e293b" fontFamily="sans-serif">125</text>
            
            {/* Area Box */}
            <rect x="90" y="50" width="70" height="50" fill="#f1f5f9" opacity="0.5" />
            <text x="125" y="65" textAnchor="middle" fontSize="10" fill="#1e293b" fontFamily="sans-serif">Cross</text>
            <text x="125" y="78" textAnchor="middle" fontSize="10" fill="#1e293b" fontFamily="sans-serif">Sectional Area</text>
            <text x="125" y="91" textAnchor="middle" fontSize="11" fill="#1e293b" fontFamily="sans-serif" fontWeight="bold">6,319mm²</text>

            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="#1e293b" stroke="none" />
              </marker>
            </defs>
          </g>
        );

      case 'Ovolo Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="ovoloGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              {/* Inside */}
              <path d="M70 40 L190 20 L190 80 Q190 100 170 100 L110 100" fill="#cbd5e1" stroke="none" />
              {/* Front Face */}
              <path d="M50 100 L50 40 L170 20 L170 80 Q170 100 150 100 L50 100 Z" fill="url(#ovoloGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* Top Lip */}
              <path d="M50 40 L55 40 L175 20 L170 20 Z" fill="#475569" stroke="none" />
              {/* End Cap */}
              <path d="M50 40 L50 100 L80 100 Q110 100 110 70 L110 60 L110 40 Z" fill="none" stroke="#1e293b" strokeWidth="2" />
            </g>
          );
        }
        // Flat back, flat bottom, curved front
        return (
          <path d="M60 40 L60 100 L90 100 Q120 100 120 70 L120 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Patio Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="fasciaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              {/* Inside */}
              <path d="M70 40 L190 20 L190 80 L110 100" fill="#cbd5e1" stroke="none" />
              {/* Front Face */}
              <path d="M50 100 L50 40 L170 20 L170 80 L50 100 Z" fill="url(#fasciaGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* Top Lip */}
              <path d="M50 40 L55 40 L175 20 L170 20 Z" fill="#475569" stroke="none" />
              {/* End Cap */}
              <path d="M60 40 L60 100 L120 100 L120 50 L110 50 L110 40 Z" fill="none" stroke="#1e293b" strokeWidth="2" />
            </g>
          );
        }
        // Boxy, high front
        return (
          <path d="M60 40 L60 100 L120 100 L120 50 L110 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Quarter Round Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="qrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              {/* Inside */}
              <path d="M70 40 L190 20 L190 80 Q190 100 170 100 L110 100" fill="#cbd5e1" stroke="none" />
              {/* Front Face */}
              <path d="M50 100 L50 40 L170 20 L170 80 Q170 100 150 100 L50 100 Z" fill="url(#qrGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* End Cap */}
              <path d="M60 40 L60 100 L90 100 Q120 100 120 70 L120 60 L120 40" fill="none" stroke="#1e293b" strokeWidth="2" />
            </g>
          );
        }
        // Flat back, flat bottom, rounded front corner
        return (
          <path d="M60 40 L60 100 L90 100 Q120 100 120 70 L120 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Half Round Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="hrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              {/* Inside */}
              <path d="M60 50 A 40 40 0 0 0 140 50 L180 30 A 40 40 0 0 0 100 30 Z" fill="#cbd5e1" stroke="none" />
              {/* Front Face */}
              <path d="M50 50 A 40 40 0 0 0 130 50 L170 30 A 40 40 0 0 0 90 30 Z" fill="url(#hrGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* End Cap */}
              <path d="M50 50 A 40 40 0 0 0 130 50" fill="none" stroke="#1e293b" strokeWidth="2" />
            </g>
          );
        }
        // Semicircle
        return (
          <path d="M50 50 A 40 40 0 0 0 130 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Quad Gutter':
        if (view === 'perspective') {
          return (
            <g>
              <defs>
                <linearGradient id="quadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>
              {/* Inside */}
              <path d="M70 40 L190 20 L190 80 Q195 80 195 70 L195 50" fill="#cbd5e1" stroke="none" />
              {/* Front Face */}
              <path d="M50 100 L50 40 L170 20 L170 80 Q175 80 175 70 L175 50 L50 40 Z" fill="url(#quadGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* End Cap */}
              <path d="M60 40 L60 100 L110 100 Q125 100 125 80 L125 60" fill="none" stroke="#1e293b" strokeWidth="2" />
            </g>
          );
        }
        // Classic D shape / Quad
        return (
          <path d="M60 40 L60 100 L110 100 Q125 100 125 80 L125 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Slotted Gutter':
        // Quad shape with "slots" indicated
        return (
          <g>
            <path d="M60 40 L60 100 L110 100 Q125 100 125 80 L125 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="70" y1="90" x2="80" y2="90" stroke="currentColor" strokeWidth="2" />
            <line x1="90" y1="90" x2="100" y2="90" stroke="currentColor" strokeWidth="2" />
          </g>
        );
      case 'Rebate Fascia':
        // L-shape / Fascia profile
        return (
          <path d="M70 40 L70 100 L110 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        );
      case 'Rectangle Down Pipes':
        // Rectangle
        return (
          <rect x="70" y="40" width="40" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
        );
      case 'Round Down Pipes':
        // Circle
        return (
          <circle cx="90" cy="70" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
        );
      default:
        return <path d="M60 60 L120 120 M120 60 L60 120" stroke="currentColor" strokeWidth="2" />;
    }
  };

  return (
    <svg viewBox="0 0 200 150" className="w-full h-full text-slate-700 p-2">
      {getPath()}
    </svg>
  );
};

export default ProfileDiagram;
