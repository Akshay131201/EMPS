interface MobileNotificationViewProps {
  notifications: Array<{
    id: string
    type: string
    title: string
    message: string
    timestamp: string
    isRead: boolean
    priority: string
  }>
  onMarkAsRead: (id: string) => void
}

const MobileNotificationView = ({ notifications, onMarkAsRead }: MobileNotificationViewProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'task': return '✓'
      case 'ticket': return '🎫'
      case 'approval': return '✅'
      default: return '📋'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'task': return '#1e40af'
      case 'ticket': return '#b45309'
      case 'approval': return '#047857'
      default: return '#374151'
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)

    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const unreadNotifications = notifications.filter(n => !n.isRead)
  const recentNotifications = notifications.slice(0, 10)

  return (
    <div style={{
      padding: '16px',
    }}>
      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginBottom: '16px',
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#991b1b' }}>
            {unreadNotifications.length}
          </div>
          <div style={{ fontSize: '11px', color: '#6b7280' }}>Unread</div>
        </div>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#1e40af' }}>
            {notifications.filter(n => n.type === 'task').length}
          </div>
          <div style={{ fontSize: '11px', color: '#6b7280' }}>Tasks</div>
        </div>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#047857' }}>
            {notifications.filter(n => n.type === 'approval').length}
          </div>
          <div style={{ fontSize: '11px', color: '#6b7280' }}>Approvals</div>
        </div>
      </div>

      {/* Notifications List */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #e5e7eb',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '16px',
        }}>
          Notifications
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {recentNotifications.map((notification) => (
            <div
              key={notification.id}
              style={{
                padding: '12px',
                background: notification.isRead ? '#ffffff' : '#eff6ff',
                borderRadius: '8px',
                border: `1px solid ${notification.isRead ? '#e5e7eb' : '#bfdbfe'}`,
                position: 'relative',
              }}
            >
              <div style={{
                display: 'flex',
                gap: '12px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: `${getTypeColor(notification.type)}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}>
                  {getTypeIcon(notification.type)}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '4px',
                  }}>
                    <h3 style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1f2937',
                      margin: 0,
                    }}>
                      {notification.title}
                    </h3>
                    {!notification.isRead && (
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#991b1b',
                        flexShrink: 0,
                        marginLeft: '8px',
                      }} />
                    )}
                  </div>

                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: '0 0 8px 0',
                    lineHeight: '1.4',
                  }}>
                    {notification.message}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      fontSize: '11px',
                      color: '#9ca3af',
                    }}>
                      {formatTimestamp(notification.timestamp)}
                    </span>
                    {!notification.isRead && (
                      <button
                        onClick={() => onMarkAsRead(notification.id)}
                        style={{
                          padding: '4px 10px',
                          background: '#047857',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 500,
                          cursor: 'pointer',
                        }}
                      >
                        Mark Read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNotificationView
