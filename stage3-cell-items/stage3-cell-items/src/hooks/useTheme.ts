import { useState, useEffect } from 'react';
import type { ThemeType } from '../types';

const THEME_STORAGE_KEY = 'life-evolved-theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check localStorage on initial load
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'forest' || stored === 'minimal') {
        return stored;
      }
    }
    return 'forest'; // Default theme
  });

  // Save to localStorage whenever theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  const switchTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'forest' ? 'minimal' : 'forest');
  };

  return {
    theme,
    switchTheme,
    toggleTheme
  };
}
