import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Server, 
  Cloud, 
  Brain, 
  Database, 
  Smartphone,
  Globe,
  Shield
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "primary",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "secondary",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "accent",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      color: "primary",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenAI API", level: 90 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Database Design", icon: <Database className="h-5 w-5" /> },
    { name: "Mobile Development", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Web Security", icon: <Shield className="h-5 w-5" /> },
    { name: "API Development", icon: <Globe className="h-5 w-5" /> }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="glass hover:glow-primary transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <span className="gradient-text">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-8 gradient-text">Additional Expertise</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 glass px-6 py-3 rounded-xl hover:glow-accent transition-all duration-300"
            >
              <div className="text-accent">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;