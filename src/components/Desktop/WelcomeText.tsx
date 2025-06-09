import React, { useRef } from 'react';

const WelcomeText: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  // Simple "text pressure" animation on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = textRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const maxTilt = 20;
    const tiltX = (y / (rect.height / 2)) * maxTilt;
    const tiltY = -(x / (rect.width / 2)) * maxTilt;
    el.style.transform = `scale(1.08) perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    el.style.transition = 'transform 0.1s';
  };

  const handleMouseLeave = () => {
    const el = textRef.current;
    if (!el) return;
    el.style.transform = 'scale(1) perspective(400px) rotateX(0deg) rotateY(0deg)';
    el.style.transition = 'transform 0.5s';
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <h2 className="text-3xl text-gray-700 font-light">welcome to my</h2>
      <h1
        ref={textRef}
        className="text-8xl text-gray-900 font-serif italic tracking-tight pointer-events-auto select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ willChange: 'transform' }}
      >
        portfolio.
      </h1>
    </div>
  );
};

export default WelcomeText;