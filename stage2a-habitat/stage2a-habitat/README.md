# Life Evolved – Stage 2a: Habitat Detail Page

A **fully functional React prototype** for the Life Evolved Habitat detail page. This is the foundation (Shell) for Stage 2, ready for expansion in Stage 2b.

## 📋 What's Included

✅ **Complete Habitat detail page** with responsive layout  
✅ **6 Cell type cards** (Notes, Tasks, Calendar, Documents, Projects, Lists)  
✅ **4 Information panels** (Recent Activity, Connected Habitats, Seeds, Upcoming Items)  
✅ **Mock data** for multiple Habitats (Finance, Health, Projects)  
✅ **Theme switching** (Forest & Minimal themes)  
✅ **Mobile-first responsive design** (360px → 1440px+)  
✅ **Fully typed TypeScript** with no `any` types  
✅ **Home screen** to navigate between Habitats  

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Browser opens to http://localhost:5173
# Click on a Habitat card to see the detail page
```

## 📱 Features

### Habitat Page

- **Header**: Icon, name, description, state badge, stats
- **Cell Grid**: 6 interactive cell type cards with item counts
- **Recent Activity**: Timeline of changes, created items, links
- **Connected Habitats**: Related Habitats and their relationships
- **Seeds**: Growing and dormant ideas waiting to flourish
- **Upcoming Items**: Calendar preview of due dates and events

### Responsive Layout

| Device | Viewport | Layout |
|--------|----------|--------|
| Mobile | 360–430px | Stacked single column |
| Tablet | 768px | Two-column with sidebar |
| Desktop | 1024px+ | Three-column with sticky sidebar |

### Theme Support

**Forest (Primary)**
- Deep green background (#07130D)
- Leaf green accent (#9DBE64)
- Organic, calm aesthetic

**Minimal**
- Light off-white background (#F5F5F5)
- Muted sage green (#8B9B7E)
- Clean, structured aesthetic

Theme switcher in top-right corner (stays when scrolling).

## 📂 Project Structure

```
src/
├── components/Habitat/
│   ├── HabitatHeader.tsx      # Header with icon, name, stats
│   ├── CellTypeGrid.tsx       # 6 cell type cards
│   ├── HabitatPanels.tsx      # Activity, Seeds, Connected, Upcoming
│   └── HabitatPage.tsx        # Main container
├── data/
│   └── mockData.ts            # Sample data for all Habitats
├── types/
│   └── index.ts               # TypeScript type definitions
├── utils/
│   └── helpers.ts             # Formatting, theming utilities
├── hooks/
│   └── useTheme.ts            # Theme state management
├── App.tsx                    # Router and theme setup
├── main.tsx                   # React entry point
└── index.css                  # Tailwind and global styles
```

## 🎨 Design Tokens

### Colors (Forest Theme)

```
--bg-deep:        #07130D
--bg-surface:     rgba(13, 36, 23, 0.4)
--border:         #2D5F3F
--text-primary:   #F1F3EA
--text-muted:     #A8B5A5
--accent-primary: #9DBE64
```

### Spacing

- Gutter: 16px (mobile), 24px (desktop)
- Section spacing: 24px
- Card padding: 16px
- Component gap: 8px

## 🔌 Integration Notes

### From Stage 1 (Digital Home)

User navigates via:
```typescript
<Link to={`/habitat/${habitat.id}`}>
  {habitat.name}
</Link>
```

### To Stage 2b (Full Implementation)

Stage 2b will add:
- Cell detail views (click a cell to open it)
- Create new item workflows
- Edit Habitat settings
- Search within Habitat
- Filter and sort options
- Real backend API integration

### Routing

```
/                      → Home screen (Habitat browser)
/habitat/:habitatId    → Habitat detail page
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Click Habitat cards on home screen
- [ ] Habitat detail loads with correct data
- [ ] Mobile layout works at 390px width
- [ ] Desktop layout works at 1440px width
- [ ] Theme switcher changes appearance
- [ ] Layout unchanged when switching themes
- [ ] Back button returns to home screen
- [ ] No console errors
- [ ] Scroll on mobile is smooth
- [ ] All text is readable

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Chrome/Safari

## 📊 Mock Data

### Habitats Included

1. **Finance** (active)
   - 8 cells, 142 items
   - Focus: Budget, investments, financial planning

2. **Health** (active)
   - 6 cells, 87 items
   - Focus: Appointments, medications, fitness

3. **Projects** (active)
   - 7 cells, 156 items
   - Focus: Active work, tasks, meetings

## 🏗️ Architecture

### Component Hierarchy

```
App (Router + Theme)
├── HomeScreen (Habitat browser)
└── HabitatPage (Detail container)
    ├── HabitatHeader
    ├── CellTypeGrid
    ├── RecentActivityPanel
    ├── ConnectedHabitatsPanel
    ├── SeedsPanel
    └── UpcomingItemsPanel
```

### State Management

- Theme: `useTheme` hook (localStorage persistence)
- Habitat data: Mock data from `mockData.ts`
- Navigation: React Router

No external state library needed for prototype.

## 📚 Type Safety

Full TypeScript with strict mode:

```typescript
// All major types defined:
type ThemeType = 'forest' | 'minimal';
type HabitatState = 'active' | 'quiet' | 'dormant' | 'archived';
type CellType = 'notes' | 'tasks' | 'calendar' | 'documents' | 'projects' | 'lists';

interface Habitat { /* ... */ }
interface CellInstance { /* ... */ }
interface ActivityItem { /* ... */ }
// ... more types
```

No implicit `any` types anywhere.

## 🎯 Stage 2a Acceptance Criteria

✅ Project runs without errors  
✅ Habitat page displays correctly  
✅ Mock data is realistic  
✅ Responsive at 360–1440px  
✅ Theme switching works  
✅ Component structure matches patterns  
✅ Code is clean and typed  
✅ Ready for Stage 2b (Cell interactions)  

## ⚙️ Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

## 📦 Dependencies

- **react** 18.2 – UI framework
- **react-dom** 18.2 – DOM rendering
- **react-router-dom** 6.18 – Client routing
- **lucide-react** 0.292 – Icon library
- **date-fns** 2.30 – Date formatting
- **tailwindcss** 3.3 – Utility CSS
- **vite** 5.0 – Build tool
- **typescript** 5.2 – Type checking

## 🚀 Next Steps (Stage 2b)

1. Add Cell detail views
2. Implement create workflows
3. Add search and filter
4. Connect to backend API
5. Add drag-and-drop Habitat reordering
6. Implement edit settings
7. Add sharing features

## 📝 Notes

- **No production backend** – All data is mocked
- **No real API calls** – Ready to add in Stage 2b
- **Responsive by default** – Mobile-first approach
- **Accessible** – Semantic HTML, keyboard operable
- **Themeable** – Easy to add new themes

## 🎓 Key Concepts

### Habitat
A major life domain (Finance, Health, Projects, etc.) containing related Cells.

### Cell
A functional space for a specific type of content (Notes, Tasks, Calendar, etc.).

### Seed
An idea that's growing or dormant, ready to become a full Cell when appropriate.

### Connection
A link between Habitats showing relationships (e.g., "Finance supports Life goals").

---

**Status**: ✅ Ready to review  
**Built for**: Life Evolved project  
**Date**: July 2026

