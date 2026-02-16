export type TimeLogStatus = 'pending' | 'approved' | 'rejected'

export type TimeLog = {
  id: string
  employeeId: string
  employeeName: string
  taskId: string
  taskName: string
  projectName: string
  loggedHours: number
  date: string
  description: string
  status: TimeLogStatus
  submittedAt: string
  reviewedAt?: string
  reviewedBy?: string
  rejectionReason?: string
}

export type WeekData = {
  weekStart: Date
  weekEnd: Date
  weekNumber: number
  year: number
}

export type TimeLogFilters = {
  employee: string
  status: string
  week: string
}
