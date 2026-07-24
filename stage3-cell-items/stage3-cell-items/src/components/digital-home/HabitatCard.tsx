import { ArrowUpRight } from 'lucide-react';
import type { Habitat } from './types';

const tones = {
  sage: { shell: 'bg-[#e5ede2]', ink: 'text-[#31553f]', track: 'bg-[#c8d7c7]', fill: 'bg-[#587c60]' },
  gold: { shell: 'bg-[#f1e8cf]', ink: 'text-[#6b5832]', track: 'bg-[#ddd0ad]', fill: 'bg-[#aa8750]' },
  clay: { shell: 'bg-[#eee0d5]', ink: 'text-[#704f3e]', track: 'bg-[#dcc6b8]', fill: 'bg-[#9d7058]' },
  sky: { shell: 'bg-[#e1ebec]', ink: 'text-[#3d6267]', track: 'bg-[#c7d9dc]', fill: 'bg-[#5e858b]' },
  moss: { shell: 'bg-[#dfe6d6]', ink: 'text-[#4e6040]', track: 'bg-[#c9d3be]', fill: 'bg-[#72825f]' },
  plum: { shell: 'bg-[#e8dfe6]', ink: 'text-[#664c60]', track: 'bg-[#d3c4cf]', fill: 'bg-[#896c82]' },
};

interface HabitatCardProps {
  habitat: Habitat;
  featured?: boolean;
  onOpen?: (id: string) => void;
}

export function HabitatCard({ habitat, featured = false, onOpen }: HabitatCardProps) {
  const tone = tones[habitat.tone];
  const Icon = habitat.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen?.(habitat.id)}
      className={`group relative min-h-[172px] overflow-hidden rounded-[1.7rem] border border-white/55 p-5 text-left shadow-[0_15px_40px_rgba(53,68,57,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(53,68,57,0.13)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315f49]/45 ${tone.shell} ${featured ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[364px]' : ''}`}
    >
      <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/25 transition duration-500 group-hover:scale-125" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-white/55 ${tone.ink}`}>
            <Icon size={21} strokeWidth={1.7} />
          </span>
          <ArrowUpRight className={`h-5 w-5 opacity-45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80 ${tone.ink}`} />
        </div>
        <div className={`${featured ? 'mt-auto pt-14' : 'mt-7'}`}>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.17em] opacity-65 ${tone.ink}`}>
            {habitat.description}
          </p>
          <h3 className={`mt-1 font-serif text-[1.7rem] leading-tight tracking-[-0.035em] ${tone.ink}`}>
            {habitat.name}
          </h3>
          <p className={`mt-2 text-sm leading-5 opacity-75 ${tone.ink}`}>{habitat.detail}</p>
        </div>
        <div className="mt-5">
          <div className={`h-1.5 overflow-hidden rounded-full ${tone.track}`}>
            <div className={`h-full rounded-full ${tone.fill}`} style={{ width: `${habitat.progress}%` }} />
          </div>
        </div>
      </div>
    </button>
  );
}
