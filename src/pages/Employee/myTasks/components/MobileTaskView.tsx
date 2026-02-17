import { useNavigate } from 'react-router-dom'

interface MobileTaskViewProps {
  tasks: Array<{
    id: string
    title: string
    project: string
    status: string
    priority: string
    dueDate: string
    progress: number
  }>
}

const MobileTaskView = ({ tasks }: MobileTaskViewProps) => {
  const navigate = useNavigate()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#047857'
      case 'in-progress': return '#1e40af'
      case 'pending': return '#b45309'
      case 'blocked': return '#991b1b'
      default: return '#374151'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#991b1b'
      case 'medium': return '#b45309'
      case 'low': return '#047857'
      default: return '#374151'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    return `${diffDays} days`
  }

  const todayTasks = tasks.filter(t => t.status !== 'completed').slice(0, 10)

  return (
    <div style={{
      padding: '16px',
    }}>
      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '16px',
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
            Active Tasks
          </div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>
            {tasks.filter(t => t.status === 'in-progress').length}
          </div>
        </div>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
            Pending
          </div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#b45309' }}>
            {tasks.filter(t => t.status === 'pending').length}
          </div>
        </div>
      </div>

      {/* Task List */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #e5e7eb',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '16px',
        }}>
          My Tasks
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {todayTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => navigate(`/employee/my-tasks/${task.id}`)}
              style={{
                padding: '16px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '8px',
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                  flex: 1,
                }}>
                  {task.title}
                </h3>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  background: `${getPriorityColor(task.priority)}20`,
                  color: getPriorityColor(task.priority),
                  textTransform: 'uppercase',
                  marginLeft: '8px',
                }}>
                  {task.priority}
                </span>
              </div>

              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                marginBottom: '12px',
              }}>
                {task.project}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: `${getStatusColor(task.status)}20`,
                  color: getStatusColor(task.status),
                  textTransform: 'capitalize',
                }}>
                  {task.status.replace('-', ' ')}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#6b7280',
                }}>
                  Due: {formatDate(task.dueDate)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileTaskView
