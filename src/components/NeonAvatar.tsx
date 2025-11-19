import { motion } from "framer-motion";

const NeonAvatar = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Animated neon border with RGB wave effect */}
      <div className="relative">
        <motion.div
          className="w-60 h-60 rounded-full border-4 animate-rgb-wave p-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-hero flex items-center justify-center overflow-hidden">
            {/* Placeholder avatar - you can replace with actual image */}
            <motion.div
              className="w-58 h-58 rounded-full bg-muted flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://avatars.githubusercontent.com/u/97917029?v=4"
                alt="Lucas Marujo"
                className="w-63 h-63 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 w-60 h-60 rounded-full animate-neon-pulse opacity-30 pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Pulsing background glow */}
        <motion.div
          className="absolute inset-[-20px] bg-gradient-neon rounded-full blur-xl opacity-20 pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default NeonAvatar;