import React, { useState, useEffect, useRef } from 'react'
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform,
  useReducedMotion 
} from 'framer-motion'
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Flame
} from 'lucide-react'

// Custom Brand Icons (Not included in modern Lucide React versions)
const Github = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Resume Data & Custom Configuration (Extracted directly from resume annotations)
const PROFILE_DATA = {
  name: 'Thanmahi Peruri',
  title: 'AI & ML Engineer',
  tagline: 'Building Scalable Apps & Solving Algorithmic Challenges',
  bio: 'I am a B.Tech student in Artificial Intelligence and Machine Learning with a strong foundation in computer science and backend engineering. I love translating complex algorithmic concepts into responsive, functional web applications. With expertise spanning Java, Python, SQL, and the MERN stack, I build systems focused on scalability and security. I am always eager to learn new technologies and collaborate on impactful engineering projects.',
  education: {
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    institution: 'Aditya Engineering College',
    duration: '2023 - Present',
    cgpa: '8.87 / 10'
  },
  email: 'thanmahi10@gmail.com',
  phone: '+91 93931 26688',
  github: 'https://github.com/THANMAHI',
  linkedin: 'https://www.linkedin.com/in/thanmahi-peruri-4b0068291/',
  skills: [
    {
      category: 'Languages',
      icon: Code2,
      items: ['Java', 'Python', 'C', 'SQL']
    },
    {
      category: 'Web Development',
      icon: Terminal,
      items: ['React.js', 'Node.js', 'JavaScript', 'HTML & CSS', 'RESTful APIs', 'JWT Auth']
    },
    {
      category: 'Databases & Infrastructure',
      icon: Database,
      items: ['MongoDB', 'MySQL', 'Redis', 'Docker', 'Containerized Dev']
    },
    {
      category: 'Core Computer Science',
      icon: Cpu,
      items: ['Data Structures & Algorithms', 'OOPs', 'RBAC Security', 'HMAC Verification']
    }
  ],
  projects: [
    {
      title: 'HustleHub',
      subtitle: 'Part-Time Job Portal',
      description: 'Built a responsive job portal featuring dynamic filtering and search capabilities for local part-time opportunities. Implemented localStorage-based job saving and optimized UI rendering for extremely smooth client performance.',
      tags: ['React', 'CSS Modules', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/THANMAHI/HustleHub',
      demo: 'https://thanmahi.github.io/HustleHub/'
    },
    {
      title: 'Multi-Tenant Project Platform',
      subtitle: 'SaaS PM Tool',
      description: 'Developed a scalable multi-tenant SaaS application with strict logical data isolation. Configured JWT authentication and Role-Based Access Control (RBAC). Built backend microservices and containerized the platform.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT', 'RBAC'],
      github: 'https://github.com/THANMAHI/final_saas_app_23A91A61B3',
      demo: '#'
    },
    {
      title: 'High-Scale Payment Gateway',
      subtitle: 'Asynchronous Processing System',
      description: 'Designed a high-throughput, fault-tolerant payment system utilizing Redis queues for asynchronous message queuing. Implemented secure webhook callbacks secured via HMAC hashing verification.',
      tags: ['Node.js', 'Redis', 'Webhooks', 'HMAC', 'Message Queues'],
      github: 'https://github.com/THANMAHI/payment-gateway-extends-23A91A61B3',
      demo: '#'
    }
  ],
  certifications: [
    { name: 'Java (Oracle Academy)', url: 'https://drive.google.com/file/d/1TMv7WkyUFMBcqcQgFYh52rYPh010kW6H/view?usp=sharing' },
    { name: 'Python (Cisco Networking Academy)', url: 'https://drive.google.com/file/d/1o5yGO-NLIjBVcKU0GfRRpeHR3lFgBSG_/view?usp=sharing' },
    { name: 'HTML & CSS (Pearson VUE)', url: 'https://drive.google.com/file/d/1i9wh9U21n0C6IhUBGam3QbHhIlpHGCuo/view?usp=sharing' },
    { name: 'JavaScript Essentials I (Cisco)', url: 'https://drive.google.com/file/d/1wsQkm3EejiobKI22WfiRE2xYMOnfXioj/view?usp=sharing' },
    { name: 'JavaScript Essentials II (Cisco)', url: 'https://drive.google.com/file/d/1P4IvOwJyM61vVorRCx2p-maFjKJNtVUF/view?usp=sharing' },
    { name: 'C Programming (Cisco)', url: 'https://drive.google.com/file/d/1uWCedrHIEPJhnXb34BTYmSPa4qJd3jId/view?usp=sharing' },
    { name: 'MongoDB Associated Developer', url: 'https://drive.google.com/file/d/1V6FfhRnbFxYjLgR5DYKuWVw1GoCZyN79/view?usp=sharing' },
    { name: 'GitHub Foundations', url: 'https://drive.google.com/file/d/1D_gLqD1hywLM2YF1GC8VucP_M5TfUQ77/view?usp=sharing' }
  ],
  codingProfiles: [
    { name: 'LeetCode', url: 'https://leetcode.com/u/thanmahi10/' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/thanmaqrux/' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/thanmahi10' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/thanmahi' }
  ],
  achievements: [
    'Solved 600+ DSA problems across LeetCode, CodeChef, and GeeksforGeeks focusing on algorithmic efficiency.',
    'Earned HackerRank gold badges in C, Java, SQL, and Problem Solving.',
    'Winner of "Machine Minds – The Algorithm Battle" conducted by Technical Hub.'
  ]
}

// Typing Effect Hook
function useTypingEffect(words, speed = 100, pause = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer
    const fullWord = words[currentWordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1))
      }, speed / 2)
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
      }, speed)
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed, pause])

  return currentText
}

function App() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState(null) // 'success', 'error', or null
  const [formMessage, setFormMessage] = useState('')

  // Scroll Tracking for Parallax (Framer Motion)
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  // Background Parallax Transforms
  const yBg1 = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 250])
  const yBg2 = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : -250])
  const yBg3 = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 100])
  const scaleHeroText = useTransform(scrollY, [0, 400], [1, shouldReduceMotion ? 1 : 0.95])
  const opacityHeroText = useTransform(scrollY, [0, 300], [1, 0])

  // Subtitle Typing Words
  const typingWords = [
    'Backend Engineer',
    'AI & ML Enthusiast',
    'DSA Problem Solver',
    'Full Stack Developer'
  ]
  const typedRole = useTypingEffect(typingWords, 80, 1500)

  // Scroll spy to active nav section
  useEffect(() => {
    const handleScroll = () => {
      // Navbar styling
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true)
      } else {
        setIsNavbarScrolled(false)
      }

      // Section tracking
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error')
      setFormMessage('Please fill out all required fields.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setFormStatus('error')
      setFormMessage('Please enter a valid email address.')
      return
    }

    // Simulate server request
    setFormStatus('success')
    setFormMessage('Thank you! Your message has been sent successfully. Thanmahi will get back to you soon.')
    setFormState({ name: '', email: '', message: '' })

    // Clear alert after 5s
    setTimeout(() => {
      setFormStatus(null)
      setFormMessage('')
    }, 5000)
  }

  // Smooth scroll helper
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }

  // Animation Variants
  const revealVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Dynamic Background Parallax Bubbles */}
      <div className="parallax-bg">
        <motion.div style={{ y: yBg1 }} className="floating-bubble floating-bubble-1" />
        <motion.div style={{ y: yBg2 }} className="floating-bubble floating-bubble-2" />
        <motion.div style={{ y: yBg3 }} className="floating-bubble floating-bubble-3" />
      </div>

      {/* Header / Sticky Glass Navigation */}
      <nav className={`navbar ${isNavbarScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-logo">
            <span className="gradient-text">{PROFILE_DATA.name.split(' ')[0]}</span>
            <span style={{ color: 'var(--text-primary)' }}>{PROFILE_DATA.name.split(' ')[1]}</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {['home', 'about', 'skills', 'projects', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  className={`nav-link ${activeSection === sec ? 'active' : ''}`}
                  onClick={() => scrollToSection(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
          >
            {['home', 'about', 'skills', 'projects', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  className={`mobile-nav-link ${activeSection === sec ? 'active' : ''}`}
                  onClick={() => scrollToSection(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero-wrapper">
        <motion.div 
          style={{ scale: scaleHeroText, opacity: opacityHeroText }}
          className="container hero-content"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="badge badge-cyan" style={{ marginBottom: '1.5rem' }}>
            <Sparkles size={14} /> Available for Opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">{PROFILE_DATA.name}</span>
          </h1>
          <div className="hero-typing">
            <span className="gradient-text-cyan">{typedRole}</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              style={{ display: 'inline-block', width: '2px', backgroundColor: 'var(--color-secondary)', marginLeft: '4px' }}
            >
              |
            </motion.span>
          </div>
          <p className="hero-description">
            {PROFILE_DATA.tagline}
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Let's Connect
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            {/* Bio Column */}
            <motion.div 
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={revealVariants}
            >
              <p>
                {PROFILE_DATA.bio}
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} className="gradient-text" style={{ stroke: 'url(#violet-cyan-grad)' }} /> Key Achievements
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {PROFILE_DATA.achievements.map((ach, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Quick Facts Card Column */}
            <motion.div 
              className="glass-panel about-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={revealVariants}
            >
              <h3 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Quick Facts</h3>
              
              {/* Education */}
              <div className="about-info-item">
                <div className="about-info-icon">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="about-info-title">Education</div>
                  <div className="about-info-value">{PROFILE_DATA.education.degree}</div>
                  <div className="about-info-value" style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    {PROFILE_DATA.education.institution} • {PROFILE_DATA.education.duration}
                  </div>
                  <div className="about-info-value" style={{ marginTop: '0.25rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                    CGPA: {PROFILE_DATA.education.cgpa}
                  </div>
                </div>
              </div>

              {/* Coding Profiles */}
              <div className="about-info-item">
                <div className="about-info-icon">
                  <Terminal size={20} />
                </div>
                <div>
                  <div className="about-info-title">Coding Profiles</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {PROFILE_DATA.codingProfiles.map((profile) => (
                      <a 
                        key={profile.name} 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-tag coding-profile-link"
                        style={{ 
                          fontSize: '0.75rem', 
                          padding: '0.3rem 0.65rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          borderColor: 'rgba(6, 182, 212, 0.25)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {profile.name} <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="about-info-item">
                <div className="about-info-icon">
                  <Award size={20} />
                </div>
                <div>
                  <div className="about-info-title">Certifications (Click to View)</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {PROFILE_DATA.certifications.map((cert) => (
                      <a 
                        key={cert.name} 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-tag certification-link"
                        style={{ 
                          fontSize: '0.75rem', 
                          padding: '0.3rem 0.65rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {cert.name} <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ backgroundColor: 'rgba(14, 20, 36, 0.3)' }}>
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {PROFILE_DATA.skills.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="glass-panel skills-category-card"
                  variants={revealVariants}
                  whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.3)' }}
                >
                  <div className="skills-category-header">
                    <CategoryIcon size={24} className="skills-category-icon" />
                    <h3 className="skills-category-title">{cat.category}</h3>
                  </div>
                  <div className="skills-list">
                    {cat.items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {PROFILE_DATA.projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                className="glass-panel project-card"
                variants={revealVariants}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)', borderColor: 'rgba(168, 85, 247, 0.3)' }}
              >
                {/* Tech Gradients Abstract Display as Thumbnail (WOW aesthetics) */}
                <div className="project-thumbnail">
                  <div className="project-icon-wrapper">
                    <Code2 size={36} />
                  </div>
                </div>

                <div className="project-details">
                  <span className="badge badge-cyan" style={{ width: 'fit-content', marginBottom: '0.75rem', fontSize: '0.7rem' }}>
                    {proj.subtitle}
                  </span>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                  
                  <div className="project-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={18} /> Source Code
                    </a>
                    {proj.demo !== '#' && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'rgba(14, 20, 36, 0.3)' }}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          
          <div className="contact-grid">
            {/* Contact Connections Column */}
            <motion.div 
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={revealVariants}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Let's talk about your project</h3>
              <p className="contact-info-text">
                I'm open to full-time engineering roles, internship opportunities, and collaborative software projects. Feel free to reach out via email, phone, or connect on social platforms!
              </p>
              
              <div className="contact-channels">
                <a href={`mailto:${PROFILE_DATA.email}`} className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Email</div>
                    <div className="contact-item-value">{PROFILE_DATA.email}</div>
                  </div>
                </a>

                <a href={`tel:${PROFILE_DATA.phone.replace(/ /g, '')}`} className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Call / WhatsApp</div>
                    <div className="contact-item-value">{PROFILE_DATA.phone}</div>
                  </div>
                </a>

                <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-item-icon">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">GitHub Profile</div>
                    <div className="contact-item-value">github.com/THANMAHI</div>
                  </div>
                </a>

                <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-item-icon">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">LinkedIn Profile</div>
                    <div className="contact-item-value">linkedin.com/in/thanmahi-peruri</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Direct Contact Form Column */}
            <motion.div 
              className="glass-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={revealVariants}
            >
              <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Send a Message</h3>
                
                {formStatus && (
                  <div className={`form-status ${formStatus === 'success' ? 'form-status-success' : 'form-status-error'}`}>
                    {formStatus === 'success' ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                    <span>{formMessage}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="form-name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input" 
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="form-email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input" 
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message" className="form-label">Your Message *</label>
                  <textarea 
                    id="form-message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-input" 
                    placeholder="Hey Thanmahi, I would love to collaborate..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <span className="gradient-text">{PROFILE_DATA.name.split(' ')[0]}</span>
            <span style={{ color: 'var(--text-primary)' }}>{PROFILE_DATA.name.split(' ')[1]}</span>
          </div>
          
          <ul className="footer-nav">
            {['home', 'about', 'skills', 'projects', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  className="footer-nav-link"
                  onClick={() => scrollToSection(sec)}
                  style={{ cursor: 'pointer' }}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-socials">
            <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="footer-social-link">
              <Mail size={20} />
            </a>
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} {PROFILE_DATA.name}. Built with React, Vite & Framer Motion. All rights reserved.
          </p>
        </div>
      </footer>

      {/* SVG Gradient definitions for inline styling (using Lucide gradient mapping) */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="violet-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

// Simple AlertTriangle fallback in case it is needed (defined locally to guarantee no import crashes)
function AlertTriangle({ size = 18, color = "currentColor" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

export default App
