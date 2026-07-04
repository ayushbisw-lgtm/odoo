import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Users, CalendarCheck, FileClock,
  Wallet, User, Hexagon, LogOut
} from 'lucide-react'

const employeeLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/attendance', label: 'Attendance', icon: CalendarCheck },
  { to: '/leave', label: 'Leave', icon: FileClock },
  { to: '/payroll', label: 'Payroll', icon: Wallet },
  { to: '/profile', label: 'Profile', icon: User },
]

const adminLinks = [
  { to: '/admin', label: 'Admin Overview', icon: LayoutDashboard },
  { to: '/admin/employees', label: 'Employees', icon: Users },
  { to: '/leave', label: 'Leave', icon: FileClock },
  { to: '/payroll', label: 'Payroll', icon: Wallet },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Sidebar({ role = 'employee', onLogout }) {
  const links = role === 'admin' ? adminLinks : employeeLinks

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-brand text-white h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 py-6">
        <Hexagon className="text-accent" size={26} strokeWidth={2.4} />
        <span className="font-display font-semibold text-lg tracking-tight">Workhive</span>
      </div>

      <nav className="flex-1 px-3 mt-2 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={18} strokeWidth={2} className={isActive ? 'text-accent' : ''} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 pb-6">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
        >
          <LogOut size={18} strokeWidth={2} />
          Log out
        </button>
      </div>
    </aside>
  )
}
