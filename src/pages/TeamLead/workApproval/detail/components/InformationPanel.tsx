import type { WorkApproval } from '../../types/workApproval.types'

type InformationPanelProps = {
  workApproval: WorkApproval
}

const InformationPanel = ({ workApproval }: InformationPanelProps) => {
  const sections = [
    {
      title: 'Project',
      icon: '📁',
      content: workApproval.project,
    },
    {
      title: 'Estimated Time',
      icon: '⏱️',
      content: workApproval.estimatedTime,
    },
    {
      title: 'Description',
      icon: '📝',
      content: workApproval.description,
    },
    {
      title: 'Reason',
      icon: '💡',
      content: workApproval.reason,
    },
    {
      title: 'Expected Outcome',
      icon: '🎯',
      content: workApproval.expectedOutcome,
    },
    {
      title: 'Attachment',
      icon: '📎',
      content: workApproval.attachment,
      isAttachment: true,
    },
  ]

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fafafa',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1a1a1a',
        }}>
          Work Information
        </h2>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: index < sections.length - 1 ? '24px' : '0',
              paddingBottom: index < sections.length - 1 ? '24px' : '0',
              borderBottom: index < sections.length - 1 ? '1px solid #f0f0f0' : 'none',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}>
              <span style={{ fontSize: '20px' }}>{section.icon}</span>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                {section.title}
              </h3>
            </div>

            {section.isAttachment ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>
                  📄
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: '2px',
                  }}>
                    {section.content}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#999999',
                  }}>
                    Click to download
                  </div>
                </div>
                <button
                  style={{
                    padding: '8px 16px',
                    background: '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}
                >
                  Download
                </button>
              </div>
            ) : (
              <p style={{
                fontSize: '15px',
                color: '#1a1a1a',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InformationPanel
