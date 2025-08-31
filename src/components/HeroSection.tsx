import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF for demo purposes
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcfs';
    link.download = 'resume.pdf';
    link.click();
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden neon-border glow-primary">
            <img
              src={profilePhoto}
              alt="Alex Chen - Cloud Engineer and AI Enthusiast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        >
          Hello, I'm Ruban
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-2 text-muted-foreground"
        >
           Cyber security | Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-primary">
            <span className="glass px-4 py-2 rounded-lg">AI.predict()</span>
            <span className="glass px-4 py-2 rounded-lg">cloud.scale()</span>
            <span className="glass px-4 py-2 rounded-lg">deploy.success()</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            onClick={handleHireMe}
            className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-6 text-lg rounded-xl glow-primary hover:glow-secondary transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl neon-border transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/ruban-s01/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-primary transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-glow" />
          </a>
          <a
            href="https://github.com/Ruban-r-s"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-primary transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-primary group-hover:text-primary-glow" />
          </a>
          <a
            href="https://portfolio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow-primary transition-all duration-300 group"
          >
            <ExternalLink className="h-6 w-6 text-primary group-hover:text-primary-glow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;