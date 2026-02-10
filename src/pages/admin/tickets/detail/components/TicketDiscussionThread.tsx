import { ticketDiscussionData } from '../../data/ticketsData'

const TicketDiscussionThread = () => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      padding: '24px'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '16px' }}>
        Discussion Thread ({ticketDiscussionData.length})
      </h3>

      {/* Reply Input */}
      <div style={{ marginBottom: '24px' }}>
        <textarea
          placeholder="Add to discussion..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'vertical',
            minHeight: '80px',
            outline: 'none',
            transition: 'all 0.15s ease'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
        />
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
          >
            Reply
          </button>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              backgroundColor: '#fff',
              color: '#1a1a1a',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            Add as Admin
          </button>
        </div>
      </div>

      {/* Discussion List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {ticketDiscussionData.map(discussion => (
          <div 
            key={discussion.id} 
            style={{ 
              padding: '16px',
              background: discussion.isAdminComment ? '#1a1a1a' : '#fafafa',
              borderRadius: '8px',
              border: discussion.isAdminComment ? '1px solid #1a1a1a' : 'none'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: 500, 
                  color: discussion.isAdminComment ? '#fff' : '#1a1a1a' 
                }}>
                  {discussion.author}
                </div>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  backgroundColor: discussion.isAdminComment ? 'rgba(255,255,255,0.2)' : '#fff',
                  color: discussion.isAdminComment ? '#fff' : '#666',
                  border: discussion.isAdminComment ? 'none' : '1px solid #e5e5e5'
                }}>
                  {discussion.role}
                </span>
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: discussion.isAdminComment ? '#ccc' : '#999' 
              }}>
                {discussion.timestamp}
              </div>
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: discussion.isAdminComment ? '#fff' : '#666', 
              lineHeight: '1.5' 
            }}>
              {discussion.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketDiscussionThread
