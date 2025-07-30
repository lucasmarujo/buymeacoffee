import Header from "@/components/Header";
import NeonAvatar from "@/components/NeonAvatar";
import CoffeeSelector from "@/components/CoffeeSelector";
import ProjectCard from "@/components/ProjectCard";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Index = () => {
  // Sample project data - replace with actual GitHub projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      demoUrl: "https://demo-ecommerce.com",
      stars: 234
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.",
      technologies: ["TypeScript", "React", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/yourusername/task-manager",
      demoUrl: "https://task-app-demo.com",
      stars: 189
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with load balancing, rate limiting, and authentication. Built for scalable cloud architecture.",
      technologies: ["Node.js", "Docker", "Redis", "AWS"],
      githubUrl: "https://github.com/yourusername/api-gateway",
      stars: 156
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with budget tracking and expense analytics.",
      technologies: ["React Native", "Firebase", "Chart.js"],
      githubUrl: "https://github.com/yourusername/finance-app",
      demoUrl: "https://finance-demo.com",
      stars: 98
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Coffee selector */}
            <div className="order-2 lg:order-1">
              <CoffeeSelector />
            </div>

            {/* Center/Right side - Neon avatar and intro */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
              <div className="flex justify-center lg:justify-start">
                <NeonAvatar />
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-neon bg-clip-text text-transparent">
                    Full-Stack
                  </span>
                  <br />
                  <span className="text-foreground">Developer</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Crafting digital experiences with passion and precision. 
                  If my work has helped you, consider buying me a coffee to fuel more innovations!
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-primary">
                    <Code className="w-5 h-5" />
                    <span>Frontend & Backend</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Database className="w-5 h-5" />
                    <span>Database Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Globe className="w-5 h-5" />
                    <span>Web Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Smartphone className="w-5 h-5" />
                    <span>Mobile Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work on GitHub. Each project showcases different aspects 
              of full-stack development, from frontend interfaces to backend architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                stars={project.stars}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my complete portfolio and GitHub profile.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/lucasmarujo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
              >
                <Code className="w-5 h-5" />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Full-Stack Developer. Thank you for your support!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;