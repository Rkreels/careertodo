import { Moon, Sun, Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    console.log('Login button clicked - setting mode to login');
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleRegister = () => {
    console.log('Register button clicked - setting mode to register');
    setAuthMode('register');
    setAuthModalOpen(true);
  };

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      console.error('Logout error:', error);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
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
              <Link href="/" className="text-xl font-bold">
                CareerToDo
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-ring transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm hover:text-ring transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-sm hover:text-ring transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  data-testid="button-theme-toggle"
                >
                  {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>

                {user ? (
                  <div className="flex items-center gap-2">
                    <Link href="/dashboard">
                      <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    
                    {user.role === 'admin' && (
                      <Link href="/admin">
                        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                          Admin
                        </Button>
                      </Link>
                    )}
                    
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={handleLogin} data-testid="button-login">
                      {t("nav.login")}
                    </Button>
                    <Button size="sm" className="bg-chart-3 hover:bg-chart-3/90 text-white hidden sm:inline-flex" onClick={handleRegister} data-testid="button-register">
                      {t("nav.register")}
                    </Button>
                  </>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
              <div className="px-4 py-3 space-y-3">
                <Link href="/" className="block text-sm hover:text-ring transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="block text-sm hover:text-ring transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block text-sm hover:text-ring transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex items-center gap-3 pt-3 border-t">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    data-testid="button-theme-toggle-mobile"
                  >
                    {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </Button>
                  
                  {user ? (
                    <div className="flex flex-col gap-2 w-full">
                      <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>
                      </Link>
                      
                      {user.role === 'admin' && (
                        <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            Admin Panel
                          </Button>
                        </Link>
                      )}
                      
                      <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" onClick={handleLogin} data-testid="button-login-mobile">
                        {t("nav.login")}
                      </Button>
                      <Button size="sm" className="bg-chart-3 hover:bg-chart-3/90 text-white" onClick={handleRegister} data-testid="button-register-mobile">
                        {t("nav.register")}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </>
  );
}
