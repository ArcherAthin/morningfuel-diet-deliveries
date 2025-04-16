
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter as FilterIcon } from "lucide-react";

interface FilterProps {
  onFilterChange: (filters: {
    goal: string;
    calorieRange: string;
    search: string;
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterProps) => {
  const [search, setSearch] = useState("");
  const [goal, setGoal] = useState("all");
  const [calorieRange, setCalorieRange] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ goal, calorieRange, search });
  };

  const handleGoalClick = (newGoal: string) => {
    const updatedGoal = goal === newGoal ? "all" : newGoal;
    setGoal(updatedGoal);
    onFilterChange({ goal: updatedGoal, calorieRange, search });
  };

  const handleCalorieRangeClick = (newRange: string) => {
    const updatedRange = calorieRange === newRange ? "all" : newRange;
    setCalorieRange(updatedRange);
    onFilterChange({ goal, calorieRange: updatedRange, search });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for plans..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <FilterIcon className="h-4 w-4 text-brand-charcoal" />
            <h3 className="font-medium text-brand-charcoal">Goal</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={goal === "general" ? "default" : "outline"}
              size="sm"
              className={goal === "general" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleGoalClick("general")}
            >
              General Health
            </Button>
            <Button
              type="button"
              variant={goal === "energy" ? "default" : "outline"}
              size="sm"
              className={goal === "energy" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleGoalClick("energy")}
            >
              Energy Boost
            </Button>
            <Button
              type="button"
              variant={goal === "weight" ? "default" : "outline"}
              size="sm"
              className={goal === "weight" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleGoalClick("weight")}
            >
              Weight Management
            </Button>
            <Button
              type="button"
              variant={goal === "diabetic" ? "default" : "outline"}
              size="sm"
              className={goal === "diabetic" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleGoalClick("diabetic")}
            >
              Diabetic-Friendly
            </Button>
            <Button
              type="button"
              variant={goal === "vegan" ? "default" : "outline"}
              size="sm"
              className={goal === "vegan" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleGoalClick("vegan")}
            >
              Vegan
            </Button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <FilterIcon className="h-4 w-4 text-brand-charcoal" />
            <h3 className="font-medium text-brand-charcoal">Calorie Range</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={calorieRange === "low" ? "default" : "outline"}
              size="sm"
              className={calorieRange === "low" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleCalorieRangeClick("low")}
            >
              Low (300-400)
            </Button>
            <Button
              type="button"
              variant={calorieRange === "medium" ? "default" : "outline"}
              size="sm"
              className={calorieRange === "medium" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleCalorieRangeClick("medium")}
            >
              Medium (400-500)
            </Button>
            <Button
              type="button"
              variant={calorieRange === "high" ? "default" : "outline"}
              size="sm"
              className={calorieRange === "high" ? "bg-brand-orange hover:bg-orange-600" : ""}
              onClick={() => handleCalorieRangeClick("high")}
            >
              High (500-650)
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
