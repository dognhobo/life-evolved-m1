import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, Filter, SortAsc } from 'lucide-react';
import type { ItemFilters, ItemSortBy, ThemeType } from '../../types';
import {
  getHabitatById,
  getCellById,
  getItemsByCellId
} from '../../data/mockData';
import {
  filterItems,
  sortItems,
  calculateCellStats,
  formatShortDate,
  getStatusColor,
  getPriorityColor,
  formatStatus,
  formatPriority
} from '../../utils/helpers';
import { THEME_CONFIG } from '../../types';

interface CellListPageProps {
  theme: ThemeType;
}

export function CellListPage({ theme }: CellListPageProps) {
  const { habitatId, cellId } = useParams<{ habitatId: string; cellId: string }>();
  const navigate = useNavigate();
  const themeConfig = THEME_CONFIG[theme];

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed' | 'archived' | 'draft' | 'pending' | 'in-progress'>('all');
  const [sortBy, setSortBy] = useState<ItemSortBy>('date-newest');
  const [showFilters, setShowFilters] = useState(false);

  // Validate IDs
  if (!habitatId || !cellId) {
    return (
      <div style={{ color: themeConfig.text.primary }}>
        Invalid habitat or cell ID
      </div>
    );
  }

  const habitat = getHabitatById(habitatId);
  const cell = getCellById(habitatId, cellId);
  const allItems = getItemsByCellId(cellId);

  if (!habitat || !cell) {
    return (
      <div style={{ color: themeConfig.text.primary }}>
        Habitat or cell not found
      </div>
    );
  }

  // Filtering and sorting
  const filters: ItemFilters = {
    status: filterStatus,
    dateRange: 'all-time',
    searchTerm: searchTerm || undefined
  };

  const filteredItems = useMemo(
    () => sortItems(filterItems(allItems, filters), sortBy),
    [allItems, filters, sortBy]
  );

  const stats = useMemo(() => calculateCellStats(allItems), [allItems]);

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
            <button
              onClick={() => navigate(`/habitat/${habitatId}`)}
              className="hover:underline"
            >
              {habitat.name}
            </button>
            <span>/</span>
            <span>{cell.name}</span>
          </div>

          {/* Back button and title */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(`/habitat/${habitatId}`)}
              className="p-2 hover:opacity-80 transition"
              style={{ color: themeConfig.accent.primary }}
            >
              <ChevronLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold">{cell.name}</h1>
              <p style={{ color: themeConfig.text.secondary }} className="text-sm mt-1">
                {cell.description}
              </p>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
            <div
              style={{
                background: `${themeConfig.surface}80`,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs">Total</div>
              <div className="text-xl font-bold">{stats.totalItems}</div>
            </div>
            <div
              style={{
                background: `${themeConfig.surface}80`,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs">Active</div>
              <div className="text-xl font-bold">{stats.totalItems - stats.completedItems}</div>
            </div>
            <div
              style={{
                background: `${themeConfig.surface}80`,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs">Completed</div>
              <div className="text-xl font-bold">{stats.completedItems}</div>
            </div>
            <div
              style={{
                background: `${themeConfig.surface}80`,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs">High Priority</div>
              <div className="text-xl font-bold">{stats.highPriorityItems}</div>
            </div>
            <div
              style={{
                background: `${themeConfig.surface}80`,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs">Overdue</div>
              <div className="text-xl font-bold">{stats.overdueTasks}</div>
            </div>
          </div>

          {/* Search and filters */}
          <div className="flex gap-2 flex-wrap">
            <div className="flex-1 min-w-[200px] relative">
              <Search
                size={18}
                className="absolute left-3 top-3"
                style={{ color: themeConfig.text.muted }}
              />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  background: themeConfig.surface,
                  border: `1px solid ${themeConfig.surfaceBorder}`,
                  color: themeConfig.text.primary
                }}
                className="w-full pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                background: showFilters ? themeConfig.accent.primary : themeConfig.surface,
                border: `1px solid ${themeConfig.surfaceBorder}`,
                color: showFilters ? '#000' : themeConfig.text.primary
              }}
              className="px-4 py-2 rounded flex items-center gap-2 hover:opacity-80 transition"
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as ItemSortBy)}
              style={{
                background: themeConfig.surface,
                border: `1px solid ${themeConfig.surfaceBorder}`,
                color: themeConfig.text.primary
              }}
              className="px-4 py-2 rounded flex items-center gap-2 hover:opacity-80 transition"
            >
              <option value="date-newest">Newest First</option>
              <option value="date-oldest">Oldest First</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="priority-high">Priority (High)</option>
              <option value="priority-low">Priority (Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div
          style={{
            background: `${themeConfig.surface}60`,
            borderBottom: `1px solid ${themeConfig.surfaceBorder}`
          }}
          className="max-w-5xl mx-auto px-4 py-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label style={{ color: themeConfig.text.secondary }} className="text-sm block mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                style={{
                  background: themeConfig.surface,
                  border: `1px solid ${themeConfig.surfaceBorder}`,
                  color: themeConfig.text.primary
                }}
                className="w-full px-3 py-2 rounded"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Item list */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {filteredItems.length === 0 ? (
          <div
            style={{
              background: themeConfig.surface,
              border: `1px solid ${themeConfig.surfaceBorder}`,
              color: themeConfig.text.muted
            }}
            className="text-center py-12 rounded"
          >
            <p>No items found</p>
            {searchTerm && <p className="text-sm mt-2">Try adjusting your search</p>}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(`/habitat/${habitatId}/cell/${cellId}/item/${item.id}`)}
                style={{
                  background: themeConfig.surface,
                  border: `1px solid ${themeConfig.surfaceBorder}`
                }}
                className="w-full text-left p-4 rounded hover:opacity-80 transition group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg group-hover:underline">
                        {item.title}
                      </h3>
                      <span
                        style={{
                          background: getStatusColor(item.metadata.status, theme),
                          color: themeConfig.bg
                        }}
                        className="text-xs px-2 py-1 rounded font-semibold"
                      >
                        {formatStatus(item.metadata.status)}
                      </span>
                    </div>

                    <p
                      style={{ color: themeConfig.text.secondary }}
                      className="text-sm line-clamp-2 mb-3"
                    >
                      {item.content.split('\n')[0]}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      {item.metadata.priority && (
                        <div
                          style={{ color: getPriorityColor(item.metadata.priority, theme) }}
                          className="flex items-center gap-1"
                        >
                          <span className="text-xs font-semibold">●</span>
                          {formatPriority(item.metadata.priority)}
                        </div>
                      )}

                      {item.metadata.tags && item.metadata.tags.length > 0 && (
                        <div
                          style={{ color: themeConfig.text.muted }}
                          className="flex gap-1"
                        >
                          {item.metadata.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs bg-opacity-30 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                          {item.metadata.tags.length > 2 && (
                            <span className="text-xs">+{item.metadata.tags.length - 2}</span>
                          )}
                        </div>
                      )}

                      <div style={{ color: themeConfig.text.muted }} className="text-xs ml-auto">
                        {item.metadata.dueDate ? (
                          <span>Due: {formatShortDate(item.metadata.dueDate)}</span>
                        ) : (
                          <span>Updated: {formatShortDate(item.metadata.updatedAt)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
