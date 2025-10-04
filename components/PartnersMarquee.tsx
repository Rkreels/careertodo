import { motion } from "framer-motion";

const partners = [
  "University of Dhaka", "BUET", "NSU", "BRAC University", "IBA DU",
  "Grameenphone", "Robi", "bKash", "Pathao", "Chaldal", "Daraz",
  "BRAC Bank", "City Bank", "SSL Wireless", "ACI Limited"
];

// Split partners into two rows
const firstRow = partners.slice(0, 8);
const secondRow = partners.slice(8);

export function PartnersMarquee() {
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="py-12 sm:py-16 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Trusted by Leading Organizations
        </h3>
      </div>
      
      {/* First row - scrolling left to right */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-12"
          animate={{
            x: [0, -100 * firstRow.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedFirstRow.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 bg-background rounded-lg sm:rounded-xl border border-card-border flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]"
            >
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap text-center">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - scrolling right to left */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-12"
          animate={{
            x: [-100 * secondRow.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSecondRow.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 bg-background rounded-lg sm:rounded-xl border border-card-border flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]"
            >
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap text-center">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
