
import { CheckCircle, Clock, Truck, Utensils, CalendarRange, Leaf } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-brand-orange" />,
    title: "Expert-Crafted Diets",
    description:
      "Nutritionists design each meal plan with balanced nutrition to meet your health goals and dietary requirements."
  },
  {
    icon: <Truck className="h-12 w-12 text-brand-orange" />,
    title: "Doorstep Delivery",
    description:
      "Fresh breakfasts delivered right to your door every morning, saving you time and ensuring a healthy start."
  },
  {
    icon: <Utensils className="h-12 w-12 text-brand-orange" />,
    title: "Variety of Options",
    description:
      "Choose from multiple diet plans catering to different needs - weight management, energy boosting, and more."
  },
  {
    icon: <CalendarRange className="h-12 w-12 text-brand-orange" />,
    title: "Flexible Subscriptions",
    description:
      "Weekly or monthly plans with the ability to skip days, making it perfect for your schedule."
  },
  {
    icon: <Clock className="h-12 w-12 text-brand-orange" />,
    title: "Time Saving",
    description:
      "No more morning rush or unhealthy alternatives. Your nutritious breakfast is ready when you are."
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-brand-orange" />,
    title: "Quality Ingredients",
    description:
      "We source fresh, high-quality ingredients to ensure every meal is as nutritious as it is delicious."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
            Why Choose <span className="text-brand-orange">MorningFuel</span>
          </h2>
          <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
            Discover how our breakfast subscription service makes maintaining a healthy diet effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-heading text-brand-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-charcoal/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
