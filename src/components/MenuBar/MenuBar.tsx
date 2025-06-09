import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Search, MessageCircle } from 'lucide-react';

interface MenuBarProps {
  onBackClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ onBackClick }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
      
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDate(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-between px-3 py-1 bg-mac-window backdrop-blur-mac border-b border-gray-200 h-9 text-sm">
      <div className="flex items-center gap-4">
        <button onClick={onBackClick} className="menu-item">
          <Apple size={16} className="text-gray-900" />
        </button>
        <span className="font-semibold truncate">Ayush Thakur's Portfolio</span>
        
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-700">
          <Wifi size={16} className="hidden sm:block" />
          <MessageCircle size={16} className="hidden sm:block" />
          <Battery size={16} className="hidden sm:block" />
          <Search size={16} />
        </div>
        <div className="text-xs text-gray-700 hidden sm:block">{currentDate}</div>
        <div className="text-xs text-gray-700">{currentTime}</div>
      </div>
    </div>
  );
};

export default MenuBar;