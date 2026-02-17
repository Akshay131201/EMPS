import { useState, useMemo, useEffect } from 'react'
import TaskFilters from './components/TaskFilters'
import TaskCard from './components/TaskCard'
import MobileTaskView from './components/MobileTaskView'
import { employeeTasks } from './data/tasksData'

const MyTasksPage = () => {
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredTasks = useMemo(() => {
    return employeeTasks.filter(task => {
      if (selectedProject && task.projectId !== selectedProject) return false
      if (selectedStatus && task.status !== selectedStatus) return false
      if (selectedPriority && task.priority !== selectedPriority) return false
      return true
    })
  }, [selectedProject, selectedStatus, selectedPriority])

  const taskStats = useMemo(() => {
    return {
      total: employeeTasks.length,
      todo: employeeTasks.filter(t => t.status === 'todo').length,
      inProgress: employeeTasks.filter(t => t.status === 'in-progress').length,
      review: employeeTasks.filter(t => t.status === 'review').length,
      completed: employeeTasks.filter(t => t.status === 'completed').length,
    }
  }, [])

  // Mobile view
  if (isMobile) {
    return <MobileTaskView tasks={filteredTasks} />
  }

  // Desktop/Tablet view
  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          My Tasks
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Manage and track your assigned tasks
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {taskStats.total}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Total Tasks
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '4px',
          }}>
            {taskStats.todo}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            To Do
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {taskStats.inProgress}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            In Progress
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#047857',
            marginBottom: '4px',
          }}>
            {taskStats.completed}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Completed
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        marginBottom: '24px',
      }}>
        <TaskFilters
          selectedProject={selectedProject}
          selectedStatus={selectedStatus}
          selectedPriority={selectedPriority}
          onProjectChange={setSelectedProject}
          onStatusChange={setSelectedStatus}
          onPriorityChange={setSelectedPriority}
        />
      </div>

      {/* Results Count */}
      <div style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#6b7280',
      }}>
        Showing {filteredTasks.length} of {employeeTasks.length} tasks
      </div>

      {/* Tasks Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px',
      }}>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px',
          }}>
            📋
          </div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            No tasks found
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
          }}>
            Try adjusting your filters
          </p>
        </div>
      )}
    </div>
  )
}

export default MyTasksPage
