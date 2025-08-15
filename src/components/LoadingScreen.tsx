import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(textRef.current, { opacity: 0, y: 20 });
    gsap.set(progressRef.current, { width: '0%' });

    // Animate text entrance
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    
    // Progress bar animation
    .to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: "power2.out",
    }, "-=0.3")
    
    // Exit animation
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in"
    }, "+=0.2")
    
    .to(loaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        <div ref={textRef} className="space-y-4">
          <h1 className="text-6xl font-bold text-glow bg-gradient-primary bg-clip-text text-transparent">
            Yashika
          </h1>
          <p className="text-foreground-muted text-lg tracking-wide">
            Loading Experience...
          </p>
        </div>
        
        <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="loading-bar h-full transform origin-left"
          />
        </div>
      </div>

      {/* Background floating orbs */}
      <div className="floating-orb w-64 h-64 top-1/4 left-1/4" />
      <div className="floating-orb w-48 h-48 bottom-1/4 right-1/4" />
      <div className="floating-orb w-32 h-32 top-3/4 left-3/4" />
    </div>
  );
};

export default LoadingScreen;