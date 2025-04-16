
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-16 bg-brand-gray/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
              Contact <span className="text-brand-orange">Us</span>
            </h1>
            <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
              Have questions about our breakfast subscription service? We're here to help! Reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Message Sent!</h3>
                  <p className="text-center text-brand-charcoal/80 max-w-md">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-orange hover:bg-orange-600 py-6 text-lg"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-brand-orange flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="text-brand-charcoal font-medium">Address</p>
                      <p className="text-brand-charcoal/80 text-sm">
                        123 Nutrition Street<br />
                        Health City, HC 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-brand-orange flex-shrink-0 mr-3" />
                    <div>
                      <p className="text-brand-charcoal font-medium">Phone</p>
                      <p className="text-brand-charcoal/80 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-brand-orange flex-shrink-0 mr-3" />
                    <div>
                      <p className="text-brand-charcoal font-medium">Email</p>
                      <p className="text-brand-charcoal/80 text-sm">contact@morningfuel.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-brand-orange flex-shrink-0 mr-3" />
                    <div>
                      <p className="text-brand-charcoal font-medium">Business Hours</p>
                      <p className="text-brand-charcoal/80 text-sm">Mon-Fri: 8:00 AM - 8:00 PM</p>
                      <p className="text-brand-charcoal/80 text-sm">Sat-Sun: 8:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Frequently Asked
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/faq" 
                      className="text-brand-orange hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Delivery times and areas
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/faq" 
                      className="text-brand-orange hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Subscription management
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/faq" 
                      className="text-brand-orange hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Diet plan customization
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/faq" 
                      className="text-brand-orange hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Payment methods
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-charcoal mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <Button 
            asChild 
            size="lg"
            className="bg-brand-orange text-white hover:bg-orange-600 px-8"
          >
            <a href="/plans">View Breakfast Plans</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
