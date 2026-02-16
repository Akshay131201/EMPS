export type AttendanceStatus = 'present' | 'absent' | 'leave' | 'wfh'

export type AttendanceRecord = {
  id: string
  employeeId: string
  employeeName: string
  date: string
  checkIn: string | null
  checkOut: string | null
  totalHours: string | null
  status: AttendanceStatus
  notes?: string
}

export type CalendarDay = {
  date: Date
  isCurrentMonth: boolean
  attendanceRecords: AttendanceRecord[]
}

export type AttendanceFilters = {
  date: string
  status: string
}
