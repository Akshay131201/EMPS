import type {
  TaskCompletionData,
  TicketResolutionData,
  TeamProductivityData,
  AttendanceSummaryData,
} from '../types/report.types'

export const taskCompletionReport: TaskCompletionData = {
  totalTasks: 156,
  completedTasks: 98,
  inProgressTasks: 42,
  pendingTasks: 16,
  completionRate: 62.8,
  byProject: [
    { projectName: 'E-Commerce Platform', total: 45, completed: 32, rate: 71.1 },
    { projectName: 'Mobile App Development', total: 38, completed: 25, rate: 65.8 },
    { projectName: 'Analytics Dashboard', total: 32, completed: 22, rate: 68.8 },
    { projectName: 'Marketing Website', total: 21, completed: 11, rate: 52.4 },
    { projectName: 'CRM System', total: 20, completed: 8, rate: 40.0 },
  ],
}

export const ticketResolutionReport: TicketResolutionData = {
  totalTickets: 89,
  resolvedTickets: 67,
  avgResolutionTime: '2.5 days',
  byPriority: [
    { priority: 'Urgent', count: 12, avgTime: '4 hours' },
    { priority: 'High', count: 28, avgTime: '1.2 days' },
    { priority: 'Medium', count: 35, avgTime: '3.5 days' },
    { priority: 'Low', count: 14, avgTime: '5.8 days' },
  ],
}

export const teamProductivityReport: TeamProductivityData = {
  totalHours: 1248,
  avgHoursPerMember: 208,
  topPerformers: [
    { name: 'Sarah Johnson', hours: 245, tasksCompleted: 18 },
    { name: 'Mike Chen', hours: 232, tasksCompleted: 16 },
    { name: 'Emily Davis', hours: 218, tasksCompleted: 15 },
    { name: 'John Smith', hours: 205, tasksCompleted: 14 },
    { name: 'Alex Kumar', hours: 198, tasksCompleted: 13 },
  ],
}

export const attendanceSummaryReport: AttendanceSummaryData = {
  totalDays: 22,
  presentDays: 118,
  absentDays: 8,
  leaveDays: 6,
  attendanceRate: 89.4,
  byEmployee: [
    { name: 'Sarah Johnson', present: 20, absent: 1, leave: 1, rate: 90.9 },
    { name: 'Mike Chen', present: 21, absent: 0, leave: 1, rate: 95.5 },
    { name: 'Emily Davis', present: 19, absent: 2, leave: 1, rate: 86.4 },
    { name: 'John Smith', present: 20, absent: 1, leave: 1, rate: 90.9 },
    { name: 'Alex Kumar', present: 18, absent: 2, leave: 2, rate: 81.8 },
    { name: 'Lisa Wang', present: 20, absent: 2, leave: 0, rate: 90.9 },
  ],
}

export const projects = [
  'All Projects',
  'E-Commerce Platform',
  'Mobile App Development',
  'Analytics Dashboard',
  'Marketing Website',
  'CRM System',
]
