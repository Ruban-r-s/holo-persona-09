import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AI-Powered Cloud Analytics",
      description: "Real-time cloud resource optimization using machine learning algorithms. Reduces infrastructure costs by 40% through intelligent scaling.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "AWS", "TensorFlow", "Docker"],
      category: "AI",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    },
    {
      title: "Microservices E-commerce Platform",
      description: "Scalable e-commerce platform built with microservices architecture. Handles 100k+ concurrent users with 99.9% uptime.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "Kubernetes", "MongoDB"],
      category: "Frontend",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    },
    {
      title: "DevOps Automation Pipeline",
      description: "Complete CI/CD pipeline with automated testing, deployment, and monitoring. Reduced deployment time by 80%.",
      image: "/api/placeholder/400/250",
      tech: ["Jenkins", "Docker", "AWS", "Terraform"],
      category: "Cloud",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calls. Supports 10k+ concurrent connections.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "Socket.io", "Redis"],
      category: "Frontend",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking using blockchain technology. Ensures product authenticity and reduces fraud.",
      image: "/api/placeholder/400/250",
      tech: ["Solidity", "Web3.js", "React", "IPFS"],
      category: "Blockchain",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    },
    {
      title: "ML Model Serving Platform",
      description: "Scalable platform for deploying and serving machine learning models. Auto-scaling based on request volume.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "FastAPI", "Kubernetes", "MLflow"],
      category: "AI",
      demo: "https://demo.example.com",
      github: "https://github.com/example"
    }
  ];

  const categories = ["All", "AI", "Frontend", "Cloud", "Blockchain"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A showcase of innovative solutions and cutting-edge technologies
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category 
                  ? "bg-gradient-primary text-white glow-primary" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="glass hover:glow-primary transition-all duration-300 h-full overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-primary rounded-t-lg flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-60" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:bg-gradient-secondary text-white"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;