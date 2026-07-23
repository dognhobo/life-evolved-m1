import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, CheckCircle2, Circle } from 'lucide-react';

interface Habitat {
  id: string;
  name: string;
  category: 'ESSENTIALS' | 'LIFESTYLE' | 'EXTRAS';
}

const HABITATS: Habitat[] = [
  // ESSENTIALS
  { id: 'life', name: 'Life', category: 'ESSENTIALS' },
  { id: 'health', name: 'Health', category: 'ESSENTIALS' },
  { id: 'finance', name: 'Finance', category: 'ESSENTIALS' },
  { id: 'relationships', name: 'Relationships', category: 'ESSENTIALS' },
  { id: 'projects', name: 'Projects', category: 'ESSENTIALS' },
  { id: 'adventure', name: 'Adventure', category: 'ESSENTIALS' },
  
  // LIFESTYLE
  { id: 'home', name: 'Home', category: 'LIFESTYLE' },
  { id: 'learning', name: 'Learning', category: 'LIFESTYLE' },
  { id: 'creativity', name: 'Creativity', category: 'LIFESTYLE' },
  { id: 'spirituality', name: 'Spirituality', category: 'LIFESTYLE' },
  { id: 'career', name: 'Career', category: 'LIFESTYLE' },
  { id: 'travel', name: 'Travel', category: 'LIFESTYLE' },
  
  // EXTRAS
  { id: 'cars', name: 'Cars', category: 'EXTRAS' },
  { id: 'gaming', name: 'Gaming', category: 'EXTRAS' },
  { id: 'fitness', name: 'Fitness', category: 'EXTRAS' },
  { id: 'garden', name: 'Garden', category: 'EXTRAS' },
  { id: 'music', name: 'Music', category: 'EXTRAS' },
];

interface Stage2HabitatsProps {
  onBack?: () => void;
  onContinue?: (selected: string[]) => void;
  selectedTheme?: string;
}

export const Stage2Habitats: React.FC<Stage2HabitatsProps> = ({
  onBack,
  onContinue,
  selectedTheme = 'forest'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHabitats, setSelectedHabitats] = useState<Set<string>>(
    new Set(['life', 'health', 'finance', 'relationships', 'projects', 'adventure'])
  );

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('selectedHabitats');
    if (saved) {
      try {
        setSelectedHabitats(new Set(JSON.parse(saved)));
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save to localStorage whenever selection changes
  useEffect(() => {
    localStorage.setItem('selectedHabitats', JSON.stringify(Array.from(selectedHabitats)));
  }, [selectedHabitats]);

  const filteredHabitats = useMemo(() => {
    return HABITATS.filter(h =>
      h.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedHabitats = useMemo(() => {
    const grouped: Record<string, Habitat[]> = {
      ESSENTIALS: [],
      LIFESTYLE: [],
      EXTRAS: []
    };

    filteredHabitats.forEach(h => {
      grouped[h.category].push(h);
    });

    return grouped;
  }, [filteredHabitats]);

  const toggleHabitat = (id: string) => {
    const newSelected = new Set(selectedHabitats);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedHabitats(newSelected);
  };

  const handleContinue = () => {
    if (onContinue && selectedHabitats.size > 0) {
      onContinue(Array.from(selectedHabitats));
    }
  };

  const themeConfig: Record<string, {
    bg: string;
    accent: string;
    text: string;
    muted: string;
    border: string;
    inputBg: string;
    cardBg: string;
    cardBgSelected: string;
    buttonBgAlt: string;
  }> = {
    forest: {
      bg: 'bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]',
      accent: '#9DBE64',
      text: '#F1F3EA',
      muted: '#A8B5A5',
      border: 'border-[#2D5F3F]',
      inputBg: 'rgba(31, 41, 35, 0.6)',
      cardBg: 'rgba(31, 41, 35, 0.4)',
      cardBgSelected: 'rgba(157, 190, 100, 0.15)',
      buttonBgAlt: 'rgba(31, 41, 35, 0.6)'
    },
    minimal: {
      bg: 'bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#F5F5F5]',
      accent: '#8B9B7E',
      text: '#1A1A1A',
      muted: '#707070',
      border: 'border-[#E0E0E0]',
      inputBg: 'rgba(245, 245, 245, 0.8)',
      cardBg: 'rgba(245, 245, 245, 0.6)',
      cardBgSelected: 'rgba(139, 155, 126, 0.08)',
      buttonBgAlt: 'rgba(245, 245, 245, 0.6)'
    }
  };

  const theme = themeConfig[selectedTheme] || themeConfig.forest;
  const isDark = selectedTheme === 'forest';

  return (
    <div className={`min-h-screen ${theme.bg} flex items-center justify-center p-4 transition-colors duration-300`}>
      <style>{`
        .habitat-card {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .habitat-card:hover {
          transform: translateY(-2px);
        }
        .habitat-card.selected {
          box-shadow: 0 0 12px ${theme.accent}40;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: ${theme.muted};
          border-radius: 2px;
          opacity: 0.2;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          opacity: 0.4;
        }
      `}</style>

      <div 
        className={`w-full max-w-md rounded-2xl p-6 backdrop-blur-sm border transition-all`}
        style={{
          borderColor: theme.border,
          backgroundColor: isDark ? 'rgba(13, 36, 23, 0.4)' : 'rgba(255, 255, 255, 0.95)'
        }}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:opacity-70 transition-opacity"
            style={{ color: theme.text }}
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-medium flex-1 text-center" style={{ color: theme.text }}>
            Choose Your Habitats
          </h2>
          <button
            className="p-2 hover:opacity-70 transition-opacity text-sm"
            style={{ color: theme.text }}
            onClick={() => {
              // Skip pre-selects essentials
              setSelectedHabitats(new Set(['life', 'health', 'finance', 'relationships', 'projects', 'adventure']));
              handleContinue();
            }}
          >
            Skip
          </button>
        </div>

        <p className="text-sm mb-6" style={{ color: theme.muted }}>
          Select the areas of life you want to include in your ecosystem. You can add more anytime.
        </p>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: theme.muted }} />
          <input
            type="text"
            placeholder="Search habitats"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-all"
            style={{
              backgroundColor: theme.inputBg,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </div>

        {/* Habitats List */}
        <div className="space-y-4 max-h-[340px] overflow-y-auto mb-6 pr-1 scrollbar-custom">
          {Object.entries(groupedHabitats).map(([category, habitats]) => (
            habitats.length > 0 && (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: theme.accent }}>
                  {category}
                </h3>
                <div className="space-y-2">
                  {habitats.map(habitat => (
                    <button
                      key={habitat.id}
                      onClick={() => toggleHabitat(habitat.id)}
                      className={`habitat-card w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        selectedHabitats.has(habitat.id) ? 'selected' : ''
                      }`}
                      style={{
                        backgroundColor: selectedHabitats.has(habitat.id)
                          ? theme.cardBgSelected
                          : theme.cardBg,
                        borderColor: selectedHabitats.has(habitat.id) ? theme.accent : theme.border,
                      }}
                      aria-pressed={selectedHabitats.has(habitat.id)}
                    >
                      <div className="flex-shrink-0">
                        {selectedHabitats.has(habitat.id) ? (
                          <CheckCircle2 size={20} style={{ color: theme.accent }} />
                        ) : (
                          <Circle size={20} style={{ color: theme.muted, opacity: 0.5 }} />
                        )}
                      </div>
                      <span className="text-sm font-medium text-left" style={{ color: theme.text }}>
                        {habitat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Selection count */}
        <p className="text-xs mb-4" style={{ color: theme.muted }}>
          {selectedHabitats.size} selected
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onBack}
            className="flex-1 py-2.5 rounded-lg font-medium text-sm border transition-all hover:opacity-80"
            style={{
              borderColor: theme.border,
              color: theme.text,
              backgroundColor: theme.buttonBgAlt
            }}
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={selectedHabitats.size === 0}
            className="flex-1 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
            style={{
              backgroundColor: selectedHabitats.size > 0 ? theme.accent : theme.muted,
              color: isDark ? '#07130D' : '#FAFAFA'
            }}
          >
            Continue to Layout
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: step === 2 ? 24 : 6,
                backgroundColor: step === 2 ? theme.accent : theme.muted,
                opacity: step === 2 ? 1 : 0.3
              }}
            />
          ))}
        </div>
        <p className="text-xs text-center mt-2" style={{ color: theme.muted }}>
          Step 2 of 3
        </p>
      </div>
    </div>
  );
};
