import {
  Activity,
  BookOpen,
  Briefcase,
  Coins,
  HeartPulse,
  Mountain,
} from 'lucide-react';
import type { Habitat, JourneyItem } from './types';

export const defaultHabitats: Habitat[] = [
  {
    id: 'health',
    name: 'Health',
    description: 'Body & mind',
    detail: 'Two gentle actions waiting',
    progress: 68,
    tone: 'sage',
    icon: HeartPulse,
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Money with purpose',
    detail: 'Weekly investing is on track',
    progress: 74,
    tone: 'gold',
    icon: Coins,
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Ideas made real',
    detail: 'Life Evolved is in focus',
    progress: 61,
    tone: 'clay',
    icon: Briefcase,
  },
  {
    id: 'learning',
    name: 'Learning',
    description: 'Curiosity & growth',
    detail: 'One active learning path',
    progress: 42,
    tone: 'sky',
    icon: BookOpen,
  },
  {
    id: 'wellbeing',
    name: 'Wellbeing',
    description: 'Energy & balance',
    detail: 'A quieter evening may help',
    progress: 55,
    tone: 'moss',
    icon: Activity,
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Places & experiences',
    detail: 'Three seeds are resting here',
    progress: 30,
    tone: 'plum',
    icon: Mountain,
  },
];

export const defaultJourney: JourneyItem[] = [
  { id: '1', time: '8:30', title: 'Morning medication', meta: 'Health', completed: true },
  { id: '2', time: '10:00', title: 'Gym session', meta: 'Health' },
  { id: '3', time: '11:30', title: 'Team meeting', meta: 'Work' },
  { id: '4', time: 'Evening', title: 'Review one project seed', meta: 'Projects' },
];
