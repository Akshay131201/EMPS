interface Props {
  ticketId: string
}

const TicketActions = ({ ticketId }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
      <button
        onClick={() => console.log('View ticket:', ticketId)}
        style={{
          border: '1px solid #e5e5e5',
          background: '#fff',
          cursor: 'pointer',
          fontSize: '13px',
          padding: '6px 12px',
          borderRadius: '8px',
          color: '#1a1a1a',
          fontWeight: 500,
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#fafafa'
          e.currentTarget.style.borderColor = '#d4d4d4'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff'
          e.currentTarget.style.borderColor = '#e5e5e5'
        }}
      >
        View
      </button>
      <button
        style={{
          border: '1px solid #e5e5e5',
          background: '#fff',
          cursor: 'pointer',
          fontSize: '18px',
          padding: '6px 10px',
          borderRadius: '8px',
          color: '#666',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#fafafa'
          e.currentTarget.style.borderColor = '#d4d4d4'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff'
          e.currentTarget.style.borderColor = '#e5e5e5'
        }}
      >
        ⋮
      </button>
    </div>
  )
}

export default TicketActions
