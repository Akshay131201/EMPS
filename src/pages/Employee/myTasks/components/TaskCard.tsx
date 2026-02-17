import { useNavigate } from 'react-router-dom'
import type { Task } from '../types/task.types'

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
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

  const progressPercentage = (task.timeSpent / task.estimatedTime) * 100

  return (
    <div
      onClick={() => navigate(`/employee/my-tasks/${task.id}`)}
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '12px',
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '6px',
          }}>
            {task.title}
          </h3>
          <div style={{
            fontSize: '13px',
            color: '#6b7280',
          }}>
            {task.projectName}
          </div>
        </div>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: getPriorityColor(task.priority),
          flexShrink: 0,
          marginTop: '6px',
        }} />
      </div>

      {/* Tags */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
        flexWrap: 'wrap',
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
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 600,
          background: `${getPriorityColor(task.priority)}20`,
          color: getPriorityColor(task.priority),
          textTransform: 'capitalize',
        }}>
          {task.priority}
        </span>
      </div>

      {/* Time Progress */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
        }}>
          <span style={{
            fontSize: '12px',
            color: '#6b7280',
          }}>
            Time Spent
          </span>
          <span style={{
            fontSize: '12px',
            color: '#1f2937',
            fontWeight: 600,
          }}>
            {task.timeSpent}h / {task.estimatedTime}h
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          background: '#e5e7eb',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${Math.min(progressPercentage, 100)}%`,
            height: '100%',
            background: progressPercentage > 100 ? '#991b1b' : '#1e40af',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: '1px solid #e5e7eb',
      }}>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Due: {formatDate(task.dueDate)}
        </div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          By: {task.assignedBy}
        </div>
      </div>
    </div>
  )
}

export default TaskCard
