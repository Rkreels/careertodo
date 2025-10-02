export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 CareerToDo. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-ring transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-ring transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-ring transition-colors" data-testid="link-footer-contact">
              Contact
            </a>
            <a href="#careers" className="text-muted-foreground hover:text-ring transition-colors" data-testid="link-careers">
              Careers
            </a>
            <a href="#press" className="text-muted-foreground hover:text-ring transition-colors" data-testid="link-press">
              Press
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
