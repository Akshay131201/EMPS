import { monthlyAttendanceData } from '../data/attendanceData'

const MonthlyReportTable = () => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
            <th style={{ padding: '16px 20px', fontWeight: 500 }}>Employee</th>
            <th style={{ padding: '16px 20px', fontWeight: 500 }}>Department</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Present</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Absent</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Late</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Leave</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Total Hours</th>
            <th style={{ padding: '16px 20px', fontWeight: 500, textAlign: 'center' }}>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {monthlyAttendanceData.map((record) => (
            <tr
              key={record.employeeId}
              style={{
                borderBottom: '1px solid #f5f5f5',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <td style={{ padding: '16px 20px' }}>
                <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
                  {record.employeeName}
                </div>
                <div style={{ fontSize: '12px', color: '#999', marginTop: '2px' }}>
                  {record.employeeId}
                </div>
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                {record.department}
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                {record.totalPresent}
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: '#666' }}>
                {record.totalAbsent}
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: '#666' }}>
                {record.totalLate}
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: '#666' }}>
                {record.totalLeave}
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                {record.totalWorkingHours}h
              </td>
              <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: record.attendancePercentage >= 95 ? '#1a1a1a' : record.attendancePercentage >= 85 ? '#f0f0f0' : '#fafafa',
                  color: record.attendancePercentage >= 95 ? '#fff' : '#1a1a1a',
                  border: '1px solid #e5e5e5'
                }}>
                  {record.attendancePercentage}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MonthlyReportTable
