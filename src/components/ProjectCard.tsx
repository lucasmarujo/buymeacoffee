import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  stars: number;
}

const ProjectCard = ({ title, description, technologies, githubUrl, demoUrl, stars }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 group h-full">
        <div className="space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <motion.h3
              className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="flex items-center gap-1 text-muted-foreground"
              whileHover={{ scale: 1.1 }}
            >
              <Star className="w-4 h-4" />
              <span className="text-sm">{stars}</span>
            </motion.div>
          </div>

          <p className="text-muted-foreground leading-relaxed flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>
            
            {demoUrl && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  className="w-full bg-accent hover:bg-accent/80 text-accent-foreground transition-all duration-200"
                  asChild
                >
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;