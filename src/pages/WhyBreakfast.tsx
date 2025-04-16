
import Layout from "@/components/layout/Layout";
import BenefitCard from "@/components/why-breakfast/BenefitCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Dumbbell, Utensils, Battery, Scale } from "lucide-react";

const WhyBreakfast = () => {
  const benefits = [
    {
      icon: <Brain size={36} />,
      title: "Enhances Cognitive Function",
      description:
        "A nutritious breakfast improves concentration, memory, and problem-solving abilities, making you more productive throughout the day."
    },
    {
      icon: <Heart size={36} />,
      title: "Improves Heart Health",
      description:
        "Regular breakfast consumption is linked to better heart health, lower cholesterol levels, and reduced risk of cardiovascular diseases."
    },
    {
      icon: <Dumbbell size={36} />,
      title: "Boosts Physical Performance",
      description:
        "Eating breakfast provides the necessary fuel for physical activities, enhancing endurance, strength, and overall performance."
    },
    {
      icon: <Battery size={36} />,
      title: "Stabilizes Energy Levels",
      description:
        "A balanced breakfast prevents energy dips throughout the day by maintaining steady blood sugar levels and reducing fatigue."
    },
    {
      icon: <Scale size={36} />,
      title: "Aids Weight Management",
      description:
        "Regular breakfast eaters tend to have healthier body weights. Breakfast kickstarts metabolism and helps prevent overeating later in the day."
    },
    {
      icon: <Utensils size={36} />,
      title: "Establishes Healthy Habits",
      description:
        "Starting your day with a nutritious breakfast sets a positive tone and encourages other healthy eating habits throughout the day."
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-brand-green/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal leading-tight">
                Why Breakfast is <span className="text-brand-orange">Important?</span>
              </h1>
              <p className="mt-4 text-lg text-brand-charcoal/80">
                Breakfast is often called the most important meal of the day, and for good reason. 
                After a night's sleep, your body needs fuel to kickstart your metabolism and provide 
                energy for the day ahead.
              </p>
              <p className="mt-4 text-lg text-brand-charcoal/80">
                Studies show that people who eat breakfast regularly tend to have better concentration, 
                higher energy levels, and maintain healthier body weights than those who skip it.
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-brand-orange text-white hover:bg-orange-600"
                >
                  <Link to="/plans">Explore Our Breakfast Plans</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1533089860892-a71c7d2bf1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthy breakfast" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
              Benefits of <span className="text-brand-orange">Breakfast</span>
            </h2>
            <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
              Discover the many ways a nutritious breakfast can improve your health, productivity, and overall wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-yellow/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-charcoal mb-4">
                  The Science Behind Breakfast
                </h2>
                <p className="text-brand-charcoal/80 mb-4">
                  Research consistently shows that eating breakfast helps regulate blood glucose levels, 
                  reduces the risk of type 2 diabetes, and improves cognitive performance.
                </p>
                <p className="text-brand-charcoal/80 mb-4">
                  A study published in the Journal of Physiology found that eating breakfast triggers our body's 
                  thermogenesis process, which stimulates metabolism and helps burn more calories throughout the day.
                </p>
                <p className="text-brand-charcoal/80">
                  Moreover, nutritionists recommend consuming 20-25% of your daily caloric intake at breakfast, 
                  focusing on a balance of proteins, complex carbohydrates, and healthy fats.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center items-center">
                <div className="bg-brand-green/20 rounded-full p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Breakfast science" 
                    className="w-48 h-48 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-charcoal mb-8">
            Ready to Start Your Day Right?
          </h2>
          <Button 
            asChild 
            size="lg"
            className="bg-brand-orange text-white hover:bg-orange-600 px-8"
          >
            <Link to="/plans">Choose Your Breakfast Plan</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyBreakfast;
