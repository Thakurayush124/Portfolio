import React from 'react';

const DesktopGrid: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(200, 200, 200, 0.2) 1px, transparent 5px),
          linear-gradient(to bottom, rgba(200, 200, 200, 0.2) 1px, transparent 5px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center center',
      }}
    ></div>
  );
};

export default DesktopGrid;