import { ArrowRight, Check, Clock3 } from 'lucide-react';
import type { JourneyItem } from './types';

interface DailyJourneyProps {
  items: JourneyItem[];
  onOpen?: () => void;
}

export function DailyJourney({ items, onOpen }: DailyJourneyProps) {
  return (
    <section className="rounded-[1.7rem] border border-[#dfe3db] bg-white/72 p-5 shadow-[0_18px_50px_rgba(50,65,54,0.07)] backdrop-blur sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.19em] text-[#8a958c]">Today</p>
          <h2 className="mt-1 font-serif text-2xl tracking-[-0.03em] text-[#1c4032]">Your daily journey</h2>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#d8ddd5] text-[#496556] transition hover:bg-[#eef2ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315f49]/40"
          aria-label="Open full day"
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="mt-5 space-y-1">
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-[58px_28px_1fr] items-center gap-2 rounded-2xl px-1 py-3 transition hover:bg-[#f4f5f0]">
            <span className="text-xs font-medium text-[#7e8981]">{item.time}</span>
            <span
              className={`grid h-6 w-6 place-items-center rounded-full ${
                item.completed ? 'bg-[#dce8dc] text-[#477052]' : 'border border-[#d7ddd5] text-[#8d978f]'
              }`}
            >
              {item.completed ? <Check size={13} /> : <Clock3 size={12} />}
            </span>
            <div className="min-w-0">
              <p className={`truncate text-sm font-medium ${item.completed ? 'text-[#839087] line-through' : 'text-[#354b3e]'}`}>
                {item.title}
              </p>
              {item.meta && <p className="mt-0.5 text-xs text-[#9aa29c]">{item.meta}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
