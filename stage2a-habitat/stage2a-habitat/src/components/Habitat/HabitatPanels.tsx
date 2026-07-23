import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { ActivityItem, ConnectedHabitat, SeedPreview, UpcomingItem, ThemeType } from '../../types';
import { getThemeConfig, formatTimeAgo, formatShortDate, capitalize } from '../../utils/helpers';

interface PanelProps {
  theme: ThemeType;
  title: string;
}

interface RecentActivityProps extends PanelProps {
  activities: ActivityItem[];
}

interface ConnectedHabitatsProps extends PanelProps {
  habitats: ConnectedHabitat[];
}

interface SeedsPanelProps extends PanelProps {
  seeds: SeedPreview[];
}

interface UpcomingItemsProps extends PanelProps {
  items: UpcomingItem[];
}

// Recent Activity Panel
export const RecentActivityPanel: React.FC<RecentActivityProps> = ({
  theme,
  title,
  activities
}) => {
  const themeConfig = getThemeConfig(theme);

  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 border-t" style={{ borderColor: themeConfig.surfaceBorder }}>
      <h2 className="text-lg font-semibold mb-4" style={{ color: themeConfig.text.primary }}>
        {title}
      </h2>

      <div className="space-y-3">
        {activities.slice(0, 4).map(activity => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-opacity-70"
            style={{
              backgroundColor: themeConfig.surface,
              borderLeft: `3px solid ${themeConfig.accent.primary}`
            }}
          >
            <div className="flex-shrink-0 mt-0.5">
              {activity.type === 'created' && <LucideIcons.Plus size={18} style={{ color: themeConfig.accent.primary }} />}
              {activity.type === 'updated' && <LucideIcons.Edit3 size={18} style={{ color: themeConfig.accent.primary }} />}
              {activity.type === 'linked' && <LucideIcons.Link2 size={18} style={{ color: themeConfig.accent.primary }} />}
              {activity.type === 'archived' && <LucideIcons.Archive size={18} style={{ color: themeConfig.text.muted }} />}
              {activity.type === 'commented' && <LucideIcons.MessageCircle size={18} style={{ color: themeConfig.accent.primary }} />}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium mb-0.5" style={{ color: themeConfig.text.primary }}>
                {activity.title}
              </p>
              {activity.description && (
                <p className="text-xs mb-1 line-clamp-1" style={{ color: themeConfig.text.muted }}>
                  {activity.description}
                </p>
              )}
              <p className="text-xs" style={{ color: themeConfig.text.muted }}>
                {formatTimeAgo(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {activities.length > 4 && (
        <button
          className="mt-3 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: themeConfig.accent.primary }}
        >
          View all activities →
        </button>
      )}
    </div>
  );
};

// Connected Habitats Panel
export const ConnectedHabitatsPanel: React.FC<ConnectedHabitatsProps> = ({
  theme,
  title,
  habitats
}) => {
  const themeConfig = getThemeConfig(theme);

  if (habitats.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 border-t" style={{ borderColor: themeConfig.surfaceBorder }}>
      <h2 className="text-lg font-semibold mb-4" style={{ color: themeConfig.text.primary }}>
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {habitats.map(habitat => (
          <button
            key={habitat.id}
            className="p-3 rounded-lg border text-left transition-colors hover:bg-opacity-70"
            style={{
              backgroundColor: themeConfig.surface,
              borderColor: themeConfig.surfaceBorder
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{
                backgroundColor: `${themeConfig.accent.primary}20`
              }}>
                <LucideIcons.Home size={16} style={{ color: themeConfig.accent.primary }} />
              </div>
              <span className="font-semibold text-sm" style={{ color: themeConfig.text.primary }}>
                {habitat.name}
              </span>
            </div>
            <p className="text-xs mb-2" style={{ color: themeConfig.text.muted }}>
              {habitat.relationship}
            </p>
            <p className="text-xs font-medium" style={{ color: themeConfig.accent.primary }}>
              {habitat.itemCount} items
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

// Seeds Panel
export const SeedsPanel: React.FC<SeedsPanelProps> = ({
  theme,
  title,
  seeds
}) => {
  const themeConfig = getThemeConfig(theme);

  if (seeds.length === 0) {
    return null;
  }

  const growingSeeds = seeds.filter(s => s.state !== 'dormant');
  const dormantSeeds = seeds.filter(s => s.state === 'dormant');

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 border-t" style={{ borderColor: themeConfig.surfaceBorder }}>
      <h2 className="text-lg font-semibold mb-4" style={{ color: themeConfig.text.primary }}>
        {title}
      </h2>

      {/* Growing Seeds */}
      {growingSeeds.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: themeConfig.accent.primary }}>
            Growing
          </h3>
          <div className="space-y-2">
            {growingSeeds.map(seed => (
              <div
                key={seed.id}
                className="p-3 rounded-lg border"
                style={{
                  backgroundColor: `${themeConfig.accent.primary}10`,
                  borderColor: themeConfig.accent.primary
                }}
              >
                <p className="font-medium text-sm mb-1" style={{ color: themeConfig.text.primary }}>
                  {seed.title}
                </p>
                <p className="text-xs" style={{ color: themeConfig.text.muted }}>
                  {capitalize(seed.state)} • {formatTimeAgo(seed.lastTouched || seed.plantedDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dormant Seeds */}
      {dormantSeeds.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: themeConfig.text.muted }}>
            Dormant
          </h3>
          <div className="space-y-2">
            {dormantSeeds.map(seed => (
              <div
                key={seed.id}
                className="p-3 rounded-lg border"
                style={{
                  backgroundColor: themeConfig.surface,
                  borderColor: themeConfig.surfaceBorder
                }}
              >
                <p className="font-medium text-sm mb-1" style={{ color: themeConfig.text.primary }}>
                  {seed.title}
                </p>
                <p className="text-xs" style={{ color: themeConfig.text.muted }}>
                  Dormant • Planted {formatTimeAgo(seed.plantedDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Upcoming Items Panel
export const UpcomingItemsPanel: React.FC<UpcomingItemsProps> = ({
  theme,
  title,
  items
}) => {
  const themeConfig = getThemeConfig(theme);

  if (items.length === 0) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingItems = items.slice(0, 4);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 border-t" style={{ borderColor: themeConfig.surfaceBorder }}>
      <h2 className="text-lg font-semibold mb-4" style={{ color: themeConfig.text.primary }}>
        {title}
      </h2>

      <div className="space-y-2">
        {upcomingItems.map(item => {
          const isHighPriority = item.priority === 'high';
          const dueDate = new Date(item.dueDate);

          return (
            <div
              key={item.id}
              className="p-3 rounded-lg border flex items-center justify-between group hover:shadow-sm transition-shadow"
              style={{
                backgroundColor: isHighPriority ? `${themeConfig.accent.primary}10` : themeConfig.surface,
                borderColor: isHighPriority ? themeConfig.accent.primary : themeConfig.surfaceBorder
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm mb-0.5" style={{ color: themeConfig.text.primary }}>
                  {item.title}
                </p>
                <p className="text-xs" style={{ color: themeConfig.text.muted }}>
                  {formatShortDate(dueDate)} • {capitalize(item.type)}
                </p>
              </div>
              {isHighPriority && (
                <div
                  className="ml-2 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: themeConfig.accent.primary }}
                />
              )}
            </div>
          );
        })}
      </div>

      {items.length > 4 && (
        <button
          className="mt-3 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: themeConfig.accent.primary }}
        >
          View calendar →
        </button>
      )}
    </div>
  );
};
