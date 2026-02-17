export interface DashboardStats {
  todayTasks: number
  pendingTickets: number
  selfWorkPending: number
  attendanceStatus: 'present' | 'absent' | 'leave' | 'wfh'
}

export interface TaskItem {
  id: string
  taskName: string
  projectName: string
  status: 'todo' | 'in-progress' | 'review' | 'completed'
  dueDate: string
  priority: 'low' | 'medium' | 'high' | 'critical'
}

export interface TicketItem {
  id: string
  ticketTitle: string
  assignedFrom: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  createdDate: string
}

export interface TimeSummary {
  todayHours: number
  weeklyHours: number
  expectedWeeklyHours: number
  isCheckedIn: boolean
  checkInTime?: string
}
