import type { ProjectTicket } from '../../types/project.types'

interface TicketsTabProps {
  tickets: ProjectTicket[]
}

const TicketsTab = ({ tickets }: TicketsTabProps) => {
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#991b1b'
      case 'high': return '#b45309'
      case 'medium': return '#1e40af'
      case 'low': return '#374151'
      default: return '#374151'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
    }}>
      <div style={{
        overflowX: 'auto',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{
              background: '#f9fafb',
              borderBottom: '1px solid #e5e7eb',
            }}>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Ticket Title
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Status
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Priority
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Created Date
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Assigned To
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                style={{
                  borderBottom: index < tickets.length - 1 ? '1px solid #e5e7eb' : 'none',
                  transition: 'background 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 500,
                }}>
                  {ticket.title}
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
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
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: `${getPriorityColor(ticket.priority)}20`,
                    color: getPriorityColor(ticket.priority),
                    textTransform: 'capitalize',
                  }}>
                    {ticket.priority}
                  </span>
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {formatDate(ticket.createdDate)}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {ticket.assignedTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicketsTab
