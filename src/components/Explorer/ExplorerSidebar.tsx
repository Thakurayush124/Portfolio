import React from 'react';
import { Folder, User, FileText } from 'lucide-react';

interface ExplorerSidebarProps {
  selectedSection: string;
  onSectionClick: (section: string) => void;
}

const ExplorerSidebar: React.FC<ExplorerSidebarProps> = ({ 
  selectedSection, 
  onSectionClick 
}) => {
  const windowControls = [
    { color: 'bg-red-500' },
    { color: 'bg-yellow-500' },
    { color: 'bg-green-500' },
  ];

  const mainSections = [
    { id: 'work', label: 'Work', icon: <Folder size={16} /> },
    { id: 'about', label: 'About Me', icon: <User size={16} /> },
    { id: 'resume', label: 'Resume', icon: <FileText size={16} /> },

  ];

  const projectSections = [
    { id: 'project01', label: 'Project 01' },
    { id: 'project02', label: 'Project 02' },
    { id: 'project03', label: 'Project 03' },
  ];

  return (
    <div className="w-44 bg-gray-100 border-r border-gray-200 flex flex-col h-full">
      <div className="p-3 flex space-x-2">
        {windowControls.map((control, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${control.color}`}></div>
        ))}
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="px-3 py-2">
          <p className="text-xs text-gray-500 mb-2">Section Header</p>
          {mainSections.map(section => (
            <button
              key={section.id}
              className={`flex items-center w-full px-2 py-1 rounded-md text-sm mb-1 ${
                selectedSection === section.id ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
              onClick={() => onSectionClick(section.id)}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
        
        <div className="px-3 py-2">
          <p className="text-xs text-gray-500 mb-2">Section Header</p>
          {projectSections.map(section => (
            <button
              key={section.id}
              className={`flex items-center w-full px-2 py-1 rounded-md text-sm mb-1 ${
                selectedSection === section.id ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
              onClick={() => onSectionClick(section.id)}
            >
              <Folder size={16} className="mr-2" />
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorerSidebar;