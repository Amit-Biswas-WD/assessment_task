# Assessment Task — React + Vite

## Quick start

1. Install dependencies:

   npm install

2. Run the development server (with HMR):

   npm run dev

## Features

- React 18 + Vite for fast development.
- Routing and layout with a dashboard-style structure.
- Reusable UI components: buttons, cards, navbar, sidebar.
- Pages included: Dashboard Overview, Call Logs, Appointments, Settings.

## Project folder structure (important files)

- `index.html` — app entry HTML used by Vite.
- `src/` — application source code:
  - `main.jsx` — React entry point.
  - `App.jsx` — top-level app component and router mounting.
  - `index.css` — global styles.
  - `assets/` — images and static assets.
  - `components/` — reusable UI components:
  - `common/` — `Button.jsx`, `Card.jsx`, etc.
  - `layout/` — `DashboardLayout.jsx`, `Navbar.jsx`, `Sidebar.jsx`.
  - `pages/` — feature pages organized by route:
  - `dashboard_overview/` — overview page and subcomponents.
  - `call_logs/` — call logs view and search section.
  - `appointments/` — appointments page with booking sections.
  - `settings/` — settings page with profile & password sections.
  - `routes/` — `AppRoutes.jsx` contains route definitions.

## Where to find features

- Dashboard and its widgets: `src/pages/dashboard_overview`.
- Call logs and search: `src/pages/call_logs`.
- Appointments and booking links: `src/pages/appointments`.
- Settings (profile & password): `src/pages/settings`.

## Contributing / Next steps

- Run the dev server (`npm run dev`) and open the URL shown by Vite to view the app.
- Add new components under `src/components` and new routes in `src/routes/AppRoutes.jsx`.
