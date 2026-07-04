# Workhive — HR Management Frontend (Member 1 scope)

React + Vite + Tailwind app. This drop covers **Member 1's tasks**:
Login page, Employee Dashboard, Sidebar, Navbar.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). You'll land on
`/login` — any email + password logs you in (auth is mocked, no backend
required yet). After login you're taken to `/dashboard`.

## What's in this drop

```
src/
  components/
    Sidebar.jsx     — left nav, role-aware (employee/admin), active-link highlight
    Navbar.jsx       — top bar: page title, notifications dropdown, user menu
    AppLayout.jsx    — combines Sidebar + Navbar + mobile drawer, wraps every page
    StatCard.jsx      — small metric card used on the dashboard
    DataTable.jsx    — reusable table + status pill (used across the app)
    Modal.jsx        — reusable dialog (ready for other members' forms)
    FormField.jsx    — reusable input/select/textarea (ready for Signup/forms)
  pages/
    Login.jsx        — email/password form, wired to mock auth
    Signup.jsx        — bonus, not in Member 1's list but uses the same components
    EmployeeDashboard.jsx  — stat cards, donut chart, bar chart, recent attendance table
    Placeholder.jsx  — stand-in for other members' pages (Attendance/Leave/Payroll/Profile)
                        so the sidebar/navbar routes don't 404 while you build in parallel
  mockData.js        — all mock data in one place (matches the planned DB tables:
                        Users, Employees, Attendance, Leave Requests, Payroll, Notifications)
  App.jsx            — routes + very simple auth gate (useState, no backend yet)
```

## Design tokens (already wired into `tailwind.config.js`)

- `brand` (#2C3454 navy) — sidebar, primary buttons
- `accent` (#5B8DEF blue) — active states, links, chart highlight
- `good` / `warn` / `bad` — status colors (Present/Approved/Paid, Late/Pending, Absent/Rejected)
- Fonts: **Space Grotesk** for headings, **Inter** for body/table text (loaded via Google Fonts in `index.html`)

## Hooking up the real backend later

Two places to touch when Member 3/4's API is ready:
1. `src/pages/Login.jsx` / `Signup.jsx` — replace the `onLogin(...)` mock call with a real `fetch('/api/auth/login', ...)`.
2. `src/mockData.js` — replace the exported arrays with data fetched from your API (e.g. in a `useEffect` + `useState` in each page, or lift into a context/React Query).

## Handing off to teammates

Each placeholder route (`/attendance`, `/leave`, `/payroll`, `/profile`) already
sits inside `AppLayout`, so whoever builds those pages just needs to replace
`<Placeholder title="..." />` in `App.jsx` with their real component — the
sidebar, navbar, and page container styling is already handled.
