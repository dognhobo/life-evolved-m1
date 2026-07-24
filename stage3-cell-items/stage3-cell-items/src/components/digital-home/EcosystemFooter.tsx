import { ArrowRight, Leaf, Plus } from 'lucide-react';

interface EcosystemFooterProps {
  onCaptureSeed?: () => void;
  onOpenEcosystem?: () => void;
}

export function EcosystemFooter({ onCaptureSeed, onOpenEcosystem }: EcosystemFooterProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.9rem] bg-[#163d2e] p-6 text-[#f3f1e8] shadow-[0_25px_65px_rgba(25,55,41,0.2)] sm:p-8">
      <div className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full border border-white/10" />
      <Leaf className="absolute bottom-[-28px] right-10 h-32 w-32 rotate-12 text-white/[0.045]" strokeWidth={1} />
      
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8d4c8]">The ecosystem</p>
          <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-[2.25rem]">
            Quiet progress is still progress.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c8d4c8]">
            You have 12 active seeds, 4 growing routines, and plenty of room to leave the rest alone.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onCaptureSeed}
            className="inline-flex items-center gap-2 rounded-full bg-[#e7d79e] px-4 py-3 text-sm font-semibold text-[#244638] transition hover:-translate-y-0.5 hover:bg-[#efe2b5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <Plus size={17} /> Plant a seed
          </button>
          <button
            type="button"
            onClick={onOpenEcosystem}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            View ecosystem <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
