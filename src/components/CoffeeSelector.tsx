import { useState } from "react";
import { Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import coffeeShopImage from "@/assets/happycoffee.png";

const CoffeeSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const amounts = [3, 5, 10, 15, 25];

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
      <div className="space-y-6">
        {/* Coffee shop image */}
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={coffeeShopImage} 
            alt="Cozy coffee shop interior" 
            className="w-full h-88 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-xl font-bold flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Buy me a coffee
            </h3>
          </div>
        </div>

        {/* Amount selector */}
        <div className="space-y-4">
          <h4 className="text-foreground font-semibold">Choose an amount:</h4>
          <div className="grid grid-cols-5 gap-2">
            {amounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAmount(amount)}
                className={`transition-all duration-200 ${
                  selectedAmount === amount 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : "hover:border-primary hover:text-black"
                }`}
              >
                ${amount}
              </Button>
            ))}
          </div>
        </div>

        {/* Buy button */}
        <Button 
          className="w-full bg-gradient-coffee hover:shadow-neon transition-all duration-300 text-white font-semibold py-3"
          size="lg"
        >
          <Heart className="w-5 h-5 mr-2" />
          Support with ${selectedAmount}
        </Button>

        {/* Portfolio link */}
        <div className="pt-4 border-t border-border/50">
          <Button 
            variant="ghost" 
            className="w-full text-primary hover:text-accent hover:bg-accent/10 transition-all duration-200"
            asChild
          >
            <a href="#portfolio" className="flex items-center gap-2">
              View my portfolio →
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CoffeeSelector;