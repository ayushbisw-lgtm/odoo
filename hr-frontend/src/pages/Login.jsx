import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Hexagon, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('ananya.roy@workhive.io')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      setError('Enter your email and password to continue.')
      return
    }
    setError('')
    // TODO: replace with real POST /api/auth/login call
    onLogin({ email })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-brand flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 justify-center mb-8">
          <Hexagon className="text-accent" size={30} strokeWidth={2.4} />
          <span className="font-display font-semibold text-2xl text-white tracking-tight">Workhive</span>
        </div>

        <div className="bg-surface rounded-2xl shadow-card p-8">
          <h1 className="font-display text-2xl font-semibold text-ink">Welcome back</h1>
          <p className="text-sm text-ink-soft mt-1 mb-6">Log in to manage attendance, leave, and payroll.</p>

          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-ink mb-1.5">Email</span>
              <div className="relative">
                <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-black/10 bg-canvas/50 text-sm focus:bg-surface focus:border-accent outline-none transition-colors"
                />
              </div>
            </label>

            <label className="block mb-2">
              <span className="block text-sm font-medium text-ink mb-1.5">Password</span>
              <div className="relative">
                <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-black/10 bg-canvas/50 text-sm focus:bg-surface focus:border-accent outline-none transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(s => !s)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft">
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            {error && <p className="text-sm text-bad mb-3">{error}</p>}

            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center gap-2 text-ink-soft">
                <input type="checkbox" className="rounded" /> Remember me
              </label>
              <a href="#" className="text-accent font-medium">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-brand hover:bg-brand-light text-white font-medium py-2.5 rounded-xl transition-colors">
              Log in
            </button>
          </form>

          <p className="text-sm text-ink-soft text-center mt-6">
            New here? <Link to="/signup" className="text-accent font-medium">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
