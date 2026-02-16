type StatsCardsProps = {
  totalPending: number
  totalApproved: number
  totalRejected: number
  avgProcessingTime: string
}

const StatsCards = ({ 
  totalPending, 
  totalApproved, 
  totalRejected, 
  avgProcessingTime 
}: StatsCardsProps) => {
  const stats = [
    {
      label: 'Pending Approvals',
      value: totalPending,
      icon: '⏳',
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
    {
      label: 'Approved',
      value: totalApproved,
      icon: '✓',
      color: '#10b981',
      bgColor: '#d1fae5',
    },
    {
      label: 'Rejected',
      value: totalRejected,
      icon: '✕',
      color: '#ef4444',
      bgColor: '#fee2e2',
    },
    {
      label: 'Avg Processing Time',
      value: avgProcessingTime,
      icon: '⏱️',
      color: '#6366f1',
      bgColor: '#e0e7ff',
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      marginBottom: '24px',
    }}>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            background: '#ffffff',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: stat.bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}>
              {stat.icon}
            </div>
          </div>
          <div style={{
            fontSize: '28px',
            fontWeight: 700,
            color: stat.color,
            marginBottom: '4px',
          }}>
            {stat.value}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666666',
            fontWeight: 500,
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
