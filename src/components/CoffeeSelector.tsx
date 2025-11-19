import { useState } from "react";
import { Coffee, Heart, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { initiatePayment } from "@/lib/stripe";
import { useToast } from "@/hooks/use-toast";
import coffeeShopImage from "@/assets/happycoffee.png";

const CoffeeSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const amounts = [3, 5, 10, 15, 25];

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      await initiatePayment({
        amount: selectedAmount * 100, // Stripe usa centavos
        currency: 'usd',
        description: `Buy me ${selectedAmount === 1 ? 'a coffee' : `${selectedAmount} coffees`}`,
        metadata: {
          type: 'coffee-donation',
          coffees: selectedAmount.toString(),
        },
      });
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erro no pagamento",
        description: "Não foi possível processar o pagamento. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
        <div className="space-y-6">
          {/* Coffee shop image */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={coffeeShopImage}
              alt="Cozy coffee shop interior"
              className="w-full h-88 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-white text-xl font-bold flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Buy me a coffee
              </h3>
            </motion.div>
          </motion.div>

          {/* Amount selector */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-foreground font-semibold">Choose an amount:</h4>
            <div className="grid grid-cols-5 gap-2">
              {amounts.map((amount, index) => (
                <motion.div
                  key={amount}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedAmount === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAmount(amount)}
                    className={`w-full transition-all duration-200 ${
                      selectedAmount === amount
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "hover:border-primary hover:text-black"
                    }`}
                  >
                    ${amount}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Buy button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className="w-full bg-gradient-coffee hover:shadow-neon transition-all duration-300 text-white font-semibold py-3"
              size="lg"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 mr-2" />
                  Support with ${selectedAmount}
                </>
              )}
            </Button>
          </motion.div>

          {/* Portfolio link */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-t border-border/50"
          >
            <Button
              variant="ghost"
              className="w-full text-primary hover:text-accent hover:bg-accent/10 transition-all duration-200"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View my projects →
              </a>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CoffeeSelector;