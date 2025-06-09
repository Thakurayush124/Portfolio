import React, { useState } from 'react';

interface StickyNoteProps {
  className?: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ className }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  
  const todoItems = [
    { text: "Land my dream UX job", completed: false },
    { text: "Drink water", completed: false },
    { text: "Move to the US", completed: true },
    { text: "Finish grad school without losing my mind", completed: false },
    { text: "Build that banger spotify playlist", completed: false },
    { text: "World domination", completed: false },
    { text: "Get really good at making pasta", completed: true },
    { text: "Travel somewhere new every year", completed: false },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`w-64 bg-yellow-100 p-4 rounded shadow-lg transform rotate-[0.5deg] cursor-move ${className}`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) rotate(0.5deg)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h3 className="text-gray-800 font-medium mb-2">To do:</h3>
      <ul className="space-y-1 text-sm">
        {todoItems.map((item, index) => (
          <li 
            key={index} 
            className={`${item.completed ? 'line-through text-gray-500' : ''}`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StickyNote;