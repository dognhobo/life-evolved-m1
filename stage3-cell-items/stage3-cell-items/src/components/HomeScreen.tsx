import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import type { ThemeType } from '../types';
import { MOCK_HABITATS } from '../data/mockData';
import { THEME_CONFIG } from '../types';

interface HomeScreenProps {
  theme: ThemeType;
}

export function HomeScreen({ theme }: HomeScreenProps) {
  const navigate = useNavigate();
  const themeConfig = THEME_CONFIG[theme];

  const habitats = Object.values(MOCK_HABITATS).sort((a, b) => {
    const stateOrder = { active: 0, quiet: 1, dormant: 2, archived: 3 };
    return stateOrder[a.state] - stateOrder[b.state];
  });

  return (
    <div
      style={{
        background: themeConfig.bgGradient,
        color: themeConfig.text.primary,
        minHeight: '100vh'
      }}
      className="bg-gradient-to-br"
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${themeConfig.surface} 0%, ${themeConfig.surface}80 100%)`,
          borderBottom: `1px solid ${themeConfig.surfaceBorder}`
        }}
        className="sticky top-0 z-40"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold mb-2">Life Evolved</h1>
          <p style={{ color: themeConfig.text.secondary }}>
            Your personal ecosystem for life management
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Habitats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habitats.map((habitat) => {
            const IconComponent = (LucideIcons as Record<string, any>)[habitat.icon];
            const statusColors = {
              active: themeConfig.status.active,
              quiet: themeConfig.status.quiet,
              dormant: themeConfig.status.dormant,
              archived: themeConfig.status.archived
            };

            return (
              <button
                key={habitat.id}
                onClick={() => navigate(`/habitat/${habitat.id}`)}
                style={{
                  background: themeConfig.surface,
                  border: `1px solid ${themeConfig.surfaceBorder}`
                }}
                className="text-left p-6 rounded-lg hover:shadow-lg transition transform hover:scale-105"
              >
                {/* Icon */}
                {IconComponent && (
                  <div
                    style={{ color: statusColors[habitat.state] }}
                    className="mb-4"
                  >
                    <IconComponent size={40} />
                  </div>
                )}

                {/* Title and status */}
                <div className="mb-3">
                  <h2 className="text-xl font-bold mb-1">{habitat.name}</h2>
                  <span
                    style={{
                      background: statusColors[habitat.state],
                      color: themeConfig.bg
                    }}
                    className="inline-block px-2 py-1 rounded text-xs font-semibold"
                  >
                    {habitat.state.charAt(0).toUpperCase() + habitat.state.slice(1)}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{ color: themeConfig.text.secondary }}
                  className="text-sm mb-4"
                >
                  {habitat.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div
                      style={{ color: themeConfig.text.muted }}
                      className="text-xs"
                    >
                      Cells
                    </div>
                    <div className="font-bold text-lg">
                      {habitat.stats.cellCount}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ color: themeConfig.text.muted }}
                      className="text-xs"
                    >
                      Items
                    </div>
                    <div className="font-bold text-lg">
                      {habitat.stats.itemCount}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ color: themeConfig.text.muted }}
                      className="text-xs"
                    >
                      Updated
                    </div>
                    <div
                      style={{ color: themeConfig.accent.primary }}
                      className="font-bold text-sm"
                    >
                      Now
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Welcome message */}
        <div
          style={{
            background: `${themeConfig.accent.primary}15`,
            border: `1px solid ${themeConfig.accent.primary}`
          }}
          className="rounded-lg p-6 mt-12"
        >
          <h2 className="text-2xl font-bold mb-2">Welcome to Life Evolved</h2>
          <p style={{ color: themeConfig.text.secondary }}>
            This is Stage 3 of the Life Evolved prototype. Navigate through your Habitats,
            explore Cells, and view Items. Full editing and creation features are coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
