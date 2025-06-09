import React, { useState } from 'react';
import { Folder, FileText } from 'lucide-react';

interface FolderIconProps {
  name: string;
  className?: string;
  onClick: () => void;
  isFile?: boolean;
  initialPosition?: { x: number; y: number };
  onPositionChange?: (pos: { x: number; y: number }) => void;
}

const FolderIcon: React.FC<FolderIconProps> = ({
  name,
  className,
  onClick,
  isFile = false,
  initialPosition = { x: 0, y: 0 },
  onPositionChange,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (!dragging || e.clientX === 0 && e.clientY === 0) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (onPositionChange) {
      onPositionChange(position);
    }
  };

  return (
    <div
      className={`flex flex-col items-center w-24 group cursor-pointer ${className}`}
      onClick={onClick}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        marginLeft: '10px',
        marginRight: '10px',
        zIndex: dragging ? 999 : 20,
        cursor: dragging ? 'grabbing' : 'pointer',
        userSelect: 'none',
      }}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-[#3498db] text-white p-2 rounded-md mb-3 transition-transform group-hover:scale-105 shadow-lg">
        {isFile ? (
          <FileText size={32} className="text-white" />
        ) : (
          <Folder size={32} fill="#b3e5fc" className="text-white" />
        )}
      </div>
      <p
        className="text-xs text-center font-medium max-w-full truncate bg-white bg-opacity-95 px-3 py-1 rounded shadow-lg border border-gray-200"
        style={{
          minWidth: '80px',
          maxWidth: '100px',
          whiteSpace: 'nowrap',
          marginTop: '6px',
          position: 'relative',
          zIndex: 21,
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default FolderIcon;