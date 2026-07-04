const statusStyles = {
  Present: 'bg-good-light text-good',
  Approved: 'bg-good-light text-good',
  Paid: 'bg-good-light text-good',
  Active: 'bg-good-light text-good',
  Late: 'bg-warn-light text-warn',
  Pending: 'bg-warn-light text-warn',
  'On Leave': 'bg-warn-light text-warn',
  Absent: 'bg-bad-light text-bad',
  Rejected: 'bg-bad-light text-bad',
  Inactive: 'bg-bad-light text-bad',
}

export function StatusPill({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || 'bg-black/5 text-ink-soft'}`}>
      {status}
    </span>
  )
}

export default function DataTable({ columns, rows, renderActions, emptyLabel = 'Nothing to show yet.' }) {
  return (
    <div className="bg-surface rounded-2xl shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/5 text-left text-ink-soft">
              {columns.map(col => (
                <th key={col.key} className="px-5 py-3 font-medium whitespace-nowrap">{col.label}</th>
              ))}
              {renderActions && <th className="px-5 py-3 font-medium text-right">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + (renderActions ? 1 : 0)} className="px-5 py-8 text-center text-ink-soft">
                  {emptyLabel}
                </td>
              </tr>
            )}
            {rows.map((row, i) => (
              <tr key={row.id || i} className="border-b border-black/5 last:border-0 hover:bg-canvas/60">
                {columns.map(col => (
                  <td key={col.key} className="px-5 py-3.5 whitespace-nowrap text-ink">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-5 py-3.5 text-right">
                    {renderActions(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
