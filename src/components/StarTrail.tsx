import { useEffect, useState } from 'react';

const StarTrail = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setStars(prev => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 10 + 5,
          opacity: 1
        }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setStars(prev => 
        prev.map(star => ({
          ...star,
          opacity: star.opacity - 0.05
        })).filter(star => star.opacity > 0)
      );
    }, 10);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-999 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-pink-400 animate-pulse"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px 2px rgba(246, 51, 154, 0.7)'
          }}
        >
          <img src="./src/assets/png/star.png" alt="" />
        </div>
      ))}
    </div>
  );
};

export default StarTrail;