import { CareerPathCard } from '../CareerPathCard';
import financeImage from '@assets/generated_images/Finance_career_path_illustration_bd4a80b3.png';

export default function CareerPathCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CareerPathCard
        title="Finance"
        description="Master accounting, financial analysis, treasury management, and tax filing through real-world scenarios."
        image={financeImage}
      />
    </div>
  );
}
