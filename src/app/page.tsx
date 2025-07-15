'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { portfolioData, siteConfig, type PeriodSection } from '@/data/portfolio';

// Very Subtle Matrix Rain Effect Component
function MatrixRain() {
  const characters = '01';
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="matrix-char absolute text-terminal-green/5"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          {characters.charAt(Math.floor(Math.random() * characters.length))}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptText, setDecryptText] = useState('DECRYPT_FULL_ARCHIVE');

  const handleDecrypt = () => {
    if (isDecrypting) return;
    
    setIsDecrypting(true);
    const originalText = 'DECRYPT_FULL_ARCHIVE';
    const scrambledChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Scrambling animation
    let iterations = 0;
    const interval = setInterval(() => {
      setDecryptText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return scrambledChars[Math.floor(Math.random() * scrambledChars.length)];
          })
          .join('')
      );
      
      if (iterations >= originalText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDecryptText('[ACCESS_GRANTED]');
          setTimeout(() => {
            setDecryptText('DECRYPT_FULL_ARCHIVE');
            setIsDecrypting(false);
          }, 2000);
        }, 500);
      }
      
      iterations += 1 / 3;
    }, 50);
  };

  // Keyboard navigation (simplified)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'd':
          // Trigger decrypt animation
          handleDecrypt();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDecrypting]);

  // Simplified dash instead of icons
  const getDash = () => (
    <span className="text-terminal-green font-bold">-</span>
  );

  return (
    <div className="min-h-screen text-terminal-green font-mono" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      {/* Very Subtle Matrix Rain Background */}
      <MatrixRain />
      
      {/* Disabled Noise Overlay for better readability */}
      <div className="noise-overlay" style={{display: 'none'}}></div>
      
      {/* Header */}
      <header className="border-b border-terminal-green/30 py-12 px-6" role="banner">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Terminal size={40} className="text-terminal-green" aria-hidden="true" />
            <h1 className="professional-text text-3xl md:text-5xl font-bold text-white">
              Eric Ullrich
            </h1>
          </div>
          <p className="professional-text text-terminal-gray text-lg md:text-xl max-w-3xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12" role="main">
        <div className="space-y-8">
          {portfolioData.map((section: PeriodSection) => (
            <section 
              key={section.id} 
              className="border border-terminal-green/20 bg-terminal-dark-gray/30 rounded-lg overflow-hidden"
              aria-labelledby={`section-${section.id}`}
            >
              {/* Section Header */}
              <div className="p-6 border-b border-terminal-green/20">
                <h2 id={`section-${section.id}`} className="text-2xl md:text-3xl font-bold text-terminal-green professional-text">
                  {section.period} - {section.company}
                </h2>
              </div>

              {/* Section Content - Always Visible */}
              <div 
                className="p-6"
                role="region"
                aria-labelledby={`section-${section.id}`}
              >
                <div className="space-y-6">
                  {section.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-2 border-terminal-green/30 pl-6 pb-4" role="listitem">
                      <div className="flex items-start gap-3">
                        <div className="mt-1.5 flex-shrink-0">
                          {getDash()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            {achievement.link ? (
                              <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-title text-lg text-white hover:text-terminal-amber focus:outline-none focus:ring-2 focus:ring-terminal-green rounded"
                                aria-label={`${achievement.title} - opens in new tab`}
                              >
                                {achievement.title}
                              </a>
                            ) : (
                              <h3 className="project-title text-lg text-white">
                                {achievement.title}
                              </h3>
                            )}
                            <span 
                              className={`text-xs px-2 py-1 border rounded ${
                                achievement.status.includes('CLASSIFIED') || achievement.status.includes('SECURED')
                                  ? 'border-terminal-red/50 text-terminal-red bg-terminal-red/5' 
                                  : achievement.status.includes('ACTIVE') || achievement.status.includes('LAUNCHED')
                                  ? 'border-terminal-amber/50 text-terminal-amber bg-terminal-amber/5'
                                  : 'border-terminal-green/50 text-terminal-green bg-terminal-green/5'
                              }`}
                              role="status"
                              aria-label={`Project status: ${achievement.status.replace(/[\[\]]/g, '')}`}
                            >
                              {achievement.status}
                            </span>
                          </div>
                          <p className="professional-text text-terminal-gray text-base leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ASCII Divider */}
        <div className="my-12 text-terminal-green/30 text-center text-xs font-mono">
          <div>═══════════════════════════════════════════════════════════════</div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8" role="region" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">Access Additional Projects</h2>
          <p className="text-terminal-gray mb-4">
            Access more classified projects via secure channels
          </p>
          <button 
            onClick={handleDecrypt}
            disabled={isDecrypting}
            className={`border border-terminal-green px-6 py-2 hover:bg-terminal-green hover:text-black transition-all duration-300 glitch-effect glow-effect crt-glow focus:outline-none focus:ring-2 focus:ring-terminal-green ${
              isDecrypting ? 'animate-pulse' : ''
            }`}
            aria-label={isDecrypting ? 'Decrypting archive, please wait' : 'Decrypt full project archive'}
            aria-describedby="decrypt-help"
          >
            {decryptText}
          </button>
          <p id="decrypt-help" className="sr-only">
            Press D key or click this button to trigger the decrypt animation
          </p>
        </div>
      </main>

      {/* Keyboard Shortcuts Help */}
      <aside 
        className="max-w-5xl mx-auto px-6 py-4" 
        role="complementary" 
        aria-labelledby="keyboard-help-heading"
      >
        <div className="border border-terminal-green/20 p-4 text-center">
          <h3 id="keyboard-help-heading" className="text-terminal-amber text-sm font-bold mb-2">
            KEYBOARD_COMMANDS:
          </h3>
          <dl className="text-xs text-terminal-gray">
            <div className="flex justify-center">
              <div>
                <dt className="inline font-semibold">[D]</dt>
                <dd className="inline ml-1">decrypt sequence</dd>
              </div>
            </div>
          </dl>
        </div>
      </aside>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-12" role="region" aria-labelledby="contact-heading">
        <div className="border border-terminal-green/20 bg-terminal-dark-gray/30 rounded-lg p-8 text-center">
          <h2 id="contact-heading" className="text-2xl font-bold text-terminal-green professional-text mb-6">
            Let&apos;s Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-3 p-4 border border-terminal-green/30 rounded-lg hover:bg-terminal-green/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Send email"
            >
              <span className="professional-text text-white">{siteConfig.email}</span>
            </a>
            
            <a 
              href={`https://x.com/${siteConfig.twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border border-terminal-green/30 rounded-lg hover:bg-terminal-green/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Follow on X (Twitter)"
            >
              <span className="professional-text text-white">{siteConfig.twitter}</span>
            </a>
            
            <a 
              href={`https://github.com/${siteConfig.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border border-terminal-green/30 rounded-lg hover:bg-terminal-green/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="View GitHub profile"
            >
              <span className="professional-text text-white">github.com/{siteConfig.github}</span>
            </a>
            
            <a 
              href={`https://t.me/${siteConfig.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border border-terminal-green/30 rounded-lg hover:bg-terminal-green/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Message on Telegram"
            >
              <span className="professional-text text-white">@{siteConfig.telegram}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-terminal-green/20 mt-8 p-6" role="contentinfo">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-terminal-gray text-sm professional-text">
            &quot;{siteConfig.quote}&quot; — {siteConfig.quoteAuthor}
          </blockquote>
        </div>
      </footer>
    </div>
  );
}
