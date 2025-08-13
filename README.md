# Financial Dashboard - Next.js Project

A comprehensive financial dashboard built with Next.js 14, featuring real-time data visualization, responsive design, and dark mode support.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Charts**: 
  - Client distribution bubble chart
  - SIP business trends (bar + line combo)
  - Monthly MIS performance (multi-line)
- **Real-time Data**: Mock API endpoints with loading states
- **Time Range Filtering**: Dynamic data filtering (3, 7, 10, 30 days)
- **Statistical Cards**: Key metrics dashboard

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: Radix UI + shadcn/ui
- **Charts**: Recharts
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/           # API routes (mock data)
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── ui/            # Reusable UI components
│   ├── navigation.tsx # Top navigation bar
│   ├── main-cards.tsx # AUM & SIP cards
│   ├── time-range-filter.tsx # Filter buttons
│   ├── stat-cards.tsx # Statistics cards
│   └── charts-section.tsx # Charts component
└── lib/
    └── utils.ts       # Utility functions
```

## API Endpoints

- `GET /api/main-cards` - AUM and SIP data
- `GET /api/stat-cards` - Statistics data
- `GET /api/charts` - Charts data

## Features Overview

### Navigation Bar
- Responsive navigation with mobile menu
- Dark mode toggle
- All specified menu items (CRM, Utilities, Insurance, etc.)

### Main Dashboard
- **AUM Card**: Shows total AUM value with MoM change
- **SIP Card**: Shows SIP value with MoM change
- **Time Range Filter**: Dynamic filtering buttons
- **Statistics**: 5 key metric cards
- **Charts**: 3 interactive charts with loading states

### Responsive Design
- Mobile-first approach
- Breakpoints: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Customization

### Adding New Charts
1. Update the charts API endpoint in `app/api/charts/route.ts`
2. Add new chart component in `components/charts-section.tsx`
3. Use Recharts components for consistency

### Modifying Themes
- Edit CSS variables in `app/globals.css`
- Customize colors in `tailwind.config.ts`

### Adding New Menu Items
- Update the `navigationItems` array in `components/navigation.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.#Next.js
