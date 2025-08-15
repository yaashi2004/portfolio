import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Hero animations
    tl.fromTo(headlineRef.current,
      { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power3.out"
      }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)" 
      },
      "-=0.4"
    );

    // Floating animation for CTA button
    gsap.to(ctaRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  const handleHireMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background floating orbs */}
      <div className="floating-orb w-96 h-96 top-20 -left-48 opacity-30" />
      <div className="floating-orb w-64 h-64 bottom-20 -right-32 opacity-20" />
      <div className="floating-orb w-48 h-48 top-1/2 left-1/4 opacity-25" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h1 
          ref={headlineRef}
          className="text-6xl md:text-8xl font-bold mb-6 text-glow bg-gradient-primary bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm Yashika
          <br />
          <span className="text-4xl md:text-6xl text-foreground-muted">
            Full-Stack Developer
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Combining creative design with robust technology to build engaging, user-centric digital experiences
        </p>

        <button
          ref={ctaRef}
          onClick={handleHireMe}
          className="btn-neon text-lg font-semibold tracking-wide group"
        >
          <span className="inline-block transition-transform group-hover:scale-110">
            Hire Me
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;