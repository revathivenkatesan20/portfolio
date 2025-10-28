import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo } from './PortfolioData';
import { Target, TrendingUp, Users, Award, CheckCircle, Clock } from 'lucide-react';

export function CareerGoalsSection() {
  const targetCompanies = [
    { name: 'TCS', logo: '🏢', color: 'from-blue-500 to-blue-600' },
    { name: 'Wipro', logo: '💼', color: 'from-green-500 to-green-600' },
    { name: 'Zoho', logo: '🚀', color: 'from-purple-500 to-purple-600' },
    { name: 'Infosys', logo: '🌟', color: 'from-orange-500 to-orange-600' },
    { name: 'Accenture', logo: '💡', color: 'from-red-500 to-red-600' },
    { name: 'Cognizant', logo: '⚡', color: 'from-pink-500 to-pink-600' },
  ];

  const preparationActivities = [
    {
      icon: TrendingUp,
      title: 'Daily Aptitude Practice',
      description: '3 questions per day to strengthen logical thinking and problem-solving skills',
      status: 'In Progress'
    },
    {
      icon: Award,
      title: 'Java Concepts Mastery',
      description: 'Learning 1 core Java concept daily with practical implementation',
      status: 'In Progress'
    },
    {
      icon: CheckCircle,
      title: 'React & Database Skills',
      description: 'Regular practice with React components and database optimization',
      status: 'Ongoing'
    },
    {
      icon: Target,
      title: 'Capstone Java Project',
      description: 'Building a comprehensive Java project after one-month learning plan',
      status: 'Planned'
    }
  ];

  return (
    <section id="career-goals" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">Career Aspirations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My goal is to become a skilled Full Stack Developer and contribute to innovative projects at leading technology companies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl">My Vision</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {personalInfo.goals}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Key Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Target Companies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl">Target Companies</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  I'm preparing for campus placements and actively seeking opportunities with these leading MNCs:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {targetCompanies.map((company, index) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className={`p-4 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${company.color} text-white`}>
                        <CardContent className="p-0">
                          <div className="text-2xl mb-2">{company.logo}</div>
                          <h4 className="font-medium text-sm">{company.name}</h4>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Preparation Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-center mb-12">Placement Preparation Strategy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      <Badge 
                        variant={activity.status === 'In Progress' ? 'default' : activity.status === 'Ongoing' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-center mb-12">Recent Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {personalInfo.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-medium mb-2">{cert}</h4>
                    <Badge variant="outline" className="text-xs">
                      Certified
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}