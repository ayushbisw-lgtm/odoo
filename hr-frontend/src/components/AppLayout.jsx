import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { X } from 'lucide-react'

export default function AppLayout({ user, role, title, subtitle, onLogout, children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar role={role} onLogout={onLogout} />

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64">
            <div className="relative h-full">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute -right-10 top-4 p-2 rounded-lg bg-surface"
              >
                <X size={18} />
              </button>
              <Sidebar role={role} onLogout={onLogout} />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar title={title} subtitle={subtitle} user={user} onLogout={onLogout} onOpenMobileNav={() => setMobileOpen(true)} />
        <main className="px-5 md:px-8 py-6 max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  )
}
