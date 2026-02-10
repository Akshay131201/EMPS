import { projectTasksData } from '../../data/projectsData'

const statusColumns = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  DONE: 'Done'
}

const ProjectTasksTab = () => {
  const getTasksByStatus = (status: keyof typeof statusColumns) => {
    return projectTasksData.filter(task => task.status === status)
  }

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
          Task Board
        </h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              backgroundColor: '#fff',
              color: '#1a1a1a',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            Filter by Employee
          </button>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
          >
            + Add Task
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '16px',
        overflowX: 'auto'
      }}>
        {(Object.keys(statusColumns) as Array<keyof typeof statusColumns>).map(status => (
          <div key={status} style={{ minWidth: '280px' }}>
            <div style={{ 
              padding: '12px 16px',
              background: '#fafafa',
              borderRadius: '10px',
              marginBottom: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                {statusColumns[status]}
              </span>
              <span style={{ 
                fontSize: '12px', 
                fontWeight: 500, 
                color: '#666',
                background: '#fff',
                padding: '4px 8px',
                borderRadius: '6px'
              }}>
                {getTasksByStatus(status).length}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {getTasksByStatus(status).map(task => (
                <div
                  key={task.id}
                  style={{
                    background: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#d4d4d4'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e5e5'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: '#1a1a1a',
                    marginBottom: '12px'
                  }}>
                    {task.title}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 500,
                      backgroundColor: task.priority === 'HIGH' ? '#1a1a1a' : '#fafafa',
                      color: task.priority === 'HIGH' ? '#fff' : '#666',
                      border: '1px solid #e5e5e5'
                    }}>
                      {task.priority}
                    </span>
                  </div>

                  <div style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    marginBottom: '8px'
                  }}>
                    {task.assignee}
                  </div>

                  <div style={{ 
                    fontSize: '12px', 
                    color: '#999'
                  }}>
                    Due: {task.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTasksTab
