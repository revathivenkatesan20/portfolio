import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { SkillsSection } from './SkillsSection';
import { personalInfo } from './PortfolioData';

export function AboutSection() {

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through code and design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl mb-6 text-center">My Journey</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                  {personalInfo.bio}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">🎓</div>
                    <span className="text-sm font-medium block mb-1">Education</span>
                    <Badge variant="secondary" className="text-xs">{personalInfo.education}</Badge>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">🏫</div>
                    <span className="text-sm font-medium block mb-1">College</span>
                    <Badge variant="secondary" className="text-xs">{personalInfo.college}</Badge>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <span className="text-sm font-medium block mb-1">Projects</span>
                    <Badge variant="secondary" className="text-xs">7+</Badge>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">💼</div>
                    <span className="text-sm font-medium block mb-1">Internships</span>
                    <Badge variant="secondary" className="text-xs">2</Badge>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">📍</div>
                    <span className="text-sm font-medium block mb-1">Location</span>
                    <Badge variant="secondary" className="text-xs">{personalInfo.location}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <SkillsSection />


      </div>
    </section>
  );
}