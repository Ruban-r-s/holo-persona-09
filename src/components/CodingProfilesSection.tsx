import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const CodingProfilesSection = () => {
  const profiles = [
    {
      name: "LeetCode",
      username: "@Ruban",
      logo: "🔗",
      stats: "500+ Problems Solved",
      url: "https://leetcode.com/alexchen",
      color: "primary"
    },
    {
      name: "GitHub",
      username: "@Ruban-r-s",
      logo: "🐙",
      stats: "100+ Repositories",
      url: "https://github.com/Ruban-r-s/blog-application.git",
      color: "secondary"
    },
    {
      name: "HackerRank",
      username: "@Ruban ",
      logo: "🏆",
      stats: "5⭐ Problem Solver",
      url: "https://hackerrank.com/Ruban",
      color: "accent"
    },
    {
      name: "linkedin",
      username: "@Ruban",
      logo: "⚔️",
      stats: "Expert Rating",
      url: "www.linkedin.com/in/ruban-s01",
      color: "primary"
    },
    
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="coding-profiles">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Coding Profiles</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Active across multiple programming platforms, constantly learning and improving
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer"
            onClick={() => window.open(profile.url, '_blank')}
          >
            <Card className={`glass hover:glow-${profile.color} transition-all duration-300 h-full`}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{profile.logo}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{profile.username}</p>
                <p className="text-sm font-medium text-accent mb-4">{profile.stats}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary group-hover:text-primary-glow transition-colors">
                  <span>View Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfilesSection;