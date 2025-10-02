import { TestimonialCard } from "./TestimonialCard";
import { motion } from "framer-motion";
import avatar1 from "/assets/generated_images/Testimonial_user_avatar_female_33779c1f.png";
import avatar2 from "/assets/generated_images/Testimonial_user_avatar_male_2d83e1b8.png";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with CareerToDo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TestimonialCard
              name="Sarah Ahmed"
              role="HR Professional"
              rating={5}
              quote="CareerToDo transformed my career! The HRMS simulation gave me hands-on experience that landed me my dream job."
              image={avatar1}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TestimonialCard
              name="Rahul Khan"
              role="Financial Analyst"
              rating={5}
              quote="The finance simulations are incredibly realistic. I learned more in 3 months than I did in years of traditional study."
              image={avatar2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
