import { useNavigate } from 'react-router-dom'

interface Task {
  id: string
  title: string
  project: string
  assignedTo: string
  priority: 'urgent' | 'high' | 'medium' | 'low'
  status: 'todo' | 'in-progress' | 'review' | 'completed'
  dueDate: string
  progress: number
}

interface TasksTableProps {
  tasks: Task[]
}

const TasksTable = ({ tasks }: TasksTableProps) => {
  const navigate = useNavigate()

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return { label: 'Urgent', color: '#ef4444', bg: '#fee2e2' }
      case 'high':
        return { label: 'High', color: '#f59e0b', bg: '#fef3c7' }
      case 'medium':
        return { label: 'Medium', color: '#4a90e2', bg: '#dbeafe' }
      case 'low':
        return { label: 'Low', color: '#10b981', bg: '#d1fae5' }
      default:
        return { label: priority, color: '#666666', bg: '#f5f5f5' }
    }
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'todo':
        return { label: 'To Do', color: '#666666', bg: '#f5f5f5' }
      case 'in-progress':
        return { label: 'In Progress', color: '#4a90e2', bg: '#dbeafe' }
      case 'review':
        return { label: 'Review', color: '#f59e0b', bg: '#fef3c7' }
      case 'completed':
        return { label: 'Completed', color: '#10b981', bg: '#d1fae5' }
      default:
        return { label: status, color: '#666666', bg: '#f5f5f5' }
    }
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      {/* Table Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr 140px 110px 100px 100px 90px 120px',
        gap: '12px',
        padding: '16px 20px',
        background: '#fafafa',
        borderBottom: '1px solid #e5e5e5',
        fontSize: '13px',
        fontWeight: 600,
        color: '#666666',
      }}>
        <div>Task ID</div>
        <div>Task Title</div>
        <div>Project</div>
        <div>Assigned To</div>
        <div>Priority</div>
        <div>Status</div>
        <div>Due Date</div>
        <div>Progress</div>
      </div>

      {/* Table Body */}
      {tasks.map((task) => {
        const priorityConfig = getPriorityConfig(task.priority)
        const statusConfig = getStatusConfig(task.status)

        return (
          <div
            key={task.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr 140px 110px 100px 100px 90px 120px',
              gap: '12px',
              padding: '16px 20px',
              borderBottom: '1px solid #f5f5f5',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
            onClick={() => navigate(`/teamlead/tasks/${task.id}`)}
          >
            <div style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 600,
              color: '#1a1a1a',
            }}>
              {task.id}
            </div>

            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#1a1a1a',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {task.title}
            </div>

            <div style={{
              fontSize: '12px',
              color: '#666666',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {task.project}
            </div>

            <div style={{
              fontSize: '12px',
              color: '#666666',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {task.assignedTo}
            </div>

            <div>
              <span style={{
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: 600,
                color: priorityConfig.color,
                background: priorityConfig.bg,
                textTransform: 'uppercase',
              }}>
                {priorityConfig.label}
              </span>
            </div>

            <div>
              <span style={{
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: 600,
                color: statusConfig.color,
                background: statusConfig.bg,
              }}>
                {statusConfig.label}
              </span>
            </div>

            <div style={{
              fontSize: '12px',
              color: '#666666',
            }}>
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <div style={{
                  flex: 1,
                  height: '6px',
                  background: '#f5f5f5',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${task.progress}%`,
                    height: '100%',
                    background: task.progress === 100 ? '#10b981' : '#4a90e2',
                    transition: 'width 0.3s ease',
                  }} />
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#666666',
                  minWidth: '32px',
                }}>
                  {task.progress}%
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {tasks.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#666666',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
          <div style={{ fontSize: '16px', fontWeight: 500 }}>
            No tasks found
          </div>
        </div>
      )}
    </div>
  )
}

export default TasksTable
