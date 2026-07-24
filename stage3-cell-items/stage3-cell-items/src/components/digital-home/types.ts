import type { LucideIcon } from 'lucide-react';

export type HabitatTone = 'sage' | 'gold' | 'clay' | 'sky' | 'moss' | 'plum';

export interface Habitat {
  id: string;
  name: string;
  description: string;
  detail: string;
  progress: number;
  tone: HabitatTone;
  icon: LucideIcon;
}

export interface JourneyItem {
  id: string;
  time: string;
  title: string;
  meta?: string;
  completed?: boolean;
}

export interface DigitalHomeProps {
  userName?: string;
  dateLabel?: string;
  weatherLabel?: string;
  habitats?: Habitat[];
  journey?: JourneyItem[];
  onOpenHabitat?: (habitatId: string) => void;
  onCaptureSeed?: () => void;
  onOpenJourney?: () => void;
  onOpenEcosystem?: () => void;
  className?: string;
}
