import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Book, Star, Heart, Sparkles, Play, ArrowRight } from 'lucide-react';

interface HeroPageProps {
  onEnterLibrary: () => void;
}

export function HeroPage({ onEnterLibrary }: HeroPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating animation variants
  const floatingElements = [
    { icon: Star, color: 'text-yellow-400', delay: 0 },
    { icon: Heart, color: 'text-pink-400', delay: 0.5 },
    { icon: Sparkles, color: 'text-purple-400', delay: 1 },
    { icon: Book, color: 'text-blue-400', delay: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -20, 0],
              opacity: [0, 1, 0.7, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          >
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
          </motion.div>
        ))}

        {/* Mouse-following sparkles */}
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <Sparkles className="w-5 h-5 text-purple-400 opacity-60" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Story Magic
            </motion.h1>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center items-center gap-4 mb-6"
            >
              {floatingElements.map(({ icon: Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className={`w-8 h-8 ${color}`} />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-purple-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Where every page comes alive with wonder and every story sparks imagination! 
              Discover magical tales that will take you on incredible adventures.
            </motion.p>
          </motion.div>

          {/* Hero Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden shadow-2xl border-4 border-purple-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1638787417399-1e2b2c3688af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwY2hpbGRyZW4lMjBib29rJTIwZmFpcnklMjB0YWxlJTIwY2FzdGxlfGVufDF8fHx8MTc1Nzk0OTgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Magical castle"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden shadow-2xl border-4 border-pink-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1670523798656-eda0ea506db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWxkcmVuJTIwYm9va3MlMjByYWluYm93JTIwc3RhcnN8ZW58MXx8fHwxNzU3OTQ5ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Colorful books"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onEnterLibrary}
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white px-12 py-6 text-xl shadow-2xl border-0 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  Start Your Adventure
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Book, title: "4 Magical Stories", desc: "Adventure awaits in every tale" },
              { icon: Heart, title: "Kid-Friendly", desc: "Safe and educational content" },
              { icon: Sparkles, title: "Interactive Reading", desc: "Animations and beautiful illustrations" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                    className="mb-4"
                  >
                    <feature.icon className="w-12 h-12 text-purple-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-purple-800 mb-2">{feature.title}</h3>
                  <p className="text-purple-600 text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated border decoration */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      />
    </div>
  );
}