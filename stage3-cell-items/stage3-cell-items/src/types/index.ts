import type { LucideIcon } from 'lucide-react';

// Re-export Stage 2 types
export type HabitatState = 'active' | 'quiet' | 'dormant' | 'archived';
export type CellType = 'notes' | 'tasks' | 'calendar' | 'documents' | 'projects' | 'lists';
export type ActivityType = 'created' | 'updated' | 'linked' | 'archived' | 'commented';
export type ThemeType = 'forest' | 'minimal';

// ========================
// Stage 2 Types (Simplified)
// ========================

export interface Habitat {
  id: string;
  name: string;
  icon: string;
  description: string;
  state: HabitatState;
  stats: {
    cellCount: number;
    itemCount: number;
    lastUpdated: Date;
  };
}

export interface CellInstance {
  id: string;
  type: CellType;
  name: string;
  habitatId: string;
  itemCount: number;
  lastUpdated: Date;
  description?: string;
}

// ========================
// Stage 3: NEW TYPES
// ========================

export type ItemType = 'note' | 'task' | 'event' | 'document' | 'project' | 'list-item' | 'expense' | 'contact' | 'appointment';
export type ItemStatus = 'active' | 'completed' | 'archived' | 'draft' | 'pending' | 'in-progress';
export type ItemPriority = 'high' | 'medium' | 'low';

export interface ItemMetadata {
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  completedAt?: Date;
  priority?: ItemPriority;
  status: ItemStatus;
  tags?: string[];
  author?: string;
  category?: string;
}

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  content: string;
  cellId: string;
  habitatId: string;
  metadata: ItemMetadata;
  relatedItems?: string[]; // Array of item IDs
  attachments?: string[]; // File names
}

// ========================
// Filtering & Sorting
// ========================

export type ItemSortBy = 'date-newest' | 'date-oldest' | 'name-asc' | 'name-desc' | 'priority-high' | 'priority-low';
export type ItemFilterStatus = ItemStatus | 'all';
export type DateRange = 'all-time' | 'today' | 'this-week' | 'this-month' | 'this-year';

export interface ItemFilters {
  status: ItemFilterStatus;
  dateRange: DateRange;
  priority?: ItemPriority | 'all';
  tags?: string[];
  searchTerm?: string;
}

export interface SortOptions {
  sortBy: ItemSortBy;
}

// ========================
// Display Types
// ========================

export interface ItemDisplayOption {
  view: 'list' | 'grid' | 'timeline';
  showMetadata: boolean;
  compactMode: boolean;
}

export interface CellStats {
  totalItems: number;
  completedItems: number;
  pendingItems: number;
  highPriorityItems: number;
  overdueTasks: number;
}

// ========================
// Theme Configuration
// ========================

export interface ThemeConfig {
  bg: string;
  bgGradient: string;
  surface: string;
  surfaceBorder: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  accent: {
    primary: string;
    secondary: string;
  };
  status: {
    active: string;
    quiet: string;
    dormant: string;
    archived: string;
  };
  priority: {
    high: string;
    medium: string;
    low: string;
  };
}

export const THEME_CONFIG: Record<ThemeType, ThemeConfig> = {
  forest: {
    bg: '#07130D',
    bgGradient: 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]',
    surface: 'rgba(13, 36, 23, 0.4)',
    surfaceBorder: '#2D5F3F',
    text: {
      primary: '#F1F3EA',
      secondary: '#D9E0D8',
      muted: '#A8B5A5'
    },
    accent: {
      primary: '#9DBE64',
      secondary: '#B5CF97'
    },
    status: {
      active: '#9DBE64',
      quiet: '#7B8FA8',
      dormant: '#5B6B78',
      archived: '#4A4F55'
    },
    priority: {
      high: '#E74C3C',
      medium: '#F39C12',
      low: '#3498DB'
    }
  },
  minimal: {
    bg: '#F5F5F5',
    bgGradient: 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]',
    surface: 'rgba(245, 245, 245, 0.9)',
    surfaceBorder: '#E0E0E0',
    text: {
      primary: '#1A1A1A',
      secondary: '#333333',
      muted: '#707070'
    },
    accent: {
      primary: '#8B9B7E',
      secondary: '#A8B8A0'
    },
    status: {
      active: '#8B9B7E',
      quiet: '#9BA8A3',
      dormant: '#A8A8A8',
      archived: '#BFBFBF'
    },
    priority: {
      high: '#D32F2F',
      medium: '#F57C00',
      low: '#1976D2'
    }
  }
};

// ========================
// Cell Type Config
// ========================

export const CELL_TYPE_CONFIG: Record<CellType, {
  name: string;
  icon: string;
  description: string;
  itemTypes: ItemType[];
}> = {
  notes: {
    name: 'Notes',
    icon: 'FileText',
    description: 'Rich text, attachments, links',
    itemTypes: ['note']
  },
  tasks: {
    name: 'Tasks',
    icon: 'CheckSquare',
    description: 'Status, due date, reminders',
    itemTypes: ['task', 'project']
  },
  calendar: {
    name: 'Calendar',
    icon: 'Calendar',
    description: 'Events, agenda, schedule',
    itemTypes: ['event', 'appointment']
  },
  documents: {
    name: 'Documents',
    icon: 'File',
    description: 'File storage, metadata, preview',
    itemTypes: ['document']
  },
  projects: {
    name: 'Projects',
    icon: 'FolderOpen',
    description: 'Outcome, status, tasks, notes',
    itemTypes: ['project']
  },
  lists: {
    name: 'Lists',
    icon: 'ListTodo',
    description: 'Simple lists, checklists, groups',
    itemTypes: ['list-item']
  }
};

// ========================
// Utility Functions
// ========================

export function getCellTypeConfig(cellType: CellType) {
  return CELL_TYPE_CONFIG[cellType];
}

export function getThemeConfig(theme: ThemeType): ThemeConfig {
  return THEME_CONFIG[theme];
}

export function isDarkTheme(theme: ThemeType): boolean {
  return theme === 'forest';
}
