import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { experiences } from './PortfolioData';
import { Building, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through different roles and the technologies I've mastered along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />

                <div className="md:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-lg">
                              <Building className="w-4 h-4" />
                              {experience.company}
                            </CardDescription>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        <div>
                          <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Key Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-center mb-12">Career Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: '7+',
                label: 'Projects Completed',
                description: 'Successfully built web applications, AI chatbots, and design prototypes',
                icon: '🚀'
              },
              {
                metric: '2',
                label: 'Internships',
                description: 'Hands-on experience at Prodigy Infotech and CodSoft',
                icon: '💡'
              },
              {
                metric: '15+',
                label: 'Technologies',
                description: 'Proficient in Java, React, UI/UX design, and databases',
                icon: '⚡'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-3">{highlight.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{highlight.metric}</div>
                    <h4 className="font-medium mb-2">{highlight.label}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-center mb-12">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">B.E. Computer Science & Engineering</h4>
                    <p className="text-sm text-muted-foreground mb-2">Peri Institute of Technology • 2021-2025</p>
                    <p className="text-xs text-muted-foreground">
                      Final Year - Specialized in Full Stack Development and AI
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Programming Foundations</h4>
                    <p className="text-sm text-muted-foreground mb-2">Multiple Platforms • 2023-2024</p>
                    <p className="text-xs text-muted-foreground">
                      Java, Python, AI & ML Basics, and Soft Skills certifications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}