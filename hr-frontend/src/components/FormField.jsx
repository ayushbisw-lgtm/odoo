export default function FormField({ label, type = 'text', value, onChange, placeholder, required, options }) {
  const baseClasses = "w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-canvas/50 text-sm text-ink placeholder:text-ink-soft/60 focus:bg-surface focus:border-accent transition-colors outline-none"

  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-ink mb-1.5">{label}</span>
      {type === 'select' ? (
        <select value={value} onChange={onChange} required={required} className={baseClasses}>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} required={required} rows={3} className={baseClasses} />
      ) : (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className={baseClasses} />
      )}
    </label>
  )
}
