import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import TeamLeadLayout from '../layouts/TeamLeadLayout'
import EmployeeLayout from '../layouts/EmployeeLayout'
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

// Auth pages
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'

// Protected Route
import ProtectedRoute from '../components/ProtectedRoute'

// Team Lead pages
import TeamLeadDashboard from '../pages/TeamLead/Dashboard'
import TeamLeadProjects from '../pages/TeamLead/Projects'
import TeamLeadProjectDetail from '../pages/TeamLead/projects/detail/ProjectDetailPage'
import TeamLeadTasks from '../pages/TeamLead/Tasks'
import TeamLeadTaskDetail from '../pages/TeamLead/tasks/detail/TaskDetailPage'
import TeamLeadTickets from '../pages/TeamLead/Tickets'
import TeamLeadTicketDetail from '../pages/TeamLead/tickets/detail/TicketDetailPage'
import TeamLeadWorkApproval from '../pages/TeamLead/WorkApproval'
import TeamLeadWorkApprovalDetail from '../pages/TeamLead/workApproval/detail/WorkApprovalDetailPage'
import TeamLeadAttendance from '../pages/TeamLead/Attendance'
import TeamLeadTimeLogs from '../pages/TeamLead/TimeLogs'
import TeamLeadFinance from '../pages/TeamLead/Finance'
import TeamLeadReports from '../pages/TeamLead/Reports'
import TeamLeadChat from '../pages/TeamLead/Chat'
import TeamLeadSettings from '../pages/TeamLead/Settings'

// Employee pages
import EmployeeDashboard from '../pages/Employee/Dashboard'
import EmployeeMyProjects from '../pages/Employee/MyProjects'
import EmployeeProjectDetail from '../pages/Employee/myProjects/detail/ProjectDetailPage'
import EmployeeMyTasks from '../pages/Employee/MyTasks'
import EmployeeTaskDetail from '../pages/Employee/myTasks/detail/TaskDetailPage'
import EmployeeTickets from '../pages/Employee/Tickets'
import EmployeeTicketDetail from '../pages/Employee/tickets/detail/TicketDetailPage'
import EmployeeCreateTicket from '../pages/Employee/tickets/create/CreateTicketPage'
import EmployeeSelfWork from '../pages/Employee/SelfWork'
import EmployeeSelfWorkDetail from '../pages/Employee/selfWork/detail/SelfWorkDetailPage'
import EmployeeCreateSelfWork from '../pages/Employee/selfWork/create/CreateSelfWorkPage'
import EmployeeTimeLogs from '../pages/Employee/TimeLogs'
import EmployeeAttendance from '../pages/Employee/Attendance'
import EmployeeLeave from '../pages/Employee/Leave'
import EmployeeNotifications from '../pages/Employee/Notifications'
import EmployeeProfile from '../pages/Employee/Profile'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        {/* Auth routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/auth/login" replace />} />
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

        {/* Team Lead routes */}
        <Route path="/teamlead" element={
          <ProtectedRoute>
            <TeamLeadLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="dashboard" element={<TeamLeadDashboard />} />
          <Route path="projects" element={<TeamLeadProjects />} />
          <Route path="projects/:projectId" element={<TeamLeadProjectDetail />} />
          <Route path="tasks" element={<TeamLeadTasks />} />
          <Route path="tasks/:taskId" element={<TeamLeadTaskDetail />} />
          <Route path="tickets" element={<TeamLeadTickets />} />
          <Route path="tickets/:ticketId" element={<TeamLeadTicketDetail />} />
          <Route path="work-approval" element={<TeamLeadWorkApproval />} />
          <Route path="work-approval/:id" element={<TeamLeadWorkApprovalDetail />} />
          <Route path="attendance" element={<TeamLeadAttendance />} />
          <Route path="time-logs" element={<TeamLeadTimeLogs />} />
          <Route path="finance" element={<TeamLeadFinance />} />
          <Route path="reports" element={<TeamLeadReports />} />
          <Route path="chat" element={<TeamLeadChat />} />
          <Route path="settings" element={<TeamLeadSettings />} />
        </Route>

        {/* Employee routes */}
        <Route path="/employee" element={
          <ProtectedRoute>
            <EmployeeLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="my-projects" element={<EmployeeMyProjects />} />
          <Route path="my-projects/:projectId" element={<EmployeeProjectDetail />} />
          <Route path="my-tasks" element={<EmployeeMyTasks />} />
          <Route path="my-tasks/:taskId" element={<EmployeeTaskDetail />} />
          <Route path="tickets" element={<EmployeeTickets />} />
          <Route path="tickets/create" element={<EmployeeCreateTicket />} />
          <Route path="tickets/:ticketId" element={<EmployeeTicketDetail />} />
          <Route path="self-work" element={<EmployeeSelfWork />} />
          <Route path="self-work/create" element={<EmployeeCreateSelfWork />} />
          <Route path="self-work/:workId" element={<EmployeeSelfWorkDetail />} />
          <Route path="time-logs" element={<EmployeeTimeLogs />} />
          <Route path="attendance" element={<EmployeeAttendance />} />
          <Route path="leave" element={<EmployeeLeave />} />
          <Route path="notifications" element={<EmployeeNotifications />} />
          <Route path="profile" element={<EmployeeProfile />} />
        </Route>

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
