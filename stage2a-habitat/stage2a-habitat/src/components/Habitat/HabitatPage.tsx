import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { ThemeType } from '../../types';
import { HabitatHeader } from './HabitatHeader';
import { CellTypeGrid } from './CellTypeGrid';
import {
  RecentActivityPanel,
  ConnectedHabitatsPanel,
  SeedsPanel,
  UpcomingItemsPanel
} from './HabitatPanels';
import {
  getHabitatById,
  getCellsByHabitatId,
  getActivitiesByHabitatId,
  getConnectedHabitatsById,
  getSeedsByHabitatId,
  getUpcomingItemsByHabitatId
} from '../../data/mockData';
import { getThemeConfig } from '../../utils/helpers';

interface HabitatPageProps {
  theme: ThemeType;
  onSettingsClick?: () => void;
}

export const HabitatPage: React.FC<HabitatPageProps> = ({
  theme,
  onSettingsClick
}) => {
  const { habitatId } = useParams<{ habitatId: string }>();

  // Fetch data for this habitat
  const habitat = useMemo(() => {
    return habitatId ? getHabitatById(habitatId) : null;
  }, [habitatId]);

  const cells = useMemo(() => {
    return habitatId ? getCellsByHabitatId(habitatId) : [];
  }, [habitatId]);

  const activities = useMemo(() => {
    return habitatId ? getActivitiesByHabitatId(habitatId) : [];
  }, [habitatId]);

  const connectedHabitats = useMemo(() => {
    return habitatId ? getConnectedHabitatsById(habitatId) : [];
  }, [habitatId]);

  const seeds = useMemo(() => {
    return habitatId ? getSeedsByHabitatId(habitatId) : [];
  }, [habitatId]);

  const upcomingItems = useMemo(() => {
    return habitatId ? getUpcomingItemsByHabitatId(habitatId) : [];
  }, [habitatId]);

  const themeConfig = getThemeConfig(theme);

  // Error state - habitat not found
  if (!habitat) {
    return (
      <div
        className={`min-h-screen ${themeConfig === getThemeConfig('forest') ? 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]' : 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]'} flex items-center justify-center p-4`}
      >
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-2" style={{ color: themeConfig.text.primary }}>
            Habitat Not Found
          </h1>
          <p className="mb-6" style={{ color: themeConfig.text.muted }}>
            The habitat you're looking for doesn't exist. Try navigating from the home screen.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 rounded-lg font-medium"
            style={{
              backgroundColor: themeConfig.accent.primary,
              color: theme === 'forest' ? '#07130D' : '#FAFAFA'
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${themeConfig === getThemeConfig('forest') ? 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]' : 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]'}`}
    >
      {/* Main content container */}
      <div className="max-w-6xl mx-auto">
        {/* Habitat Header */}
        <HabitatHeader
          habitat={habitat}
          theme={theme}
          onSettings={onSettingsClick}
        />

        {/* Two-column layout for larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 lg:p-6">
          {/* Main column - Cells and Panels */}
          <div className="lg:col-span-2">
            {/* Cell Grid */}
            <CellTypeGrid
              cells={cells}
              theme={theme}
              onCellClick={(cell) => {
                // TODO: Navigate to cell detail page in Stage 2b
                console.log('Navigate to cell:', cell.id);
              }}
            />

            {/* Recent Activity - Mobile only, moved to sidebar on desktop */}
            <div className="lg:hidden">
              <RecentActivityPanel
                theme={theme}
                title="Recent Activity"
                activities={activities}
              />
            </div>

            {/* Upcoming Items */}
            <UpcomingItemsPanel
              theme={theme}
              title="Upcoming Items"
              items={upcomingItems}
            />

            {/* Connected Habitats */}
            <ConnectedHabitatsPanel
              theme={theme}
              title="Connected Habitats"
              habitats={connectedHabitats}
            />

            {/* Seeds */}
            <SeedsPanel
              theme={theme}
              title="Seeds"
              seeds={seeds}
            />
          </div>

          {/* Sidebar column - Desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-6 space-y-0">
              {/* Recent Activity */}
              <div
                className="rounded-lg border overflow-hidden"
                style={{
                  borderColor: themeConfig.surfaceBorder,
                  backgroundColor: themeConfig.surface
                }}
              >
                <RecentActivityPanel
                  theme={theme}
                  title="Recent Activity"
                  activities={activities}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </div>
  );
};
