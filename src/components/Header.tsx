import { Coffee, Code, FolderOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Buy Me Coffee
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </button>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <a href="https://lm-cyberpunk-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Code className="w-4 h-4 mr-2" />
              Portfolio
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;