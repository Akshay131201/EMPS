import type { Notification } from '../types/notification.types'

interface Props {
  notification: Notification
  onMarkAsRead: (id: string) => void
  onAction: (url: string) => void
}

const NotificationItem = ({ notification, onMarkAsRead, onAction }: Props) => {
  const getTypeConfig = () => {
    const configs = {
      TASK_ASSIGNED: { icon: '✓', color: '#1a1a1a', bg: '#f0f0f0' },
      TICKET_UPDATE: { icon: '🎫', color: '#666', bg: '#fafafa' },
      APPROVAL_REQUEST: { icon: '✋', color: '#1a1a1a', bg: '#f0f0f0' },
      SYSTEM_ALERT: { icon: '⚠️', color: '#666', bg: '#fafafa' }
    }
    return configs[notification.type]
  }

  const getPriorityIndicator = () => {
    if (notification.priority === 'URGENT') return '🔴'
    if (notification.priority === 'HIGH') return '🟠'
    return null
  }

  const config = getTypeConfig()
  const priorityIndicator = getPriorityIndicator()

  return (
    <div
      style={{
        padding: '20px',
        background: notification.isRead ? '#fff' : '#fafafa',
        borderRadius: '12px',
        border: notification.isRead ? '1px solid #e5e5e5' : '2px solid #e5e5e5',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        position: 'relative'
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
      {/* Unread Indicator */}
      {!notification.isRead && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#1a1a1a'
        }} />
      )}

      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Icon */}
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: config.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexShrink: 0
        }}>
          {config.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            {priorityIndicator && <span style={{ fontSize: '12px' }}>{priorityIndicator}</span>}
            <h4 style={{ 
              fontSize: '15px', 
              fontWeight: 600, 
              color: '#1a1a1a',
              margin: 0
            }}>
              {notification.title}
            </h4>
          </div>

          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            margin: '0 0 12px 0',
            lineHeight: '1.5'
          }}>
            {notification.message}
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '13px', color: '#999' }}>
              {notification.timestamp}
            </span>

            {notification.metadata?.projectName && (
              <span style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                backgroundColor: '#f0f0f0',
                color: '#666'
              }}>
                {notification.metadata.projectName}
              </span>
            )}

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
              {!notification.isRead && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onMarkAsRead(notification.id)
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid #e5e5e5',
                    background: '#fff',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  Mark as Read
                </button>
              )}

              {notification.actionUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onAction(notification.actionUrl!)
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1a1a1a',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem
