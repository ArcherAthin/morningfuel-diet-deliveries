
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "MorningFuel has transformed my mornings. As someone who used to skip breakfast, having a nutritious meal delivered each day has boosted my energy levels and productivity at work. I no longer hit that mid-morning slump and can focus better throughout the day. The Classic Balanced Plan gives me the perfect start!",
    rating: 5,
    plan: "Classic Balanced Plan"
  },
  {
    name: "Michael Chang",
    role: "Graduate Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The variety of breakfast options keeps me excited to wake up each morning. The Weight Management Plan has helped me lose 5kg while maintaining my energy for long study sessions. I love how I can customize delivery times to fit around my busy schedule. Kudos to the MorningFuel team!",
    rating: 5,
    plan: "Weight Management Plan"
  },
  {
    name: "Priya Patel",
    role: "Fitness Instructor",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    content:
      "As a fitness instructor, I need proper nutrition to keep up with my clients. MorningFuel's Energy Booster Plan gives me everything I need to start my day strong and full of energy. I appreciate the attention to macronutrient balance and the use of high-quality ingredients. It's made my morning routine so much simpler!",
    rating: 5,
    plan: "Energy Booster Plan"
  },
  {
    name: "David Wilson",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    content:
      "I've been using MorningFuel's Diabetic-Friendly Plan for 6 months now, and it's been a game-changer for managing my blood sugar levels. The meals are delicious, and I appreciate the detailed nutritional information provided with each meal. Their customer service is also exceptional!",
    rating: 5,
    plan: "Diabetic-Friendly Plan"
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Teacher",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    content:
      "The Vegan Morning Plan aligns perfectly with my lifestyle and values. I love the creative combinations of plant-based proteins and whole foods. Having a ready-made, nutritionally balanced breakfast delivered allows me to focus on my early morning yoga practice without worrying about meal prep.",
    rating: 5,
    plan: "Vegan Morning Plan"
  },
  {
    name: "James Chen",
    role: "College Athlete",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "As a student-athlete, proper nutrition is crucial for my performance. The Energy Booster Plan provides the perfect balance of carbs and protein to fuel my morning workouts and help me recover. The skip feature is super helpful when I have away games. Highly recommend!",
    rating: 5,
    plan: "Energy Booster Plan"
  }
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="py-12 bg-brand-gray/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
              Customer <span className="text-brand-orange">Stories</span>
            </h1>
            <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
              Hear from our happy customers about how MorningFuel has transformed their mornings and improved their daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <Quote className="absolute top-6 left-6 text-brand-orange/10 w-16 h-16" />
              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {Array(5).fill(null).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-brand-charcoal/80 mb-6 text-lg italic">
                  "The best investment I've made in my health this year. 
                  MorningFuel's breakfast delivery has completely changed my morning routine.
                  I used to grab whatever was quick, usually something unhealthy, but now I start
                  every day with a nutritious meal that keeps me energized until lunch."
                </p>
                <Separator className="mb-6" />
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt="Featured testimonial"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-charcoal text-lg">Aisha Patel</h4>
                    <p className="text-sm text-brand-charcoal/70">Marketing Executive</p>
                    <p className="text-sm text-brand-orange font-medium mt-1">Energy Booster Plan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-orange">
                <p className="text-brand-charcoal/80 mb-4 italic">
                  "Lost 10 pounds in 2 months while enjoying delicious breakfasts. The Weight Management Plan is fantastic!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Mini testimonial"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h5 className="font-medium text-brand-charcoal">Robert Klein</h5>
                      <p className="text-xs text-brand-orange">Weight Management Plan</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-orange">
                <p className="text-brand-charcoal/80 mb-4 italic">
                  "As a diabetic, finding suitable breakfast options used to be a challenge. MorningFuel's diabetic-friendly plan is perfect!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/76.jpg"
                      alt="Mini testimonial"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h5 className="font-medium text-brand-charcoal">Linda Martinez</h5>
                      <p className="text-xs text-brand-orange">Diabetic-Friendly Plan</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-orange">
                <p className="text-brand-charcoal/80 mb-4 italic">
                  "The ability to pause delivery when I'm traveling is so convenient. Love the flexibility!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/36.jpg"
                      alt="Mini testimonial"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h5 className="font-medium text-brand-charcoal">Tom Hughes</h5>
                      <p className="text-xs text-brand-orange">Classic Balanced Plan</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-brand-charcoal/80 mb-6 italic">"{testimonial.content}"</p>
                <Separator className="mb-6" />
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-brand-charcoal/70">{testimonial.role}</p>
                    <p className="text-sm text-brand-orange font-medium mt-1">{testimonial.plan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold font-heading text-brand-charcoal mb-6">
              Ready to Join Our Satisfied Customers?
            </h2>
            <Button 
              asChild 
              size="lg"
              className="bg-brand-orange text-white hover:bg-orange-600 px-8"
            >
              <Link to="/plans">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
