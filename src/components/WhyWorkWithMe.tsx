import { useEffect, useRef } from 'react';
import { CheckCircle } from 'phosphor-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WhyWorkWithMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      title: "Technical Excellence",
      description: "Strong foundation in modern web technologies and best practices"
    },
    {
      title: "Positive Attitude",
      description: "Approach every challenge with enthusiasm and determination"
    },
    {
      title: "Strong Work Ethic",
      description: "Committed to delivering quality results on time, every time"
    },
    {
      title: "Team Player",
      description: "Collaborate effectively and contribute to team success"
    },
    {
      title: "Continuous Learner",
      description: "Always growing and adapting to new technologies and methodologies"
    },
    {
      title: "Problem Solver",
      description: "Turn challenges into opportunities and find innovative solutions"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current, 
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Reasons cards stagger animation
      gsap.fromTo(reasonsRef.current?.children || [],
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: reasonsRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-me" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-64 h-64 -top-32 -left-32" />
        <div className="floating-orb w-48 h-48 top-1/2 -right-24" />
        <div className="floating-orb w-32 h-32 -bottom-16 left-1/4" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Why Work With <span className="text-primary">Me?</span>
          </h2>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="glass-card p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed text-center max-w-4xl mx-auto">
            I combine my technical skills with a positive attitude and strong work ethic. 
            Whether working solo or in a team, I strive to make every project a learning 
            experience and a success for both of us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div ref={reasonsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle 
                  size={28} 
                  className="text-primary mt-1 group-hover:text-accent transition-colors duration-300" 
                  weight="fill"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;