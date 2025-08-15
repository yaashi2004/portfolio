# 🚀 Yashika Saini - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full-Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional design with glass-morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth GSAP animations and hover effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Highlighted portfolio projects with live demos
- **Dark/Light Theme**: Toggle between dark and light themes
- **Download Resume**: Direct download of resume from the navigation

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: GSAP (GreenSock)
- **UI Components**: shadcn/ui
- **Email Service**: EmailJS
- **Deployment**: Vercel (Ready)

## 📱 Sections

1. **Hero Section**: Introduction with animated text and CTA
2. **About Section**: Personal information and skills showcase
3. **Why Work With Me**: Professional highlights and expertise
4. **Projects Section**: Featured projects with thumbnails and links
5. **Contact Section**: Contact form and social media links
6. **Navigation**: Smooth scrolling navigation with theme toggle

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd neo-glow-craft

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📧 EmailJS Setup

The contact form uses EmailJS for sending emails. To configure:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the following values in `src/components/ContactSection.tsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms

```bash
# Build the project
npm run build

# The dist folder contains your production build
```

## 📁 Project Structure

```
neo-glow-craft/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Navigation.tsx
│   ├── pages/              # Page components
│   ├── assets/             # Images and static files
│   └── main.tsx           # Entry point
├── public/                 # Public assets
│   ├── resume.png         # Resume file
│   └── project-screenshots/
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors and Themes
- Update color schemes in `tailwind.config.ts`
- Modify CSS variables in `src/index.css`

### Content
- Update personal information in component files
- Replace project images in the `public` folder
- Modify the skills list in `AboutSection.tsx`

### Styling
- Customize glass-morphism effects
- Adjust animations and transitions
- Modify responsive breakpoints

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured desktop experience
- **Navigation**: Mobile-friendly navigation menu

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📞 Contact

- **Email**: yashikasain9876@gmail.com
- **Phone**: +91 9588525646
- **Location**: India
- **GitHub**: [@yaashi2004](https://github.com/yaashi2004)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [GSAP](https://greensock.com/gsap/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

**Made with ❤️ by Yashika Saini**
