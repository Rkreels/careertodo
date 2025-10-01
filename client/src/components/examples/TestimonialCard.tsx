import { TestimonialCard } from '../TestimonialCard';
import avatarImage from '@assets/generated_images/Testimonial_user_avatar_female_33779c1f.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        name="Sarah Ahmed"
        role="HR Professional"
        rating={5}
        quote="CareerToDo transformed my career! The HRMS simulation gave me hands-on experience that landed me my dream job."
        image={avatarImage}
      />
    </div>
  );
}
