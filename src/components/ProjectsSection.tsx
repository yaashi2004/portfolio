import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "ElevateCV - Resume Analyzer",
      description: "AI-powered resume analysis platform that provides comprehensive feedback on resume quality, ATS compatibility, and personalized improvement suggestions.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite", "PDF.js"],
      image: "/Screenshot (510).png",
      github: "https://github.com/yaashi2004/Elevate-CV",
      live: "https://elevate-cv-resume-analyzer.vercel.app/"
    },
    {
      id: 2,
      title: "Form Builder",
      description: "Modern form builder application with dynamic form creation, shareable links, real-time data collection, and secure storage using Prisma.",
      tech: ["Next.js", "Prisma", "NextAuth.js", "Tailwind CSS", "Vercel"],
      image: "/Screenshot (511).png",
      github: "https://github.com/yaashi2004/page-form",
      live: "https://page-form-mqzz34bcz-yashika-sainis-projects.vercel.app"
    },
    {
      id: 3,
      title: "SecurePersona - Chrome Extension",
      description: "Smart form filling Chrome extension that streamlines web forms by managing multiple customizable profiles for job applications, internships, and online shopping.",
      tech: ["JavaScript", "HTML/CSS", "Chrome APIs", "Local Storage"],
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop",
      github: "https://github.com/yaashi2004/SecurePersona",
      live: "https://github.com/yaashi2004/SecurePersona"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Projects animation
      gsap.fromTo('.project-card',
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A showcase of my recent work. These projects highlight my hands-on experience and passion for learning.
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    title="View Code"
                  >
                    <GithubLogo size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 text-xs font-medium rounded-full text-foreground-muted border border-glass-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;