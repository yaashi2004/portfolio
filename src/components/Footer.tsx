import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content',
        { 
          opacity: 0, 
          y: 60 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 px-6 bg-background-secondary border-t border-glass-border/20 overflow-hidden">
      {/* Background floating particles */}
      <div className="floating-orb w-32 h-32 top-0 left-1/4 opacity-10" />
      <div className="floating-orb w-24 h-24 bottom-0 right-1/3 opacity-15" />
      <div className="floating-orb w-16 h-16 top-1/2 right-1/4 opacity-20" />

      <div className="footer-content max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-glow mb-4">YS</h3>
          <p className="text-foreground-muted max-w-md mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
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
        </nav>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-sm text-foreground-muted">
          <p>&copy; 2025 Yashika Saini. All rights reserved.</p>
          <p className="mt-2">Made by humans, for humans (with a little help from machines).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;