export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'HALF_DAY' | 'LEAVE' | 'WORK_FROM_HOME'

export interface DailyAttendance {
  id: string
  employeeId: string
  employeeName: string
  department: string
  checkIn: string | null
  checkOut: string | null
  workingHours: number | null
  status: AttendanceStatus
  date: string
  notes?: string
}

export interface MonthlyAttendanceRecord {
  employeeId: string
  employeeName: string
  department: string
  totalPresent: number
  totalAbsent: number
  totalLate: number
  totalLeave: number
  totalWorkingHours: number
  attendancePercentage: number
}

export interface CalendarDay {
  date: string
  day: number
  status: AttendanceStatus | null
  checkIn?: string
  checkOut?: string
  isToday: boolean
  isWeekend: boolean
}

export interface LeaveRequest {
  id: string
  employeeId: string
  employeeName: string
  leaveType: string
  startDate: string
  endDate: string
  reason: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
}
