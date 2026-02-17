interface NotificationStatsProps {
  notifications: Array<{
    id: string
    type: string
    isRead: boolean
  }>
}

const NotificationStats = ({ notifications }: NotificationStatsProps) => {
  const unreadCount = notifications.filter(n => !n.isRead).length
  const taskCount = notifications.filter(n => n.type === 'task').length
  const ticketCount = notifications.filter(n => n.type === 'ticket').length
  const approvalCount = notifications.filter(n => n.type === 'approval').length

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px',
        }}>
          Unread
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#991b1b',
        }}>
          {unreadCount}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px',
        }}>
          Task Updates
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#1e40af',
        }}>
          {taskCount}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px',
        }}>
          Ticket Updates
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#b45309',
        }}>
          {ticketCount}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px',
        }}>
          Approvals
        </div>
        <div style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#047857',
        }}>
          {approvalCount}
        </div>
      </div>
    </div>
  )
}

export default NotificationStats
