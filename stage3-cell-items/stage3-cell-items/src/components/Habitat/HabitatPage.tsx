import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import type { ThemeType } from '../../types';
import { getHabitatById, getCellsByHabitatId } from '../../data/mockData';
import { THEME_CONFIG } from '../../types';

interface HabitatPageProps {
  theme: ThemeType;
}

export function HabitatPage({ theme }: HabitatPageProps) {
  const { habitatId } = useParams<{ habitatId: string }>();
  const navigate = useNavigate();
  const themeConfig = THEME_CONFIG[theme];

  if (!habitatId) {
    return <div style={{ color: themeConfig.text.primary }}>Invalid habitat ID</div>;
  }

  const habitat = getHabitatById(habitatId);
  const cells = getCellsByHabitatId(habitatId);

  if (!habitat) {
    return <div style={{ color: themeConfig.text.primary }}>Habitat not found</div>;
  }

  const IconComponent = (LucideIcons as Record<string, any>)[habitat.icon];
  const statusColors = {
    active: themeConfig.status.active,
    quiet: themeConfig.status.quiet,
    dormant: themeConfig.status.dormant,
    archived: themeConfig.status.archived
  };

  return (
    <div
      style={{
        background: themeConfig.bgGradient,
        color: themeConfig.text.primary,
        minHeight: '100vh',
        paddingBottom: '80px'
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
        <div className="max-w-5xl mx-auto px-4 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: themeConfig.text.secondary }}>
            <button
              onClick={() => navigate('/')}
              className="hover:underline"
            >
              Home
            </button>
            <span>/</span>
            <span>{habitat.name}</span>
          </div>

          {/* Back button and title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:opacity-80 transition"
              style={{ color: themeConfig.accent.primary }}
            >
              <ChevronLeft size={24} />
            </button>

            {IconComponent && (
              <div style={{ color: statusColors[habitat.state] }}>
                <IconComponent size={48} />
              </div>
            )}

            <div>
              <h1 className="text-3xl font-bold">{habitat.name}</h1>
              <p style={{ color: themeConfig.text.secondary }} className="text-sm mt-1">
                {habitat.description}
              </p>
            </div>
          </div>

          {/* Status and stats */}
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <span
              style={{
                background: statusColors[habitat.state],
                color: themeConfig.bg
              }}
              className="px-3 py-1 rounded-full font-semibold text-sm"
            >
              {habitat.state.charAt(0).toUpperCase() + habitat.state.slice(1)}
            </span>

            <span style={{ color: themeConfig.text.muted }} className="text-sm">
              {habitat.stats.cellCount} cells
            </span>
            <span style={{ color: themeConfig.text.muted }} className="text-sm">
              {habitat.stats.itemCount} items
            </span>
          </div>
        </div>
      </div>

      {/* Cell grid */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 style={{ color: themeConfig.text.secondary }} className="text-lg font-semibold mb-6 uppercase">
          Cells
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cells.map((cell) => {
            const CellIconComponent = (LucideIcons as Record<string, any>)[
              cell.type === 'notes'
                ? 'FileText'
                : cell.type === 'tasks'
                  ? 'CheckSquare'
                  : cell.type === 'calendar'
                    ? 'Calendar'
                    : cell.type === 'documents'
                      ? 'File'
                      : cell.type === 'projects'
                        ? 'FolderOpen'
                        : cell.type === 'lists'
                          ? 'ListTodo'
                          : 'FileText'
            ];

            return (
              <button
                key={cell.id}
                onClick={() => navigate(`/habitat/${habitatId}/cell/${cell.id}`)}
                style={{
                  background: themeConfig.surface,
                  border: `1px solid ${themeConfig.surfaceBorder}`
                }}
                className="text-left p-6 rounded-lg hover:shadow-lg hover:scale-105 transition transform group"
              >
                {/* Icon */}
                {CellIconComponent && (
                  <div
                    style={{ color: themeConfig.accent.primary }}
                    className="mb-4"
                  >
                    <CellIconComponent size={40} />
                  </div>
                )}

                {/* Name */}
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  {cell.name}
                </h3>

                {/* Description */}
                {cell.description && (
                  <p
                    style={{ color: themeConfig.text.secondary }}
                    className="text-sm mb-4"
                  >
                    {cell.description}
                  </p>
                )}

                {/* Item count */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{cell.itemCount}</span>
                  <span style={{ color: themeConfig.text.muted }} className="text-sm">
                    {cell.itemCount === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div
                  style={{ color: themeConfig.accent.primary }}
                  className="mt-4 opacity-0 group-hover:opacity-100 transition"
                >
                  →
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Info section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div
          style={{
            background: `${themeConfig.accent.primary}15`,
            border: `1px solid ${themeConfig.accent.primary}`
          }}
          className="rounded-lg p-6"
        >
          <p className="text-sm">
            <strong>💡 Tip:</strong> Click any Cell to see all items within it.
            Then click an item to view its full details.
          </p>
        </div>
      </div>
    </div>
  );
}
