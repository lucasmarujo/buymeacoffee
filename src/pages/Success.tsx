import { motion } from "framer-motion";
import { CheckCircle, Heart, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full"
      >
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-green-500" />
                <motion.div
                  className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground">
                Your support means the world to me
              </p>
            </motion.div>

            {/* Message */}
            <motion.div
              variants={itemVariants}
              className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-3"
            >
              <div className="flex items-center justify-center gap-2 text-primary">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-semibold text-lg">Payment Successful!</span>
              </div>
              <p className="text-muted-foreground">
                Your generous donation has been processed successfully. You're helping
                me continue creating amazing projects and content!
              </p>
            </motion.div>

            {/* Session ID (opcional) */}
            {sessionId && (
              <motion.div
                variants={itemVariants}
                className="text-sm text-muted-foreground bg-muted/30 rounded p-3"
              >
                <p className="font-mono">Session ID: {sessionId}</p>
                <p className="mt-1 text-xs">
                  Keep this for your records
                </p>
              </motion.div>
            )}

            {/* What's Next */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                What's Next?
              </h3>
              <div className="grid gap-3 text-left">
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Check out my projects</p>
                    <p className="text-sm text-muted-foreground">
                      See what I'm building with your support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Follow on GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      Stay updated with my latest work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="w-full bg-gradient-coffee hover:shadow-neon text-white font-semibold"
                  size="lg"
                  asChild
                >
                  <a href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </a>
                </Button>
              </motion.div>
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Card>

        {/* Footer Message */}
        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground mt-6"
        >
          You'll receive a confirmation email shortly
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Success;
