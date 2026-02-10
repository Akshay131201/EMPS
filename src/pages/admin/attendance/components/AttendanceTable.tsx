import { dailyAttendanceData } from '../data/attendanceData'
import AttendanceRow from './AttendanceRow'

const AttendanceTable = () => {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr
          style={{
            textAlign: 'left',
            fontSize: '12px',
            color: '#666',
            fontWeight: 500,
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Employee Name</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Department</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Check-in</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Check-out</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Working Hours</th>
          <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
          <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 500 }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {dailyAttendanceData.map((attendance) => (
          <AttendanceRow key={attendance.id} attendance={attendance} />
        ))}
      </tbody>
    </table>
  )
}

export default AttendanceTable
