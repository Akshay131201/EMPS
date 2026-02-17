import { useNavigate } from 'react-router-dom'
import type { TicketItem } from '../types/dashboard.types'

interface MyTicketsWidgetProps {
  tickets: TicketItem[]
}

const MyTicketsWidget = ({ tickets }: MyTicketsWidgetProps) => {
  const navigate = useNavigate()

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#991b1b'
      case 'high': return '#b45309'
      case 'medium': return '#1e40af'
      case 'low': return '#374151'
      default: return '#374151'
    }
  }

  const getPriorityLabel = (priority: string) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'closed': return '#047857'
      case 'resolved': return '#065f46'
      case 'in-progress': return '#1e40af'
      case 'open': return '#b45309'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in-progress': return 'In Progress'
      case 'open': return 'Open'
      case 'resolved': return 'Resolved'
      case 'closed': return 'Closed'
      default: return status
    }
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e5e7eb',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0,
        }}>
          My Tickets
        </h3>
        <button
          onClick={() => navigate('/employee/tickets')}
          style={{
            padding: '8px 16px',
            background: '#f3f4f6',
            border: 'none',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
        >
          View All
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            style={{
              padding: '16px',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f9fafb'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '6px',
                }}>
                  {ticket.ticketTitle}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  Assigned from: {ticket.assignedFrom}
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 600,
                background: `${getPriorityColor(ticket.priority)}20`,
                color: getPriorityColor(ticket.priority),
              }}>
                {getPriorityLabel(ticket.priority)}
              </span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 500,
                background: `${getStatusColor(ticket.status)}20`,
                color: getStatusColor(ticket.status),
              }}>
                {getStatusLabel(ticket.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTicketsWidget
