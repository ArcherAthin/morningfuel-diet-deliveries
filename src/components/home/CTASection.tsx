
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-green via-white to-brand-yellow">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal leading-tight">
                Ready for <span className="text-brand-orange">Healthier</span> Mornings?
              </h2>
              <p className="mt-4 text-lg text-brand-charcoal/80 max-w-lg">
                Join MorningFuel today and transform your morning routine with nutritious, 
                delicious breakfasts delivered to your doorstep. Your first week at 25% off.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-brand-orange text-white hover:bg-orange-600 px-8 py-6 text-lg"
                >
                  <Link to="/plans">Get Started Now</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange/5 px-8 py-6 text-lg"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-6">
                <p className="flex items-center text-sm text-brand-charcoal/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No commitment, cancel anytime
                </p>
                <p className="flex items-center text-sm text-brand-charcoal/70 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible delivery schedules
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1533089860892-a71c7d2bf1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthy breakfast spread" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
