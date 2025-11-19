import { motion } from "framer-motion";
import Header from "@/components/Header";
import NeonAvatar from "@/components/NeonAvatar";
import CoffeeSelector from "@/components/CoffeeSelector";
import ProjectCard from "@/components/ProjectCard";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Index = () => {
  // Sample project data - replace with actual GitHub projects
  const projects = [
    {
      title: "AI Chatbot in web",
      description: "A serverless responsive AI web chatbot hosted on Vercel with models from GitHubModels developed with TypeScript.",
      technologies: ["React", "Typescript", "LLM's", "Vercel"],
      githubUrl: "https://github.com/lucasmarujo/ai-chatbot-web",
      demoUrl: "https://ai-chatbot-web-lemon.vercel.app/",
      stars: 0
    },
    {
      title: "Task Management App",
      description: "CRUD ops with Python (Django) + Mysql.",
      technologies: ["Python", "Django", "Mysql"],
      githubUrl: "https://github.com/lucasmarujo/todoapp-django",
      stars: 0
    },
    {
      title: "Chatbot agent in whatsapp with JS",
      description: "For messages, images & audios.",
      technologies: ["Node.js", "WhatsappWebJS", "Javascript"],
      githubUrl: "https://github.com/lucasmarujo/whatsapp-chatbot-t",
      stars: 0
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            {/* Left side - Coffee selector */}
            <motion.div
              className="order-2 lg:order-1"
              variants={fadeInUpVariants}
            >
              <CoffeeSelector />
            </motion.div>

            {/* Center/Right side - Neon avatar and intro */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left space-y-8"
              variants={fadeInVariants}
            >
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <NeonAvatar />
              </motion.div>
              
              <div className="space-y-6">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.span
                    className="bg-gradient-neon bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Full-Stack
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Developer
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  className="text-xl text-muted-foreground max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Crafting digital experiences with passion and precision. 
                  If my work has helped you, consider buying me a coffee to fuel more innovations!
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="flex items-center gap-2 text-primary"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Code className="w-5 h-5" />
                    <span>Frontend & Backend</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-primary"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Database className="w-5 h-5" />
                    <span>Database Design</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-primary"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Globe className="w-5 h-5" />
                    <span>Web Applications</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-primary"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>Mobile Apps</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work on GitHub. Each project showcases different aspects 
              of full-stack development, from frontend interfaces to backend architectures.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  stars={project.stars}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my complete portfolio and GitHub profile.
            </p>
            <motion.div
              className="flex gap-4 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://github.com/lucasmarujo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
              >
                <Code className="w-5 h-5" />
                View GitHub Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-12 bg-card border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Full-Stack Developer. Thank you for your support!
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;