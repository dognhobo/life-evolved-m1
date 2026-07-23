import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HabitatPage } from './components/Habitat/HabitatPage';
import { useTheme } from './hooks/useTheme';
import { MOCK_HABITATS } from './data/mockData';
import * as LucideIcons from 'lucide-react';
import { getThemeConfig } from './utils/helpers';

function App() {
  const { theme, switchTheme, isLoading } = useTheme();
  const themeConfig = getThemeConfig(theme);

  if (isLoading) {
    return (
      <div
        className={`min-h-screen ${themeConfig === getThemeConfig('forest') ? 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]' : 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]'} flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-transparent rounded-full animate-spin mb-4 mx-auto" style={{
            borderTopColor: themeConfig.accent.primary
          }} />
          <p style={{ color: themeConfig.text.primary }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: themeConfig.bg }}>
        {/* Theme Switcher - Fixed in top right */}
        <div className="fixed top-4 right-4 z-50 flex gap-2 p-2 rounded-lg" style={{
          backgroundColor: `${themeConfig.surface}`,
          border: `1px solid ${themeConfig.surfaceBorder}`
        }}>
          <button
            onClick={() => switchTheme('forest')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
              theme === 'forest' ? 'text-white' : ''
            }`}
            style={{
              backgroundColor: theme === 'forest' ? '#9DBE64' : 'transparent',
              color: theme === 'forest' ? '#07130D' : themeConfig.text.muted,
            }}
            title="Switch to Forest theme"
          >
            🌲 Forest
          </button>
          <button
            onClick={() => switchTheme('minimal')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all`}
            style={{
              backgroundColor: theme === 'minimal' ? '#8B9B7E' : 'transparent',
              color: theme === 'minimal' ? 'white' : themeConfig.text.muted,
            }}
            title="Switch to Minimal theme"
          >
            ◻ Minimal
          </button>
        </div>

        {/* Main navigation and home screen */}
        <Routes>
          {/* Home screen - shows available habitats */}
          <Route path="/" element={<HomeScreen theme={theme} />} />

          {/* Habitat detail page */}
          <Route path="/habitat/:habitatId" element={<HabitatPage theme={theme} />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

/**
 * Home Screen - Shows available habitats as quick navigation
 */
const HomeScreen: React.FC<{ theme: 'forest' | 'minimal' }> = ({ theme }) => {
  const themeConfig = getThemeConfig(theme);

  return (
    <div className={`min-h-screen ${themeConfig === getThemeConfig('forest') ? 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]' : 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]'}`}>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center" style={{ color: themeConfig.text.primary }}>
          Life Evolved
        </h1>
        <p className="text-center mb-12" style={{ color: themeConfig.text.muted }}>
          Stage 2a: Habitat Detail Page
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(MOCK_HABITATS).map(habitat => {
            const IconComponent = (LucideIcons as any)[habitat.icon] || LucideIcons.Home;
            const statusColor = (themeConfig.status as Record<string, string>)[habitat.state] || themeConfig.accent.primary;

            return (
              <a
                key={habitat.id}
                href={`/habitat/${habitat.id}`}
                className="group p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: themeConfig.surface,
                  borderColor: themeConfig.surfaceBorder
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${statusColor}20`,
                      border: `2px solid ${statusColor}`
                    }}
                  >
                    <IconComponent size={28} style={{ color: statusColor }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${statusColor}20`,
                      color: statusColor
                    }}
                  >
                    {habitat.state}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2" style={{ color: themeConfig.text.primary }}>
                  {habitat.name}
                </h2>

                <p className="text-sm mb-4" style={{ color: themeConfig.text.muted }}>
                  {habitat.description}
                </p>

                <div className="flex items-center justify-between text-xs" style={{ color: themeConfig.text.muted }}>
                  <span>{habitat.stats.cellCount} cells</span>
                  <span>•</span>
                  <span>{habitat.stats.itemCount} items</span>
                </div>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: themeConfig.accent.primary }}>
                  Explore →
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 p-6 rounded-xl border text-center" style={{
          backgroundColor: `${themeConfig.surface}`,
          borderColor: themeConfig.surfaceBorder
        }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: themeConfig.text.primary }}>
            Stage 2a: Habitat Shell
          </h3>
          <p className="text-sm mb-4" style={{ color: themeConfig.text.muted }}>
            This is a foundation prototype. Click on any habitat to see the detail page with placeholder Cells and information panels.
          </p>
          <ul className="text-sm text-left inline-block space-y-1" style={{ color: themeConfig.text.muted }}>
            <li>✓ Responsive mobile-first layout</li>
            <li>✓ Theme switching (Forest/Minimal)</li>
            <li>✓ Mock data for all sections</li>
            <li>✓ Ready for Stage 2b (Cell interactions)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
