import React, { useState } from 'react';
import ExplorerSidebar from './ExplorerSidebar';
import ExplorerContent from './ExplorerContent';

interface ExplorerProps {
  activeFolder: string | null;
}

const Explorer: React.FC<ExplorerProps> = ({ activeFolder }) => {
  const [selectedSection, setSelectedSection] = useState<string>(activeFolder || 'work');

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="h-full flex">
      <ExplorerSidebar 
        selectedSection={selectedSection} 
        onSectionClick={handleSectionClick} 
      />
      <ExplorerContent selectedSection={selectedSection} />
    </div>
  );
};

export default Explorer;