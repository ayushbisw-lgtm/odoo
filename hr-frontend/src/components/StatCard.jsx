export default function StatCard({ label, value, icon: Icon, tone = 'brand', trend }) {
  const tones = {
    brand: 'bg-brand/5 text-brand',
    accent: 'bg-accent-light text-accent',
    good: 'bg-good-light text-good',
    warn: 'bg-warn-light text-warn',
    bad: 'bg-bad-light text-bad',
  }
  return (
    <div className="bg-surface rounded-2xl shadow-card p-5 flex items-start justify-between">
      <div>
        <p className="text-sm text-ink-soft font-medium">{label}</p>
        <p className="font-display text-2xl font-semibold text-ink mt-1">{value}</p>
        {trend && <p className="text-xs text-good mt-1 font-medium">{trend}</p>}
      </div>
      {Icon && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tones[tone]}`}>
          <Icon size={20} strokeWidth={2} />
        </div>
      )}
    </div>
  )
}
