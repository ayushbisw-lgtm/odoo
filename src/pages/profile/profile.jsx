import { useState } from "react";

// Mock data — swap for API/Firestore data once the backend is wired up
const employee = {
  name: "Sayantani Chatterjee",
  designation: "Frontend Developer",
  empId: "EMP001",
  email: "sayantani@example.com",
  phone: "+91 98765 43210",
  department: "IT",
  location: "Kolkata, India",
  joinDate: "12 Jan 2024",
  manager: "Ayush Biswas",
  bloodGroup: "O+",
  dob: "04 July 2003",
  address: "12/A, Salt Lake Sector V, Kolkata, WB",
  bankName: "State Bank of India",
  accountNo: "XXXX XXXX 4821",
  ifsc: "SBIN0001234",
};

const initials = employee.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2);

const TABS = ["Personal", "Employment", "Bank Details"];

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-800">{value}</span>
    </div>
  );
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header card */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="h-24 w-24 shrink-0 rounded-full bg-indigo-600 text-white text-3xl font-semibold flex items-center justify-center mx-auto sm:mx-0">
            {initials}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl font-semibold text-slate-900">{employee.name}</h1>
            <p className="text-slate-500">{employee.designation}</p>
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                {employee.empId}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                {employee.department}
              </span>
            </div>
          </div>

          <button
            onClick={() => setEditing((e) => !e)}
            className="shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === "Personal" && (
              <div className="grid sm:grid-cols-2 gap-x-10">
                <InfoRow label="Email" value={employee.email} />
                <InfoRow label="Phone" value={employee.phone} />
                <InfoRow label="Date of Birth" value={employee.dob} />
                <InfoRow label="Blood Group" value={employee.bloodGroup} />
                <InfoRow label="Address" value={employee.address} />
                <InfoRow label="Location" value={employee.location} />
              </div>
            )}

            {activeTab === "Employment" && (
              <div className="grid sm:grid-cols-2 gap-x-10">
                <InfoRow label="Employee ID" value={employee.empId} />
                <InfoRow label="Department" value={employee.department} />
                <InfoRow label="Designation" value={employee.designation} />
                <InfoRow label="Reporting Manager" value={employee.manager} />
                <InfoRow label="Date of Joining" value={employee.joinDate} />
              </div>
            )}

            {activeTab === "Bank Details" && (
              <div className="grid sm:grid-cols-2 gap-x-10">
                <InfoRow label="Bank Name" value={employee.bankName} />
                <InfoRow label="Account Number" value={employee.accountNo} />
                <InfoRow label="IFSC Code" value={employee.ifsc} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}