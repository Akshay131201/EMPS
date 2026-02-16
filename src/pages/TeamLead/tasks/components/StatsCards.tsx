interface StatsCardsProps {
  stats: {
    total: number
    todo: number
    inProgress: number
    review: number
    completed: number
  }
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '16px',
      marginBottom: '24px',
    }}>
      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
          Total Tasks
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
          {stats.total}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
          To Do
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#666666' }}>
          {stats.todo}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
          In Progress
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#4a90e2' }}>
          {stats.inProgress}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
          In Review
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#f59e0b' }}>
          {stats.review}
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <div style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
          Completed
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#10b981' }}>
          {stats.completed}
        </div>
      </div>
    </div>
  )
}

export default StatsCards
