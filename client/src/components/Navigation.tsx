import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">CareerToDo</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm hover:text-ring transition-colors" data-testid="link-home">
                {t("nav.home")}
              </a>
              <a href="#about" className="text-sm hover:text-ring transition-colors" data-testid="link-about">
                {t("nav.about")}
              </a>
              <a href="#contact" className="text-sm hover:text-ring transition-colors" data-testid="link-contact">
                {t("nav.contact")}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="sm" data-testid="button-login">
              {t("nav.login")}
            </Button>
            <Button size="sm" className="bg-chart-3 hover:bg-chart-3/90 text-white" data-testid="button-register">
              {t("nav.register")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
