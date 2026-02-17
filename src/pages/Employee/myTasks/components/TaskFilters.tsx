interface TaskFiltersProps {
  selectedProject: string
  selectedStatus: string
  selectedPriority: string
  onProjectChange: (project: string) => void
  onStatusChange: (status: string) => void
  onPriorityChange: (priority: string) => void
}

const TaskFilters = ({
  selectedProject,
  selectedStatus,
  selectedPriority,
  onProjectChange,
  onStatusChange,
  onPriorityChange,
}: TaskFiltersProps) => {
  const selectStyle = {
    padding: '10px 16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    color: '#374151',
    background: '#ffffff',
    cursor: 'pointer',
    outline: 'none',
  }

  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}>
      <select
        value={selectedProject}
        onChange={(e) => onProjectChange(e.target.value)}
        style={selectStyle}
      >
        <option value="">All Projects</option>
        <option value="P001">E-Commerce Platform</option>
        <option value="P002">CRM System</option>
        <option value="P003">Mobile App Backend</option>
      </select>

      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        style={selectStyle}
      >
        <option value="">All Status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="review">Review</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={selectedPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
        style={selectStyle}
      >
        <option value="">All Priority</option>
        <option value="critical">Critical</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  )
}

export default TaskFilters
