import { attendanceData } from '../data/dashboardData'

const AttendanceWidget = () => {
  return (
    <div className="card">
      <h3 className="card-title">Attendance Summary</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ 
          padding: '16px', 
          background: '#fafafa', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Present Today</span>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a' }}>{attendanceData.present}</span>
        </div>

        <div style={{ 
          padding: '16px', 
          background: '#fafafa', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Absent Today</span>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a' }}>{attendanceData.absent}</span>
        </div>

        <div style={{ 
          padding: '16px', 
          background: '#fafafa', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Late Check-ins</span>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a' }}>{attendanceData.late}</span>
        </div>
      </div>
    </div>
  )
}

export default AttendanceWidget
