// Global scroll utilities
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
  } catch (error) {
    // Fallback for older browsers
    window.scrollTo(0, 0);
  }
};

export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    try {
      window.scrollTo({
        top: elementPosition,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo(0, elementPosition);
    }
  }
};

// Handle browser back/forward navigation
export const handleBrowserNavigation = () => {
  // Disable browser's automatic scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // Scroll to top on popstate (back/forward buttons)
  window.addEventListener('popstate', () => {
    scrollToTop();
  });
};