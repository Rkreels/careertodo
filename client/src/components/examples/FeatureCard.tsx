import { FeatureCard } from '../FeatureCard';
import { Target } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-md">
      <FeatureCard
        icon={Target}
        title="Role-Specific Learning"
        description="Practice scenarios tailored to your career path. Learn exactly what you need for Finance, HR, Sales, or Marketing roles."
      />
    </div>
  );
}
