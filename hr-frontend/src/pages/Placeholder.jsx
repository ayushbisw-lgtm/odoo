export default function Placeholder({ title }) {
  return (
    <div className="bg-surface rounded-2xl shadow-card p-10 text-center">
      <h2 className="font-display text-lg font-semibold text-ink mb-2">{title}</h2>
      <p className="text-sm text-ink-soft">
        This page belongs to another teammate's module. Wire it up once it's ready — 
        the layout, sidebar, and navbar around it already work.
      </p>
    </div>
  )
}
