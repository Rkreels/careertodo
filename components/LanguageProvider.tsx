import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "bn";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "hero.title": "Master Your Career Through Real-World Simulations",
    "hero.subtitle": "Practice with 20+ professional tools. Learn Finance, HR, Sales, Marketing & more through hands-on experience.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Request University Demo",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
  },
  bn: {
    "hero.title": "বাস্তব-বিশ্বের সিমুলেশনের মাধ্যমে আপনার ক্যারিয়ার আয়ত্ত করুন",
    "hero.subtitle": "২০+ পেশাদার টুলস দিয়ে অনুশীলন করুন। হাতে-কলমে অভিজ্ঞতার মাধ্যমে ফিন্যান্স, এইচআর, সেলস, মার্কেটিং এবং আরও অনেক কিছু শিখুন।",
    "hero.cta.primary": "শুরু করুন",
    "hero.cta.secondary": "বিশ্ববিদ্যালয় ডেমো অনুরোধ করুন",
    "nav.home": "হোম",
    "nav.about": "সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.login": "লগইন",
    "nav.register": "নিবন্ধন",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    const browserLang = navigator.language.toLowerCase();
    
    if (stored) {
      setLanguage(stored);
    } else if (browserLang.startsWith("bn")) {
      setLanguage("bn");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
