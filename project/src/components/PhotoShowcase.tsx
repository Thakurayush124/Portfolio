import React, { useState } from 'react';
import ImageModal from './ImageModal';

const PhotoShowcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/WhatsApp%20Image%202025-03-28%20at%2011.18.17%20AM.jpeg",
      alt: "Desk Setup",
      caption: "20th Birthday "
    },
    {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/tr.png",
      alt: "Winter House",
      caption: "Traditional Day"
    },
     {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/Jibhi.png",
      alt: "Jibhi",
      caption: "Jibhi"
    },
     {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/WhatsApp%20Image%202025-06-09%20at%204.12.05%20PM%20(1).jpeg",
      alt: "Night Out",
      caption: "Night Out"
    },
     {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/WhatsApp%20Image%202025-06-09%20at%204.12.05%20PM%20(2).jpeg",
      alt: "Squad Goals",
      caption: "Squad Goals"
    },
     {
      src: "https://raw.githubusercontent.com/Thakurayush124/image/main/WhatsApp%20Image%202025-06-09%20at%204.12.05%20PM.jpeg",
      alt: "Peace",
      caption: "Peace",
    }
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 font-medium">
            I don't just build interfaces. I build interfaces that work.
          </p>
        </div>
        
        <div className="flex justify-center items-center relative">
          <div className="relative">
            {/* First Photo - Desk Setup */}
            <div 
              className="bg-white p-4 rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer hover:shadow-xl"
              onClick={() => openModal(0)}
            >
              <div className="w-64 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                <img 
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-center text-gray-700 font-handwriting text-sm">{images[0].caption}</p>
            </div>
            
            {/* Second Photo - Winter Scene */}
            <div 
              className="bg-white p-4 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer absolute -right-16 top-8 hover:shadow-xl"
              onClick={() => openModal(1)}
            >
              <div className="w-64 h-48 bg-gradient-to-br from-blue-200 to-blue-400 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                <img 
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-center text-gray-700 font-handwriting text-sm">{images[1].caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

export default PhotoShowcase;