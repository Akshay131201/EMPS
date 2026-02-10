import type { NotificationType } from '../types/notification.types'

interface Props {
  activeFilter: NotificationType | 'ALL'
  onFilterChange: (filter: NotificationType | 'ALL') => void
  unreadCount: number
}

const NotificationFilters = ({ activeFilter, onFilterChange, unreadCount }: Props) => {
  const filters = [
    { id: 'ALL' as const, label: 'All Notifications', icon: '📬' },
    { id: 'TASK_ASSIGNED' as NotificationType, label: 'Task Assigned', icon: '✓' },
    { id: 'TICKET_UPDATE' as NotificationType, label: 'Ticket Updates', icon: '🎫' },
    { id: 'APPROVAL_REQUEST' as NotificationType, label: 'Approval Requests', icon: '✋' },
    { id: 'SYSTEM_ALERT' as NotificationType, label: 'System Alerts', icon: '⚠️' }
  ]

  return (
    <div style={{ 
      display: 'flex', 
      gap: '8px',
      overflowX: 'auto',
      paddingBottom: '4px'
    }}>
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          style={{
            padding: '10px 16px',
            borderRadius: '10px',
            border: activeFilter === filter.id ? '2px solid #1a1a1a' : '1px solid #e5e5e5',
            background: activeFilter === filter.id ? '#1a1a1a' : '#fff',
            color: activeFilter === filter.id ? '#fff' : '#666',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.backgroundColor = '#fafafa'
              e.currentTarget.style.borderColor = '#d4d4d4'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.borderColor = '#e5e5e5'
            }
          }}
        >
          <span>{filter.icon}</span>
          {filter.label}
          {filter.id === 'ALL' && unreadCount > 0 && (
            <span style={{
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 600,
              backgroundColor: activeFilter === filter.id ? '#fff' : '#1a1a1a',
              color: activeFilter === filter.id ? '#1a1a1a' : '#fff'
            }}>
              {unreadCount}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default NotificationFilters
