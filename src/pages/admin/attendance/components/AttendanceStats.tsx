import { dailyAttendanceData } from '../data/attendanceData'

const AttendanceStats = () => {
  const totalEmployees = dailyAttendanceData.length
  const present = dailyAttendanceData.filter(a => a.status === 'PRESENT' || a.status === 'LATE' || a.status === 'WORK_FROM_HOME').length
  const absent = dailyAttendanceData.filter(a => a.status === 'ABSENT').length
  const onLeave = dailyAttendanceData.filter(a => a.status === 'LEAVE').length
  const late = dailyAttendanceData.filter(a => a.status === 'LATE').length
  const attendanceRate = ((present / totalEmployees) * 100).toFixed(1)

  const stats = [
    { label: 'Total Employees', value: totalEmployees, color: '#1a1a1a' },
    { label: 'Present Today', value: present, color: '#1a1a1a' },
    { label: 'Absent', value: absent, color: '#666' },
    { label: 'On Leave', value: onLeave, color: '#666' },
    { label: 'Late Check-ins', value: late, color: '#666' },
    { label: 'Attendance Rate', value: `${attendanceRate}%`, color: '#1a1a1a' }
  ]

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
      gap: '16px',
      marginBottom: '24px'
    }}>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            background: '#fff',
            border: '1px solid #e5e5e5',
            borderRadius: '12px',
            padding: '20px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#d4d4d4'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e5e5'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            {stat.label}
          </div>
          <div style={{ fontSize: '28px', fontWeight: 600, color: stat.color, letterSpacing: '-0.02em' }}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AttendanceStats
