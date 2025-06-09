import React, { useState } from 'react';

interface DockIconProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  url?: string;
  onClick?: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ icon, name, color, url, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className="flex flex-col items-center group">
      <div 
        className={`relative ${isHovered ? 'scale-100' : 'scale-90'} transition-all duration-200 ease-in-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ cursor: url || onClick ? 'pointer' : 'default' }}
      >
        <div className={`flex items-center justify-center ${color} w-12 h-12 rounded-xl shadow-md`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        {isHovered && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {name}
          </div>
        )}
        
        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-black ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
      </div>
    </div>
  );
};

export default DockIcon;