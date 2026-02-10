import type { DailyAttendance } from '../types/attendance.types'
import AttendanceStatus from './AttendanceStatus'

interface Props {
  attendance: DailyAttendance
}

const AttendanceRow = ({ attendance }: Props) => {
  return (
    <tr
      style={{
        borderBottom: '1px solid #f5f5f5',
        transition: 'background 0.15s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fafafa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      }
    >
      <td style={{ padding: '16px 20px' }}>
        <div>
          <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
            {attendance.employeeName}
          </div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '2px' }}>
            {attendance.employeeId}
          </div>
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {attendance.department}
      </td>

      <td style={{ padding: '16px 20px' }}>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: 500,
          color: attendance.checkIn ? '#1a1a1a' : '#ccc',
          fontFamily: 'monospace'
        }}>
          {attendance.checkIn || '--:--'}
        </span>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: 500,
          color: attendance.checkOut ? '#1a1a1a' : '#ccc',
          fontFamily: 'monospace'
        }}>
          {attendance.checkOut || '--:--'}
        </span>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: 600,
          color: attendance.workingHours ? '#1a1a1a' : '#ccc'
        }}>
          {attendance.workingHours ? `${attendance.workingHours}h` : '--'}
        </span>
      </td>

      <td style={{ padding: '16px 20px' }}>
        <AttendanceStatus status={attendance.status} />
      </td>

      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            style={{
              border: '1px solid #e5e5e5',
              background: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
              padding: '6px 12px',
              borderRadius: '8px',
              color: '#1a1a1a',
              fontWeight: 500,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fafafa'
              e.currentTarget.style.borderColor = '#d4d4d4'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.borderColor = '#e5e5e5'
            }}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  )
}

export default AttendanceRow
