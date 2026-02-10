import type { DailyAttendance, MonthlyAttendanceRecord, LeaveRequest } from '../types/attendance.types'

export const dailyAttendanceData: DailyAttendance[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    department: 'Engineering',
    checkIn: '09:00 AM',
    checkOut: '06:15 PM',
    workingHours: 9.25,
    status: 'PRESENT',
    date: '2026-02-10'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    department: 'Engineering',
    checkIn: '09:30 AM',
    checkOut: '06:00 PM',
    workingHours: 8.5,
    status: 'LATE',
    date: '2026-02-10',
    notes: 'Traffic delay'
  },
  {
    id: '3',
    employeeId: 'EMP003',
    employeeName: 'Emily Rodriguez',
    department: 'Design',
    checkIn: '09:00 AM',
    checkOut: null,
    workingHours: null,
    status: 'PRESENT',
    date: '2026-02-10'
  },
  {
    id: '4',
    employeeId: 'EMP004',
    employeeName: 'David Kumar',
    department: 'Engineering',
    checkIn: null,
    checkOut: null,
    workingHours: null,
    status: 'ABSENT',
    date: '2026-02-10'
  },
  {
    id: '5',
    employeeId: 'EMP005',
    employeeName: 'James Wilson',
    department: 'QA',
    checkIn: '09:00 AM',
    checkOut: '01:00 PM',
    workingHours: 4,
    status: 'HALF_DAY',
    date: '2026-02-10',
    notes: 'Medical appointment'
  },
  {
    id: '6',
    employeeId: 'EMP006',
    employeeName: 'Lisa Anderson',
    department: 'Marketing',
    checkIn: '09:15 AM',
    checkOut: '06:00 PM',
    workingHours: 8.75,
    status: 'WORK_FROM_HOME',
    date: '2026-02-10'
  },
  {
    id: '7',
    employeeId: 'EMP007',
    employeeName: 'Robert Taylor',
    department: 'Sales',
    checkIn: null,
    checkOut: null,
    workingHours: null,
    status: 'LEAVE',
    date: '2026-02-10',
    notes: 'Approved sick leave'
  },
  {
    id: '8',
    employeeId: 'EMP008',
    employeeName: 'Jennifer Lee',
    department: 'HR',
    checkIn: '08:45 AM',
    checkOut: '05:45 PM',
    workingHours: 9,
    status: 'PRESENT',
    date: '2026-02-10'
  }
]

export const monthlyAttendanceData: MonthlyAttendanceRecord[] = [
  {
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    department: 'Engineering',
    totalPresent: 18,
    totalAbsent: 1,
    totalLate: 2,
    totalLeave: 1,
    totalWorkingHours: 162,
    attendancePercentage: 95.5
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    department: 'Engineering',
    totalPresent: 19,
    totalAbsent: 0,
    totalLate: 3,
    totalLeave: 0,
    totalWorkingHours: 171,
    attendancePercentage: 100
  },
  {
    employeeId: 'EMP003',
    employeeName: 'Emily Rodriguez',
    department: 'Design',
    totalPresent: 17,
    totalAbsent: 2,
    totalLate: 1,
    totalLeave: 2,
    totalWorkingHours: 153,
    attendancePercentage: 89.5
  },
  {
    employeeId: 'EMP004',
    employeeName: 'David Kumar',
    department: 'Engineering',
    totalPresent: 20,
    totalAbsent: 0,
    totalLate: 0,
    totalLeave: 0,
    totalWorkingHours: 180,
    attendancePercentage: 100
  },
  {
    employeeId: 'EMP005',
    employeeName: 'James Wilson',
    department: 'QA',
    totalPresent: 16,
    totalAbsent: 1,
    totalLate: 2,
    totalLeave: 3,
    totalWorkingHours: 144,
    attendancePercentage: 84.2
  }
]

export const leaveRequestsData: LeaveRequest[] = [
  {
    id: 'LR001',
    employeeId: 'EMP009',
    employeeName: 'Alex Martinez',
    leaveType: 'Sick Leave',
    startDate: '2026-02-12',
    endDate: '2026-02-13',
    reason: 'Medical treatment required',
    status: 'PENDING'
  },
  {
    id: 'LR002',
    employeeId: 'EMP010',
    employeeName: 'Sophie Brown',
    leaveType: 'Vacation',
    startDate: '2026-02-15',
    endDate: '2026-02-19',
    reason: 'Family vacation',
    status: 'PENDING'
  },
  {
    id: 'LR003',
    employeeId: 'EMP011',
    employeeName: 'Chris Davis',
    leaveType: 'Personal',
    startDate: '2026-02-14',
    endDate: '2026-02-14',
    reason: 'Personal matters',
    status: 'PENDING'
  }
]
