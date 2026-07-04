import { useState } from "react";

// Mock history — swap for API/Firestore data once the backend is wired up
const history = [
  { date: "01 Jul 2026", day: "Wed", checkIn: "09:12 AM", checkOut: "06:05 PM", status: "Present" },
  { date: "02 Jul 2026", day: "Thu", checkIn: "09:45 AM", checkOut: "06:00 PM", status: "Late" },
  { date: "03 Jul 2026", day: "Fri", checkIn: "—", checkOut: "—", status: "Absent" },
  { date: "04 Jul 2026", day: "Sat", checkIn: "09:05 AM", checkOut: "06:10 PM", status: "Present" },
];

const statusStyles = {
  Present: "bg-emerald-50 text-emerald-600",
  Late: "bg-amber-50 text-amber-600",
  Absent: "bg-rose-50 text-rose-600",
  Leave: "bg-slate-100 text-slate-600",
};

function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 flex-1">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`text-2xl font-semibold mt-1 ${accent}`}>{value}</p>
    </div>
  );
}

export default function Attendance() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const handleToggle = () => {
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (!checkedIn) setCheckInTime(now);
    setCheckedIn((c) => !c);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Attendance</h1>
          <p className="text-slate-500 text-sm">Track your check-ins and monthly attendance record.</p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-4">
          <StatCard label="Present Days" value="21" accent="text-emerald-600" />
          <StatCard label="Absent Days" value="2" accent="text-rose-600" />
          <StatCard label="Late Days" value="3" accent="text-amber-600" />
          <StatCard label="Attendance %" value="91%" accent="text-indigo-600" />
        </div>

        {/* Check-in card */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Today, {new Date().toLocaleDateString(undefined, { weekday: "long", day: "2-digit", month: "short" })}</p>
            <p className="text-lg font-medium text-slate-900">
              {checkedIn ? `Checked in at ${checkInTime}` : "You haven't checked in yet"}
            </p>
          </div>
          <button
            onClick={handleToggle}
            className={`rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-colors ${
              checkedIn ? "bg-rose-500 hover:bg-rose-600" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {checkedIn ? "Check Out" : "Check In"}
          </button>
        </div>

        {/* History table */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-medium text-slate-900">Recent Attendance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-100">
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Day</th>
                  <th className="px-6 py-3 font-medium">Check In</th>
                  <th className="px-6 py-3 font-medium">Check Out</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((row) => (
                  <tr key={row.date} className="border-b border-slate-50 last:border-0">
                    <td className="px-6 py-3 text-slate-700">{row.date}</td>
                    <td className="px-6 py-3 text-slate-500">{row.day}</td>
                    <td className="px-6 py-3 text-slate-700">{row.checkIn}</td>
                    <td className="px-6 py-3 text-slate-700">{row.checkOut}</td>
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
  );
}