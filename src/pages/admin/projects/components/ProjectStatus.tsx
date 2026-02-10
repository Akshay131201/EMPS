import type { ProjectStatus as ProjectStatusType } from '../types/project.types'

interface Props {
  status: ProjectStatusType
}

const statusConfig = {
  ACTIVE: { bg: '#f0f0f0', color: '#1a1a1a', label: 'Active' },
  ON_HOLD: { bg: '#fafafa', color: '#666', label: 'On Hold' },
  COMPLETED: { bg: '#1a1a1a', color: '#fff', label: 'Completed' },
  ARCHIVED: { bg: '#fafafa', color: '#999', label: 'Archived' }
}

const ProjectStatus = ({ status }: Props) => {
  const config = statusConfig[status]
  
  return (
    <span
      style={{
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: config.bg,
        color: config.color,
        border: '1px solid #e5e5e5',
      }}
    >
      {config.label}
    </span>
  )
}

export default ProjectStatus
