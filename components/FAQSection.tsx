import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is CareerToDo?",
    answer: "CareerToDo is a career simulation platform that helps you learn professional skills through hands-on practice with real-world tools like ERP, CRM, HRMS, and more.",
  },
  {
    question: "How long do I have access?",
    answer: "With our special offer, when you pay for 3 months, you get 6 months of full access to all simulation tools and features.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, contact us for a full refund.",
  },
  {
    question: "What tools can I practice with?",
    answer: "You get access to 20+ professional tools including ERP, HRMS, ATS, Accounting, Payroll, CRM, Project Management, Analytics, and many more.",
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely! Our simulations are designed for all skill levels, from complete beginners to those looking to advance their careers.",
  },
  {
    question: "How do I make payment?",
    answer: "We accept secure payments via bKash. Simply click 'Get Started' and you'll be guided through the payment process.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes! CareerToDo is fully responsive and works great on desktop, tablet, and mobile devices.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, you'll receive certificates upon completing simulation modules that you can add to your resume and LinkedIn profile.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CareerToDo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-card-border rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
