import { createContext, useContext } from "react";

type LanguageContextType = {
  language: "en";
  setLanguage: (lang: "en") => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "hero.title": "Master Your Career Through Real-World Simulations",
    "hero.subtitle": "Practice with 20+ professional tools. Learn Finance, HR, Sales, Marketing & more through hands-on experience.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Request University Access",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string): string => {
    return translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: "en", setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
