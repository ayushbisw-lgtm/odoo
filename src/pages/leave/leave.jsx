import { useState } from "react";

const balances = [
  { type: "Casual Leave", used: 3, total: 12, color: "bg-indigo-600" },
  { type: "Sick Leave", used: 2, total: 8, color: "bg-emerald-500" },
  { type: "Earned Leave", used: 5, total: 15, color: "bg-amber-500" },
];

const initialHistory = [
  { type: "Casual Leave", from: "10 Jun 2026", to: "11 Jun 2026", days: 2, status: "Approved" },
  { type: "Sick Leave", from: "22 Jun 2026", to: "22 Jun 2026", days: 1, status: "Approved" },
  { type: "Earned Leave", from: "01 Aug 2026", to: "03 Aug 2026", days: 3, status: "Pending" },
];

const statusStyles = {
  Approved: "bg-emerald-50 text-emerald-600",
  Pending: "bg-amber-50 text-amber-600",
  Rejected: "bg-rose-50 text-rose-600",
};

function BalanceCard({ type, used, total, color }) {
  const pct = Math.round((used / total) * 100);
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex-1">
      <p className="text-sm text-slate-500">{type}</p>
      <p className="text-2xl font-semibold text-slate-900 mt-1">
        {total - used} <span className="text-sm font-normal text-slate-400">days left</span>
      </p>
      <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-slate-400 mt-1">{used} of {total} used</p>
    </div>
  );
}

export default function Leave() {
  const [history, setHistory] = useState(initialHistory);
  const [form, setForm] = useState({ type: "Casual Leave", from: "", to: "", reason: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.from || !form.to || !form.reason) return;

    const days =
      Math.round((new Date(form.to) - new Date(form.from)) / (1000 * 60 * 60 * 24)) + 1;

    setHistory([
      {
        type: form.type,
        from: new Date(form.from).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }),
        to: new Date(form.to).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }),
        days: days > 0 ? days : 1,
        status: "Pending",
      },
      ...history,
    ]);
    setForm({ type: "Casual Leave", from: "", to: "", reason: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Leave</h1>
          <p className="text-slate-500 text-sm">View your leave balance and submit new requests.</p>
        </div>

        {/* Balances */}
        <div className="flex flex-col sm:flex-row gap-4">
          {balances.map((b) => (
            <BalanceCard key={b.type} {...b} />
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Apply form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4 h-fit"
          >
            <h2 className="font-medium text-slate-900">Apply for Leave</h2>

            <div>
              <label className="text-sm text-slate-600 block mb-1">Leave Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {balances.map((b) => (
                  <option key={b.type}>{b.type}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-600 block mb-1">From</label>
                <input
                  type="date"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600 block mb-1">To</label>
                <input
                  type="date"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 block mb-1">Reason</label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe your reason..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 transition-colors"
            >
              Submit Request
            </button>
          </form>

          {/* History */}
          <div className="lg:col-span-3 rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden h-fit">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-medium text-slate-900">Leave History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b border-slate-100">
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">From</th>
                    <th className="px-6 py-3 font-medium">To</th>
                    <th className="px-6 py-3 font-medium">Days</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0">
                      <td className="px-6 py-3 text-slate-700">{row.type}</td>
                      <td className="px-6 py-3 text-slate-500">{row.from}</td>
                      <td className="px-6 py-3 text-slate-500">{row.to}</td>
                      <td className="px-6 py-3 text-slate-700">{row.days}</td>
                      <td className="px-6 py-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}