type WorkApprovalFiltersProps = {
  projectFilter: string
  statusFilter: string
  projects: string[]
  onProjectChange: (value: string) => void
  onStatusChange: (value: string) => void
}

const WorkApprovalFilters = ({
  projectFilter,
  statusFilter,
  projects,
  onProjectChange,
  onStatusChange,
}: WorkApprovalFiltersProps) => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      marginBottom: '24px',
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      {/* Project Filter */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{
          display: 'block',
          fontSize: '13px',
          color: '#666666',
          marginBottom: '8px',
          fontWeight: 500,
        }}>
          Project
        </label>
        <select
          value={projectFilter}
          onChange={(e) => onProjectChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            color: '#1a1a1a',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {projects.map(project => (
            <option key={project} value={project}>
              {project === 'all' ? 'All Projects' : project}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{
          display: 'block',
          fontSize: '13px',
          color: '#666666',
          marginBottom: '8px',
          fontWeight: 500,
        }}>
          Status
        </label>
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            color: '#1a1a1a',
            background: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  )
}

export default WorkApprovalFilters
