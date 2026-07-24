import type { Habitat } from './types';
import { HabitatCard } from './HabitatCard';

interface HabitatLandscapeProps {
  habitats: Habitat[];
  onOpenHabitat?: (id: string) => void;
}

export function HabitatLandscape({ habitats, onOpenHabitat }: HabitatLandscapeProps) {
  return (
    <section aria-labelledby="habitats-heading">
      <div className="mb-4 flex items-end justify-between gap-4 px-1">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.19em] text-[#8a958c]">Your world</p>
          <h2 id="habitats-heading" className="mt-1 font-serif text-3xl tracking-[-0.035em] text-[#1c4032]">
            Habitats
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-6 text-[#758078] sm:block">
          Different spaces for different parts of life. All connected, none competing.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {habitats.map((habitat, index) => (
          <HabitatCard
            key={habitat.id}
            habitat={habitat}
            featured={index === 0}
            onOpen={onOpenHabitat}
          />
        ))}
      </div>
    </section>
  );
}
