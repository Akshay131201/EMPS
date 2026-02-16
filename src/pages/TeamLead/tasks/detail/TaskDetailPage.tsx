import { useParams, useNavigate } from 'react-router-dom'
import { tasksData } from '../data/tasksData'

const TaskDetailPage = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const task = tasksData.find(t => t.id === taskId)

  if (!task) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
          Task Not Found
        </div>
        <button
          onClick={() => navigate('/teamlead/tasks')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← Back to Tasks
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate('/teamlead/tasks')}
        style={{
          background: 'none',
          border: 'none',
          color: '#666666',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        ← Back to Tasks
      </button>

      {/* Task Detail */}
      <div style={{
        background: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          {task.title}
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Task ID
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'monospace' }}>
              {task.id}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Project
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              {task.project}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Assigned To
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              {task.assignedTo}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '4px' }}>
              Due Date
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              {new Date(task.dueDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>

        <div style={{
          padding: '24px',
          background: '#fafafa',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#666666',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
          <div style={{ fontSize: '16px', fontWeight: 500 }}>
            Task Detail Page - Coming Soon
          </div>
          <div style={{ fontSize: '14px', marginTop: '8px' }}>
            Full task details with description, subtasks, files, comments, and activity log will be available here.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailPage
