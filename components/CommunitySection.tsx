import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export function CommunitySection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with peers, get support, and accelerate your learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-card-border rounded-2xl p-8 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-chart-2/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-chart-2" />
            </div>
            <h3 className="text-2xl font-bold">Discord Community</h3>
            <p className="text-muted-foreground">
              Join 5,000+ learners sharing tips, projects, and career advice
            </p>
            <Link href="https://discord.gg" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-xl" data-testid="button-join-discord">
                Join Discord
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background border border-card-border rounded-2xl p-8 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-chart-3/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-chart-3" />
            </div>
            <h3 className="text-2xl font-bold">Study Groups</h3>
            <p className="text-muted-foreground">
              Collaborate with peers in focused learning groups
            </p>
            <Link href="/signup">
              <Button variant="outline" className="w-full rounded-xl" data-testid="button-find-group">
                Find a Group
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background border border-card-border rounded-2xl p-8 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-chart-4/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-chart-4" />
            </div>
            <h3 className="text-2xl font-bold">24/7 Support</h3>
            <p className="text-muted-foreground">
              Get help anytime from our dedicated support team
            </p>
            <Link href="/contact">
              <Button variant="outline" className="w-full rounded-xl" data-testid="button-get-support">
                Get Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
