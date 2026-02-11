import type { Project } from '../../types/project.types'

interface OverviewTabProps {
  project: Project
}

const OverviewTab = ({ project }: OverviewTabProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Description */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '12px',
        }}>
          Project Description
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#666666',
          lineHeight: '1.6',
        }}>
          {project.description}
        </p>
      </div>

      {/* Timeline */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          Timeline
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          <div>
            <div style={{
              fontSize: '12px',
              color: '#666666',
              marginBottom: '4px',
            }}>
              Start Date
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a1a1a',
            }}>
              {new Date(project.timeline.startDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '12px',
              color: '#666666',
              marginBottom: '4px',
            }}>
              End Date
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a1a1a',
            }}>
              {new Date(project.timeline.endDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          Overall Progress
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
          <span style={{ fontSize: '14px', color: '#666666' }}>
            Completion
          </span>
          <span style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}>
            {project.progress}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '12px',
          background: '#f5f5f5',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${project.progress}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${
              project.progress >= 75 ? '#10b981' : project.progress >= 50 ? '#4a90e2' : '#f59e0b'
            }, ${
              project.progress >= 75 ? '#059669' : project.progress >= 50 ? '#2563eb' : '#d97706'
            })`,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Completion Stats */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          Completion Statistics
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          <div style={{
            padding: '16px',
            background: '#fafafa',
            borderRadius: '10px',
          }}>
            <div style={{
              fontSize: '12px',
              color: '#666666',
              marginBottom: '8px',
            }}>
              Tasks Progress
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '4px',
            }}>
              {project.completionStats.completedTasks} / {project.completionStats.totalTasks}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#10b981',
              fontWeight: 600,
            }}>
              {Math.round((project.completionStats.completedTasks / project.completionStats.totalTasks) * 100)}% Complete
            </div>
          </div>

          <div style={{
            padding: '16px',
            background: '#fafafa',
            borderRadius: '10px',
          }}>
            <div style={{
              fontSize: '12px',
              color: '#666666',
              marginBottom: '8px',
            }}>
              Tickets Resolved
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '4px',
            }}>
              {project.completionStats.resolvedTickets} / {project.completionStats.totalTickets}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#4a90e2',
              fontWeight: 600,
            }}>
              {Math.round((project.completionStats.resolvedTickets / project.completionStats.totalTickets) * 100)}% Resolved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewTab
