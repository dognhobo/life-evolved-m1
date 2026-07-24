import { Leaf } from 'lucide-react';

interface LivingLogoProps {
  size?: 'sm' | 'md' | 'lg';
  label?: boolean;
}

const sizes = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-24 w-24',
};

export function LivingLogo({ size = 'md', label = false }: LivingLogoProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <div
        className={`${sizes[size]} relative grid shrink-0 place-items-center rounded-full border border-[#d8c88d]/45 bg-[#123e2d] shadow-[0_14px_38px_rgba(25,48,35,0.22)]`}
        aria-label="Life Evolved living emblem"
      >
        <span className="absolute inset-[7%] rounded-full border border-white/10" />
        <span className="absolute bottom-[17%] h-[30%] w-px bg-[#d8c88d]/60" />
        <Leaf className="relative z-10 h-[44%] w-[44%] -rotate-12 text-[#e6d79f]" strokeWidth={1.6} />
        <span className="absolute bottom-[14%] left-1/2 h-[19%] w-[44%] -translate-x-1/2 rounded-[50%] border-b border-[#d8c88d]/55" />
      </div>
      {label && (
        <div>
          <p className="font-serif text-lg leading-none tracking-[-0.02em] text-[#173c2e]">Life Evolved</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#6f7f74]">Your living system</p>
        </div>
      )}
    </div>
  );
}
