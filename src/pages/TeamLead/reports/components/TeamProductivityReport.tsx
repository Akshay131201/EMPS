import type { TeamProductivityData } from '../types/report.types'

type TeamProductivityReportProps = {
  data: TeamProductivityData
}

const TeamProductivityReport = ({ data }: TeamProductivityReportProps) => {
  return (
    <div>
      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '24px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>⏱️</div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: '4px',
          }}>
            {data.totalHours}h
          </div>
          <div style={{ fontSize: '14px', color: '#666666' }}>Total Hours Logged</div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>📊</div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#10b981',
            marginBottom: '4px',
          }}>
            {data.avgHoursPerMember}h
          </div>
          <div style={{ fontSize: '14px', color: '#666666' }}>Avg Hours per Member</div>
        </div>
      </div>

      {/* Top Performers */}
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
            Top Performers
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
                Rank
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Team Member
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Hours Logged
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Tasks Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {data.topPerformers.map((performer, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #f0f0f0' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '20px 24px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: index === 0 ? '#fbbf24' : index === 1 ? '#d1d5db' : index === 2 ? '#f97316' : '#e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: index < 3 ? '#ffffff' : '#666666',
                  }}>
                    {index + 1}
                  </div>
                </td>
                <td style={{
                  padding: '20px 24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                }}>
                  {performer.name}
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#3b82f6',
                }}>
                  {performer.hours}h
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#10b981',
                }}>
                  {performer.tasksCompleted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeamProductivityReport
