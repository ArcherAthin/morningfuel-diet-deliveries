
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "MorningFuel has transformed my mornings. As someone who used to skip breakfast, having a nutritious meal delivered each day has boosted my energy levels and productivity at work.",
    rating: 5
  },
  {
    name: "Michael Chang",
    role: "Graduate Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The variety of breakfast options keeps me excited to wake up each morning. The weight management plan has helped me lose 5kg while maintaining my energy for long study sessions.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Fitness Instructor",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    content:
      "As a fitness instructor, I need proper nutrition to keep up with my clients. MorningFuel's energy booster plan gives me everything I need to start my day strong and full of energy.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
            What Our <span className="text-brand-orange">Customers</span> Say
          </h2>
          <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their mornings with MorningFuel's breakfast subscription service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-gray rounded-lg p-6 shadow-sm border border-gray-100"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
