import { alertsData } from '../data/dashboardData'

const AlertsPanel = () => {
  return (
    <div className="card">
      <h3 className="card-title">Alerts</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {alertsData.map((alert, index) => (
          <div 
            key={index}
            style={{ 
              padding: '14px 16px', 
              background: '#fafafa', 
              borderRadius: '8px',
              fontSize: '14px',
              color: '#1a1a1a',
              borderLeft: '3px solid #1a1a1a'
            }}
          >
            {alert}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlertsPanel
