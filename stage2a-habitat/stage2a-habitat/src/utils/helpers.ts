import { formatDistanceToNow, format } from 'date-fns';
import type { ThemeType, ThemeConfig } from '../types';
import { THEME_CONFIG } from '../types';

/**
 * Format a date relative to now (e.g., "2 hours ago")
 */
export function formatTimeAgo(date: Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

/**
 * Format a date as a short date string
 */
export function formatShortDate(date: Date): string {
  return format(new Date(date), 'MMM d');
}

/**
 * Format a date as full date string
 */
export function formatFullDate(date: Date): string {
  return format(new Date(date), 'EEEE, MMMM d, yyyy');
}

/**
 * Get theme configuration by theme type
 */
export function getThemeConfig(theme: ThemeType): ThemeConfig {
  return THEME_CONFIG[theme];
}

/**
 * Get status badge color based on state and theme
 */
export function getStatusColor(state: string, theme: ThemeType): string {
  const config = getThemeConfig(theme);
  return (config.status as Record<string, string>)[state] || config.accent.primary;
}

/**
 * Determine if theme is dark or light
 */
export function isDarkTheme(theme: ThemeType): boolean {
  return theme === 'forest';
}

/**
 * Map icon names to Lucide icon names (for consistent naming)
 */
export const ICON_MAP: Record<string, string> = {
  'DollarSign': 'DollarSign',
  'Heart': 'Heart',
  'FolderOpen': 'FolderOpen',
  'Sprout': 'Sprout',
  'Headphones': 'Headphones',
  'Home': 'Home',
  'User': 'User',
  'FileText': 'FileText',
  'CheckSquare': 'CheckSquare',
  'Calendar': 'Calendar',
  'File': 'File',
  'ListTodo': 'ListTodo',
  'Settings': 'Settings',
  'MoreVertical': 'MoreVertical',
  'ArrowLeft': 'ArrowLeft',
  'Plus': 'Plus'
};

/**
 * Truncate text to a specific length with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Capitalize first letter of a string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Get contrasting text color based on background brightness
 */
export function getContrastColor(bgColor: string, theme: ThemeType): string {
  const config = getThemeConfig(theme);
  return isDarkTheme(theme) ? config.text.primary : config.text.secondary;
}
