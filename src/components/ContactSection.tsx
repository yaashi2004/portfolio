import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo('.form-element',
        { 
          opacity: 0, 
          x: -50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          }
        }
      );

      // Social icons animation
      gsap.fromTo('.social-icon',
        { 
          opacity: 0, 
          scale: 0.5 
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_tjsrfxv', // Replace with your EmailJS service ID
        'template_4s6jt9p', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yashika',
        },
        'dmQ2j-wt606UNyVxY' // Replace with your EmailJS public key
      );

      // Animate submit button
      gsap.to('.submit-btn', {
        scale: 1.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });

      // Clear form and show success
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully! I\'ll get back to you soon.');
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or email me directly at yashikasain9876@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yaashi2004',
      icon: <GithubLogo size={24} />,
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <LinkedinLogo size={24} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/khatti_kiwiii',
      icon: <TwitterLogo size={24} />,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Let's Work Together
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Ready to bring your ideas to life? Drop me a message and let's create 
            something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div ref={formRef} className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-element">
                <label htmlFor="name" className="block text-sm font-medium text-foreground-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground-muted/50"
                  placeholder="Your name"
                />
              </div>

              <div className="form-element">
                <label htmlFor="email" className="block text-sm font-medium text-foreground-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground-muted/50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-element">
                <label htmlFor="message" className="block text-sm font-medium text-foreground-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground-muted/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn w-full btn-neon py-4 font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Get In Touch
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
              
              <div className="space-y-3 text-sm text-foreground-muted">
                <div>📧 yashikasain9876@gmail.com</div>
                <div>📱 +91 9588525646</div>
                <div>📍 India</div>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-foreground-muted">
                Follow Me
              </h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon p-3 glass-card hover:scale-110 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;