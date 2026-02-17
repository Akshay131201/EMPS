import { useNavigate } from 'react-router-dom'
import type { EmployeeProject } from '../types/project.types'

interface ProjectCardProps {
  project: EmployeeProject
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#047857'
      case 'completed': return '#1e40af'
      case 'on-hold': return '#b45309'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active'
      case 'completed': return 'Completed'
      case 'on-hold': return 'On Hold'
      default: return status
    }
  }

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '16px',
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '8px',
          }}>
            {project.projectName}
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 500,
              background: '#f3f4f6',
              color: '#374151',
            }}>
              {project.role}
            </span>
            <span style={{
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 500,
              background: `${getStatusColor(project.status)}20`,
              color: getStatusColor(project.status),
            }}>
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}>
          <span style={{
            fontSize: '13px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Progress
          </span>
          <span style={{
            fontSize: '13px',
            color: '#1f2937',
            fontWeight: 600,
          }}>
            {project.progress}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#e5e7eb',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${project.progress}%`,
            height: '100%',
            background: project.progress >= 75 ? '#047857' : project.progress >= 50 ? '#1e40af' : '#b45309',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '16px',
        paddingTop: '12px',
        borderTop: '1px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '16px' }}>✓</span>
          <span style={{
            fontSize: '13px',
            color: '#6b7280',
          }}>
            {project.taskCount} Tasks
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '16px' }}>👥</span>
          <span style={{
            fontSize: '13px',
            color: '#6b7280',
          }}>
            {project.teamSize} Members
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => navigate(`/employee/my-projects/${project.id}`)}
        style={{
          width: '100%',
          padding: '10px',
          background: '#1a1a1a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#000000'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
      >
        Open Project
      </button>
    </div>
  )
}

export default ProjectCard
