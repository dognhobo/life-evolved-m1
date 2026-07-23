import { useState } from 'react'
import { Stage2Habitats } from './components/Stage2Habitats'
import { ChevronRight, Palette } from 'lucide-react'

function App() {
  const [selectedTheme, setSelectedTheme] = useState('forest')
  const [showHabitats, setShowHabitats] = useState(true)
  const [selectedHabitats, setSelectedHabitats] = useState<string[]>([])

  const themes = [
    { id: 'forest', name: 'Forest', bg: 'from-[#07130D] via-[#0D2417]', accent: '#9DBE64' },
    { id: 'minimal', name: 'Minimal', bg: 'from-[#F5F5F5] via-[#FAFAFA]', accent: '#8B9B7E' },
  ]

  if (!showHabitats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D] flex flex-col items-center justify-center p-4 gap-6">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold text-[#F1F3EA] mb-2">Habitats Selected!</h1>
          <p className="text-[#A8B5A5] mb-6">
            You selected <span className="font-semibold text-[#9DBE64]">{selectedHabitats.length} habitats</span>
          </p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {selectedHabitats.map(h => (
              <div key={h} className="bg-[#0F3820]/40 border border-[#2D5F3F] rounded-lg p-3 text-[#F1F3EA] text-sm text-center capitalize">
                {h.replace('-', ' ')}
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setShowHabitats(true)
              setSelectedHabitats([])
            }}
            className="w-full py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all"
            style={{ backgroundColor: '#9DBE64', color: '#07130D' }}
          >
            Start Over
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#07130D] via-[#0D2417] to-[#07130D]">
      {/* Theme Selector (top right) */}
      <div className="fixed top-4 right-4 flex gap-2 p-3 bg-[#0D2417]/40 backdrop-blur rounded-lg border border-[#2D5F3F] z-50">
        <div className="flex items-center gap-2 mr-2 text-[#A8B5A5] text-sm">
          <Palette size={16} />
          Theme:
        </div>
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => setSelectedTheme(theme.id)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
              selectedTheme === theme.id
                ? 'bg-[#9DBE64] text-[#07130D]'
                : 'bg-[#0F3820]/40 text-[#A8B5A5] hover:bg-[#0F3820]/60'
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>

      <Stage2Habitats
        selectedTheme={selectedTheme}
        onBack={() => {
          console.log('Going back to theme selection (not implemented in Stage 2)')
        }}
        onContinue={(selected) => {
          console.log('Selected habitats:', selected)
          setSelectedHabitats(selected)
          setShowHabitats(false)
        }}
      />
    </div>
  )
}

export default App
