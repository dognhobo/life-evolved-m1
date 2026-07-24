import { CloudSun, Sparkles } from 'lucide-react';
import { LivingLogo } from './LivingLogo';

interface MorningPanelProps {
  userName: string;
  dateLabel: string;
  weatherLabel: string;
}

export function MorningPanel({ userName, dateLabel, weatherLabel }: MorningPanelProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#f7f2e7]/90 px-5 py-5 shadow-[0_24px_70px_rgba(42,66,51,0.12)] backdrop-blur md:px-8 md:py-7">
      <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#d9e4d5]/65 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-[25%] h-44 w-44 rounded-full bg-[#eadfbd]/50 blur-3xl" />
      
      <div className="relative flex items-start justify-between gap-4">
        <LivingLogo size="md" label />
        <div className="flex items-center gap-2 rounded-full border border-[#d8d7ca] bg-white/65 px-3 py-2 text-xs text-[#5e6d63]">
          <CloudSun size={15} />
          <span>{weatherLabel}</span>
        </div>
      </div>
      
      <div className="relative mt-10 max-w-2xl md:mt-14">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#879287]">
          <Sparkles size={14} />
          {dateLabel}
        </div>
        <h1 className="font-serif text-[2.35rem] leading-[1.03] tracking-[-0.045em] text-[#183c2e] sm:text-5xl">
          Good morning, {userName}.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#657369] sm:text-base">
          Your day is ready. Nothing is shouting. Start with what feels useful.
        </p>
      </div>
    </section>
  );
}
