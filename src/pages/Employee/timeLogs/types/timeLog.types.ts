export interface TimeLog {
  id: string
  date: string
  workType: 'task' | 'ticket' | 'meeting' | 'other'
  reference: string
  workDescription: string
  hours: number
  approvalStatus: 'pending' | 'approved' | 'rejected'
  projectName: string
}

export interface TimeSummary {
  weeklyTotal: number
  monthlyTotal: number
  todayTotal: number
}

export interface AddTimeLogForm {
  projectId: string
  taskOrTicketId: string
  workDescription: string
  hours: number
  date: string
}
