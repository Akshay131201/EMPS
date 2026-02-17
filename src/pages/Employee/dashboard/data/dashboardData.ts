import type { DashboardStats, TaskItem, TicketItem, TimeSummary } from '../types/dashboard.types'

export const dashboardStats: DashboardStats = {
  todayTasks: 5,
  pendingTickets: 3,
  selfWorkPending: 2,
  attendanceStatus: 'present',
}

export const myTasks: TaskItem[] = [
  {
    id: 'T001',
    taskName: 'Implement User Authentication',
    projectName: 'E-Commerce Platform',
    status: 'in-progress',
    dueDate: '2026-02-20',
    priority: 'high',
  },
  {
    id: 'T002',
    taskName: 'Fix Payment Gateway Bug',
    projectName: 'E-Commerce Platform',
    status: 'todo',
    dueDate: '2026-02-18',
    priority: 'critical',
  },
  {
    id: 'T003',
    taskName: 'Design Dashboard UI',
    projectName: 'CRM System',
    status: 'review',
    dueDate: '2026-02-19',
    priority: 'medium',
  },
  {
    id: 'T004',
    taskName: 'Write API Documentation',
    projectName: 'Mobile App Backend',
    status: 'in-progress',
    dueDate: '2026-02-22',
    priority: 'low',
  },
  {
    id: 'T005',
    taskName: 'Database Optimization',
    projectName: 'E-Commerce Platform',
    status: 'todo',
    dueDate: '2026-02-25',
    priority: 'medium',
  },
]

export const myTickets: TicketItem[] = [
  {
    id: 'TKT001',
    ticketTitle: 'Login page not responsive on mobile',
    assignedFrom: 'Sarah Johnson',
    priority: 'high',
    status: 'in-progress',
    createdDate: '2026-02-15',
  },
  {
    id: 'TKT002',
    ticketTitle: 'Email notification not working',
    assignedFrom: 'Mike Chen',
    priority: 'critical',
    status: 'open',
    createdDate: '2026-02-16',
  },
  {
    id: 'TKT003',
    ticketTitle: 'Update user profile feature',
    assignedFrom: 'Sarah Johnson',
    priority: 'medium',
    status: 'open',
    createdDate: '2026-02-17',
  },
]

export const timeSummary: TimeSummary = {
  todayHours: 6.5,
  weeklyHours: 32,
  expectedWeeklyHours: 40,
  isCheckedIn: true,
  checkInTime: '09:15 AM',
}
