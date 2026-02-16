import type { AttendanceSummaryData } from '../types/report.types'

type AttendanceSummaryReportProps = {
  data: AttendanceSummaryData
}

const AttendanceSummaryReport = ({ data }: AttendanceSummaryReportProps) => {
  return (
    <div>
      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        marginBottom: '24px',
      }}>
        {[
          { label: 'Total Days', value: data.totalDays, color: '#3b82f6', icon: '📅' },
          { label: 'Present', value: data.presentDays, color: '#10b981', icon: '✓' },
          { label: 'Absent', value: data.absentDays, color: '#ef4444', icon: '✕' },
          { label: 'Leave', value: data.leaveDays, color: '#f59e0b', icon: '🏖️' },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
            <div style={{
              fontSize: '28px',
              fontWeight: 700,
              color: stat.color,
              marginBottom: '4px',
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#666666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Overall Attendance Rate */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        marginBottom: '24px',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          Overall Attendance Rate
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{
            flex: 1,
            height: '24px',
            background: '#f0f0f0',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${data.attendanceRate}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #10b981, #059669)',
              borderRadius: '12px',
              transition: 'width 0.5s ease',
            }} />
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#10b981',
            minWidth: '80px',
          }}>
            {data.attendanceRate}%
          </div>
        </div>
      </div>

      {/* By Employee Table */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e5e5e5',
          background: '#fafafa',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}>
            Attendance by Employee
          </h3>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Employee Name
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Present
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Absent
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Leave
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'right',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Attendance Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {data.byEmployee.map((employee, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #f0f0f0' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                }}>
                  {employee.name}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#10b981',
                }}>
                  {employee.present}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#ef4444',
                }}>
                  {employee.absent}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#f59e0b',
                }}>
                  {employee.leave}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'right',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '80px',
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${employee.rate}%`,
                        height: '100%',
                        background: employee.rate >= 90 ? '#10b981' : employee.rate >= 80 ? '#f59e0b' : '#ef4444',
                        borderRadius: '4px',
                      }} />
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      minWidth: '50px',
                    }}>
                      {employee.rate}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceSummaryReport
