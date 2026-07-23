# Life Evolved - Stage 2: Choose Your Habitats

An interactive React prototype for the Life Evolved onboarding flow, specifically the Habitats Selection screen (Step 2 of 3).

## 📋 What's Included

This is a **complete, runnable Stage 2 implementation** featuring:

- ✅ **Fully interactive Habitats selection** with toggle mechanics
- ✅ **Real-time search** across 17 preloaded habitats  
- ✅ **Organized categories** (ESSENTIALS, LIFESTYLE, EXTRAS)
- ✅ **Theme switching** between Forest and Minimal themes
- ✅ **Persistent state** using browser localStorage
- ✅ **Responsive design** for mobile and desktop
- ✅ **Accessibility** with semantic HTML and ARIA labels
- ✅ **Smooth animations** and micro-interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open your browser to http://localhost:5173
```

The app will open automatically in your default browser.

## 🎨 Features

### Habitats Selection
- **6 ESSENTIALS** (Life, Health, Finance, Relationships, Projects, Adventure) – pre-selected
- **6 LIFESTYLE** (Home, Learning, Creativity, Spirituality, Career, Travel)
- **5 EXTRAS** (Cars, Gaming, Fitness, Garden, Music)

### User Actions
- ✓ Toggle habitats on/off
- ✓ Search to filter habitats
- ✓ See selection count
- ✓ Continue to next step
- ✓ Theme switcher (Forest / Minimal)

### Persistence
- Selected habitats are saved to `localStorage`
- Reload the page and your selection persists
- Clear localStorage manually or restart to reset

## 📱 Responsive Breakpoints

- **Mobile**: 360px – 430px (primary design target)
- **Tablet**: 768px+
- **Desktop**: 1024px+

All interaction targets meet 44×44px touch minimum.

## 🎭 Themes

The component supports theme switching via the theme selector in the top-right:

### Forest Theme
- **Palette**: Deep forest green (#07130D), sage accents (#9DBE64)
- **Feel**: Calm, organic, alive
- **Use**: Primary theme

### Minimal Theme
- **Palette**: Soft grays and off-whites, muted leaf green (#8B9B7E)
- **Feel**: Clean, structured, minimal
- **Use**: Alternative for preference

Themes change **appearance only** — layout, navigation, and interaction remain identical.

## 🛠️ Tech Stack

- **React** 18.2 – UI framework
- **TypeScript** 5.2 – Type safety
- **Vite** 5.0 – Build tool (instant HMR)
- **Tailwind CSS** 3.3 – Styling
- **Lucide Icons** – Icon library

## 📂 Project Structure

```
src/
├── main.tsx                  # React entry point
├── App.tsx                   # Main app component (demo shell)
├── index.css                 # Global styles and Tailwind imports
└── components/
    └── Stage2Habitats.tsx    # Core Habitats selection component
```

## 🔄 Integration Notes

### For Stage 1 (Theme Selection)
The `Stage2Habitats` component accepts:
- `selectedTheme?: string` – Pass the selected theme from Stage 1
- `onBack?: () => void` – Navigate back to theme selection
- `onContinue?: (selected: string[]) => void` – Pass selected habitats to Stage 3

### For Stage 3 (Cell Layout)
The `onContinue` callback returns:
```typescript
selected: string[] // Array of habitat IDs
// e.g., ["life", "health", "finance", "relationships", "projects", "adventure"]
```

## 🎯 Accepted Criteria

- ✅ Runs cleanly with `npm install && npm run dev`
- ✅ No console errors or warnings
- ✅ Habitats can be toggled on/off
- ✅ Search filters habitats in real-time
- ✅ Theme switcher changes appearance without breaking layout
- ✅ Selections persist after page refresh
- ✅ Continue button works and passes selections
- ✅ Mobile (390px) and desktop both usable
- ✅ Fully responsive and accessible
- ✅ Matches approved Life Evolved terminology and design language

## 🎯 What Was Built

| Feature | Status | Notes |
|---------|--------|-------|
| Habitat selection UI | ✅ Complete | 17 habitats across 3 categories |
| Search functionality | ✅ Complete | Real-time filtering, case-insensitive |
| Toggle mechanics | ✅ Complete | Click to select/deselect |
| Theme switching | ✅ Complete | Forest & Minimal themes |
| State persistence | ✅ Complete | localStorage integration |
| Responsive design | ✅ Complete | Mobile-first, 360px+ |
| Accessibility | ✅ Complete | WCAG 2.2 AA ready |
| Animations | ✅ Complete | Smooth transitions and hover states |

## ⚠️ Simulated/Not Included

- Stage 1 (Theme Selection) – see related onboarding project
- Stage 3 (Cell Layout) – out of scope for this build
- Backend API – not required for prototype
- AI provider integration – not required for prototype

## 📝 Notes for Handoff

This component is **production-ready for rapid iteration**:
- Full TypeScript for type safety
- Component isolated and reusable
- State management kept simple (React hooks + localStorage)
- No external API calls or dependencies beyond lucide-react
- Ready for integration into larger onboarding flow
- Inline theme system allows easy color token management

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Node modules not installed?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Habitats not persisting?**
- Check browser localStorage (DevTools → Application → Storage)
- Clear localStorage: `localStorage.clear()` in console
- Reload page

---

**Status**: ✅ Ready for Stage 2 integration and Stage 3 handoff

Built with 🌱 for Life Evolved
