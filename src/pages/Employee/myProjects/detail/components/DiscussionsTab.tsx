import type { Discussion } from '../../types/project.types'

interface DiscussionsTabProps {
  discussions: Discussion[]
}

const DiscussionsTab = ({ discussions }: DiscussionsTabProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600,
              color: '#ffffff',
              flexShrink: 0,
            }}>
              {discussion.author.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {discussion.author}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                }}>
                  {discussion.timestamp}
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {discussion.message}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Add Message Input */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
        marginTop: '8px',
      }}>
        <textarea
          placeholder="Write a message..."
          style={{
            width: '100%',
            minHeight: '80px',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'vertical',
            outline: 'none',
            marginBottom: '12px',
          }}
        />
        <button
          style={{
            padding: '10px 20px',
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
          Send Message
        </button>
      </div>
    </div>
  )
}

export default DiscussionsTab
