interface Props {
  total: number
  unread: number
  taskAssigned: number
  ticketUpdates: number
  approvalRequests: number
  systemAlerts: number
}

const NotificationStats = ({ 
  total, 
  unread, 
  taskAssigned, 
  ticketUpdates, 
  approvalRequests, 
  systemAlerts 
}: Props) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
      gap: '16px',
      marginBottom: '24px'
    }}>
      <div style={{
        background: '#1a1a1a',
        borderRadius: '12px',
        padding: '20px',
        color: '#fff'
      }}>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
          Unread
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600 }}>
          {unread}
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
          Total
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {total}
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
          Tasks
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {taskAssigned}
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
          Tickets
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {ticketUpdates}
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
          Approvals
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {approvalRequests}
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
          Alerts
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {systemAlerts}
        </div>
      </div>
    </div>
  )
}

export default NotificationStats
