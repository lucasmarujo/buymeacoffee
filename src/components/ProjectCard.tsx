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
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 group">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star className="w-4 h-4" />
            <span className="text-sm">{stars}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          
          {demoUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-accent hover:bg-accent/80 text-accent-foreground transition-all duration-200"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;