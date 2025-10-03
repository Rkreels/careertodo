import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 CareerToDo. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-ring transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-ring transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-ring transition-colors">
              Contact
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-ring transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
