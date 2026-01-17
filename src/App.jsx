import { useState, useEffect } from 'react'
import { Mail, Github, Linkedin, ExternalLink, Code, Server, Database, Cloud, Monitor, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before sending.')
      return
    }
    
    // Create Gmail web compose link with form data
    const email = 'prashant.siddhpura03@gmail.com'
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Hi Prashant,

My name is ${formData.name} and I'm reaching out through your portfolio website.

Contact Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`)

    // Open Gmail web compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
    
    // Reset form after sending
    setFormData({ name: '', email: '', message: '' })
    setShowContactForm(false)
    alert('Thank you for your message! Gmail will open in a new tab.')
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle direct email - opens Gmail web
  const handleDirectEmail = () => {
    const email = 'prashant.siddhpura03@gmail.com'
    const subject = encodeURIComponent('Portfolio Inquiry')
    const body = encodeURIComponent('Hi Prashant,\n\nI found your portfolio and would like to discuss...')
    
    // Open Gmail web compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  // Handle GitHub links
  const handleGithubLink = (projectName = '') => {
    const message = projectName ? 
      `Opened GitHub for project: ${projectName}` : 
      'Opened GitHub profile'
    console.log(message)
    window.open('https://github.com/prashant-siddhpura', '_blank')
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Carousel navigation functions - shows 3 projects at a time
  const nextProject = () => {
    const maxIndex = Math.max(0, projects.length - 3)
    setCurrentProjectIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    const maxIndex = Math.max(0, projects.length - 3)
    setCurrentProjectIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }

  const skills = [
    { name: "JavaScript", icon: Code, color: "from-red-400 to-red-600" },
    { name: "TypeScript", icon: Code, color: "from-yellow-500 to-yellow-700" },
    { name: "React.js", icon: Code, color: "from-cyan-400 to-blue-500" },
    { name: "Python", icon: Code, color: "from-green-400 to-blue-500" },
    { name: "REST APIs", icon: Code, color: "from-green-400 to-blue-500" },
    { name: "AWS", icon: Cloud, color: "from-orange-400 to-orange-600" },
    { name: "Docker", icon: Server, color: "from-blue-400 to-blue-600" },
    { name: "Linux", icon: Server, color: "from-black to-gray-700" },
    { name: "Kubernetes", icon: Server, color: "from-blue-500 to-indigo-600" },
    { name: "Jenkins", icon: GitBranch, color: "from-gray-600 to-gray-800" },
    { name: "GitHub Actions", icon: GitBranch, color: "from-purple-500 to-purple-700" },
    { name: "OOPS", icon: Code, color: "from-purple-400 to-pink-500" },
    { name: "MySQL", icon: Database, color: "from-blue-600 to-indigo-700" },
    { name: "PostgreSQL", icon: Database, color: "from-blue-700 to-purple-700" }
  ]

  const projects = [
    {
      title: "Todo Application",
      description: "A production-ready Todo application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. Features include task management with priorities, due dates, filtering, sorting, search functionality, and persistent storage.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Kubernetes Project – Expense Tracker",
      description: "Containerized a 3-tier app, deployed on Kubernetes with HPA/VPA and integrated Prometheus & Grafana monitoring.",
      tech: ["Kubernetes", "Docker", "Prometheus", "Grafana"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "CI Pipeline with Jenkins",
      description: "Automated CI pipeline with GitHub Webhook, SonarQube, OWASP & Trivy scans, and Dockerized deployment.",
      tech: ["Jenkins", "Docker", "SonarQube", "OWASP"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Kubernetes + ArgoCD",
      description: "Implemented GitOps-based deployments with ArgoCD, syncing apps automatically and monitoring resources via K8s Dashboard.",
      tech: ["ArgoCD", "Kubernetes", "GitOps"],
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/4 right-10 w-55 h-55 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              Prashant Siddhpura
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-300 text-white/90 font-medium ${
                    activeSection === item ? 'text-cyan-300 border-b-2 border-cyan-300' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
              Hi, I'm Prashant Siddhpura
            </h1>
            <p className="text-xl md:text-3xl text-white font-medium mb-8 animate-fade-in-delay-1 drop-shadow-lg">
              Aspiring Software Engineer
            </p>
            <p className="text-base md:text-lg text-gray-100 max-w-4xl mx-auto mb-12 leading-snug animate-fade-in-delay-2 drop-shadow-md">
            With 6+ months of hands-on experience, I'm a Software Developer with strong skills in JavaScript, TypeScript, React, Node.js, Express.js, and database management. Experienced in building scalable backend APIs and full-stack applications. Additionally skilled in AWS, Docker, CI/CD pipelines, and Kubernetes, bringing a cloud-native mindset to modern development workflows.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <a href="https://github.com/prashant-siddhpura" target="_blank" rel="noreferrer" 
               className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/prashant-siddhpura" target="_blank" rel="noreferrer"
               className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=prashant.siddhpura03@gmail.com&su=Portfolio Inquiry&body=Hi Prashant,%0D%0A%0D%0AI found your portfolio and would like to discuss..."
               target="_blank"
               rel="noreferrer"
               className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-delay-4"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={skill.name}
                  className="group relative p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-base text-white">{skill.name}</h3>
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * (100 / 3)}%)` }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="group relative bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                      <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                      <div className="p-4 h-full flex flex-col">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-3 leading-relaxed text-sm flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs bg-slate-700/50 rounded-full border border-slate-600/50 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open('https://github.com/prashant-siddhpura', '_blank')
                          }}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300 group-hover:scale-105 relative z-10"
                        >
                          <span>View Code</span>
                          <ExternalLink size={14} />
                        </button>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-3 hover:bg-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-3 hover:bg-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.max(1, projects.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to project set ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Get In Touch
          </h2>
          
          {!showContactForm ? (
            <div className="text-center">
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
                I'm open to opportunities as a Software Engineer. Let's discuss how we can build amazing things together!
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
                <button
                  onClick={handleDirectEmail}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur rounded-full font-semibold border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Direct Email
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleFormSubmit}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                  <button
                    onClick={() => setShowContactForm(false)}
                    className="px-8 py-4 bg-slate-800/50 backdrop-blur rounded-full font-semibold border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Prashant Siddhpura. Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default App