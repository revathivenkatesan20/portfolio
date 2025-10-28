import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, ChevronLeft, ChevronRight, Home, Sparkles } from 'lucide-react';
import { Story } from './StoryData';

interface StoryReaderProps {
  story: Story;
  onBack: () => void;
  onHome: () => void;
}

export function StoryReader({ story, onBack, onHome }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPageChanging, setIsPageChanging] = useState(false);
  
  const progress = ((currentPage + 1) / story.pages.length) * 100;
  
  const nextPage = () => {
    if (currentPage < story.pages.length - 1) {
      setIsPageChanging(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsPageChanging(false);
      }, 200);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setIsPageChanging(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsPageChanging(false);
      }, 200);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      setIsPageChanging(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsPageChanging(false);
      }, 200);
    }
  };
  
  const currentPageData = story.pages[currentPage];

  // Floating sparkles animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger sparkle animations
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.3
            }}
            animate={{ 
              y: [null, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          >
            <Sparkles className="w-6 h-6 text-purple-300" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={onBack}
                className="bg-white/80 hover:bg-white border-purple-200"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={onHome}
                className="bg-white/80 hover:bg-white border-purple-200"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Button>
            </motion.div>
          </div>
          <motion.h1 
            className="text-center text-purple-800 max-w-md truncate"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {story.title}
          </motion.h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </motion.div>
        
        {/* Progress Bar */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <motion.span 
              className="text-purple-700"
              key={`page-${currentPage}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Page {currentPage + 1} of {story.pages.length}
            </motion.span>
            <motion.span 
              className="text-purple-700"
              key={`progress-${Math.round(progress)}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(progress)}% complete
            </motion.span>
          </div>
          <Progress value={progress} className="h-3 bg-white/60" />
        </motion.div>
        
        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-white/90 border-2 border-purple-200 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: isPageChanging ? 50 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]"
                >
                  {/* Image */}
                  <div className="order-2 md:order-1">
                    {currentPageData.image ? (
                      <motion.div 
                        className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src={currentPageData.image}
                          alt={`${story.title} - Page ${currentPage + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center shadow-lg"
                        animate={{ 
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{ backgroundSize: '200% 200%' }}
                      >
                        <motion.div 
                          className="text-6xl"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✨
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Text */}
                  <div className="order-1 md:order-2 flex items-center">
                    <motion.p 
                      className="text-xl leading-relaxed text-gray-800 text-center md:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {currentPageData.text}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Navigation */}
        <motion.div 
          className="flex justify-between items-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={prevPage}
              disabled={currentPage === 0}
              variant="outline"
              size="lg"
              className="bg-white/80 hover:bg-white border-purple-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </Button>
          </motion.div>
          
          <div className="flex gap-2">
            {story.pages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage 
                    ? 'bg-purple-500' 
                    : 'bg-purple-200 hover:bg-purple-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentPage ? {
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={nextPage}
              disabled={currentPage === story.pages.length - 1}
              variant="outline"
              size="lg"
              className="bg-white/80 hover:bg-white border-purple-200 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Completion Message */}
        <AnimatePresence>
          {currentPage === story.pages.length - 1 && (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 overflow-hidden relative">
                <CardContent className="p-6">
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    🎉
                  </motion.div>
                  <motion.h3 
                    className="text-orange-800 mb-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Great job reading!
                  </motion.h3>
                  <motion.p 
                    className="text-orange-700 mb-4"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    You've finished the story! Would you like to read another one?
                  </motion.p>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={onHome}
                      className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white relative overflow-hidden"
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
                      <span className="relative z-10">Choose Another Story</span>
                    </Button>
                  </motion.div>

                  {/* Confetti-like sparkles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                          x: Math.random() * 100 + '%', 
                          y: '100%',
                          opacity: 0
                        }}
                        animate={{ 
                          y: '-20%',
                          opacity: [0, 1, 0],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}