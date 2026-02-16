import type { TaskCompletionData } from '../types/report.types'

type TaskCompletionReportProps = {
  data: TaskCompletionData
}

const TaskCompletionReport = ({ data }: TaskCompletionReportProps) => {
  return (
    <div>
      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '24px',
      }}>
        {[
          { label: 'Total Tasks', value: data.totalTasks, color: '#3b82f6', icon: '📋' },
          { label: 'Completed', value: data.completedTasks, color: '#10b981', icon: '✓' },
          { label: 'In Progress', value: data.inProgressTasks, color: '#f59e0b', icon: '⏳' },
          { label: 'Pending', value: data.pendingTasks, color: '#ef4444', icon: '⏸️' },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
            <div style={{
              fontSize: '28px',
              fontWeight: 700,
              color: stat.color,
              marginBottom: '4px',
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#666666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Completion Rate */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        marginBottom: '24px',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '16px',
        }}>
          Overall Completion Rate
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{
            flex: 1,
            height: '24px',
            background: '#f0f0f0',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${data.completionRate}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #10b981, #059669)',
              borderRadius: '12px',
              transition: 'width 0.5s ease',
            }} />
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#10b981',
            minWidth: '80px',
          }}>
            {data.completionRate}%
          </div>
        </div>
      </div>

      {/* By Project Table */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e5e5e5',
          background: '#fafafa',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}>
            Task Completion by Project
          </h3>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Project Name
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Total Tasks
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Completed
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'right',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
              }}>
                Completion Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {data.byProject.map((project, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #f0f0f0' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                }}>
                  {project.projectName}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  {project.total}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#10b981',
                }}>
                  {project.completed}
                </td>
                <td style={{
                  padding: '16px 24px',
                  textAlign: 'right',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '80px',
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${project.rate}%`,
                        height: '100%',
                        background: '#10b981',
                        borderRadius: '4px',
                      }} />
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      minWidth: '50px',
                    }}>
                      {project.rate}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskCompletionReport
