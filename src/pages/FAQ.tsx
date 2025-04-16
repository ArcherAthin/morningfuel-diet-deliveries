
import Layout from "@/components/layout/Layout";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What time do you deliver the breakfasts?",
    answer: "We deliver between 6:00 AM and 8:00 AM to ensure your breakfast is fresh and ready when you start your day. You can specify your preferred time slot within this window."
  },
  {
    question: "Can I skip deliveries when I'm traveling?",
    answer: "Absolutely! You can easily manage your delivery schedule through your account dashboard. Skip days, pause your subscription, or make changes to your delivery calendar with at least 24 hours notice."
  },
  {
    question: "Are the ingredients organic?",
    answer: "We prioritize using organic and locally-sourced ingredients whenever possible. Each meal comes with detailed information about the ingredients used and their nutritional content."
  },
  {
    question: "How are the meals packaged?",
    answer: "Our meals are packaged in eco-friendly, biodegradable containers that keep your food fresh and at the right temperature. We're committed to minimizing environmental impact through sustainable packaging practices."
  },
  {
    question: "Can I change my plan after subscribing?",
    answer: "Yes, you can switch between different plans at any time. Changes made before midnight will be effective from the next delivery day."
  },
  {
    question: "Do you offer plans for specific dietary restrictions?",
    answer: "Yes, we offer specialized plans including vegan, diabetic-friendly, gluten-free, and allergen-specific options. You can also note any food allergies or preferences when subscribing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, UPI payments, digital wallets, and bank transfers. Payment is processed securely at the beginning of each subscription period."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time with no cancellation fees. If you cancel before midnight, you won't be charged for the next delivery period."
  },
  {
    question: "Do you deliver on weekends?",
    answer: "Yes, we deliver seven days a week, including weekends and holidays. You can customize your delivery schedule to include or exclude specific days based on your needs."
  },
  {
    question: "How far in advance can I schedule deliveries?",
    answer: "You can schedule deliveries up to 30 days in advance through your account dashboard. This makes it easy to plan around trips, special events, or changing schedules."
  },
  {
    question: "Can I order extra meals for guests?",
    answer: "Yes, you can add additional meals to any delivery through your account dashboard. Just make sure to place these orders at least 24 hours in advance."
  },
  {
    question: "Are nutritional details provided for each meal?",
    answer: "Absolutely! Each meal comes with detailed nutritional information including calories, macronutrients, vitamins, and minerals. This information is also available in your online account."
  }
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-16 bg-brand-gray/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h1>
            <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
              Find answers to common questions about our breakfast subscription service, delivery process, and meal plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-8 shadow-md">
              <FAQAccordion faqs={faqs} />
            </div>

            <div className="col-span-1 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-brand-orange">
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-brand-charcoal/80 mb-6">
                  Can't find the answer you're looking for? Please reach out to our customer support team.
                </p>
                <Button asChild className="w-full bg-brand-orange hover:bg-orange-600">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-brand-charcoal/80 mb-6">
                  Browse our breakfast plans and find the perfect option for your nutritional needs.
                </p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                  <Link to="/plans">Explore Plans</Link>
                </Button>
              </div>

              <div className="bg-brand-yellow/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-brand-orange rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-charcoal mb-2">Did You Know?</h4>
                    <p className="text-sm text-brand-charcoal/80">
                      All our subscribers save an average of 5 hours per week on breakfast preparation and shopping!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
