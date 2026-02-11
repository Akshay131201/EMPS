import { useState } from 'react'
import { tickets } from '../../data/projectsData'

const TicketsTab = () => {
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return { color: '#ef4444', bg: '#fee2e2' }
      case 'in-progress': return { color: '#4a90e2', bg: '#dbeafe' }
      case 'resolved': return { color: '#10b981', bg: '#d1fae5' }
      case 'closed': return { color: '#666666', bg: '#f5f5f5' }
      default: return { color: '#666666', bg: '#f5f5f5' }
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return '#ef4444'
      case 'high': return '#f59e0b'
      case 'medium': return '#4a90e2'
      case 'low': return '#10b981'
      default: return '#666666'
    }
  }

  return (
    <div>
      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '24px',
        padding: '20px',
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ flex: 1 }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '8px',
          }}>
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              fontSize: '14px',
              background: '#fafafa',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div style={{ flex: 1 }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '8px',
          }}>
            Priority
          </label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              fontSize: '14px',
              background: '#fafafa',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all">All Priority</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
          <button style={{
            width: '100%',
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
          >
            + Create Ticket
          </button>
        </div>
      </div>

      {/* Tickets List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {filteredTickets.map((ticket) => {
          const statusConfig = getStatusColor(ticket.status)
          return (
            <div
              key={ticket.id}
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d4d4d4'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                {/* Priority Indicator */}
                <div style={{
                  width: '4px',
                  height: '60px',
                  borderRadius: '2px',
                  background: getPriorityColor(ticket.priority),
                  flexShrink: 0,
                }} />

                {/* Ticket Info */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                  }}>
                    <span style={{
                      fontSize: '13px',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}>
                      {ticket.id}
                    </span>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: statusConfig.color,
                      background: statusConfig.bg,
                      textTransform: 'capitalize',
                    }}>
                      {ticket.status.replace('-', ' ')}
                    </span>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: getPriorityColor(ticket.priority),
                      background: `${getPriorityColor(ticket.priority)}20`,
                      textTransform: 'capitalize',
                    }}>
                      {ticket.priority}
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px',
                  }}>
                    {ticket.title}
                  </h4>

                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    fontSize: '13px',
                    color: '#666666',
                  }}>
                    <span>👤 {ticket.assignedTo}</span>
                    <span>📅 {new Date(ticket.createdDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>

                {/* Actions */}
                <button style={{
                  padding: '8px 16px',
                  background: '#fafafa',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1a1a1a',
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
                  View Details →
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredTickets.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎫</div>
          <div style={{ fontSize: '16px', fontWeight: 500, color: '#666666' }}>
            No tickets found
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketsTab
