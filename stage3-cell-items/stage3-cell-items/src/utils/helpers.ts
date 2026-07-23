import type { Item, ItemFilters, ItemSortBy, ThemeType, ItemStatus, ItemPriority } from '../types';
import { THEME_CONFIG } from '../types';

// ========================
// Date Formatting
// ========================

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
  });
}

export function formatFullDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function isOverdue(dueDate: Date): boolean {
  return dueDate < new Date();
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function isSoon(dueDate: Date): boolean {
  const now = new Date();
  const daysUntil = Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return daysUntil >= 0 && daysUntil <= 7;
}

// ========================
// Text Formatting
// ========================

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function truncate(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

export function formatStatus(status: ItemStatus): string {
  const statusMap: Record<ItemStatus, string> = {
    active: 'Active',
    completed: 'Completed',
    archived: 'Archived',
    draft: 'Draft',
    pending: 'Pending',
    'in-progress': 'In Progress'
  };
  return statusMap[status] || capitalize(status);
}

export function formatPriority(priority: ItemPriority): string {
  const priorityMap: Record<ItemPriority, string> = {
    high: 'High Priority',
    medium: 'Medium Priority',
    low: 'Low Priority'
  };
  return priorityMap[priority] || capitalize(priority);
}

// ========================
// Filtering & Sorting
// ========================

export function filterItems(items: Item[], filters: ItemFilters): Item[] {
  return items.filter(item => {
    // Status filter
    if (filters.status !== 'all' && item.metadata.status !== filters.status) {
      return false;
    }

    // Date range filter
    if (filters.dateRange !== 'all-time') {
      const itemDate = new Date(item.metadata.createdAt);
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      switch (filters.dateRange) {
        case 'today':
          if (itemDate < startOfToday) return false;
          break;
        case 'this-week':
          const weekAgo = new Date(startOfToday);
          weekAgo.setDate(weekAgo.getDate() - 7);
          if (itemDate < weekAgo) return false;
          break;
        case 'this-month':
          const monthAgo = new Date(startOfToday);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          if (itemDate < monthAgo) return false;
          break;
        case 'this-year':
          const yearAgo = new Date(startOfToday);
          yearAgo.setFullYear(yearAgo.getFullYear() - 1);
          if (itemDate < yearAgo) return false;
          break;
      }
    }

    // Priority filter
    if (filters.priority && filters.priority !== 'all' && item.metadata.priority !== filters.priority) {
      return false;
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const itemTags = item.metadata.tags || [];
      const hasAllTags = filters.tags.every(tag => itemTags.includes(tag));
      if (!hasAllTags) return false;
    }

    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(searchLower);
      const contentMatch = item.content.toLowerCase().includes(searchLower);
      const tagsMatch = (item.metadata.tags || []).some(tag => tag.toLowerCase().includes(searchLower));
      
      if (!titleMatch && !contentMatch && !tagsMatch) return false;
    }

    return true;
  });
}

export function sortItems(items: Item[], sortBy: ItemSortBy): Item[] {
  const sorted = [...items];

  switch (sortBy) {
    case 'date-newest':
      return sorted.sort((a, b) => b.metadata.updatedAt.getTime() - a.metadata.updatedAt.getTime());
    
    case 'date-oldest':
      return sorted.sort((a, b) => a.metadata.updatedAt.getTime() - b.metadata.updatedAt.getTime());
    
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    
    case 'priority-high':
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return sorted.sort((a, b) => {
        const aPriority = priorityOrder[a.metadata.priority as ItemPriority] ?? 3;
        const bPriority = priorityOrder[b.metadata.priority as ItemPriority] ?? 3;
        return aPriority - bPriority;
      });
    
    case 'priority-low':
      return sorted.sort((a, b) => {
        const aPriority = priorityOrder[a.metadata.priority as ItemPriority] ?? 3;
        const bPriority = priorityOrder[b.metadata.priority as ItemPriority] ?? 3;
        return bPriority - aPriority;
      });
    
    default:
      return sorted;
  }
}

// ========================
// Theme Utilities
// ========================

export function getThemeConfig(theme: ThemeType) {
  return THEME_CONFIG[theme];
}

export function isDarkTheme(theme: ThemeType): boolean {
  return theme === 'forest';
}

export function getStatusColor(status: ItemStatus, theme: ThemeType): string {
  const config = getThemeConfig(theme);
  const statusColorMap: Record<ItemStatus, string> = {
    active: config.status.active,
    completed: config.accent.primary,
    archived: config.status.archived,
    draft: config.text.muted,
    pending: config.priority.medium,
    'in-progress': config.accent.primary
  };
  return statusColorMap[status] || config.text.primary;
}

export function getPriorityColor(priority: ItemPriority | undefined, theme: ThemeType): string {
  if (!priority) return getThemeConfig(theme).text.muted;
  
  const config = getThemeConfig(theme);
  return config.priority[priority];
}

// ========================
// Batch Operations
// ========================

export function groupItemsByStatus(items: Item[]): Record<ItemStatus, Item[]> {
  const grouped: Record<string, Item[]> = {
    active: [],
    completed: [],
    archived: [],
    draft: [],
    pending: [],
    'in-progress': []
  };

  items.forEach(item => {
    if (grouped[item.metadata.status]) {
      grouped[item.metadata.status].push(item);
    }
  });

  return grouped;
}

export function countByStatus(items: Item[]): Record<ItemStatus, number> {
  const counts: Record<string, number> = {
    active: 0,
    completed: 0,
    archived: 0,
    draft: 0,
    pending: 0,
    'in-progress': 0
  };

  items.forEach(item => {
    counts[item.metadata.status]++;
  });

  return counts;
}

// ========================
// Statistics
// ========================

export function calculateCellStats(items: Item[]) {
  const totalItems = items.length;
  const completedItems = items.filter(i => i.metadata.status === 'completed').length;
  const pendingItems = items.filter(i => i.metadata.status === 'pending').length;
  const highPriorityItems = items.filter(i => i.metadata.priority === 'high').length;
  
  const now = new Date();
  const overdueTasks = items.filter(item => {
    if (!item.metadata.dueDate) return false;
    return item.metadata.dueDate < now && item.metadata.status !== 'completed';
  }).length;

  return {
    totalItems,
    completedItems,
    pendingItems,
    highPriorityItems,
    overdueTasks,
    completionRate: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
  };
}
