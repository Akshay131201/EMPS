export type ReportType = 
  | 'task-completion'
  | 'ticket-resolution'
  | 'team-productivity'
  | 'attendance-summary'

export type DateRange = {
  startDate: string
  endDate: string
}

export type ReportFilters = {
  dateRange: DateRange
  project: string
  reportType: ReportType
}

export type TaskCompletionData = {
  totalTasks: number
  completedTasks: number
  inProgressTasks: number
  pendingTasks: number
  completionRate: number
  byProject: {
    projectName: string
    total: number
    completed: number
    rate: number
  }[]
}

export type TicketResolutionData = {
  totalTickets: number
  resolvedTickets: number
  avgResolutionTime: string
  byPriority: {
    priority: string
    count: number
    avgTime: string
  }[]
}

export type TeamProductivityData = {
  totalHours: number
  avgHoursPerMember: number
  topPerformers: {
    name: string
    hours: number
    tasksCompleted: number
  }[]
}

export type AttendanceSummaryData = {
  totalDays: number
  presentDays: number
  absentDays: number
  leaveDays: number
  attendanceRate: number
  byEmployee: {
    name: string
    present: number
    absent: number
    leave: number
    rate: number
  }[]
}
