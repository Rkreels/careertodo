import { Navigation } from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';
import { LanguageProvider } from '../LanguageProvider';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation />
      </LanguageProvider>
    </ThemeProvider>
  );
}
