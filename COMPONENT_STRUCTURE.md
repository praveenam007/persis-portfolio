# Portfolio Project Structure

## Overview
This portfolio has been refactored for better organization, reusability, and maintainability. The code follows React best practices with clear separation of concerns.

## Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── ExperienceCard.jsx      # Individual experience card component
│   │   ├── PerspectiveToggle.jsx   # Toggle between Business/Technical view
│   │   └── ToolsList.jsx           # Tools/technologies display
│   ├── Header/
│   │   ├── Greeting.jsx            # Welcome greeting with emoji
│   │   └── PerspectiveButtons.jsx  # Perspective toggle buttons
│   ├── Navbar/
│   │   ├── MobileMenu.jsx          # Mobile sidebar menu
│   │   ├── NavLinks.jsx            # Desktop navigation links
│   │   └── ThemeToggle.jsx         # Light/dark mode toggle
│   ├── About.jsx                   # Main About section (orchestrator)
│   ├── Header.jsx                  # Hero section (orchestrator)
│   ├── LenisScroll.jsx            # Smooth scroll provider
│   └── Navbar.jsx                  # Main navigation (orchestrator)
├── constants/
│   └── index.js                    # All static data and constants
├── utils/
│   └── theme.js                    # Theme management utilities
├── App.jsx                         # Main app component
├── main.jsx                        # Entry point
└── index.css                       # Global styles
```

## Key Improvements

### 1. **Constants Management** (`src/constants/index.js`)
- All navigation links, tools, and data are centralized
- Makes it easy to update content without touching components
- Dynamic data getters for Business/Technical perspectives

### 2. **Utility Functions** (`src/utils/`)
- `theme.js`: Theme management logic (toggle, initialize)
- Keeps components clean and focused on UI

### 3. **Modular Components**
- **Navbar**: Split into `NavLinks`, `MobileMenu`, `ThemeToggle`
- **Header**: Split into `Greeting`, `PerspectiveButtons`
- **About**: Split into `ExperienceCard`, `PerspectiveToggle`, `ToolsList`

### 4. **Component Documentation**
- Each component has JSDoc comments explaining its purpose
- Props and behavior documented at the top of each file

### 5. **Cleaner Code**
- Removed magic strings and inline data
- Better function organization
- Improved accessibility with proper ARIA labels

## How to Use

### Updating Navigation Links
Edit `src/constants/index.js`:
```javascript
export const NAV_LINKS = [
  { icon: '🏠', label: 'Home', href: '#top' },
  // Add more links...
];
```

### Updating Tools
Edit `src/constants/index.js`:
```javascript
export const TOOLS = [
  { name: 'tool-name', icon: './assets/icon.png' },
  // Add more tools...
];
```

### Updating Experience Data
Edit the `getExperienceData()` function in `src/constants/index.js` to change experience cards content.

### Updating Header Content
Edit the `getHeaderContent()` function in `src/constants/index.js` for role, title, and description.

### Changing Colors/Styles
All styling uses Tailwind CSS classes. Edit component JSX to modify appearance.

## Component Communication

```
App
├── LenisScroll (smooth scrolling)
├── Navbar
│   ├── NavLinks (desktop nav)
│   ├── MobileMenu (mobile nav)
│   └── ThemeToggle (theme switching)
├── Header
│   ├── PerspectiveButtons
│   └── Greeting
└── About
    ├── PerspectiveToggle
    ├── ExperienceCard (multiple)
    └── ToolsList
```

## Best Practices Followed

1. **Single Responsibility**: Each component does one thing well
2. **DRY (Don't Repeat Yourself)**: Reusable components and constants
3. **Props Over State** (when possible): Keeps components functional
4. **Clear Naming**: Component names clearly describe their purpose
5. **Documentation**: JSDoc comments for all major components
6. **Consistent Structure**: Same patterns used throughout

## Future Improvements

- Add missing Contact and Services sections
- Extract CSS classes into reusable utility classes
- Add PropTypes for better type safety
- Consider using Context API for theme management
- Add error boundaries for better error handling

---

All components are now clean, organized, and easy to maintain! 🚀
