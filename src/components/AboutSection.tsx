import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Profile image from public folder
const profileImage = '/lovable-uploads/1207af02-de46-4b7e-a0d2-f3579e8befaf.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '⚫' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Supabase', icon: '🚀' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Git & GitHub', icon: '📂' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Vercel', icon: '▲' },
    { name: 'GSAP', icon: '🎭' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0, 
          x: -100, 
          scale: 0.8 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { 
          opacity: 0, 
          x: 100 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      );

      // Skills animation
      gsap.fromTo('.skill-item',
        { 
          opacity: 0, 
          y: 30, 
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          }
        }
      );

      // Hover animation for profile image
      const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          rotation: 3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      imageRef.current?.addEventListener('mouseenter', handleMouseEnter);
      imageRef.current?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        imageRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        imageRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative w-80 h-80 mx-auto"
            >
              <img
                src={profileImage}
                alt="Yashika Saini - Creative Developer"
                className="w-full h-full object-cover profile-glow"
              />
              <div className="absolute inset-0 bg-gradient-glow opacity-20 rounded-full animate-pulse-glow" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                About Me
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I'm a passionate full-stack developer experienced in React, Next.js, Node.js, and sql/nosql databases. 
                I create clean, scalable web applications with a focus on performance and user experience. 
                Always eager to learn and collaborate, I thrive in team environments and enjoy turning challenges into effective solutions.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Driven by curiosity and continuous learning, I stay updated with the latest technologies and best practices. 
                I thrive in teamwork, value clear communication, and am eager to innovate both independently and collaboratively.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item glass-card p-3 text-center hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-xs font-medium text-foreground-muted group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;