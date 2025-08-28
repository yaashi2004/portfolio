import { useState, useEffect } from 'react';
import { List, X, Sun, Moon, Download } from 'phosphor-react';
import { gsap } from 'gsap';
import { downloadResume } from '../utils/downloadUtils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    // Animate navigation on load
    gsap.fromTo('.nav-logo', 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power2.out" }
    );
    
    gsap.fromTo('.nav-items > *', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: "power2.in"
      });
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40 glass-card border-b border-glass-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          {/* Logo */}
          <div className="nav-logo flex-shrink-0">
            <h2 className="text-2xl font-bold text-glow">YS</h2>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex nav-items space-x-8 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground-muted hover:text-primary transition-all duration-300 hover:text-glow"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons - Close together */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-card hover:scale-110 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-primary" />
              ) : (
                <Moon size={20} className="text-primary" />
              )}
            </button>

            {/* Download Resume Button */}
            <button
              onClick={() => downloadResume()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:scale-105 transition-all duration-300 text-primary hover:text-glow border border-primary/30 hover:border-primary/60"
              aria-label="Download Resume"
            >
              <Download size={18} />
              <span className="text-sm font-medium">Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground-muted hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 h-full w-80 bg-background-secondary/95 backdrop-blur-xl z-50 translate-x-full md:hidden">
        <div className="p-8 pt-20">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-lg text-foreground-muted hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Download Resume Button in Mobile Menu */}
            <button
              onClick={() => downloadResume()}
              className="flex items-center gap-3 w-full text-left text-lg text-primary hover:text-glow transition-all duration-300 border-t border-glass-border/30 pt-4"
              style={{ animationDelay: '0.6s' }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;