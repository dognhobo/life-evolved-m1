import type { LucideIcon } from 'lucide-react';

// Habitat Types
export type HabitatState = 'active' | 'quiet' | 'dormant' | 'archived';
export type CellType = 'notes' | 'tasks' | 'calendar' | 'documents' | 'projects' | 'lists';
export type ActivityType = 'created' | 'updated' | 'linked' | 'archived' | 'commented';
export type ThemeType = 'forest' | 'minimal';

export interface HabitatStats {
  cellCount: number;
  itemCount: number;
  lastUpdated: Date;
}

export interface Habitat {
  id: string;
  name: string;
  icon: string; // Icon name from lucide
  description: string;
  state: HabitatState;
  stats: HabitatStats;
  color?: {
    primary: string;
    secondary: string;
  };
}

// Cell Types
export interface CellInstance {
  id: string;
  type: CellType;
  name: string;
  habitatId: string;
  itemCount: number;
  lastUpdated: Date;
  description?: string;
}

export const CELL_TYPE_CONFIG: Record<CellType, {
  name: string;
  icon: string;
  description: string;
  supportsViews: string[];
}> = {
  notes: {
    name: 'Notes',
    icon: 'FileText',
    description: 'Rich text, attachments, links',
    supportsViews: ['list', 'detail', 'timeline']
  },
  tasks: {
    name: 'Tasks',
    icon: 'CheckSquare',
    description: 'Status, due date, reminders',
    supportsViews: ['list', 'calendar', 'timeline']
  },
  calendar: {
    name: 'Calendar',
    icon: 'Calendar',
    description: 'Events, agenda, schedule',
    supportsViews: ['calendar', 'list', 'agenda']
  },
  documents: {
    name: 'Documents',
    icon: 'File',
    description: 'File storage, metadata, preview',
    supportsViews: ['list', 'gallery', 'detail']
  },
  projects: {
    name: 'Projects',
    icon: 'FolderOpen',
    description: 'Outcome, status, tasks, notes',
    supportsViews: ['list', 'detail', 'timeline']
  },
  lists: {
    name: 'Lists',
    icon: 'ListTodo',
    description: 'Simple lists, checklists, groups',
    supportsViews: ['list', 'detail']
  }
};

// Activity Types
export interface ActivityItem {
  id: string;
  type: ActivityType;
  entityType: 'Task' | 'Note' | 'Seed' | 'Cell' | 'Link';
  title: string;
  description?: string;
  timestamp: Date;
  userId?: string;
}

// Connected Habitat
export interface ConnectedHabitat {
  id: string;
  name: string;
  icon: string;
  itemCount: number;
  relationship: string; // e.g., 'has finance data', 'tracks health goals'
}

// Seed Preview
export interface SeedPreview {
  id: string;
  title: string;
  state: 'planted' | 'sprouting' | 'growing' | 'dormant';
  plantedDate: Date;
  lastTouched?: Date;
}

// Upcoming Item
export interface UpcomingItem {
  id: string;
  title: string;
  dueDate: Date;
  type: 'task' | 'event' | 'reminder';
  priority?: 'high' | 'medium' | 'low';
}

// Theme Configuration
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
    }
  }
};

// Navigation
export interface NavigationBreadcrumb {
  label: string;
  path?: string;
}
