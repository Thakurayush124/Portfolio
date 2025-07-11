import React, { useState } from 'react';
import {
  Home,
  Github,
  Instagram,
  Music2,
  Linkedin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import PhotoShowcase from './components/PhotoShowcase';
import CalendarModal from './components/CalendarModal';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const workExperience = [
    {
      period: "Jul 2025 - Present",
      title: " Full Stack Engineer Intern at",
      company: "IkesysIT",
      color: "bg-orange-100 text-orange-800"
    },
    {
      period: "Sep 2024 - Jun 2025",
      title: "Technical Team Lead",
      company: "Google Developer Group (GDG) ",
      color: "bg-pink-100 text-pink-800"
    },
    {
      period: "May 2024 - JuL 2024",
      title: "Frontend Developer at",
      company: "C4-Capture Pvt",
      color: "bg-blue-100 text-blue-800"
    },
    {
      period: "Jun 2023 - Dec 2023",
      title: "Intern at",
      company: "UniKaksha",
      color: "bg-purple-100 text-purple-800"
    },
  ];

  const projects = [
    {
      title: "ALTCORedesigned – Vegan Product Platform",
      description: "Recognized for UI/UX innovation and seamless user interaction. A complete redesign of Alto to align with the growing demand for ethical consumerism and vegan products. The focus was on creating a minimalist yet highly functional interface that provides a smooth, engaging experience.",
      image: "https://raw.githubusercontent.com/Thakurayush124/image/main/at.png",
      tags: ["JavaScript", "Canvas", "HTML", "CSS", "GSAP", "Three.js", "Lenis.js"],
      type: "Interactive",
      link: "https://team-nkg-reimagine-round1.vercel.app/"
    },
    {
      title: "Swasthlekh – Digital Medical Records System",
      description: "Awarded for its impact on healthcare digitization and data security. A healthcare transformation solution designed to digitize patient records, replacing paperwork with structured, secure digital entries while enhancing patient engagement.",
      image: "https://raw.githubusercontent.com/Thakurayush124/image/main/p2.png",
      tags: ["React", "TypeScript", "Canvas", "MongoDB", "Node.js", "Express"],
      type: "Creative Tool",
      link: "https://swasthlekh.vercel.app/"
    },
    {
      title: "Fashion Fusion – Smart AI Styling App",
      description: "Recognized for innovation in fashion-tech using AI and real-time previews. An AI-driven fashion recommendation platform that bridges technology and style.",
      image: "https://raw.githubusercontent.com/Thakurayush124/image/main/Screenshot%202025-06-05%20115659.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Media-pipe", "Lang-chain", "Flask"],
      type: "Productivity",
      link: "https://www.linkedin.com/posts/api%2Emarket_fashionfusion-stylemeetstech-virtualtryon-activity-7320373816684093440-VM7Z"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center pt-8 pb-16">
        <nav className="bg-white rounded-full border border-gray-200 shadow-sm px-6 py-3">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="/" title="Home"><Home className="w-5 h-5 text-gray-600 hover:text-gray-900" /></a>
              <a href="https://github.com/Thakurayush124" target="_blank" rel="noopener noreferrer" title="GitHub"><Github className="w-5 h-5 text-gray-600 hover:text-gray-900" /></a>
              <a href="https://www.instagram.com/ayushthakur1242021/" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900" /></a>
              <a href="https://open.spotify.com/user/31rahoimntfuabtabsdy6p6n5p3i?si=ca3300486f544e3c" target="_blank" rel="noopener noreferrer" title="Music"><Music2 className="w-5 h-5 text-gray-600 hover:text-gray-900" /></a>
              <a href="https://www.linkedin.com/in/ayush-thakur-542bb4202/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" /></a>
            </div>
            <button onClick={() => setIsCalendarOpen(true)} className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 text-sm font-medium">
              Book a call
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex justify-start">
            <img src="https://raw.githubusercontent.com/Thakurayush124/image/main/Screenshot%202025-07-11%20115239.png" alt="Ayush" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Hey, I'm Ayush.<br />Engineer & Designer.</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">Most designers can't code. Most developers can't design. I do both.<br />3 years turning ideas into profitable products.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Hire me</button>
            <button className="bg-green-100 text-green-800 px-6 py-3 rounded-lg hover:bg-green-200">• Open to Opportunities</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-sm">
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">About</h2>
          <p>I'm Ayush, Design engineer in Delhi, born in India.</p>
          <p><strong>Here's what I actually do:</strong> I take your broken interfaces and make them work. I make them "just work" - actually function as 60fps while being accessible to everyone.</p>
          <p>Most designers can't code. Most developers can't design. I do both. While other people methodize, I'm shipping pixel-perfect interfaces that perform.</p>
          <p>No fuss about "user experience" - I get it right because I know what I'm doing.</p>
          <p>The result? Interfaces that don't just impress your users - they convert them.</p>
          <p><strong>I also blog about design, development, and everything in between.</strong></p>
          <p>When I'm not coding, I'm at the gym or watching anime. Hit chocolate over coffee, always.</p>
          <p><strong>I don't just build interfaces. I build interfaces that work.</strong></p>
        </div>
      </section>

      <PhotoShowcase />

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to my Newsletter</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">Tired of tutorials that don't work and crappy content? You're not alone. Every week I send you what actually works. No fluff, just results.</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900" required />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Subscribe Now</button>
            </div>
          </form>
          {isSubscribed && <p className="mt-4 text-green-400">Thanks for subscribing! Check your email.</p>}
          <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe anytime. Over 15k+ subscribers.</p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">{job.period}</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-900 font-medium">{job.title}</p>
                  {job.company && <span className={`px-2 py-1 rounded-full text-xs font-medium ${job.color}`}>{job.company}</span>}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 mt-2 sm:mt-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Here's What I've Been Up To.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden">
              <div className="p-6">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
        <p className="text-lg text-gray-600 mb-8">Building something that needs to convert? Need a design engineer who actually ships products that make money? I'm down to work on projects that solve real problems. Hit me up if you're serious about results.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800">Send Message</button>
          <span className="text-gray-500">or</span>
          <button onClick={() => setIsCalendarOpen(true)} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200">Book a call</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 text-sm">Copyright © 2025 Ayush</p>
          <p className="text-gray-400 text-sm mt-1">All rights reserved.</p>
        </div>
      </footer>

      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </div>
  );
}

export default App;
