
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Select a breakfast plan that matches your dietary needs and goals from our expert-crafted options."
  },
  {
    number: "02",
    title: "Select Subscription",
    description: "Pick a weekly or monthly subscription that fits your schedule and budget preferences."
  },
  {
    number: "03",
    title: "Customize Delivery",
    description: "Set your preferred delivery times and days, with options to skip or pause when needed."
  },
  {
    number: "04",
    title: "Enjoy Fresh Breakfast",
    description: "Receive fresh, nutritious breakfasts at your doorstep and start your day right, every day."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-brand-green/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
            How It <span className="text-brand-orange">Works</span>
          </h2>
          <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
            Getting started with MorningFuel is easy. Follow these simple steps to begin your journey to healthier mornings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <span className="text-brand-orange font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold font-heading text-brand-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-charcoal/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-md max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-orange/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-brand-charcoal font-medium mb-1">Pro Tip</p>
                <p className="text-brand-charcoal/80 text-sm">
                  You can easily manage your subscription, pause deliveries, or change plans through your account dashboard at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
