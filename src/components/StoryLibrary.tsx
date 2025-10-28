import { motion } from 'motion/react';
import { StoryCard } from './StoryCard';
import { stories } from './StoryData';
import { Book, Stars, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface StoryLibraryProps {
  onSelectStory: (storyId: string) => void;
  onBackToHero: () => void;
}

export function StoryLibrary({ onSelectStory, onBackToHero }: StoryLibraryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={onBackToHero}
            className="bg-white/80 hover:bg-white border-purple-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              <Book className="w-12 h-12 text-purple-600" />
            </motion.div>
            <motion.h1 
              className="text-purple-800"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Story Time
            </motion.h1>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Stars className="w-12 h-12 text-yellow-500" />
            </motion.div>
          </div>
          <motion.p 
            className="text-purple-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Welcome to our magical story library! Choose a wonderful tale to read and let your imagination soar. 
            Each story is filled with adventure, friendship, and fun!
          </motion.p>
        </motion.div>
        
        {/* Story Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -5 }}
            >
              <StoryCard
                story={story}
                onRead={() => onSelectStory(story.id)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.div 
            className="bg-white/60 rounded-2xl p-6 max-w-md mx-auto border-2 border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="text-4xl mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📚
            </motion.div>
            <h3 className="text-purple-800 mb-2">Happy Reading!</h3>
            <p className="text-purple-600">
              Each story teaches us something special about friendship, kindness, and believing in ourselves!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}