
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlanProps } from "@/components/plans/PlanCard";

const DeliveryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.plan as PlanProps;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    timeSlot: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeSlotChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      timeSlot: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented once we have Supabase and Razorpay integration
    console.log("Form submitted:", formData);
  };

  if (!selectedPlan) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl text-center text-red-600">
            Please select a plan first
          </h2>
          <div className="text-center mt-4">
            <Button onClick={() => navigate("/plans")}>View Plans</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-brand-charcoal mb-6">
            Delivery Details
          </h1>
          
          <div className="bg-brand-gray/30 p-4 rounded-lg mb-6">
            <h2 className="font-semibold text-brand-charcoal mb-2">
              Selected Plan: {selectedPlan.title}
            </h2>
            <p className="text-brand-charcoal/80">
              {selectedPlan.calories} | ${selectedPlan.price}/week
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeSlot">Preferred Delivery Time</Label>
              <Select
                value={formData.timeSlot}
                onValueChange={handleTimeSlotChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6-7">6:00 AM - 7:00 AM</SelectItem>
                  <SelectItem value="7-8">7:00 AM - 8:00 AM</SelectItem>
                  <SelectItem value="8-9">8:00 AM - 9:00 AM</SelectItem>
                  <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-brand-orange hover:bg-orange-600">
              Proceed to Pay
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryDetails;
