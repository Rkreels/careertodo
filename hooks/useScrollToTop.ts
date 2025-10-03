import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Immediate scroll for better UX
    scrollToTop();

    // Also scroll after a short delay to ensure content is loaded
    const timeoutId = setTimeout(scrollToTop, 100);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      scrollToTop();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location]);
}