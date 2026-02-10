import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../pages/admin/dashboard/AdminDashboard'

import EmployeesPage from '../pages/admin/employees/EmployeesPage'

import Projects from '../pages/admin/Projects'
import Tasks from '../pages/admin/Tasks'
import Tickets from '../pages/admin/Tickets'
import Attendance from '../pages/admin/Attendance'
import Finance from '../pages/admin/Finance'
import Reports from '../pages/admin/Reports'
import Notifications from '../pages/admin/Notifications'
import Settings from '../pages/admin/Settings'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="employees" element={<EmployeesPage />} />

          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="finance" element={<Finance />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
