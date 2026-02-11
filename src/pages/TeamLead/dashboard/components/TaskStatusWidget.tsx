import { useNavigate } from 'react-router-dom'
import { taskStatusData } from '../data/dashboardData'

const TaskStatusWidget = () => {
  const navigate = useNavigate()

  const statuses = [
    { label: 'Todo', count: taskStatusData.todo, color: '#666666', filter: 'todo' },
    { label: 'In Progress', count: taskStatusData.inProgress, color: '#4a90e2', filter: 'in-progress' },
    { label: 'Review', count: taskStatusData.review, color: '#f59e0b', filter: 'review' },
    { label: 'Completed', count: taskStatusData.completed, color: '#10b981', filter: 'completed' },
  ]

  const handleStatusClick = (filter: string) => {
    navigate(`/teamlead/tasks?status=${filter}`)
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
        Task Status Overview
      </h3>

      <div style={{
        display: 'grid',
        gap: '12px',
      }}>
        {statuses.map((status, index) => (
          <div
            key={index}
            onClick={() => handleStatusClick(status.filter)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              background: '#fafafa',
              borderRadius: '10px',
              border: '1px solid #e5e5e5',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5'
              e.currentTarget.style.borderColor = '#d4d4d4'
              e.currentTarget.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fafafa'
              e.currentTarget.style.borderColor = '#e5e5e5'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: status.color,
              }} />
              <span style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1a1a1a',
              }}>
                {status.label}
              </span>
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: 600,
              color: status.color,
            }}>
              {status.count}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '16px',
        padding: '12px',
        background: '#fafafa',
        borderRadius: '8px',
        fontSize: '13px',
        color: '#666666',
        textAlign: 'center',
      }}>
        Click on any status to view filtered tasks
      </div>
    </div>
  )
}

export default TaskStatusWidget
