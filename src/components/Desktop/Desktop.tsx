import React, { useEffect, useState } from 'react';
import FolderIcon from './FolderIcon';
import StickyNote from './StickyNote';
import DesktopGrid from './DesktopGrid';
import WelcomeText from './WelcomeText';

interface DesktopProps {
  onFolderClick: (folder: string) => void;
}

const DEFAULT_POSITIONS = {
  "About Me": { x: 370, y: 170 },
  "Resume.pdf": { x: 370, y: 370 },
  "Project 01 ...": { x: 900, y: 370 },
  "Project 02 ...": { x: 1200, y: 370 },
  "Project 03 ...": { x: 1050, y: 570 },
};

const FOLDER_KEYS = Object.keys(DEFAULT_POSITIONS);

const FOLDER_SECTION_MAP: { [key: string]: string } = {
  "About Me": "about",
  "Resume.pdf": "resume",
  "Project 01 ...": "project01",
  "Project 02 ...": "project02",
  "Project 03 ...": "project03",
  "Don't Look": "Trash",
  // Add more if needed
};

const TrashScreen: React.FC = () => (
  <div className="absolute left-[220px] top-4 right-4 bottom-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
    {/* Window Header */}
    <div className="flex items-center h-10 px-4 border-b border-gray-200">
      <div className="flex space-x-2 mr-4">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
      <span className="font-semibold text-lg text-gray-800">Trash</span>
      <span className="ml-3 text-xs text-gray-400">I said, don't look!</span>
    </div>
    {/* Files */}
    <div className="flex-1 flex flex-col items-center justify-center pt-8">
      <div className="flex space-x-12">
        {/* File 1 */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios/50/000000/document--v1.png" alt="txt" className="w-14 h-14 mb-1" />
          <span className="text-xs text-gray-700 text-center">World Domination<br />Plan.txt</span>
        </div>
        {/* File 2 */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios/50/ff0000/portrait.png" alt="breakdown" className="w-14 h-14 mb-1 rounded border-2 border-red-400" />
          <span className="text-xs text-gray-700 text-center">breakdown.img</span>
        </div>
        {/* File 3 */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios/50/000000/pdf.png" alt="pdf" className="w-14 h-14 mb-1" />
          <span className="text-xs text-gray-700 text-center">sorry_no<br />thanks.pdf</span>
        </div>
        {/* File 4 */}
        <div className="flex flex-col items-center">
          <img src="https://img.icons8.com/ios/50/000000/safari--v1.png" alt="safari" className="w-14 h-14 mb-1" />
          <span className="text-xs text-gray-700 text-center">portfolio_2024.<br />com</span>
        </div>
      </div>
    </div>
  </div>
);

const Desktop: React.FC<DesktopProps & { activeSection: string }> = ({ onFolderClick, activeSection }) => {
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } }>(() => {
    const saved = localStorage.getItem('folderPositions');
    return saved ? JSON.parse(saved) : DEFAULT_POSITIONS;
  });

  // Save positions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('folderPositions', JSON.stringify(positions));
  }, [positions]);

  // Handler to update position after drag
  const handlePositionChange = (name: string, pos: { x: number; y: number }) => {
    setPositions(prev => ({
      ...prev,
      [name]: pos,
    }));
  };

  return (
    <div className="h-full relative overflow-hidden">
      <DesktopGrid />
      <div className="absolute inset-0 p-4">
        <StickyNote className="absolute lg:left-10 lg:top-16 md:left-8 md:top-12 left-4 top-8" />
        <WelcomeText />

        {/* If Trash is active, render TrashScreen, else render folders */}
        {activeSection === "Trash" ? (
          <TrashScreen />
        ) : (
          FOLDER_KEYS.map(name => (
            <FolderIcon
              key={name}
              name={name}
              isFile={name === "Resume.pdf"}
              onClick={() => {
                const section = FOLDER_SECTION_MAP[name];
                if (section) onFolderClick(section);
              }}
              initialPosition={positions[name]}
              onPositionChange={pos => handlePositionChange(name, pos)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Desktop;