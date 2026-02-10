import type { Project } from '../types/project.types'
import ProjectStatus from './ProjectStatus'
import ProjectActions from './ProjectActions'

interface Props {
  project: Project
}

const ProjectRow = ({ project }: Props) => {
  return (
    <tr
      style={{
        borderBottom: '1px solid #f5f5f5',
        transition: 'background 0.15s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fafafa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      }
    >
      <td style={{ padding: '16px 20px' }}>
        <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
          {project.name}
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {project.lead}
      </td>

      <td style={{ padding: '16px 20px' }}>
        <ProjectStatus status={project.status} />
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1a1a1a' }}>
        {project.teamSize} members
      </td>

      <td style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            flex: 1, 
            height: '6px', 
            background: '#f0f0f0', 
            borderRadius: '3px',
            overflow: 'hidden',
            minWidth: '80px'
          }}>
            <div style={{ 
              height: '100%', 
              width: `${project.progress}%`, 
              background: '#1a1a1a', 
              borderRadius: '3px' 
            }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: 500, color: '#1a1a1a', minWidth: '35px' }}>
            {project.progress}%
          </span>
        </div>
      </td>

      <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
        {project.deadline}
      </td>

      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
        <ProjectActions projectId={project.id} />
      </td>
    </tr>
  )
}

export default ProjectRow
