
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import FilterBar from "@/components/plans/FiltrationBar";
import PlanCard, { PlanProps } from "@/components/plans/PlanCard";

const plansData: PlanProps[] = [
  {
    title: "Classic Balanced Plan",
    description: "For General Health",
    calories: "400-500 calories",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 49.99,
    featured: true,
    mealDays: [
      { day: 1, content: "Multigrain sandwich + boiled eggs + fruit juice" },
      { day: 2, content: "Oats porridge with seeds + banana" },
      { day: 3, content: "Idli + chutney + peanut smoothie" },
      { day: 4, content: "Veg poha + boiled chickpeas + green tea" },
      { day: 5, content: "Roti roll (paneer or egg) + fruit cup" }
    ]
  },
  {
    title: "Energy Booster Plan",
    description: "For Students & Professionals",
    calories: "550-650 calories",
    image: "https://images.unsplash.com/photo-1620807773206-49c1f2957417?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 59.99,
    mealDays: [
      { day: 1, content: "High-protein wrap + nut bar + orange juice" },
      { day: 2, content: "Peanut butter banana sandwich + Greek yogurt" },
      { day: 3, content: "Smoothie bowl with granola, chia, and berries" },
      { day: 4, content: "Sprouted salad wrap + energy shake" },
      { day: 5, content: "Stuffed paratha + curd + dates" }
    ]
  },
  {
    title: "Weight Management Plan",
    description: "Low Calorie, High Nutrition",
    calories: "300-400 calories",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 54.99,
    mealDays: [
      { day: 1, content: "Moong dal chilla + detox water" },
      { day: 2, content: "Veg upma + boiled egg" },
      { day: 3, content: "Ragi dosa + tomato chutney" },
      { day: 4, content: "Smoothie + protein ball" },
      { day: 5, content: "Khichdi + mint tea" }
    ]
  },
  {
    title: "Diabetic-Friendly Plan",
    description: "Low GI, High Fiber",
    calories: "400-450 calories",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 64.99,
    mealDays: [
      { day: 1, content: "Oats dosa + coconut chutney" },
      { day: 2, content: "Boiled legumes bowl + sprouts + lemon water" },
      { day: 3, content: "Whole wheat toast + avocado + herbal tea" },
      { day: 4, content: "Methi paratha + curd" },
      { day: 5, content: "Low-sugar muesli + almonds" }
    ]
  },
  {
    title: "Vegan Morning Plan",
    description: "Plant-Based Goodness",
    calories: "450-550 calories",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 57.99,
    mealDays: [
      { day: 1, content: "Almond milk oats + chia + fruits" },
      { day: 2, content: "Tofu wrap + orange slices" },
      { day: 3, content: "Quinoa salad + flax smoothie" },
      { day: 4, content: "Poha + coconut water" },
      { day: 5, content: "Millet pancakes + nut spread" }
    ]
  }
];

const Plans = () => {
  const [filters, setFilters] = useState({
    goal: "all",
    calorieRange: "all",
    search: "",
  });

  const handleFilterChange = (newFilters: {
    goal: string;
    calorieRange: string;
    search: string;
  }) => {
    setFilters(newFilters);
  };

  // Filter plans based on current filters
  const filteredPlans = plansData.filter((plan) => {
    // Filter by goal
    if (filters.goal !== "all") {
      const goalMap: Record<string, string[]> = {
        general: ["Classic Balanced Plan"],
        energy: ["Energy Booster Plan"],
        weight: ["Weight Management Plan"],
        diabetic: ["Diabetic-Friendly Plan"],
        vegan: ["Vegan Morning Plan"],
      };
      if (!goalMap[filters.goal]?.includes(plan.title)) {
        return false;
      }
    }

    // Filter by calorie range
    if (filters.calorieRange !== "all") {
      const calorieRangeMap: Record<string, string[]> = {
        low: ["300-400 calories"],
        medium: ["400-450 calories", "400-500 calories", "450-550 calories"],
        high: ["550-650 calories"],
      };
      if (!calorieRangeMap[filters.calorieRange]?.includes(plan.calories)) {
        return false;
      }
    }

    // Filter by search term
    if (filters.search && !plan.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !plan.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <Layout>
      <section className="py-12 bg-brand-gray/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-charcoal">
              Choose Your <span className="text-brand-orange">Plan</span>
            </h1>
            <p className="mt-4 text-brand-charcoal/80 max-w-2xl mx-auto">
              Select a breakfast plan that matches your dietary needs and goals. All plans include fresh daily delivery, nutritional information, and the ability to skip or reschedule.
            </p>
          </div>

          <FilterBar onFilterChange={handleFilterChange} />

          {filteredPlans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlans.map((plan, index) => (
                <PlanCard key={index} {...plan} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-brand-charcoal mb-2">
                No plans match your filters
              </h3>
              <p className="text-brand-charcoal/70">
                Try adjusting your filters to find a plan that suits your needs.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Plans;
