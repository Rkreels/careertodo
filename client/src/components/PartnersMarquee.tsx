import { motion } from "framer-motion";

const partners = [
  "University of Dhaka", "BUET", "NSU", "BRAC University", "IBA DU",
  "Grameenphone", "Robi", "bKash", "Pathao", "Chaldal", "Daraz",
  "BRAC Bank", "City Bank", "SSL Wireless", "ACI Limited"
];

export function PartnersMarquee() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Trusted by Leading Organizations
        </h3>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -100 * partners.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-background rounded-xl border border-card-border flex items-center justify-center min-w-[200px]"
            >
              <span className="text-sm font-semibold whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
