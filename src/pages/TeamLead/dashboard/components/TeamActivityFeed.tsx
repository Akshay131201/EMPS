import { teamActivityFeed } from '../data/dashboardData'

const TeamActivityFeed = () => {
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'task_completed':
        return '#10b981'
      case 'ticket_resolved':
        return '#4a90e2'
      case 'work_submitted':
        return '#f59e0b'
      case 'attendance':
        return '#666666'
      default:
        return '#666666'
    }
  }

  return (
    <div style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
    }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: 600,
        color: '#1a1a1a',
        marginBottom: '20px',
        letterSpacing: '-0.01em',
      }}>
        Team Activity Feed
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxHeight: '500px',
        overflowY: 'auto',
      }}>
        {teamActivityFeed.map((activity) => (
          <div
            key={activity.id}
            style={{
              display: 'flex',
              gap: '12px',
              padding: '12px',
              background: '#fafafa',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5'
              e.currentTarget.style.borderColor = '#d4d4d4'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fafafa'
              e.currentTarget.style.borderColor = '#e5e5e5'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: getActivityColor(activity.type),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              flexShrink: 0,
            }}>
              {activity.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '13px',
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                <span style={{ fontWeight: 600 }}>{activity.user}</span>
                {' '}{activity.action}{' '}
                <span style={{ fontWeight: 500 }}>{activity.target}</span>
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666666',
              }}>
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamActivityFeed
