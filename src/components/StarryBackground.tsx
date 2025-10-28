import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface Comet {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [comets, setComets] = useState<Comet[]>([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    // Generate comets
    const generateComets = () => {
      const newComets: Comet[] = [];
      for (let i = 0; i < 5; i++) {
        newComets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          angle: Math.random() * 360,
          speed: Math.random() * 0.5 + 0.2,
          size: Math.random() * 2 + 1,
        });
      }
      setComets(newComets);
    };

    generateStars();
    generateComets();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-blue-950/20 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-blue-950/40" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: star.opacity }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Comets */}
      {comets.map((comet) => (
        <motion.div
          key={comet.id}
          className="absolute"
          initial={{
            x: `${comet.x}vw`,
            y: `${comet.y}vh`,
            rotate: comet.angle,
          }}
          animate={{
            x: `${comet.x + 100}vw`,
            y: `${comet.y + 50}vh`,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {/* Comet head */}
          <div
            className="bg-gradient-to-r from-blue-300 to-white rounded-full"
            style={{
              width: `${comet.size * 2}px`,
              height: `${comet.size * 2}px`,
            }}
          />
          {/* Comet tail */}
          <div
            className="absolute top-1/2 left-full h-px bg-gradient-to-r from-blue-300/80 to-transparent"
            style={{
              width: `${comet.size * 20}px`,
              transform: 'translateY(-50%)',
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}