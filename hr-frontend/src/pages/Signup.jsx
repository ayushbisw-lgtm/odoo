import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Hexagon } from 'lucide-react'
import FormField from '../components/FormField'

export default function Signup({ onLogin }) {
  const [form, setForm] = useState({ name: '', email: '', department: 'Engineering', password: '' })
  const navigate = useNavigate()

  function update(key) {
    return e => setForm(f => ({ ...f, [key]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: replace with real POST /api/auth/signup call
    onLogin({ email: form.email, name: form.name })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-brand flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 justify-center mb-8">
          <Hexagon className="text-accent" size={30} strokeWidth={2.4} />
          <span className="font-display font-semibold text-2xl text-white tracking-tight">Workhive</span>
        </div>

        <div className="bg-surface rounded-2xl shadow-card p-8">
          <h1 className="font-display text-2xl font-semibold text-ink">Create your account</h1>
          <p className="text-sm text-ink-soft mt-1 mb-6">Set up access to the employee portal.</p>

          <form onSubmit={handleSubmit}>
            <FormField label="Full name" value={form.name} onChange={update('name')} placeholder="Ananya Roy" required />
            <FormField label="Work email" type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" required />
            <FormField
              label="Department"
              type="select"
              value={form.department}
              onChange={update('department')}
              options={['Engineering', 'Design', 'Sales', 'HR', 'Support']}
            />
            <FormField label="Password" type="password" value={form.password} onChange={update('password')} placeholder="Create a password" required />

            <button type="submit" className="w-full bg-brand hover:bg-brand-light text-white font-medium py-2.5 rounded-xl transition-colors mt-2">
              Create account
            </button>
          </form>

          <p className="text-sm text-ink-soft text-center mt-6">
            Already have an account? <Link to="/login" className="text-accent font-medium">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
