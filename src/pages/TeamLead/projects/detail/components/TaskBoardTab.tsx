import { tasks } from '../../data/projectsData'
import type { Task } from '../../types/project.types'

const TaskBoardTab = () => {
  const columns = [
    { id: 'todo', title: 'Todo', color: '#666666' },
    { id: 'in-progress', title: 'In Progress', color: '#4a90e2' },
    { id: 'review', title: 'Review', color: '#f59e0b' },
    { id: 'done', title: 'Done', color: '#10b981' },
  ]

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return '#ef4444'
      case 'high': return '#f59e0b'
      case 'medium': return '#4a90e2'
      case 'low': return '#10b981'
      default: return '#666666'
    }
  }

  const TaskCard = ({ task }: { task: Task }) => (
    <div style={{
      background: '#ffffff',
      padding: '16px',
      borderRadius: '10px',
      border: '1px solid #e5e5e5',
      marginBottom: '12px',
      cursor: 'grab',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
      e.currentTarget.style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      {/* Task Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '8px',
      }}>
        <span style={{
          fontSize: '12px',
          fontFamily: 'monospace',
          color: '#666666',
        }}>
          {task.id}
        </span>
        <span style={{
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 600,
          color: getPriorityColor(task.priority),
          background: `${getPriorityColor(task.priority)}20`,
          textTransform: 'uppercase',
        }}>
          {task.priority}
        </span>
      </div>

      {/* Task Title */}
      <h4 style={{
        fontSize: '14px',
        fontWeight: 600,
        color: '#1a1a1a',
        marginBottom: '8px',
        lineHeight: '1.4',
      }}>
        {task.title}
      </h4>

      {/* Task Description */}
      <p style={{
        fontSize: '12px',
        color: '#666666',
        marginBottom: '12px',
        lineHeight: '1.5',
      }}>
        {task.description}
      </p>

      {/* Task Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '12px',
        borderTop: '1px solid #f5f5f5',
      }}>
        <div style={{
          fontSize: '11px',
          color: '#666666',
        }}>
          👤 {task.assignedTo}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#666666',
        }}>
          📅 {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
      }}>
        <button style={{
          padding: '10px 20px',
          background: '#1a1a1a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
        >
          + Create Task
        </button>
        <button style={{
          padding: '10px 20px',
          background: '#ffffff',
          color: '#1a1a1a',
          border: '1px solid #e5e5e5',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#fafafa'
          e.currentTarget.style.borderColor = '#d4d4d4'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff'
          e.currentTarget.style.borderColor = '#e5e5e5'
        }}
        >
          Assign Task
        </button>
      </div>

      {/* Kanban Board */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}>
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id)
          return (
            <div
              key={column.id}
              style={{
                background: '#fafafa',
                borderRadius: '12px',
                padding: '16px',
                minHeight: '500px',
              }}
            >
              {/* Column Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: `2px solid ${column.color}`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: column.color,
                  }} />
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                  }}>
                    {column.title}
                  </h3>
                </div>
                <span style={{
                  padding: '4px 8px',
                  background: '#ffffff',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: column.color,
                }}>
                  {columnTasks.length}
                </span>
              </div>

              {/* Tasks */}
              <div>
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
                {columnTasks.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: '#666666',
                    fontSize: '13px',
                  }}>
                    No tasks
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Drag & Drop Info */}
      <div style={{
        marginTop: '20px',
        padding: '12px 16px',
        background: '#fafafa',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        fontSize: '13px',
        color: '#666666',
        textAlign: 'center',
      }}>
        💡 Drag and drop tasks between columns to update their status
      </div>
    </div>
  )
}

export default TaskBoardTab
