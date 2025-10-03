import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './components/ThemeProvider';
import { LanguageProvider } from './components/LanguageProvider';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import App from "./App";
import "./index.css";
import { queryClient } from './lib/queryClient';
import { handleBrowserNavigation } from './lib/scrollUtils';

// Global scroll reset on page load
if (typeof window !== 'undefined') {
  // Handle browser navigation
  handleBrowserNavigation();
  
  // Scroll to top immediately
  window.scrollTo(0, 0);
  
  // Also scroll after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
  });
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="career-todo-theme">
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <App />
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);