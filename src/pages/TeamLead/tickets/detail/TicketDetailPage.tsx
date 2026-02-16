import { useParams, useNavigate } from 'react-router-dom'
import { ticketsData } from '../data/ticketsData'

const TicketDetailPage = () => {
  const { ticketId } = useParams()
  const navigate = useNavigate()

  const ticket = ticketsData.find(t => t.id === ticketId)

  if (!ticket) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎫</div>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
          Ticket Not Found
        </div>
        <button
          onClick={() => navigate('/teamlead/tickets')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← Back to Tickets
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate('/teamlead/tickets')}
        style={{
          background: 'none',
          border: 'none',
          color: '#666666',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        ← Back to Tickets
      </button>

      {/* Ticket Detail */}
      <div style={{
        background: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          {ticket.title}
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Ticket ID
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'monospace' }}>
              {ticket.id}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Project
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              {ticket.project}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Assigned To
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              {ticket.assignedTo}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Type
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, textTransform: 'capitalize' }}>
              {ticket.type}
            </div>
          </div>
        </div>

        <div style={{
          marginBottom: '24px',
          padding: '16px',
          background: '#fafafa',
          borderRadius: '10px',
        }}>
          <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
            Description
          </div>
          <div style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6' }}>
            {ticket.description}
          </div>
        </div>

        <div style={{
          padding: '24px',
          background: '#fafafa',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#666666',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
          <div style={{ fontSize: '16px', fontWeight: 500 }}>
            Ticket Detail Page - Coming Soon
          </div>
          <div style={{ fontSize: '14px', marginTop: '8px' }}>
            Full ticket details with discussion thread, attachments, and lead controls will be available here.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPage
