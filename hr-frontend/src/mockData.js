// Central mock data store — swap these for real API calls once your
// backend teammates (Member 3 & 4) have endpoints ready.
// Shape mirrors the planned tables: Users, Employees, Attendance,
// Leave Requests, Payroll, Notifications.

export const currentUser = {
  id: 'u1',
  name: 'Ananya Roy',
  role: 'admin', // 'admin' | 'employee'
  email: 'ananya.roy@workhive.io',
  avatarColor: '#5B8DEF',
  employeeId: 'EMP-1042',
  department: 'Engineering',
  designation: 'Senior Frontend Engineer',
  joinDate: '2023-02-14',
  phone: '+91 98765 43210',
}

export const employees = [
  { id: 'EMP-1042', name: 'Ananya Roy', department: 'Engineering', designation: 'Senior Frontend Engineer', status: 'Active', email: 'ananya.roy@workhive.io' },
  { id: 'EMP-1043', name: 'Rohit Sen', department: 'Engineering', designation: 'Backend Engineer', status: 'Active', email: 'rohit.sen@workhive.io' },
  { id: 'EMP-1044', name: 'Priya Das', department: 'Design', designation: 'Product Designer', status: 'Active', email: 'priya.das@workhive.io' },
  { id: 'EMP-1045', name: 'Kabir Malhotra', department: 'Sales', designation: 'Sales Executive', status: 'On Leave', email: 'kabir.m@workhive.io' },
  { id: 'EMP-1046', name: 'Meera Iyer', department: 'HR', designation: 'HR Manager', status: 'Active', email: 'meera.iyer@workhive.io' },
  { id: 'EMP-1047', name: 'Arjun Nair', department: 'Engineering', designation: 'QA Engineer', status: 'Inactive', email: 'arjun.nair@workhive.io' },
]

export const attendanceLog = [
  { date: '2026-07-04', checkIn: '09:12 AM', checkOut: '—', status: 'Present' },
  { date: '2026-07-03', checkIn: '09:05 AM', checkOut: '06:15 PM', status: 'Present' },
  { date: '2026-07-02', checkIn: '—', checkOut: '—', status: 'Absent' },
  { date: '2026-07-01', checkIn: '09:40 AM', checkOut: '06:02 PM', status: 'Late' },
  { date: '2026-06-30', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
]

export const attendanceSummary = [
  { name: 'Present', value: 18 },
  { name: 'Late', value: 3 },
  { name: 'Absent', value: 2 },
]

export const weeklyAttendanceTrend = [
  { day: 'Mon', hours: 8.2 },
  { day: 'Tue', hours: 7.8 },
  { day: 'Wed', hours: 8.5 },
  { day: 'Thu', hours: 0 },
  { day: 'Fri', hours: 8.1 },
  { day: 'Sat', hours: 4.0 },
  { day: 'Sun', hours: 0 },
]

export const leaveRequests = [
  { id: 'LR-201', employee: 'Ananya Roy', type: 'Sick Leave', from: '2026-07-10', to: '2026-07-11', status: 'Pending', reason: 'Fever' },
  { id: 'LR-202', employee: 'Kabir Malhotra', type: 'Casual Leave', from: '2026-07-02', to: '2026-07-05', status: 'Approved', reason: 'Family function' },
  { id: 'LR-203', employee: 'Priya Das', type: 'Earned Leave', from: '2026-07-20', to: '2026-07-24', status: 'Pending', reason: 'Travel' },
  { id: 'LR-204', employee: 'Rohit Sen', type: 'Sick Leave', from: '2026-06-28', to: '2026-06-28', status: 'Rejected', reason: 'Not enough balance' },
]

export const leaveBalance = { total: 24, used: 9, pending: 2 }

export const payrollHistory = [
  { month: 'June 2026', gross: 92000, deductions: 8400, net: 83600, status: 'Paid' },
  { month: 'May 2026', gross: 92000, deductions: 8400, net: 83600, status: 'Paid' },
  { month: 'April 2026', gross: 90000, deductions: 8100, net: 81900, status: 'Paid' },
  { month: 'March 2026', gross: 90000, deductions: 8100, net: 81900, status: 'Paid' },
]

export const payrollBreakdown = [
  { label: 'Basic', amount: 46000 },
  { label: 'HRA', amount: 18400 },
  { label: 'Allowances', amount: 27600 },
  { label: 'PF Deduction', amount: -5400 },
  { label: 'Tax', amount: -3000 },
]

export const notifications = [
  { id: 'n1', title: 'Leave request approved', detail: 'Your leave for Jul 2 – Jul 5 was approved.', time: '2h ago', unread: true },
  { id: 'n2', title: 'Payslip generated', detail: 'June 2026 payslip is ready to download.', time: '1d ago', unread: true },
  { id: 'n3', title: 'Attendance reminder', detail: "Don't forget to check out before 7 PM.", time: '2d ago', unread: false },
]

export const adminStats = {
  totalEmployees: 128,
  presentToday: 104,
  onLeaveToday: 9,
  pendingApprovals: 6,
  payrollDue: '2026-07-31',
}

export const departmentBreakdown = [
  { name: 'Engineering', value: 52 },
  { name: 'Sales', value: 28 },
  { name: 'Design', value: 14 },
  { name: 'HR', value: 10 },
  { name: 'Support', value: 24 },
]
