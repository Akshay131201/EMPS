import type { AttendanceStatus as AttendanceStatusType } from '../types/attendance.types'

interface Props {
  status: AttendanceStatusType
}

const statusConfig = {
  PRESENT: { bg: '#1a1a1a', color: '#fff', label: 'Present', icon: '✓' },
  ABSENT: { bg: '#fafafa', color: '#666', label: 'Absent', icon: '✕' },
  LATE: { bg: '#fafafa', color: '#666', label: 'Late', icon: '⏰' },
  HALF_DAY: { bg: '#f0f0f0', color: '#1a1a1a', label: 'Half Day', icon: '◐' },
  LEAVE: { bg: '#fafafa', color: '#666', label: 'Leave', icon: '📅' },
  WORK_FROM_HOME: { bg: '#f0f0f0', color: '#1a1a1a', label: 'WFH', icon: '🏠' }
}

const AttendanceStatus = ({ status }: Props) => {
  const config = statusConfig[status]
  
  return (
    <span
      style={{
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: config.bg,
        color: config.color,
        border: '1px solid #e5e5e5',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  )
}

export default AttendanceStatus
