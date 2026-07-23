import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { THEME_CONFIG } from './types';

// Components
import { HomeScreen } from './components/HomeScreen';
import { HabitatPage } from './components/Habitat/HabitatPage';
import { CellListPage } from './components/Cell/CellListPage';
import { ItemDetailPage } from './components/Item/ItemDetailPage';

export default function App() {
  const { theme, switchTheme } = useTheme();
  const themeConfig = THEME_CONFIG[theme];

  return (
    <Router>
      <div style={{ background: themeConfig.bg }}>
        {/* Theme switcher */}
        <div
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 50,
            display: 'flex',
            gap: '0.5rem'
          }}
        >
          <button
            onClick={() => switchTheme('forest')}
            title="Forest theme"
            style={{
              background: theme === 'forest' ? themeConfig.accent.primary : themeConfig.surface,
              border: `1px solid ${themeConfig.surfaceBorder}`,
              color: theme === 'forest' ? themeConfig.bg : themeConfig.text.primary
            }}
            className="p-2 rounded-lg hover:opacity-80 transition"
          >
            <Moon size={20} />
          </button>
          <button
            onClick={() => switchTheme('minimal')}
            title="Minimal theme"
            style={{
              background: theme === 'minimal' ? themeConfig.accent.primary : themeConfig.surface,
              border: `1px solid ${themeConfig.surfaceBorder}`,
              color: theme === 'minimal' ? themeConfig.bg : themeConfig.text.primary
            }}
            className="p-2 rounded-lg hover:opacity-80 transition"
          >
            <Sun size={20} />
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeScreen theme={theme} />} />
          <Route path="/habitat/:habitatId" element={<HabitatPage theme={theme} />} />
          <Route path="/habitat/:habitatId/cell/:cellId" element={<CellListPage theme={theme} />} />
          <Route
            path="/habitat/:habitatId/cell/:cellId/item/:itemId"
            element={<ItemDetailPage theme={theme} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
