import React from 'react';
import FolderIcon from '../Desktop/FolderIcon';

interface ExplorerContentProps {
  selectedSection: string;
  onSectionChange?: (section: string) => void;
}

const ExplorerContent: React.FC<ExplorerContentProps> = ({ selectedSection, onSectionChange }) => {
  const getSectionTitle = () => {
    switch (selectedSection) {
      case 'work':
        return 'Work';
      case 'project01':
        return 'Project 01';
      case 'project02':
        return 'Project 02';
      case 'project03':
        return 'Project 03';
      case 'about':
        return 'About Me';
      case 'resume':
        return 'Resume';
      default:
        return 'Work';
    }
  };

  const getSubtitle = () => {
    if (selectedSection === 'work') {
      return 'Recent Projects';
    }
    return '';
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'work':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">🚀 Top Recognized Projects</h2>
              <p className="mb-6 text-gray-700">
                I have developed and led several high-impact projects that have received recognition and awards for their innovation, user-centric design, and technical execution. These projects span across diverse domains — from vegan e-commerce and healthcare digitization to AI-driven fashion technology — demonstrating my versatility in full-stack development, UI/UX, and smart systems integration.
              </p>

              {/* ALTCORedesigned */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">🥇 ALTCORedesigned – Vegan Product Platform</h3>
                <p className="text-gray-600 mb-1">Recognized for UI/UX innovation and seamless user interaction</p>
                <p className="mb-2">
                  A complete redesign of "Alto" to align with the growing demand for ethical consumerism and vegan products. The focus was on creating a minimalist yet highly functional interface that provides a smooth, engaging experience.
                </p>
                <p className="mb-1 text-sm text-gray-500"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, GSAP, Lenis, Three.js</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
                  <li>Prioritized user experience, ensuring clean aesthetics, accessibility, and intuitive navigation.</li>
                  <li>Used GSAP and Lenis for fluid animations and scrolling behavior.</li>
                  <li>Integrated Three.js to add immersive, interactive 3D elements.</li>
                  <li>Followed an Agile development process with regular testing and user feedback to improve design iteratively.</li>
                </ul>
              </div>

              {/* Swasthlekh */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">🏅 Swasthlekh – Digital Medical Records System</h3>
                <p className="text-gray-600 mb-1">Awarded for its impact on healthcare digitization and data security</p>
                <p className="mb-2">
                  A healthcare transformation solution designed to digitize patient records, replacing paperwork with structured, secure digital entries while enhancing patient engagement.
                </p>
                <p className="mb-1 text-sm text-gray-500"><strong>Problem Solved:</strong> Cumbersome and error-prone physical recordkeeping in clinics and hospitals.</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
                  <li>Digital repository for patient medical records with easy accessibility.</li>
                  <li>Role-based access control for data privacy and security.</li>
                  <li>Built-in chat system to facilitate guidance during recovery and provide clarification on medical reports.</li>
                  <li>Improved medical workflow by reducing delays and enhancing collaboration between doctors and patients.</li>
                </ul>
              </div>

              {/* Fashion Fusion */}
              <div>
                <h3 className="text-xl font-semibold mb-1">🏆 Fashion Fusion – Smart AI Styling App</h3>
                <p className="text-gray-600 mb-1">Recognized for innovation in fashion-tech using AI and real-time previews</p>
                <p className="mb-2">
                  An AI-driven fashion recommendation platform that bridges technology and style. This app empowers users to make confident wardrobe choices based on their unique physical attributes.
                </p>
                <p className="mb-1 text-sm text-gray-500"><strong>Tech Stack:</strong> AI model integration, API.Market for real-time previews, frontend in JS</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-2">
                  <li><strong>Smart Recommendations:</strong> Analyzes user photos to suggest outfits tailored to their face shape, body type, and personal vibe.</li>
                  <li><strong>Virtual Try-Ons:</strong> Users can interactively try on clothes in real-time using live preview APIs.</li>
                  <li><strong>End-to-End Shopping:</strong> Streamlined experience from outfit discovery to checkout, enhancing customer satisfaction.</li>
                </ul>
              </div>
            </div>
            
          </div>
        );
      case 'about':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
             
              <p className="mb-4">
                Hey there! I'm Ayush Thakur, a dedicated student of computer science and engineering at DCE GGN.
              </p>
              <p className="mb-4">
                I'm a 5-star ⭐ coder on HackerRank, a LeetCode enthusiast, and an active member of the Student Coding Group at my college.
              </p>
              <p className="mb-4">
                I'm passionate about frontend development, with strong expertise in UI/UX design.
              </p>
              <p className="mb-4">
                I enjoy reading technology blogs and have an impressive track record in professional taekwondo, having won three medals for my club.
              </p>
              <p className="mb-4">
                I also participated in NSAT 2015 and qualified for the city finals in the Times of India School League.
              </p>

              {/* Coding Profiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="h-6" />
                    LeetCode Profile
                  </h3>
                  <a
                    href="https://leetcode.com/AyushThakur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="./Public/Leetcode.png"
                      alt="LeetCode Profile"
                      className="w-full rounded-lg border hover:shadow-lg transition"
                      style={{ minHeight: 120, objectFit: 'cover' }}
                    />
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="h-6" />
                    HackerRank Profile
                  </h3>
                  <a
                    href="https://www.hackerrank.com/profile/ayushthakur124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="./Public/Hack.png"
                      alt="HackerRank Profile"
                      className="w-full rounded-lg border hover:shadow-lg transition"
                      style={{height:140 , minHeight: 120, objectFit: 'cover' }}
                    />
                  </a>
                </div>
              </div>

              {/* Achievements Gallery */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">🏅 Achievements & Certifications</h3>
                <div className="grid grid-cols-4 md:grid-cols-3 gap-3">
                  <img
                    src="./Public/CERTIFICATE_LANDING_PAGE~4579Q33VABFY.jpeg"
                    alt="LeetCode Certificate"
                    className="rounded-lg shadow border"
                    style={{minHeight: 120, objectFit: 'contain' }}
                  />
                  <img
                    src="./Public/CERTIFICATE_LANDING_PAGE~UQF6BMAGLWSV.jpeg"
                    alt="HackerRank Certificate"
                    className="rounded-lg shadow border"
                    style={{minHeight: 120, objectFit: 'contain' }}
                  />
                  <img
                    src="./Public/c1.png"
                    alt="Taekwondo Certificate"
                    className="rounded-lg shadow border"
                    style={{height:235,width:350 ,objectFit: 'cover' }}
                  />
                  <img
                    src="./Public/c4.png"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295,width:450 ,objectFit: 'cover' }}
                  />
                   <img
                    src="./Public/c3.png"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295 , width: 450, objectFit: 'cover' }}
                  />
                   <img
                    src="./Public/c5.png"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295 , width: 350, objectFit: 'contain' }}
              
                  />
                   <img
                    src="./Public/c6.png"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295 , minHeight: 120, objectFit: 'contain' }}
                  />
                   <img
                    src="./Public/b8abd554-b6b5-448f-80e4-4b8f1583bdf1.jpg"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295 , minHeight: 120, objectFit: 'contain' }}
                  />
                   <img
                    src="./Public/c9.jpg"
                    alt="NSAT Certificate"
                    className="rounded-lg shadow border"
                    style={{height:295 , width:355, objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'resume':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-2">Download my resume or view it online.</p>
              <a
                href="./Public/resume.pdf"
                download="Ayush_Thakur_Resume.pdf"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-block mb-4"
              >
                Download PDF
              </a>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Preview</h3>
                <iframe
                  src="./Public/resume.pdf"
                  title="Resume Preview"
                  className="w-full border rounded-lg"
                  style={{ minHeight: 500 }}
                ></iframe>
              </div>
            </div>
          </div>
        );
      case 'project01':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">🥇 ALTCORedesigned – Vegan Product Platform</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src="./Public/at.png"
                    alt="ALTCORedesigned Screenshot"
                    className="rounded-lg shadow w-full md:w-1/2"
                  />
                </div>
                <p className="mb-2 text-gray-700">
                  Recognized for UI/UX innovation and seamless user interaction
                </p>
                <p className="mb-4">
                  A complete redesign of "Alto" to align with the growing demand for ethical consumerism and vegan products. The focus was on creating a minimalist yet highly functional interface that provides a smooth, engaging experience.
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript, GSAP, Lenis, Three.js
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                  <li>Prioritized user experience, ensuring clean aesthetics, accessibility, and intuitive navigation.</li>
                  <li>Used GSAP and Lenis for fluid animations and scrolling behavior.</li>
                  <li>Integrated Three.js to add immersive, interactive 3D elements.</li>
                  <li>Followed an Agile development process with regular testing and user feedback to improve design iteratively.</li>
                </ul>
                <a
                  href="https://team-nkg-reimagine-round1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        );
      case 'project02':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">🏅 Swasthlekh – Digital Medical Records System</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src="./Public/p2.png"
                    alt="Swasthlekh Screenshot"
                    className="rounded-lg shadow w-full md:w-1/2"
                  />
                </div>
                <p className="mb-2 text-gray-700">
                  Awarded for its impact on healthcare digitization and data security
                </p>
                <p className="mb-4">
                  A healthcare transformation solution designed to digitize patient records, replacing paperwork with structured, secure digital entries while enhancing patient engagement.
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  <strong>Problem Solved:</strong> Cumbersome and error-prone physical recordkeeping in clinics and hospitals.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                  <li>Digital repository for patient medical records with easy accessibility.</li>
                  <li>Role-based access control for data privacy and security.</li>
                  <li>Built-in chat system to facilitate guidance during recovery and provide clarification on medical reports.</li>
                  <li>Improved medical workflow by reducing delays and enhancing collaboration between doctors and patients.</li>
                </ul>
                <a
                  href="https://swasthlekh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        );
      case 'project03':
        return (
          <div className="h-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">🏆 Fashion Fusion – Smart AI Styling App</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src="./Public\Screenshot 2025-06-05 115659.png"
                    alt="Fashion Fusion Screenshot"
                    className="rounded-lg shadow w-full md:w-1/2"
                  />
                </div>
                <p className="mb-2 text-gray-700">
                  Recognized for innovation in fashion-tech using AI and real-time previews
                </p>
                <p className="mb-4">
                  An AI-driven fashion recommendation platform that bridges technology and style. This app empowers users to make confident wardrobe choices based on their unique physical attributes.
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  <strong>Tech Stack:</strong> AI model integration, API.Market for real-time previews, frontend in JS
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                  <li><strong>Smart Recommendations:</strong> Analyzes user photos to suggest outfits tailored to their face shape, body type, and personal vibe.</li>
                  <li><strong>Virtual Try-Ons:</strong> Users can interactively try on clothes in real-time using live preview APIs.</li>
                  <li><strong>End-to-End Shopping:</strong> Streamlined experience from outfit discovery to checkout, enhancing customer satisfaction.</li>
                </ul>
                <a
                  href="https://www.linkedin.com/posts/api%2Emarket_fashionfusion-stylemeetstech-virtualtryon-activity-7320373816684093440-VM7Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPKfQIBtRlfTmTCDgeTufrsQgFc5eIdpeU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="p-6">Select a section from the sidebar</div>;
    }
  };

  return (
    <div className="flex-1 bg-gray-50 flex flex-col h-full">
      <div className="border-b border-gray-200 p-4 shrink-0">
        <h1 className="text-xl font-semibold">{getSectionTitle()}</h1>
        {getSubtitle() && <p className="text-sm text-gray-500">{getSubtitle()}</p>}
      </div>
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ExplorerContent;