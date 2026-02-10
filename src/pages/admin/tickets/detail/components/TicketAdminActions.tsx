const TicketAdminActions = () => {
  return (
    <div style={{
      background: '#1a1a1a',
      borderRadius: '12px',
      padding: '20px 24px',
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginRight: '8px' }}>
        Admin Actions:
      </div>
      
      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          fontWeight: 500,
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        Reassign Ticket
      </button>

      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          fontWeight: 500,
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        Change Priority
      </button>

      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          fontWeight: 500,
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        Force Close
      </button>

      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #fff',
          background: '#fff',
          color: '#1a1a1a',
          fontWeight: 500,
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
      >
        Add Admin Comment
      </button>
    </div>
  )
}

export default TicketAdminActions
