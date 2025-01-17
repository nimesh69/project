import React, { useState, useEffect } from "react";
import {
  Menu,
  Home,
  User,
  FolderGit2,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Facebook,
  Cable,
} from "lucide-react";
import projectImage from "./images/Screenshot 2025-01-17 093230.png";
import projectImage1 from "./images/0_00.png";
import projectImage2 from "./images/Screenshot 2025-01-17 103959.png";
import projectImage5 from "./images/Screenshot 2025-01-17 104756.png";
import projectImage3 from "./images/Screenshot 2025-01-17 105836.png";
import projectImage4 from "./images/Screenshot 2025-01-17 110157.png";
import profile from "./images/20211113_110355 - Copy.jpg";
function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("darkMode");
      return savedTheme !== null ? savedTheme === "true" : true; // Default to true for dark theme
    }
    return true; // Default to true for dark theme
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "connect", "contact me"];
      const current = sections.find((section) => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle Button - Adjusted position */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-20 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Portfolio
            </h1>

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
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "contact", label: "Contact", icon: Mail},
                { id: "projects", label: "Projects", icon: FolderGit2 },
                { id: "connect", label: "Connect", icon: Cable },

              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
            {[
              { id: "home", label: "Home", icon: Home },
              { id: "about", label: "About", icon: User },
              { id: "projects", label: "Projects", icon: FolderGit2 },
              { id: "connect", label: "Connect", icon: Mail },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors ${
                  activeSection === id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I'm a passionate developer creating amazing web experiences
            </p>
            <a
              href="mailto:nimeshstha79@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-md hover:scale-105 transform transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713 1.6 6.072A2.4 2.4 0 0 1 3.2 4h17.6a2.4 2.4 0 0 1 1.6.616l-10.4 6.097Zm-.8 1.022L2 7.272v10.328a2.4 2.4 0 0 0 2.4 2.4h15.2a2.4 2.4 0 0 0 2.4-2.4V7.272l-9.2 6.463a1.6 1.6 0 0 1-1.6 0Z" />
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center py-20 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl mx-auto px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-12">
              {/* Left Side: Circular Image */}
              <div className="flex justify-center">
                <img
                  src={profile} // Replace with the path to your image
                  alt="Profile"
                  className="w-60 h-60 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
                />
              </div>

              {/* Right Side: About Me Content */}
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-center md:text-left">
                  About Me
                </h2>
                <p className="text-lg leading-relaxed text-center md:text-left">
                  I have completed several projects in development, including: a
                  football website where users can check player statistics for
                  the 23/24 season from the top 5 leagues. Two websites
                  developed for college projects. An AI project focused on
                  enhancing and restoring images. A hand gesture recognition
                  system and an image classification project.
                </p>
                <p className="text-lg leading-relaxed text-center md:text-left">
                  These projects showcase my skills and passion for development
                  and problem-solving in various domains.
                </p>
                <p className="text-lg font-semibold text-center md:text-left">
                  <span className="text-gray-600 dark:text-gray-400">
                    Interests:
                  </span>{" "}
                  Football, Cricket, Artificial Intelligence & Coding Challenges
                </p>
              </div>
            </div>

            {/* Skills Section: Spanning Across the X-axis */}
            <div className="mt-20">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">
                My Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "C",
                  "C++",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Bootstrap",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "SQL",
                  "Git",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
  id="contact"
  className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side: Get in Touch Heading and Description */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 py-10">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Whether you have a question or want to discuss a project, I'm here to
          help. Reach out to me and let's get started on your next project. It
          won't work but I can make it work for you.
        </p>
      </div>

      {/* Right Side: Contact Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name *
            </label>
            <input
              type="text"
              id="first-name"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 py-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="last-name"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 py-2"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 py-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 py-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>



        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Hand-Gesture-Recognition",
                  description:
                    "A cutting-edge project utilizing computer vision for recognizing hand gestures, enhancing user interaction with devices.",
                  image: projectImage, // Replace with your image path
                  github:
                    "https://github.com/nimesh69/Hand-Gesture-Recognition", // GitHub link
                },
                {
                  id: 2,
                  title: "Recovering-and-Enhancing-Digital-Facial-Images",
                  description:
                    "An app designed to improve and restore digital facial images using advanced algorithms(GAN), offering enhanced visual experiences.",
                  image: projectImage1,
                  github:
                    "https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-",
                },
                {
                  id: 3,
                  title: "Portfolio",
                  description:
                    "A dynamic portfolio website showcasing personal projects, designed to highlight technical skills and professional achievements.",
                  image: projectImage2,
                  github: "https://github.com/nimesh69/project",
                },
                {
                  id: 4,
                  title: "Major project Website",
                  description:
                    "A machine learning-based web application focused on solving real-world problems in a specific industry, improving operational efficiency.",
                  image: projectImage3,
                  github: "https://github.com/nimesh69/project-website",
                },
                {
                  id: 5,
                  title: "Football Stat Website",
                  description:
                    "An open-source web application for managing and analyzing football statistics, designed to simplify football data management.",
                  image: projectImage4,
                  github: "https://github.com/nimesh69/football-dbms-",
                },
                {
                  id: 6,
                  title: "Minor Project Website",
                  description:
                    "A website created to provide resources and solutions for community-driven improvements in a specific sector, with a focus on accessibility and innovation.",
                  image: projectImage5,
                  github: "https://github.com/nimesh69/website",
                },
              ].map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <div id="connect" className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Let's Connect
          </h2>
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
              <span className="text-gray-600 dark:text-gray-300">
                Instagram
              </span>
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
      </main>
    </div>
  );
}

export default App;
