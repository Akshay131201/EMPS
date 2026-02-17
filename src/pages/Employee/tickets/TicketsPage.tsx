import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TicketTable from './components/TicketTable'
import { employeeTickets } from './data/ticketsData'

const TicketsPage = () => {
  const navigate = useNavigate()
  const [statusFilter, setStatusFilter] = useState('')

  const filteredTickets = statusFilter
    ? employeeTickets.filter(t => t.status === statusFilter)
    : employeeTickets

  const ticketStats = {
    total: employeeTickets.length,
    open: employeeTickets.filter(t => t.status === 'open').length,
    inProgress: employeeTickets.filter(t => t.status === 'in-progress').length,
    resolved: employeeTickets.filter(t => t.status === 'resolved').length,
  }

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            Ticket Center
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
          }}>
            Raise and track internal issues
          </p>
        </div>
        <button
          onClick={() => navigate('/employee/tickets/create')}
          style={{
            padding: '12px 24px',
            background: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
        >
          + Create Ticket
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <div
          onClick={() => setStatusFilter('')}
          style={{
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: statusFilter === '' ? '2px solid #1e40af' : '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {ticketStats.total}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Total Tickets
          </div>
        </div>

        <div
          onClick={() => setStatusFilter('open')}
          style={{
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: statusFilter === 'open' ? '2px solid #b45309' : '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#b45309',
            marginBottom: '4px',
          }}>
            {ticketStats.open}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Open
          </div>
        </div>

        <div
          onClick={() => setStatusFilter('in-progress')}
          style={{
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: statusFilter === 'in-progress' ? '2px solid #1e40af' : '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {ticketStats.inProgress}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            In Progress
          </div>
        </div>

        <div
          onClick={() => setStatusFilter('resolved')}
          style={{
            background: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: statusFilter === 'resolved' ? '2px solid #047857' : '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#047857',
            marginBottom: '4px',
          }}>
            {ticketStats.resolved}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Resolved
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <TicketTable tickets={filteredTickets} />
    </div>
  )
}

export default TicketsPage
