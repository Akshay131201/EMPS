interface NotificationListProps {
  notifications: Array<{
    id: string
    type: string
    title: string
    message: string
    timestamp: string
    isRead: boolean
    relatedId: string
    relatedType: string
    priority: string
  }>
  onMarkAsRead: (id: string) => void
  onOpenRelated: (notification: any) => void
}

const NotificationList = ({ notifications, onMarkAsRead, onOpenRelated }: NotificationListProps) => {
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#991b1b'
      case 'medium': return '#b45309'
      case 'low': return '#047857'
      default: return '#374151'
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 60) {
      return `${diffMins} minutes ago`
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {notifications.length === 0 ? (
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '48px',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px',
          }}>
            📭
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            No Notifications
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            You're all caught up!
          </div>
        </div>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              background: notification.isRead ? '#ffffff' : '#eff6ff',
              borderRadius: '12px',
              padding: '20px',
              border: `1px solid ${notification.isRead ? '#e5e7eb' : '#bfdbfe'}`,
              transition: 'all 0.2s ease',
              position: 'relative',
            }}
          >
            <div style={{
              display: 'flex',
              gap: '16px',
            }}>
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${getTypeColor(notification.type)}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0,
              }}>
                {getTypeIcon(notification.type)}
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                minWidth: 0,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '8px',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#1f2937',
                      margin: 0,
                    }}>
                      {notification.title}
                    </h3>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 600,
                      background: `${getPriorityColor(notification.priority)}20`,
                      color: getPriorityColor(notification.priority),
                      textTransform: 'uppercase',
                    }}>
                      {notification.priority}
                    </span>
                  </div>
                  {!notification.isRead && (
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#991b1b',
                      flexShrink: 0,
                    }} />
                  )}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '0 0 12px 0',
                  lineHeight: '1.5',
                }}>
                  {notification.message}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                  }}>
                    {formatTimestamp(notification.timestamp)}
                  </span>

                  <div style={{
                    display: 'flex',
                    gap: '8px',
                  }}>
                    {!notification.isRead && (
                      <button
                        onClick={() => onMarkAsRead(notification.id)}
                        style={{
                          padding: '6px 12px',
                          background: '#ffffff',
                          color: '#047857',
                          border: '1px solid #047857',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#047857'
                          e.currentTarget.style.color = '#ffffff'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#ffffff'
                          e.currentTarget.style.color = '#047857'
                        }}
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => onOpenRelated(notification)}
                      style={{
                        padding: '6px 12px',
                        background: '#1a1a1a',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#000000'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
                    >
                      Open Related
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default NotificationList
