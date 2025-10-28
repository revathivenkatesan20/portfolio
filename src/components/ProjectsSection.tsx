import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { projects } from './PortfolioData';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mr-4 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            Filter:
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card/80 backdrop-blur-sm text-foreground hover:bg-card hover:scale-105 border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 3,
                  rotateX: 2,
                  scale: 1.02
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                className="group h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge 
                        className={`
                          ${project.category === 'ai' ? 'bg-purple-500 hover:bg-purple-600' : ''}
                          ${project.category === 'web' ? 'bg-blue-500 hover:bg-blue-600' : ''}
                          ${project.category === 'fullstack' ? 'bg-green-500 hover:bg-green-600' : ''}
                          ${project.category === 'design' ? 'bg-pink-500 hover:bg-pink-600' : ''}
                          text-white border-0 font-medium
                        `}
                      >
                        {project.category.toUpperCase()}
                      </Badge>
                    </motion.div>

                    {project.featured && (
                      <motion.div 
                        className="absolute top-4 right-4"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity 
                        }}
                      >
                        <Badge className="bg-yellow-500 text-yellow-50 border-0">
                          ⭐ Featured
                        </Badge>
                      </motion.div>
                    )}
                    
                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </Button>
                          </motion.div>
                        )}
                        {project.liveUrl && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Demo
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-1 text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
                initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div className="p-6">
                      <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-2xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.longDescription}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <Button className="flex-1">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          onClick={() => setSelectedProject(null)}
                          className="px-6"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}