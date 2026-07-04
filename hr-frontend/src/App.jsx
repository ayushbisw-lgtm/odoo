import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Placeholder from './pages/Placeholder'
import { currentUser } from './mockData'

export default function App() {
  const [user, setUser] = useState(null)

  function handleLogin(payload) {
    setUser({ ...currentUser, ...payload })
  }

  function handleLogout() {
    setUser(null)
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <AppLayout user={user} role="employee" title="Dashboard" subtitle="Your work, at a glance" onLogout={handleLogout}>
            <EmployeeDashboard />
          </AppLayout>
        }
      />
      <Route
        path="/attendance"
        element={
          <AppLayout user={user} role="employee" title="Attendance" onLogout={handleLogout}>
            <Placeholder title="Attendance page — Member 2" />
          </AppLayout>
        }
      />
      <Route
        path="/leave"
        element={
          <AppLayout user={user} role="employee" title="Leave" onLogout={handleLogout}>
            <Placeholder title="Leave page — Member 2 / Member 4" />
          </AppLayout>
        }
      />
      <Route
        path="/payroll"
        element={
          <AppLayout user={user} role="employee" title="Payroll" onLogout={handleLogout}>
            <Placeholder title="Payroll page — Member 2 / Member 4" />
          </AppLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <AppLayout user={user} role="employee" title="Profile" onLogout={handleLogout}>
            <Placeholder title="Profile page — Member 2" />
          </AppLayout>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
