import type { Habitat, CellInstance, ActivityItem, ConnectedHabitat, SeedPreview, UpcomingItem } from '../types';

// Mock Habitats
export const MOCK_HABITATS: Record<string, Habitat> = {
  finance: {
    id: 'finance',
    name: 'Finance',
    icon: 'DollarSign',
    description: 'Grow, Protect, Provide',
    state: 'active',
    stats: {
      cellCount: 8,
      itemCount: 142,
      lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    color: {
      primary: '#9DBE64',
      secondary: '#B5CF97'
    }
  },
  health: {
    id: 'health',
    name: 'Health',
    icon: 'Heart',
    description: 'Physical & Mental Wellbeing',
    state: 'active',
    stats: {
      cellCount: 6,
      itemCount: 87,
      lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    },
    color: {
      primary: '#D97E75',
      secondary: '#E8A39E'
    }
  },
  projects: {
    id: 'projects',
    name: 'Projects',
    icon: 'FolderOpen',
    description: 'Active & Planned Work',
    state: 'active',
    stats: {
      cellCount: 7,
      itemCount: 156,
      lastUpdated: new Date(Date.now() - 30 * 60 * 1000) // 30 min ago
    },
    color: {
      primary: '#5B8FDE',
      secondary: '#8AABEE'
    }
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    icon: 'Sprout',
    description: 'Learning & Development',
    state: 'quiet',
    stats: {
      cellCount: 5,
      itemCount: 64,
      lastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    },
    color: {
      primary: '#6BC783',
      secondary: '#95D9A8'
    }
  },
  entertainment: {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'Headphones',
    description: 'Media & Experiences',
    state: 'active',
    stats: {
      cellCount: 4,
      itemCount: 234,
      lastUpdated: new Date(Date.now() - 12 * 60 * 60 * 1000) // 12 hours ago
    },
    color: {
      primary: '#D9A76A',
      secondary: '#E8C39A'
    }
  }
};

// Mock Cell Instances
export const MOCK_CELLS: Record<string, CellInstance[]> = {
  finance: [
    {
      id: 'finance-notes-1',
      type: 'notes',
      name: 'Financial Goals',
      habitatId: 'finance',
      itemCount: 12,
      lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      description: 'Annual and long-term financial objectives'
    },
    {
      id: 'finance-tasks-1',
      type: 'tasks',
      name: 'Budget & Expenses',
      habitatId: 'finance',
      itemCount: 28,
      lastUpdated: new Date(Date.now() - 60 * 60 * 1000),
      description: 'Monthly budget tracking and expense monitoring'
    },
    {
      id: 'finance-calendar-1',
      type: 'calendar',
      name: 'Financial Calendar',
      habitatId: 'finance',
      itemCount: 15,
      lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000),
      description: 'Bill payments, investment reviews, tax dates'
    },
    {
      id: 'finance-docs-1',
      type: 'documents',
      name: 'Financial Documents',
      habitatId: 'finance',
      itemCount: 42,
      lastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      description: 'Bank statements, investment records, tax documents'
    },
    {
      id: 'finance-projects-1',
      type: 'projects',
      name: 'Investment Tracking',
      habitatId: 'finance',
      itemCount: 8,
      lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      description: 'Portfolio management and investment goals'
    },
    {
      id: 'finance-lists-1',
      type: 'lists',
      name: 'Financial Accounts',
      habitatId: 'finance',
      itemCount: 6,
      lastUpdated: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      description: 'Bank accounts, credit cards, investment accounts'
    }
  ],
  health: [
    {
      id: 'health-notes-1',
      type: 'notes',
      name: 'Health Notes',
      habitatId: 'health',
      itemCount: 24,
      lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      description: 'Symptoms, observations, health insights'
    },
    {
      id: 'health-tasks-1',
      type: 'tasks',
      name: 'Health Tasks',
      habitatId: 'health',
      itemCount: 18,
      lastUpdated: new Date(Date.now() - 12 * 60 * 60 * 1000),
      description: 'Appointments, tests, checkups'
    },
    {
      id: 'health-calendar-1',
      type: 'calendar',
      name: 'Appointments & Reminders',
      habitatId: 'health',
      itemCount: 12,
      lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000),
      description: 'Doctor appointments, medication schedules'
    },
    {
      id: 'health-docs-1',
      type: 'documents',
      name: 'Health Records',
      habitatId: 'health',
      itemCount: 18,
      lastUpdated: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      description: 'Medical records, prescriptions, test results'
    },
    {
      id: 'health-lists-1',
      type: 'lists',
      name: 'Medications',
      habitatId: 'health',
      itemCount: 8,
      lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      description: 'Current medications and supplements'
    },
    {
      id: 'health-projects-1',
      type: 'projects',
      name: 'Fitness & Wellness',
      habitatId: 'health',
      itemCount: 7,
      lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      description: 'Fitness goals, wellness programs, tracking'
    }
  ],
  projects: [
    {
      id: 'projects-projects-1',
      type: 'projects',
      name: 'Active Projects',
      habitatId: 'projects',
      itemCount: 5,
      lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000),
      description: 'Currently active work projects'
    },
    {
      id: 'projects-tasks-1',
      type: 'tasks',
      name: 'Project Tasks',
      habitatId: 'projects',
      itemCount: 67,
      lastUpdated: new Date(Date.now() - 30 * 60 * 1000),
      description: 'All tasks across active projects'
    },
    {
      id: 'projects-notes-1',
      type: 'notes',
      name: 'Meeting Notes',
      habitatId: 'projects',
      itemCount: 34,
      lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000),
      description: 'Project meeting notes and decisions'
    },
    {
      id: 'projects-calendar-1',
      type: 'calendar',
      name: 'Project Timeline',
      habitatId: 'projects',
      itemCount: 28,
      lastUpdated: new Date(Date.now() - 48 * 60 * 60 * 1000),
      description: 'Project deadlines, milestones, reviews'
    },
    {
      id: 'projects-docs-1',
      type: 'documents',
      name: 'Project Documents',
      habitatId: 'projects',
      itemCount: 15,
      lastUpdated: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      description: 'Specifications, designs, reports'
    },
    {
      id: 'projects-lists-1',
      type: 'lists',
      name: 'Project Checklists',
      habitatId: 'projects',
      itemCount: 7,
      lastUpdated: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      description: 'Launch checklists, setup lists'
    }
  ]
};

// Mock Recent Activity
export const MOCK_ACTIVITIES: Record<string, ActivityItem[]> = {
  finance: [
    {
      id: 'act-1',
      type: 'updated',
      entityType: 'Note',
      title: 'Updated Budget Review',
      description: 'Adjusted Q3 budget allocations',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: 'act-2',
      type: 'created',
      entityType: 'Task',
      title: 'Added Investment Analysis',
      description: 'New quarterly investment review task',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000)
    },
    {
      id: 'act-3',
      type: 'linked',
      entityType: 'Link',
      title: 'Linked to Life Habitat',
      description: 'Connected annual goals to finance planning',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    {
      id: 'act-4',
      type: 'updated',
      entityType: 'Note',
      title: 'Reviewed Financial Goals',
      description: 'Updated progress on savings targets',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  ],
  health: [
    {
      id: 'act-h1',
      type: 'created',
      entityType: 'Task',
      title: 'Added Doctor Appointment',
      description: 'Scheduled annual checkup',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000)
    },
    {
      id: 'act-h2',
      type: 'updated',
      entityType: 'Note',
      title: 'Updated Exercise Log',
      description: 'Added this week\'s workout notes',
      timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000)
    }
  ],
  projects: [
    {
      id: 'act-p1',
      type: 'created',
      entityType: 'Task',
      title: 'New Project Task',
      description: 'Added task to alpha launch project',
      timestamp: new Date(Date.now() - 30 * 60 * 1000)
    },
    {
      id: 'act-p2',
      type: 'updated',
      entityType: 'Note',
      title: 'Team Meeting Summary',
      description: 'Updated notes from weekly standup',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    }
  ]
};

// Mock Connected Habitats
export const MOCK_CONNECTED: Record<string, ConnectedHabitat[]> = {
  finance: [
    {
      id: 'life',
      name: 'Life',
      icon: 'Home',
      itemCount: 8,
      relationship: 'Supports annual life goals'
    },
    {
      id: 'personal',
      name: 'Personal',
      icon: 'User',
      itemCount: 15,
      relationship: 'Tracks financial records'
    }
  ],
  health: [
    {
      id: 'life',
      name: 'Life',
      icon: 'Home',
      itemCount: 6,
      relationship: 'Part of wellbeing priorities'
    },
    {
      id: 'personal',
      name: 'Personal',
      icon: 'User',
      itemCount: 9,
      relationship: 'Stores health documents'
    }
  ],
  projects: [
    {
      id: 'life',
      name: 'Life',
      icon: 'Home',
      itemCount: 12,
      relationship: 'Executes life goals'
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: 'Sprout',
      itemCount: 5,
      relationship: 'Includes learning components'
    }
  ]
};

// Mock Seeds
export const MOCK_SEEDS: Record<string, SeedPreview[]> = {
  finance: [
    {
      id: 'seed-f1',
      title: 'Financial Independence Plan',
      state: 'growing',
      plantedDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
      lastTouched: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'seed-f2',
      title: 'Tax Optimization Strategy',
      state: 'sprouting',
      plantedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      lastTouched: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'seed-f3',
      title: 'Real Estate Investment Research',
      state: 'dormant',
      plantedDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
    }
  ],
  health: [
    {
      id: 'seed-h1',
      title: 'Marathon Training Plan',
      state: 'dormant',
      plantedDate: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)
    },
    {
      id: 'seed-h2',
      title: 'Meditation Habit',
      state: 'sprouting',
      plantedDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      lastTouched: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  ],
  projects: [
    {
      id: 'seed-p1',
      title: 'API Documentation Overhaul',
      state: 'growing',
      plantedDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
      lastTouched: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    }
  ]
};

// Mock Upcoming Items
export const MOCK_UPCOMING: Record<string, UpcomingItem[]> = {
  finance: [
    {
      id: 'up-f1',
      title: 'Q3 Budget Review',
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      type: 'task',
      priority: 'high'
    },
    {
      id: 'up-f2',
      title: 'Investment Portfolio Rebalance',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      type: 'task',
      priority: 'medium'
    },
    {
      id: 'up-f3',
      title: 'Tax Preparation Meeting',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      type: 'event',
      priority: 'high'
    }
  ],
  health: [
    {
      id: 'up-h1',
      title: 'Annual Checkup',
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      type: 'event',
      priority: 'high'
    },
    {
      id: 'up-h2',
      title: 'Physical Therapy Session',
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      type: 'event',
      priority: 'medium'
    }
  ],
  projects: [
    {
      id: 'up-p1',
      title: 'Alpha Launch Deadline',
      dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      type: 'task',
      priority: 'high'
    },
    {
      id: 'up-p2',
      title: 'Weekly Standup',
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      type: 'event'
    }
  ]
};

export function getHabitatById(id: string): Habitat | null {
  return MOCK_HABITATS[id] || null;
}

export function getCellsByHabitatId(habitatId: string): CellInstance[] {
  return MOCK_CELLS[habitatId] || [];
}

export function getActivitiesByHabitatId(habitatId: string): ActivityItem[] {
  return MOCK_ACTIVITIES[habitatId] || [];
}

export function getConnectedHabitatsById(habitatId: string): ConnectedHabitat[] {
  return MOCK_CONNECTED[habitatId] || [];
}

export function getSeedsByHabitatId(habitatId: string): SeedPreview[] {
  return MOCK_SEEDS[habitatId] || [];
}

export function getUpcomingItemsByHabitatId(habitatId: string): UpcomingItem[] {
  return MOCK_UPCOMING[habitatId] || [];
}
