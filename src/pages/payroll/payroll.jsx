import { useState } from "react";

const currentMonth = {
  gross: 45000,
  deductions: 5400,
  net: 39600,
  earnings: [
    { label: "Basic Salary", amount: 25000 },
    { label: "HRA", amount: 12000 },
    { label: "Other Allowances", amount: 8000 },
  ],
  deductionItems: [
    { label: "Provident Fund", amount: 3000 },
    { label: "Professional Tax", amount: 200 },
    { label: "Income Tax", amount: 2200 },
  ],
};

const payslips = [
  { month: "June 2026", gross: 45000, deductions: 5400, net: 39600 },
  { month: "May 2026", gross: 45000, deductions: 5400, net: 39600 },
  { month: "April 2026", gross: 42000, deductions: 4900, net: 37100 },
];

const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;

function BreakdownList({ title, items, total, accent }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 flex-1">
      <h3 className="font-medium text-slate-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <span className="text-slate-500">{item.label}</span>
            <span className="text-slate-800 font-medium">{formatINR(item.amount)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-sm font-semibold">
        <span className="text-slate-700">Total</span>
        <span className={accent}>{formatINR(total)}</span>
      </div>
    </div>
  );
}

export default function Payroll() {
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (month) => {
    setDownloading(month);
    // Hook this up to the real payslip PDF endpoint once the backend is ready
    setTimeout(() => setDownloading(null), 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Payroll</h1>
          <p className="text-slate-500 text-sm">Your salary summary and payslip history.</p>
        </div>

        {/* Net pay hero card */}
        <div className="rounded-2xl bg-indigo-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-indigo-100 text-sm">Net Pay — July 2026</p>
            <p className="text-3xl font-semibold mt-1">{formatINR(currentMonth.net)}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <div>
              <p className="text-indigo-200">Gross Pay</p>
              <p className="font-medium">{formatINR(currentMonth.gross)}</p>
            </div>
            <div>
              <p className="text-indigo-200">Deductions</p>
              <p className="font-medium">{formatINR(currentMonth.deductions)}</p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="flex flex-col sm:flex-row gap-6">
          <BreakdownList
            title="Earnings"
            items={currentMonth.earnings}
            total={currentMonth.gross}
            accent="text-emerald-600"
          />
          <BreakdownList
            title="Deductions"
            items={currentMonth.deductionItems}
            total={currentMonth.deductions}
            accent="text-rose-600"
          />
        </div>

        {/* Payslip history */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-medium text-slate-900">Payslip History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-100">
                  <th className="px-6 py-3 font-medium">Month</th>
                  <th className="px-6 py-3 font-medium">Gross</th>
                  <th className="px-6 py-3 font-medium">Deductions</th>
                  <th className="px-6 py-3 font-medium">Net Pay</th>
                  <th className="px-6 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((row) => (
                  <tr key={row.month} className="border-b border-slate-50 last:border-0">
                    <td className="px-6 py-3 text-slate-700">{row.month}</td>
                    <td className="px-6 py-3 text-slate-500">{formatINR(row.gross)}</td>
                    <td className="px-6 py-3 text-slate-500">{formatINR(row.deductions)}</td>
                    <td className="px-6 py-3 text-slate-800 font-medium">{formatINR(row.net)}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleDownload(row.month)}
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                      >
                        {downloading === row.month ? "Downloading..." : "Download"}
                      </button>
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