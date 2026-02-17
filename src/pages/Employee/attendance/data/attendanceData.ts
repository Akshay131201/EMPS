export const attendanceRecords = [
  {
    id: 'A001',
    date: '2026-02-17',
    inTime: '09:15 AM',
    outTime: '06:30 PM',
    totalHours: '9h 15m',
    status: 'present',
  },
  {
    id: 'A002',
    date: '2026-02-16',
    inTime: '09:00 AM',
    outTime: '06:00 PM',
    totalHours: '9h 0m',
    status: 'present',
  },
  {
    id: 'A003',
    date: '2026-02-15',
    inTime: '09:30 AM',
    outTime: '06:45 PM',
    totalHours: '9h 15m',
    status: 'present',
  },
  {
    id: 'A004',
    date: '2026-02-14',
    inTime: '09:10 AM',
    outTime: '06:20 PM',
    totalHours: '9h 10m',
    status: 'present',
  },
  {
    id: 'A005',
    date: '2026-02-13',
    inTime: '-',
    outTime: '-',
    totalHours: '-',
    status: 'absent',
  },
  {
    id: 'A006',
    date: '2026-02-12',
    inTime: '09:05 AM',
    outTime: '06:15 PM',
    totalHours: '9h 10m',
    status: 'present',
  },
  {
    id: 'A007',
    date: '2026-02-11',
    inTime: '09:20 AM',
    outTime: '06:30 PM',
    totalHours: '9h 10m',
    status: 'present',
  },
]

export const getTodayAttendance = () => {
  return {
    isCheckedIn: true,
    checkInTime: '09:15 AM',
    checkOutTime: null,
    workingHours: '6h 45m',
    status: 'present',
  }
}
