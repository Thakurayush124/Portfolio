import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext
}) => {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
        
        {/* Caption */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          <p className="text-center font-handwriting text-lg">{currentImage.caption}</p>
          {images.length > 1 && (
            <p className="text-center text-sm text-gray-300 mt-1">
              {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;