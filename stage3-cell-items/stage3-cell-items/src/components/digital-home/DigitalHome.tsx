import { defaultHabitats, defaultJourney } from './data';
import { DailyJourney } from './DailyJourney';
import { EcosystemFooter } from './EcosystemFooter';
import { HabitatLandscape } from './HabitatLandscape';
import { MorningPanel } from './MorningPanel';
import type { DigitalHomeProps } from './types';

export function DigitalHome({
  userName = 'Ricky',
  dateLabel = 'Thursday, 23 July',
  weatherLabel = '17° · Calm',
  habitats = defaultHabitats,
  journey = defaultJourney,
  onOpenHabitat,
  onCaptureSeed,
  onOpenJourney,
  onOpenEcosystem,
  className = '',
}: DigitalHomeProps) {
  return (
    <div className={`min-h-full bg-[#eef0e9] text-[#263b30] ${className}`}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.28] [background-image:radial-gradient(circle_at_20%_0%,white_0,transparent_38%),radial-gradient(circle_at_100%_35%,#dce6d9_0,transparent_30%)]" />
      
      <main className="relative mx-auto max-w-[1180px] space-y-6 px-4 pb-28 pt-4 sm:px-6 sm:pt-6 lg:space-y-8 lg:px-8 lg:pb-14">
        <MorningPanel userName={userName} dateLabel={dateLabel} weatherLabel={weatherLabel} />
        
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.8fr)] lg:items-start lg:gap-8">
          <HabitatLandscape habitats={habitats} onOpenHabitat={onOpenHabitat} />
          
          <div className="space-y-6 lg:sticky lg:top-6">
            <DailyJourney items={journey} onOpen={onOpenJourney} />
            <div className="rounded-[1.7rem] border border-[#dedfd4] bg-[#e9e7d8]/75 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8e79]">A gentle nudge</p>
              <p className="mt-2 font-serif text-xl leading-snug text-[#4b533e]">The next useful thing is enough.</p>
              <p className="mt-2 text-sm leading-6 text-[#777d6a]">You do not need to organise the whole of life before lunch.</p>
            </div>
          </div>
        </div>
        
        <EcosystemFooter onCaptureSeed={onCaptureSeed} onOpenEcosystem={onOpenEcosystem} />
      </main>
    </div>
  );
}
