import { useState } from 'react'
import { tasksData } from './data/tasksData'
import StatsCards from './components/StatsCards'
import TaskFilters from './components/TaskFilters'
import TasksTable from './components/TasksTable'

const TeamTasksPage = () => {
  const [projectFilter, setProjectFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  const filteredTasks = tasksData.filter(task => {
    const matchesProject = projectFilter === 'all' || task.project === projectFilter
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter
    return matchesProject && matchesStatus && matchesPriority
  })

  const projects = ['all', ...Array.from(new Set(tasksData.map(t => t.project)))]

  const stats = {
    total: tasksData.length,
    todo: tasksData.filter(t => t.status === 'todo').length,
    inProgress: tasksData.filter(t => t.status === 'in-progress').length,
    review: tasksData.filter(t => t.status === 'review').length,
    completed: tasksData.filter(t => t.status === 'completed').length,
  }

  const handleCreateTask = () => {
    // TODO: Implement create task modal
    console.log('Create task')
  }

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}>
          Team Task Management
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Manage and track all team tasks across projects
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Filters */}
      <TaskFilters
        projectFilter={projectFilter}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        projects={projects}
        onProjectChange={setProjectFilter}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
        onCreateTask={handleCreateTask}
      />

      {/* Tasks Table */}
      <TasksTable tasks={filteredTasks} />
    </div>
  )
}

export default TeamTasksPage
