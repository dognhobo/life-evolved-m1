import { useState, useEffect, useCallback } from 'react';
import type { ThemeType } from '../types';

const THEME_STORAGE_KEY = 'life-evolved-theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>('forest');
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null;
    if (savedTheme && (savedTheme === 'forest' || savedTheme === 'minimal')) {
      setTheme(savedTheme);
    }
    setIsLoading(false);
  }, []);

  // Save theme to localStorage when it changes
  const switchTheme = useCallback((newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    switchTheme(theme === 'forest' ? 'minimal' : 'forest');
  }, [theme, switchTheme]);

  return {
    theme,
    isLoading,
    switchTheme,
    toggleTheme
  };
}
