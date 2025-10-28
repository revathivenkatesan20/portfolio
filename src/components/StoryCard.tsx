import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Story } from './StoryData';
import { BookOpen, Sparkles } from 'lucide-react';

interface StoryCardProps {
  story: Story;
  onRead: () => void;
}

export function StoryCard({ story, onRead }: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-400 relative">
        {/* Animated sparkle overlay */}
        <motion.div
          className="absolute top-2 right-2 z-10"
          animate={isHovered ? { 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400 fill-current" />
        </motion.div>

        <motion.div 
          className="aspect-video relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle className="text-purple-800 leading-tight">{story.title}</CardTitle>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Badge variant="secondary" className="bg-yellow-200 text-yellow-800 border-yellow-300 shrink-0">
                {story.ageRange}
              </Badge>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CardDescription className="text-purple-600 line-clamp-2">
              {story.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={onRead}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md relative overflow-hidden group"
              size="lg"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={isHovered ? {
                  x: ['-100%', '100%'],
                } : {}}
                transition={{ duration: 0.8 }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Read Story
                <motion.div
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ✨
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}