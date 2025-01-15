import React, { useState, useEffect } from 'react';
import { Menu, Home, User, FolderGit2, Sun, Moon, Github, Linkedin, Twitter, Instagram, Mail, Facebook } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme !== null ? savedTheme === 'true' : true; // Default to true for dark theme
    }
    return true; // Default to true for dark theme
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'connect'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle Button - Adjusted position */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-20 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: FolderGit2 },
                { id: 'connect', label: 'Connect', icon: Mail },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: FolderGit2 },
              { id: 'connect', label: 'Connect', icon: Mail },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors ${
                  activeSection === id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm a passionate developer creating amazing web experiences
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications.
                With expertise in modern web technologies, I strive to deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { id: 1, title: "Project 1", description: "An innovative project solving problem X with technology Y." },
        { id: 2, title: "Project 2", description: "A creative app designed for enhancing user experience in Z." },
        { id: 3, title: "Project 3", description: "A powerful tool for streamlining workflows in A industry." },
        { id: 4, title: "Project 4", description: "A machine learning solution tackling challenges in B field." },
        { id: 5, title: "Project 5", description: "An open-source library simplifying development in C." },
        { id: 6, title: "Project 6", description: "A community-driven project aimed at D sector improvements." }
      ].map((project) => (
        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Connect Section */}
        <section id="connect" className="min-h-screen py-20 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Let's Connect</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <a
                href="https://github.com/nimesh69"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nimesh-shrestha-b22057206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">LinkedIn</span>
              </a>
              <a
                href="https://x.com/___Daku___"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-8 h-8 text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/__nimeshshrestha__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                <span className="text-gray-600 dark:text-gray-300">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/nimesh.stha.75"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                <span className="text-gray-600 dark:text-gray-300">Facebook</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;