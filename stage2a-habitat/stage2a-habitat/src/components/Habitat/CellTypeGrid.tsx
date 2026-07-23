import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { CellInstance, ThemeType } from '../../types';
import { CELL_TYPE_CONFIG } from '../../types';
import { getThemeConfig } from '../../utils/helpers';

interface CellTypeGridProps {
  cells: CellInstance[];
  theme: ThemeType;
  onCellClick?: (cell: CellInstance) => void;
}

export const CellTypeGrid: React.FC<CellTypeGridProps> = ({
  cells,
  theme,
  onCellClick
}) => {
  const themeConfig = getThemeConfig(theme);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <h2 className="text-lg font-semibold mb-4" style={{ color: themeConfig.text.primary }}>
        Cells
      </h2>

      {cells.length === 0 ? (
        <div
          className="text-center py-12 rounded-lg border"
          style={{
            backgroundColor: themeConfig.surface,
            borderColor: themeConfig.surfaceBorder
          }}
        >
          <p style={{ color: themeConfig.text.muted }}>
            No cells yet. Add one to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cells.map(cell => {
            const cellConfig = CELL_TYPE_CONFIG[cell.type];
            const IconComponent = (LucideIcons as any)[cellConfig.icon] || LucideIcons.FileText;

            return (
              <button
                key={cell.id}
                onClick={() => onCellClick?.(cell)}
                className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-md hover:-translate-y-0.5 p-3 sm:p-4 text-left"
                style={{
                  backgroundColor: themeConfig.surface,
                  borderColor: themeConfig.surfaceBorder,
                  borderWidth: '1px'
                }}
                title={`Open ${cell.name}`}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ backgroundColor: themeConfig.accent.primary }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-2.5 inline-flex w-fit">
                    <IconComponent
                      size={24}
                      style={{ color: themeConfig.accent.primary }}
                    />
                  </div>

                  {/* Cell name */}
                  <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2" style={{ color: themeConfig.text.primary }}>
                    {cell.name}
                  </h3>

                  {/* Cell type label */}
                  <p className="text-xs mb-3" style={{ color: themeConfig.text.muted }}>
                    {cellConfig.name}
                  </p>

                  {/* Item count */}
                  <div className="mt-auto flex items-baseline gap-1">
                    <span
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: themeConfig.accent.primary }}
                    >
                      {cell.itemCount}
                    </span>
                    <span className="text-xs" style={{ color: themeConfig.text.muted }}>
                      items
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
