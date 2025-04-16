
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-3 text-brand-orange">{icon}</div>
        <CardTitle className="text-xl font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-brand-charcoal/80">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
