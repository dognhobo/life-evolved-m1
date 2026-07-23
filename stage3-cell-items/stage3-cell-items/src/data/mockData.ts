import type { Habitat, CellInstance, Item } from '../types';

// ========================
// HABITATS (from Stage 2)
// ========================

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
      lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000)
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
      lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000)
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
      lastUpdated: new Date(Date.now() - 30 * 60 * 1000)
    }
  }
};

// ========================
// CELLS (from Stage 2)
// ========================

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

// ========================
// ITEMS (NEW - Stage 3)
// ========================

export const MOCK_ITEMS: Record<string, Item[]> = {
  'finance-tasks-1': [
    {
      id: 'item-ft-1',
      type: 'task',
      title: 'Review monthly credit card statement',
      content: 'Check all transactions for accuracy and identify any fraudulent charges. Look for recurring subscriptions that may need to be cancelled.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high',
        tags: ['finance', 'monthly']
      },
      relatedItems: ['item-ft-2', 'item-ft-3']
    },
    {
      id: 'item-ft-2',
      type: 'task',
      title: 'Transfer to savings account',
      content: 'Automate 20% of paycheck to go directly to savings. Review current allocation and adjust if needed.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high',
        tags: ['finance', 'savings', 'recurring']
      }
    },
    {
      id: 'item-ft-3',
      type: 'task',
      title: 'Pay off credit card balance',
      content: 'Pay off remaining balance on high-interest credit card. Current balance is $2,450.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'in-progress',
        priority: 'high'
      }
    },
    {
      id: 'item-ft-4',
      type: 'task',
      title: 'Schedule tax consultation',
      content: 'Book appointment with tax accountant to discuss 2025 tax planning strategy and potential deductions.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'medium'
      }
    },
    {
      id: 'item-ft-5',
      type: 'task',
      title: 'Update household budget',
      content: 'Review spending from last month, update categories, and adjust budget allocations for Q3.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high'
      }
    },
    {
      id: 'item-ft-6',
      type: 'task',
      title: 'Renew car insurance policy',
      content: 'Get quotes from 3 insurance companies. Current policy expires on August 15. Premium is $1,200/6 months.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'medium'
      }
    },
    {
      id: 'item-ft-7',
      type: 'task',
      title: 'Increase 401k contribution',
      content: 'Increase contribution from 5% to 7% of salary. Update with HR department.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: 'completed',
        priority: 'high'
      }
    },
    {
      id: 'item-ft-8',
      type: 'task',
      title: 'Track investment performance',
      content: 'Review quarterly investment returns. S&P 500 index up 8.5%, My portfolio up 7.2%.',
      cellId: 'finance-tasks-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'in-progress',
        priority: 'medium'
      }
    }
  ],

  'finance-notes-1': [
    {
      id: 'item-fn-1',
      type: 'note',
      title: '2026 Financial Goals',
      content: `
# 2026 Financial Objectives

## Short-term (0-3 months)
- Build emergency fund to $15,000 (currently $8,500)
- Pay off credit card debt ($2,450)
- Review and optimize insurance coverage

## Medium-term (3-12 months)
- Increase investment portfolio to $100,000
- Start real estate investment research
- Achieve 10% savings rate

## Long-term (1-5 years)
- Purchase primary residence
- Build wealth to support early retirement
- Establish passive income streams

## Key Metrics
- Current net worth: $450,000
- Savings rate: 6%
- Investment return target: 8% annually
- Goal: Reach $1M net worth by age 40
      `,
      cellId: 'finance-notes-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        status: 'active',
        tags: ['goals', 'long-term', 'planning']
      }
    },
    {
      id: 'item-fn-2',
      type: 'note',
      title: 'Investment Research - Dividend Stocks',
      content: `
# High Dividend Yielding Stocks to Research

## Candidates
1. **Coca-Cola (KO)** - 3.1% yield, 60+ years dividend growth
2. **Johnson & Johnson (JNJ)** - 2.8% yield, defensive healthcare
3. **Verizon (VZ)** - 6.2% yield, stable telecom
4. **Target (TGT)** - 2.5% yield, retail resilience

## Selection Criteria
- Dividend yield > 2.5%
- 5+ years of dividend growth
- Strong balance sheet (debt/equity < 2.0)
- Industry with stable/growing demand

## Next Steps
- Analyze balance sheets for each candidate
- Review 5-year performance charts
- Calculate dividend reinvestment growth
      `,
      cellId: 'finance-notes-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        status: 'active',
        tags: ['investments', 'research', 'stocks']
      }
    },
    {
      id: 'item-fn-3',
      type: 'note',
      title: 'Tax Planning Notes 2025',
      content: `
# 2025 Tax Strategy

## Income Strategies
- Contribute max to traditional 401k ($23,500)
- Fund HSA for medical expenses ($4,150)
- Consider backdoor Roth conversion

## Deduction Opportunities
- Charitable donations ($5,000 planned)
- Home office expenses (if self-employed)
- Investment loss harvesting

## Due Dates
- IRA contributions: April 15, 2026
- Estimated quarterly taxes: Sep 15, Dec 15
- 1099 deadline: Jan 31, 2026

## Expected Tax Bracket
- Federal: 24% (married filing jointly)
- State: 5.5%
- Combined effective rate: ~28%
      `,
      cellId: 'finance-notes-1',
      habitatId: 'finance',
      metadata: {
        createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        status: 'active',
        tags: ['taxes', 'planning', 'annual']
      }
    }
  ],

  'health-tasks-1': [
    {
      id: 'item-ht-1',
      type: 'task',
      title: 'Schedule annual physical exam',
      content: 'Book appointment with Dr. Johnson for annual checkup. Last physical was June 2025.',
      cellId: 'health-tasks-1',
      habitatId: 'health',
      metadata: {
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high',
        tags: ['health', 'medical', 'recurring']
      }
    },
    {
      id: 'item-ht-2',
      type: 'task',
      title: 'Refill prescriptions',
      content: 'Refill: Lisinopril (blood pressure), Vitamin D3. Check expiration dates.',
      cellId: 'health-tasks-1',
      habitatId: 'health',
      metadata: {
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high'
      }
    },
    {
      id: 'item-ht-3',
      type: 'task',
      title: 'Complete blood work labs',
      content: 'Cholesterol, glucose, thyroid function. Prepare for appointment with blood work results.',
      cellId: 'health-tasks-1',
      habitatId: 'health',
      metadata: {
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        status: 'in-progress',
        priority: 'high'
      }
    },
    {
      id: 'item-ht-4',
      type: 'task',
      title: 'Schedule dentist appointment',
      content: 'Routine cleaning and checkup. Last visit was 6 months ago.',
      cellId: 'health-tasks-1',
      habitatId: 'health',
      metadata: {
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'medium'
      }
    }
  ],

  'projects-tasks-1': [
    {
      id: 'item-pt-1',
      type: 'task',
      title: 'Finalize API documentation',
      content: 'Complete REST API reference including all endpoints, request/response examples, and error codes. Include authentication section.',
      cellId: 'projects-tasks-1',
      habitatId: 'projects',
      metadata: {
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        status: 'in-progress',
        priority: 'high',
        tags: ['documentation', 'api', 'backend']
      }
    },
    {
      id: 'item-pt-2',
      type: 'task',
      title: 'Code review: Authentication module',
      content: 'Review OAuth2 implementation for security vulnerabilities. Check token refresh logic.',
      cellId: 'projects-tasks-1',
      habitatId: 'projects',
      metadata: {
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high'
      }
    },
    {
      id: 'item-pt-3',
      type: 'task',
      title: 'Performance testing - Database queries',
      content: 'Run load tests on critical database queries. Target: < 100ms response time for 95th percentile.',
      cellId: 'projects-tasks-1',
      habitatId: 'projects',
      metadata: {
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'medium'
      }
    },
    {
      id: 'item-pt-4',
      type: 'task',
      title: 'Deploy alpha release to staging',
      content: 'Test deployment pipeline. Verify monitoring and logging. Run smoke tests.',
      cellId: 'projects-tasks-1',
      habitatId: 'projects',
      metadata: {
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        status: 'active',
        priority: 'high'
      }
    }
  ]
};

// ========================
// Helper Functions
// ========================

export function getHabitatById(id: string): Habitat | null {
  return MOCK_HABITATS[id] || null;
}

export function getCellsByHabitatId(habitatId: string): CellInstance[] {
  return MOCK_CELLS[habitatId] || [];
}

export function getCellById(habitatId: string, cellId: string): CellInstance | null {
  const cells = getCellsByHabitatId(habitatId);
  return cells.find(c => c.id === cellId) || null;
}

export function getItemsByCellId(cellId: string): Item[] {
  return MOCK_ITEMS[cellId] || [];
}

export function getItemById(cellId: string, itemId: string): Item | null {
  const items = getItemsByCellId(cellId);
  return items.find(i => i.id === itemId) || null;
}

export function getRelatedItems(itemId: string, cellId: string): Item[] {
  const items = getItemsByCellId(cellId);
  const item = items.find(i => i.id === itemId);
  if (!item?.relatedItems) return [];
  
  return items.filter(i => item.relatedItems?.includes(i.id)) || [];
}
