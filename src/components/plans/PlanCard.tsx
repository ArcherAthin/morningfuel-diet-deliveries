import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface MealDay {
  day: number;
  content: string;
}

export interface PlanProps {
  title: string;
  description: string;
  calories: string;
  image: string;
  price: number;
  mealDays: MealDay[];
  featured?: boolean;
}

interface ExtendedPlanProps extends PlanProps {
  isSelected?: boolean;
  onSelect?: (plan: PlanProps) => void;
}

const PlanCard = ({ 
  title, 
  description, 
  calories, 
  image, 
  price, 
  mealDays,
  featured = false,
  isSelected = false,
  onSelect,
}: ExtendedPlanProps) => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate('/delivery-details', { 
      state: { plan: { title, description, calories, image, price, mealDays, featured } }
    });
  };

  return (
    <Card 
      className={`overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-200 ${
        featured ? 'border-2 border-brand-orange shadow-lg' : 'border border-gray-200'
      } ${
        isSelected ? 'ring-2 ring-brand-orange ring-offset-2' : ''
      }`}
      onClick={() => onSelect?.({ title, description, calories, image, price, mealDays, featured })}
    >
      {featured && (
        <div className="bg-brand-orange text-white text-center py-2 font-medium text-sm">
          Most Popular
        </div>
      )}
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-sm px-3 py-1 m-2 rounded text-sm font-medium">
          {calories}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-heading text-brand-charcoal">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-bold text-2xl mb-4 text-brand-charcoal">
          ${price.toFixed(2)} <span className="text-sm font-normal text-brand-charcoal/70">/week</span>
        </p>
        <h4 className="font-semibold text-sm mb-2 text-brand-charcoal">Sample Menu:</h4>
        <ul className="space-y-2">
          {mealDays.map((meal) => (
            <li key={meal.day} className="flex items-start text-sm">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-brand-charcoal/80">
                <span className="font-medium">Day {meal.day}:</span> {meal.content}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${
            isSelected 
              ? 'bg-brand-orange hover:bg-orange-600 text-white' 
              : 'bg-white border border-brand-orange text-brand-orange hover:bg-brand-orange/5'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleSubscribe();
          }}
        >
          {isSelected ? 'Continue with Plan' : 'Subscribe Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
