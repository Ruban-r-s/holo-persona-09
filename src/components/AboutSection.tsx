import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2025",
      title: "GEN AI API AUTO GENERATOR IN FULL STACK DEVELOPMENT AS A (INTERNSHIP)",
      company: "SOFTTRIE AI SOLUTIONS LLP",
      description: "Leading cloud infrastructure and AI implementations",
      icon: <Award className="h-5 w-5" />
    },
    {
      year: "2025",
      title: "MCA(MASTER OF COMPUTER APPLICATIONS)", // <-- Add comma here
      company: "DAYANANDA SAGAR UNIVERSITY",
      description: "MCA in computer application with First Class",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      year: "2020",
      title: "BCA(BACHELOR OF COMPUTER APPLICATIONS)",
      company: "THE AMERICAN COLLEGE",
      description: "BCA in Computer application with  First Class",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const certifications = [
    "CCNA-Cisco Certified Network Associate",
    "SA-1 Security Awarness",
    "SA-2 security Awarness"
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about building scalable Cyber security and Full stack development that make a difference.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
               Aspiring software developer and cybersecurity enthusiast with hands-on experience in Python, JavaScript. 
Focused on improving skills in efficient coding, ethical hacking, and network security. Motivated, adaptable, and 
committed to building secure, real-world software solutions.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                Banglore, India.
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Available for remote work
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-8 text-center gradient-text">Career Journey</h3>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                        {item.icon}
                      </div>
                      <span className="text-primary font-semibold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-secondary mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;