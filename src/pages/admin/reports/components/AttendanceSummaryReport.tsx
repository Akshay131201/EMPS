import { attendanceSummaryData } from '../data/reportsData'

const AttendanceSummaryReport = () => {
  return (
    <div>
      {/* Monthly Comparison */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        marginBottom: '24px'
      }}>
        {attendanceSummaryData.map((month, index) => (
          <div
            key={index}
            style={{
              background: index === attendanceSummaryData.length - 1 ? '#1a1a1a' : '#fff',
              border: index === attendanceSummaryData.length - 1 ? 'none' : '1px solid #e5e5e5',
              borderRadius: '12px',
              padding: '24px'
            }}
          >
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: index === attendanceSummaryData.length - 1 ? '#fff' : '#1a1a1a',
              marginBottom: '20px'
            }}>
              {month.month}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ 
                  fontSize: '13px', 
                  color: index === attendanceSummaryData.length - 1 ? '#999' : '#666',
                  marginBottom: '4px'
                }}>
                  Average Attendance
                </div>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 600, 
                  color: index === attendanceSummaryData.length - 1 ? '#fff' : '#1a1a1a'
                }}>
                  {month.avgAttendance}%
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px',
                paddingTop: '16px',
                borderTop: `1px solid ${index === attendanceSummaryData.length - 1 ? 'rgba(255,255,255,0.1)' : '#f5f5f5'}`
              }}>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: index === attendanceSummaryData.length - 1 ? '#999' : '#666',
                    marginBottom: '4px'
                  }}>
                    Present
                  </div>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: index === attendanceSummaryData.length - 1 ? '#fff' : '#1a1a1a'
                  }}>
                    {month.totalPresent}
                  </div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: index === attendanceSummaryData.length - 1 ? '#999' : '#666',
                    marginBottom: '4px'
                  }}>
                    Absent
                  </div>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: index === attendanceSummaryData.length - 1 ? '#ccc' : '#666'
                  }}>
                    {month.totalAbsent}
                  </div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: index === attendanceSummaryData.length - 1 ? '#999' : '#666',
                    marginBottom: '4px'
                  }}>
                    Late
                  </div>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: index === attendanceSummaryData.length - 1 ? '#ccc' : '#666'
                  }}>
                    {month.totalLate}
                  </div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: index === attendanceSummaryData.length - 1 ? '#999' : '#666',
                    marginBottom: '4px'
                  }}>
                    Leave
                  </div>
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: index === attendanceSummaryData.length - 1 ? '#ccc' : '#666'
                  }}>
                    {month.totalLeave}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Breakdown */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Attendance Breakdown
        </h3>

        {attendanceSummaryData.map((month, index) => (
          <div key={index} style={{ marginBottom: index < attendanceSummaryData.length - 1 ? '24px' : '0' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px' }}>
              {month.month}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Present</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                    {month.totalPresent} ({((month.totalPresent / (month.totalPresent + month.totalAbsent + month.totalLate + month.totalLeave)) * 100).toFixed(1)}%)
                  </span>
                </div>
                <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${(month.totalPresent / (month.totalPresent + month.totalAbsent + month.totalLate + month.totalLeave)) * 100}%`, 
                    background: '#1a1a1a', 
                    borderRadius: '3px' 
                  }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>Late</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#666' }}>
                    {month.totalLate} ({((month.totalLate / (month.totalPresent + month.totalAbsent + month.totalLate + month.totalLeave)) * 100).toFixed(1)}%)
                  </span>
                </div>
                <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${(month.totalLate / (month.totalPresent + month.totalAbsent + month.totalLate + month.totalLeave)) * 100}%`, 
                    background: '#666', 
                    borderRadius: '3px' 
                  }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AttendanceSummaryReport
