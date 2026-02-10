import TaskDescription from './components/TaskDescription'
import TaskAssignedMembers from './components/TaskAssignedMembers'
import TaskStatusHistory from './components/TaskStatusHistory'
import TaskComments from './components/TaskComments'
import TaskAttachments from './components/TaskAttachments'
import TaskTimeLogs from './components/TaskTimeLogs'

const TaskDetailPage = () => {
  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#666',
              padding: '4px'
            }}
          >
            ←
          </button>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 600,
            color: '#1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            Implement authentication system
          </h1>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          marginLeft: '44px'
        }}>
          <span style={{
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 500,
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: '1px solid #e5e5e5'
          }}>
            Urgent
          </span>
          <span style={{
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 500,
            backgroundColor: '#f0f0f0',
            color: '#1a1a1a',
            border: '1px solid #e5e5e5'
          }}>
            In Progress
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            E-Commerce Platform
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TaskDescription />
          <TaskComments />
          <TaskAttachments />
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TaskAssignedMembers />
          <TaskStatusHistory />
          <TaskTimeLogs />
        </div>
      </div>
    </div>
  )
}

export default TaskDetailPage
