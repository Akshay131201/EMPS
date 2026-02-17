import { useNavigate } from 'react-router-dom'
import type { TaskItem } from '../types/dashboard.types'

interface MyTasksWidgetProps {
  tasks: TaskItem[]
}

const MyTasksWidget = ({ tasks }: MyTasksWidgetProps) => {
  const navigate = useNavigate()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#047857'
      case 'in-progress': return '#1e40af'
      case 'review': return '#b45309'
      case 'todo': return '#374151'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'review': return 'Review'
      case 'todo': return 'To Do'
      default: return status
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#991b1b'
      case 'high': return '#b45309'
      case 'medium': return '#1e40af'
      case 'low': return '#374151'
      default: return '#374151'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`
    return `${diffDays} days left`
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e5e7eb',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0,
        }}>
          My Tasks
        </h3>
        <button
          onClick={() => navigate('/employee/my-tasks')}
          style={{
            padding: '8px 16px',
            background: '#f3f4f6',
            border: 'none',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
        >
          View All
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tasks.slice(0, 5).map((task) => (
          <div
            key={task.id}
            style={{
              padding: '16px',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f9fafb'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '4px',
                }}>
                  {task.taskName}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {task.projectName}
                </div>
              </div>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: getPriorityColor(task.priority),
                marginTop: '6px',
              }} />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 500,
                background: `${getStatusColor(task.status)}20`,
                color: getStatusColor(task.status),
              }}>
                {getStatusLabel(task.status)}
              </span>
              <span style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: 500,
              }}>
                {formatDate(task.dueDate)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTasksWidget
