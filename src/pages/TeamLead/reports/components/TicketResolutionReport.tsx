import type { TicketResolutionData } from '../types/report.types'

type TicketResolutionReportProps = {
  data: TicketResolutionData
}

const TicketResolutionReport = ({ data }: TicketResolutionReportProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'urgent': return '#ef4444'
      case 'high': return '#f59e0b'
      case 'medium': return '#3b82f6'
      case 'low': return '#10b981'
      default: return '#666666'
    }
  }

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
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎫</div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: '4px',
          }}>
            {data.totalTickets}
          </div>
          <div style={{ fontSize: '14px', color: '#666666' }}>Total Tickets</div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>✓</div>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#10b981',
            marginBottom: '4px',
          }}>
            {data.resolvedTickets}
          </div>
          <div style={{ fontSize: '14px', color: '#666666' }}>Resolved Tickets</div>
        </div>

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
            color: '#8b5cf6',
            marginBottom: '4px',
          }}>
            {data.avgResolutionTime}
          </div>
          <div style={{ fontSize: '14px', color: '#666666' }}>Avg Resolution Time</div>
        </div>
      </div>

      {/* Resolution by Priority */}
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
            Resolution Time by Priority
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
                Priority
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Ticket Count
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'right',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Avg Resolution Time
              </th>
            </tr>
          </thead>
          <tbody>
            {data.byPriority.map((item, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #f0f0f0' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '20px 24px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '3px',
                      background: getPriorityColor(item.priority),
                    }} />
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}>
                      {item.priority}
                    </span>
                  </div>
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: getPriorityColor(item.priority),
                }}>
                  {item.count}
                </td>
                <td style={{
                  padding: '20px 24px',
                  textAlign: 'right',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                }}>
                  {item.avgTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicketResolutionReport
