import React, { useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import MenuBar from './components/MenuBar/MenuBar';
import Dock from './components/Dock/Dock';
import Explorer from './components/Explorer/Explorer';

function App() {
  const [view, setView] = useState<'desktop' | 'explorer'>('desktop');
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    setActiveFolder(folderName);
    setView('explorer');
  };

  const handleBackToDesktop = () => {
    setView('desktop');
    setActiveFolder(null);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f0f0f0]">
      <MenuBar onBackClick={handleBackToDesktop} />
      
      <div className="flex-1 relative">
        {view === 'desktop' ? (
          <Desktop onFolderClick={handleFolderClick} activeSection={activeFolder ?? ''} />
        ) : (
          <Explorer activeFolder={activeFolder} />
        )}
      </div>
      
      <Dock />
    </div>
  );
}

export default App;