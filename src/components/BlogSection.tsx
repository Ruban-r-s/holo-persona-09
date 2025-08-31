import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "A comprehensive guide to designing and deploying microservices architecture using Kubernetes orchestration...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Kubernetes", "Microservices", "DevOps"],
      url: "https://blog.example.com/kubernetes-microservices",
      image: "📚"
    },
    {
      title: "AI in Cloud: Optimizing Resource Allocation",
      excerpt: "How machine learning algorithms can automatically optimize cloud infrastructure costs and performance...",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["AI", "Cloud", "AWS", "Optimization"],
      url: "https://blog.example.com/ai-cloud-optimization",
      image: "🤖"
    },
    {
      title: "The Future of Serverless Computing",
      excerpt: "Exploring the evolution of serverless architecture and its impact on modern web development practices...",
      date: "2023-12-20",
      readTime: "6 min read",
      tags: ["Serverless", "AWS Lambda", "Architecture"],
      url: "https://blog.example.com/serverless-future",
      image: "⚡"
    },
    {
      title: "Implementing Zero-Trust Security in DevOps",
      excerpt: "Best practices for implementing zero-trust security principles in modern DevOps pipelines and workflows...",
      date: "2023-12-10",
      readTime: "10 min read",
      tags: ["Security", "DevOps", "Zero-Trust"],
      url: "https://blog.example.com/zero-trust-devops",
      image: "🔒"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Articles</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing insights and knowledge about cloud engineering, AI, and modern development practices
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => window.open(article.url, '_blank')}
          >
            <Card className="glass hover:glow-primary transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{article.image}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary-glow group-hover:gap-2 transition-all duration-300"
                >
                  <span>Read More</span>
                  <ExternalLink className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                </Button>
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
        className="text-center mt-12"
      >
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl neon-border"
          onClick={() => window.open('https://blog.example.com', '_blank')}
        >
          View All Articles
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
};

export default BlogSection;