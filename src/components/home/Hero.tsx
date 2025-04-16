
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-green to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="py-12 md:py-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight">
              Start Your Day <span className="text-brand-orange">Right</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-lg mx-auto lg:mx-0">
              Expert-crafted breakfast diet plans delivered to your doorstep. 
              Subscribe for nutritious meals that match your lifestyle and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-brand-orange text-white hover:bg-orange-600 px-8 py-6 text-lg"
              >
                <Link to="/plans">Explore Plans</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange/5 px-8 py-6 text-lg"
              >
                <Link to="/why-breakfast">Why Breakfast?</Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-brand-charcoal">
                <span className="font-bold">1000+</span> happy subscribers
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Breakfast bowls with fruits" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-brand-yellow rounded-full opacity-70 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-brand-green rounded-full opacity-70 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
