# Explore Desktop Components

This directory contains the refactored Explore page components for desktop view, now using Tailwind CSS and centralized data management.

## Structure

```
Desktop/
├── DiscoverEvolve.jsx          # Main orchestrator component
├── components/
│   ├── index.js               # Component exports
│   ├── CategorySelector/
│   │   ├── CategorySelector.jsx
│   │   └── CategoryCard.jsx
│   ├── LocationsView/
│   │   └── LocationsView.jsx
│   ├── WellnessView/
│   │   └── WellnessView.jsx
│   ├── TrainersView/
│   │   └── TrainersView.jsx
│   └── shared/
│       ├── TrainerCard.jsx
│       └── TrainerDetails.jsx
└── README.md
```

## Data Structure

All data is now centralized in `src/constants/exploreData.js` with the following structure:

```javascript
export const EXPLORE_DATA = [
  {
    id: "LOCATIONS",
    title: "LOCATIONS",
    description: "...",
    image: exploreLocations,
    type: "locations",
    data: [
      /* location data */
    ],
  },
  {
    id: "WELLNESS",
    title: "WELLNESS",
    description: "...",
    image: exploreWellness,
    type: "wellness",
    data: [
      /* wellness data */
    ],
  },
  {
    id: "TRAINERS",
    title: "TRAINERS",
    description: "...",
    image: exploreTrainers,
    type: "trainers",
    data: null, // Populated from locations data
  },
];
```

## Components

### Main Component

- **DiscoverEvolve**: Main component that orchestrates the category selection and view rendering

### Category Selector

- **CategorySelector**: Manages the top-level category selection (Locations, Wellness, Trainers)
- **CategoryCard**: Individual category selection card with image and description

### Views

- **LocationsView**: Displays locations with expandable sections, service filters, and trainer cards
- **WellnessView**: Displays wellness services with location filtering and trainer cards
- **TrainersView**: Displays all trainers with filtering options (All, Alphabetical, Locations, New Trainers)

### Shared Components

- **TrainerCard**: Reusable trainer display card with selection state
- **TrainerDetails**: Detailed trainer information panel

## Styling

- **Tailwind CSS**: All components now use Tailwind CSS classes instead of inline styles
- **Responsive Design**: Uses Tailwind's responsive utilities
- **Consistent Theming**: Green color scheme with proper hover states and transitions
- **Modern UI**: Clean, modern design with proper spacing and typography

## Usage

```jsx
import DiscoverEvolve from "./components/PageComponents/Explore/Desktop/DiscoverEvolve";

function Explore() {
  const [selected, setSelected] = useState("LOCATIONS");

  return <DiscoverEvolve selected={selected} onSelect={setSelected} />;
}
```

## Benefits of Refactoring

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be reused across different views
3. **Maintainability**: Easier to locate and modify specific functionality
4. **Testability**: Smaller components are easier to test
5. **Performance**: Better code splitting and lazy loading
6. **Developer Experience**: Cleaner imports and better organization
7. **Mobile Adaptation**: Easier to create mobile versions
8. **Modern Styling**: Tailwind CSS provides consistent, maintainable styling
9. **Centralized Data**: All data in constants folder for easy management

## Data Management

- All data is centralized in `src/constants/exploreData.js`
- Helper functions provide easy access to filtered data
- Data structure is consistent across all views
- Easy to extend with new locations, services, or trainers

## Tailwind CSS Features Used

- **Layout**: Flexbox, Grid, Positioning
- **Spacing**: Padding, Margin, Gap
- **Colors**: Green theme with proper contrast
- **Typography**: Font weights, sizes, colors
- **Borders**: Rounded corners, borders
- **Shadows**: Drop shadows for depth
- **Transitions**: Smooth hover and state changes
- **Responsive**: Mobile-first responsive design

## Color Scheme

- **Primary Green**: `green-500` (#10B981)
- **Dark Green**: `green-700` (#047857)
- **Light Green**: `green-50` (#ECFDF5)
- **Text**: `gray-800`, `gray-700`, `gray-600`
- **Backgrounds**: `white`, `gray-50`
- **Borders**: `gray-300`
