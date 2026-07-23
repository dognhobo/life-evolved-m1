import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Calendar,
  Tag,
  User,
  Clock,
  AlertCircle,
  Edit3,
  Link2
} from 'lucide-react';
import type { ThemeType } from '../../types';
import {
  getHabitatById,
  getCellById,
  getItemById,
  getRelatedItems
} from '../../data/mockData';
import {
  formatFullDate,
  formatStatus,
  formatPriority,
  getStatusColor,
  getPriorityColor,
  formatTimeAgo,
  isOverdue
} from '../../utils/helpers';
import { THEME_CONFIG } from '../../types';

interface ItemDetailPageProps {
  theme: ThemeType;
}

export function ItemDetailPage({ theme }: ItemDetailPageProps) {
  const { habitatId, cellId, itemId } = useParams<{
    habitatId: string;
    cellId: string;
    itemId: string;
  }>();
  const navigate = useNavigate();
  const themeConfig = THEME_CONFIG[theme];

  if (!habitatId || !cellId || !itemId) {
    return <div style={{ color: themeConfig.text.primary }}>Invalid IDs</div>;
  }

  const habitat = getHabitatById(habitatId);
  const cell = getCellById(habitatId, cellId);
  const item = getItemById(cellId, itemId);
  const relatedItems = getRelatedItems(itemId, cellId);

  if (!habitat || !cell || !item) {
    return <div style={{ color: themeConfig.text.primary }}>Item not found</div>;
  }

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
        <div className="max-w-3xl mx-auto px-4 py-4">
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
            <button
              onClick={() => navigate(`/habitat/${habitatId}/cell/${cellId}`)}
              className="hover:underline"
            >
              {cell.name}
            </button>
            <span>/</span>
            <span className="truncate">{item.title}</span>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate(`/habitat/${habitatId}/cell/${cellId}`)}
            className="p-2 hover:opacity-80 transition"
            style={{ color: themeConfig.accent.primary }}
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Title & Status Bar */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold flex-1">{item.title}</h1>
            <button
              disabled
              style={{
                background: themeConfig.surface,
                border: `1px solid ${themeConfig.surfaceBorder}`,
                color: themeConfig.text.muted
              }}
              className="px-4 py-2 rounded flex items-center gap-2 cursor-not-allowed opacity-50"
            >
              <Edit3 size={18} />
              <span>Edit</span>
            </button>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-3">
            <span
              style={{
                background: getStatusColor(item.metadata.status, theme),
                color: themeConfig.bg
              }}
              className="px-3 py-1 rounded-full font-semibold text-sm"
            >
              {formatStatus(item.metadata.status)}
            </span>

            {item.metadata.priority && (
              <span
                style={{ color: getPriorityColor(item.metadata.priority, theme) }}
                className="flex items-center gap-1 text-sm font-semibold"
              >
                <span className="text-lg">●</span>
                {formatPriority(item.metadata.priority)}
              </span>
            )}

            {item.metadata.dueDate && isOverdue(item.metadata.dueDate) && (
              <span
                style={{ color: '#E74C3C' }}
                className="flex items-center gap-1 text-sm font-semibold"
              >
                <AlertCircle size={16} />
                Overdue
              </span>
            )}
          </div>
        </div>

        {/* Metadata cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {/* Created */}
          <div
            style={{
              background: themeConfig.surface,
              border: `1px solid ${themeConfig.surfaceBorder}`
            }}
            className="rounded p-3"
          >
            <div style={{ color: themeConfig.text.muted }} className="text-xs mb-1">
              Created
            </div>
            <div className="font-semibold text-sm">
              {formatFullDate(item.metadata.createdAt)}
            </div>
          </div>

          {/* Updated */}
          <div
            style={{
              background: themeConfig.surface,
              border: `1px solid ${themeConfig.surfaceBorder}`
            }}
            className="rounded p-3"
          >
            <div style={{ color: themeConfig.text.muted }} className="text-xs mb-1">
              Updated
            </div>
            <div className="font-semibold text-sm">
              {formatTimeAgo(item.metadata.updatedAt)}
            </div>
          </div>

          {/* Due date */}
          {item.metadata.dueDate && (
            <div
              style={{
                background: themeConfig.surface,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs mb-1">
                Due Date
              </div>
              <div className="font-semibold text-sm">
                {formatFullDate(item.metadata.dueDate)}
              </div>
            </div>
          )}

          {/* Category */}
          {item.metadata.category && (
            <div
              style={{
                background: themeConfig.surface,
                border: `1px solid ${themeConfig.surfaceBorder}`
              }}
              className="rounded p-3"
            >
              <div style={{ color: themeConfig.text.muted }} className="text-xs mb-1">
                Category
              </div>
              <div className="font-semibold text-sm">
                {item.metadata.category}
              </div>
            </div>
          )}
        </div>

        {/* Full content */}
        <div
          style={{
            background: themeConfig.surface,
            border: `1px solid ${themeConfig.surfaceBorder}`
          }}
          className="rounded-lg p-6 mb-8"
        >
          <div
            style={{ color: themeConfig.text.secondary }}
            className="prose prose-invert max-w-none"
          >
            {item.content.split('\n').map((line, idx) => {
              if (line.startsWith('#')) {
                const level = line.match(/^#+/)?.[0].length || 1;
                const text = line.replace(/^#+\s*/, '');
                const sizes = ['text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm'];
                return (
                  <h2 key={idx} className={`${sizes[level - 1]} font-bold mt-4 mb-2`}>
                    {text}
                  </h2>
                );
              }
              if (line.startsWith('-') || line.startsWith('*')) {
                return (
                  <li key={idx} className="ml-6 mb-2">
                    {line.replace(/^[-*]\s*/, '')}
                  </li>
                );
              }
              if (line.startsWith('##')) {
                const text = line.replace(/^##\s*/, '');
                return (
                  <h3 key={idx} className="text-lg font-semibold mt-3 mb-2">
                    {text}
                  </h3>
                );
              }
              if (line.trim()) {
                return (
                  <p key={idx} className="mb-3 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Tags */}
        {item.metadata.tags && item.metadata.tags.length > 0 && (
          <div className="mb-8">
            <h2 style={{ color: themeConfig.text.secondary }} className="text-sm font-semibold mb-3 uppercase">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.metadata.tags.map((tag) => (
                <button
                  key={tag}
                  style={{
                    background: `${themeConfig.accent.primary}20`,
                    border: `1px solid ${themeConfig.accent.primary}`,
                    color: themeConfig.accent.primary
                  }}
                  className="px-3 py-1 rounded-full text-sm hover:opacity-80 transition flex items-center gap-1"
                >
                  <Tag size={14} />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Related items */}
        {relatedItems.length > 0 && (
          <div
            style={{
              background: `${themeConfig.surface}60`,
              border: `1px solid ${themeConfig.surfaceBorder}`
            }}
            className="rounded-lg p-6 mb-8"
          >
            <h2 style={{ color: themeConfig.text.secondary }} className="text-sm font-semibold mb-4 uppercase flex items-center gap-2">
              <Link2 size={16} />
              Related Items
            </h2>

            <div className="space-y-2">
              {relatedItems.map((relatedItem) => (
                <button
                  key={relatedItem.id}
                  onClick={() =>
                    navigate(
                      `/habitat/${habitatId}/cell/${relatedItem.cellId}/item/${relatedItem.id}`
                    )
                  }
                  style={{
                    background: themeConfig.surface,
                    border: `1px solid ${themeConfig.surfaceBorder}`
                  }}
                  className="w-full text-left p-3 rounded hover:opacity-80 transition"
                >
                  <div className="font-semibold mb-1 hover:underline">
                    {relatedItem.title}
                  </div>
                  <div
                    style={{ color: themeConfig.text.muted }}
                    className="text-xs"
                  >
                    In {relatedItem.type}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder note */}
        <div
          style={{
            background: `${themeConfig.accent.primary}15`,
            border: `1px solid ${themeConfig.accent.primary}`
          }}
          className="rounded-lg p-4 text-sm"
        >
          <p>
            <strong>Note:</strong> Editing functionality is coming in Stage 2b.
            This is a navigation prototype showing the complete user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
