import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface ScrollToTopProps {
  children: React.ReactNode;
}

export function ScrollToTop({ children }: ScrollToTopProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    const scrollToTop = () => {
      try {
        // Try smooth scroll first
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scroll
        window.scrollTo(0, 0);
      }
    };

    // Immediate scroll
    scrollToTop();

    // Double scroll after DOM update
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 50);

    // Triple scroll after images/components load
    const timeoutId2 = setTimeout(() => {
      scrollToTop();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [location]);

  return <>{children}</>;
}