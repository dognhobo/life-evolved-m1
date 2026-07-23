import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { Habitat, ThemeType } from '../../types';
import { getThemeConfig, formatTimeAgo, capitalize } from '../../utils/helpers';

interface HabitatHeaderProps {
  habitat: Habitat;
  theme: ThemeType;
  onSettings?: () => void;
}

export const HabitatHeader: React.FC<HabitatHeaderProps> = ({
  habitat,
  theme,
  onSettings
}) => {
  const themeConfig = getThemeConfig(theme);
  const IconComponent = (LucideIcons as any)[habitat.icon] || LucideIcons.Home;
  const statusColor = (themeConfig.status as Record<string, string>)[habitat.state] || themeConfig.accent.primary;

  return (
    <div className="px-4 pt-4 pb-6 sm:px-6 sm:pb-8 border-b" style={{
      borderColor: themeConfig.surfaceBorder,
      backgroundColor: themeConfig.surface
    }}>
      {/* Top row - back button and settings */}
      <div className="flex items-center justify-between mb-4">
        <button
          className="p-2 -ml-2 hover:opacity-70 transition-opacity"
          onClick={() => window.history.back()}
          title="Go back"
        >
          <LucideIcons.ArrowLeft size={24} style={{ color: themeConfig.text.primary }} />
        </button>
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: themeConfig.text.muted }}>
          Habitats
        </span>
        <button
          className="p-2 -mr-2 hover:opacity-70 transition-opacity"
          onClick={onSettings}
          title="Habitat settings"
        >
          <LucideIcons.MoreVertical size={24} style={{ color: themeConfig.text.primary }} />
        </button>
      </div>

      {/* Main header content */}
      <div className="flex items-start gap-4 mb-4">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: `${statusColor}20`,
            border: `2px solid ${statusColor}`
          }}
        >
          <IconComponent
            size={32}
            className="sm:w-10 sm:h-10"
            style={{ color: statusColor }}
          />
        </div>

        {/* Habitat info */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: themeConfig.text.primary }}>
            {habitat.name}
          </h1>
          <p className="text-sm sm:text-base mb-3" style={{ color: themeConfig.text.muted }}>
            {habitat.description}
          </p>

          {/* State badge and stats */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${statusColor}20`,
                color: statusColor,
                border: `1px solid ${statusColor}40`
              }}
            >
              {capitalize(habitat.state)}
            </span>
            <span className="text-xs" style={{ color: themeConfig.text.muted }}>
              •
            </span>
            <span className="text-xs" style={{ color: themeConfig.text.muted }}>
              {habitat.stats.cellCount} cells
            </span>
            <span className="text-xs" style={{ color: themeConfig.text.muted }}>
              •
            </span>
            <span className="text-xs" style={{ color: themeConfig.text.muted }}>
              {habitat.stats.itemCount} items
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between text-xs" style={{ color: themeConfig.text.muted }}>
        <span>
          Last updated {formatTimeAgo(habitat.stats.lastUpdated)}
        </span>
      </div>
    </div>
  );
};
