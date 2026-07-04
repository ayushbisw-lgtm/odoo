import { CalendarCheck, FileClock, Wallet, TrendingUp } from 'lucide-react'
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts'
import StatCard from '../components/StatCard'
import DataTable, { StatusPill } from '../components/DataTable'
import {
  currentUser, attendanceLog, attendanceSummary,
  weeklyAttendanceTrend, leaveBalance, payrollHistory
} from '../mockData'

const RING_COLORS = ['#2FAE79', '#E2A83A', '#E2574C']

export default function EmployeeDashboard() {
  const latestPay = payrollHistory[0]

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">
          Good to see you, {currentUser.name.split(' ')[0]} 👋
        </h2>
        <p className="text-sm text-ink-soft">Here's what's happening with your work this week.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Days present (month)" value="18 / 23" icon={CalendarCheck} tone="good" trend="On track" />
        <StatCard label="Leave balance" value={`${leaveBalance.total - leaveBalance.used} days`} icon={FileClock} tone="warn" />
        <StatCard label="Last payout" value={`₹${latestPay.net.toLocaleString('en-IN')}`} icon={Wallet} tone="accent" trend={latestPay.status} />
        <StatCard label="Avg. hours / day" value="7.9 hrs" icon={TrendingUp} tone="brand" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-surface rounded-2xl shadow-card p-5 lg:col-span-1">
          <h3 className="font-display font-semibold text-ink mb-1">Attendance split</h3>
          <p className="text-xs text-ink-soft mb-2">This month, 23 working days</p>
          <div className="h-56 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceSummary}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {attendanceSummary.map((entry, i) => (
                    <Cell key={entry.name} fill={RING_COLORS[i % RING_COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-display text-2xl font-semibold text-ink">78%</span>
              <span className="text-xs text-ink-soft">present rate</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {attendanceSummary.map((entry, i) => (
              <div key={entry.name} className="flex items-center gap-1.5 text-xs text-ink-soft">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: RING_COLORS[i] }} />
                {entry.name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-2xl shadow-card p-5 lg:col-span-2">
          <h3 className="font-display font-semibold text-ink mb-1">Hours logged this week</h3>
          <p className="text-xs text-ink-soft mb-4">Mon – Sun</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyAttendanceTrend}>
                <CartesianGrid vertical={false} stroke="#EDEFF5" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip cursor={{ fill: '#F6F7FB' }} />
                <Bar dataKey="hours" fill="#5B8DEF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent attendance table */}
      <div>
        <h3 className="font-display font-semibold text-ink mb-3">Recent attendance</h3>
        <DataTable
          columns={[
            { key: 'date', label: 'Date' },
            { key: 'checkIn', label: 'Check in' },
            { key: 'checkOut', label: 'Check out' },
            { key: 'status', label: 'Status', render: row => <StatusPill status={row.status} /> },
          ]}
          rows={attendanceLog}
        />
      </div>
    </div>
  )
}
