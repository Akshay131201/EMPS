interface ProjectStatusProps {
  status: 'active' | 'on-hold' | 'completed' | 'at-risk'
}

const ProjectStatus = ({ status }: ProjectStatusProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'active':
        return { label: 'Active', color: '#10b981', bg: '#d1fae5' }
      case 'on-hold':
        return { label: 'On Hold', color: '#f59e0b', bg: '#fef3c7' }
      case 'completed':
        return { label: 'Completed', color: '#6366f1', bg: '#e0e7ff' }
      case 'at-risk':
        return { label: 'At Risk', color: '#ef4444', bg: '#fee2e2' }
      default:
        return { label: status, color: '#666666', bg: '#f5f5f5' }
    }
  }

  const config = getStatusConfig()

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: 600,
      color: config.color,
      background: config.bg,
    }}>
      {config.label}
    </span>
  )
}

export default ProjectStatus
