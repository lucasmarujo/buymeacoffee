import { motion } from "framer-motion";
import { XCircle, Home, Coffee, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cancel = () => {
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
            {/* Cancel Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="relative">
                <XCircle className="w-24 h-24 text-yellow-500" />
                <motion.div
                  className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
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
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Payment Cancelled
              </h1>
              <p className="text-xl text-muted-foreground">
                No worries, maybe next time!
              </p>
            </motion.div>

            {/* Message */}
            <motion.div
              variants={itemVariants}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 space-y-3"
            >
              <p className="text-muted-foreground">
                Your payment was cancelled and no charges were made to your account.
                If you encountered any issues or have questions, feel free to reach out!
              </p>
            </motion.div>

            {/* Why Support? */}
            <motion.div variants={itemVariants} className="space-y-4 text-left">
              <h3 className="text-lg font-semibold text-foreground text-center">
                Why Support Me?
              </h3>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Coffee className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Fuel Development</p>
                    <p className="text-sm text-muted-foreground">
                      Your support helps me dedicate more time to open-source projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Coffee className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">New Features</p>
                    <p className="text-sm text-muted-foreground">
                      Enable me to implement new features and improvements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                  <Coffee className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Community Growth</p>
                    <p className="text-sm text-muted-foreground">
                      Help grow and maintain valuable resources for everyone
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
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Try Again
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
                  <a href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Go Home
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground">
                Need help or have questions?{" "}
                <a
                  href="https://github.com/lucasmarujo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Contact me on GitHub
                </a>
              </p>
            </motion.div>
          </div>
        </Card>

        {/* Footer Message */}
        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground mt-6"
        >
          Thank you for considering supporting my work! 💙
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Cancel;
