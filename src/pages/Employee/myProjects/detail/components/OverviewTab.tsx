import type { EmployeeProject } from '../../types/project.types'

interface OverviewTabProps {
  project: EmployeeProject
}

const OverviewTab = ({ project }: OverviewTabProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '24px',
    }}>
      {/* Left Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Description */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '16px',
          }}>
            Project Description
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.6',
            margin: 0,
          }}>
            {project.description}
          </p>
        </div>

        {/* Progress */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '16px',
          }}>
            Project Progress
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
            <span style={{
              fontSize: '14px',
              color: '#6b7280',
              fontWeight: 500,
            }}>
              Overall Completion
            </span>
            <span style={{
              fontSize: '18px',
              color: '#1f2937',
              fontWeight: 700,
            }}>
              {project.progress}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '12px',
            background: '#e5e7eb',
            borderRadius: '6px',
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
      </div>

      {/* Right Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Timeline */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '16px',
          }}>
            Timeline
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                marginBottom: '4px',
              }}>
                Start Date
              </div>
              <div style={{
                fontSize: '14px',
                color: '#1f2937',
                fontWeight: 600,
              }}>
                {formatDate(project.timeline.startDate)}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                marginBottom: '4px',
              }}>
                End Date
              </div>
              <div style={{
                fontSize: '14px',
                color: '#1f2937',
                fontWeight: 600,
              }}>
                {formatDate(project.timeline.endDate)}
              </div>
            </div>
          </div>
        </div>

        {/* Project Lead */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '16px',
          }}>
            Project Lead
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
            }}>
              {project.leadName.charAt(0)}
            </div>
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1f2937',
              }}>
                {project.leadName}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
              }}>
                Project Lead
              </div>
            </div>
          </div>
        </div>

        {/* Your Role */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '16px',
          }}>
            Your Role
          </h3>
          <div style={{
            padding: '12px 16px',
            background: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bfdbfe',
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1e40af',
            }}>
              {project.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewTab
