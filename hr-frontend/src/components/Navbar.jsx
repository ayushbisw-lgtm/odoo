import { useState } from 'react'
import { Bell, Menu, ChevronDown } from 'lucide-react'
import { notifications } from '../mockData'

export default function Navbar({ title, subtitle, user, onLogout, onOpenMobileNav }) {
  const [showNotifs, setShowNotifs] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="sticky top-0 z-20 bg-canvas/80 backdrop-blur border-b border-black/5">
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 -ml-2 rounded-lg hover:bg-black/5"
            onClick={onOpenMobileNav}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="font-display text-xl font-semibold text-ink leading-none">{title}</h1>
            {subtitle && <p className="text-sm text-ink-soft mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <button
              onClick={() => { setShowNotifs(s => !s); setShowMenu(false) }}
              className="relative p-2 rounded-full hover:bg-black/5"
              aria-label="Notifications"
            >
              <Bell size={19} className="text-ink" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-bad" />
              )}
            </button>
            {showNotifs && (
              <div className="absolute right-0 mt-2 w-80 bg-surface rounded-xl shadow-card border border-black/5 py-2 z-30">
                <div className="px-4 py-2 text-sm font-semibold text-ink border-b border-black/5">Notifications</div>
                {notifications.map(n => (
                  <div key={n.id} className="px-4 py-3 hover:bg-canvas cursor-pointer border-b border-black/5 last:border-0">
                    <div className="flex items-center gap-2">
                      {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      <p className="text-sm font-medium text-ink">{n.title}</p>
                    </div>
                    <p className="text-xs text-ink-soft mt-0.5">{n.detail}</p>
                    <p className="text-[11px] text-ink-soft/70 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setShowMenu(s => !s); setShowNotifs(false) }}
              className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-black/5"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                style={{ backgroundColor: user?.avatarColor || '#5B8DEF' }}
              >
                {user?.name?.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <span className="hidden sm:block text-sm font-medium text-ink">{user?.name}</span>
              <ChevronDown size={16} className="text-ink-soft" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-surface rounded-xl shadow-card border border-black/5 py-1 z-30">
                <a href="/profile" className="block px-4 py-2 text-sm text-ink hover:bg-canvas">View profile</a>
                <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-bad hover:bg-canvas">Log out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
