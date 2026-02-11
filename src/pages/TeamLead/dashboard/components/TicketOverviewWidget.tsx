import { ticketOverview } from '../data/dashboardData'

const TicketOverviewWidget = () => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
    }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: 600,
        color: '#1a1a1a',
        marginBottom: '20px',
        letterSpacing: '-0.01em',
      }}>
        Ticket Overview
      </h3>

      {/* High Priority Tickets */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{ fontSize: '16px' }}>🔴</span>
          <h4 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}>
            High Priority ({ticketOverview.highPriority.length})
          </h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ticketOverview.highPriority.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                padding: '12px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f5f5f5'
                e.currentTarget.style.borderColor = '#d4d4d4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fafafa'
                e.currentTarget.style.borderColor = '#e5e5e5'
              }}
            >
              <div style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#666666',
                marginBottom: '4px',
              }}>
                {ticket.id}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                {ticket.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666666',
              }}>
                {ticket.project}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blocked Tickets */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{ fontSize: '16px' }}>🚫</span>
          <h4 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}>
            Blocked ({ticketOverview.blocked.length})
          </h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ticketOverview.blocked.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                padding: '12px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f5f5f5'
                e.currentTarget.style.borderColor = '#d4d4d4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fafafa'
                e.currentTarget.style.borderColor = '#e5e5e5'
              }}
            >
              <div style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#666666',
                marginBottom: '4px',
              }}>
                {ticket.id}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                {ticket.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666666',
              }}>
                {ticket.project}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waiting for Response */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}>
          <span style={{ fontSize: '16px' }}>⏳</span>
          <h4 style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}>
            Waiting for Response ({ticketOverview.waitingResponse.length})
          </h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ticketOverview.waitingResponse.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                padding: '12px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f5f5f5'
                e.currentTarget.style.borderColor = '#d4d4d4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fafafa'
                e.currentTarget.style.borderColor = '#e5e5e5'
              }}
            >
              <div style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#666666',
                marginBottom: '4px',
              }}>
                {ticket.id}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                {ticket.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666666',
              }}>
                {ticket.project}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicketOverviewWidget
