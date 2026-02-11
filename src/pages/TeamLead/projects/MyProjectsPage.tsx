import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Simple inline data - no external imports
const projectsData = [
  {
    id: 'PRJ-001',
    name: 'E-Commerce Platform',
    description: 'Building a modern e-commerce platform with advanced features including payment gateway integration, inventory management, and customer analytics.',
    progress: 75,
    deadline: '2026-03-15',
    teamMembersCount: 8,
    openTasks: 12,
    status: 'active' as const,
  },
  {
    id: 'PRJ-002',
    name: 'Mobile App Development',
    description: 'Cross-platform mobile application for iOS and Android with real-time synchronization and offline capabilities.',
    progress: 45,
    deadline: '2026-04-20',
    teamMembersCount: 6,
    openTasks: 23,
    status: 'active' as const,
  },
  {
    id: 'PRJ-003',
    name: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with data visualization, reporting tools, and predictive analytics.',
    progress: 90,
    deadline: '2026-02-28',
    teamMembersCount: 5,
    openTasks: 3,
    status: 'active' as const,
  },
  {
    id: 'PRJ-004',
    name: 'CRM System',
    description: 'Customer relationship management system with lead tracking, sales pipeline, and automated workflows.',
    progress: 30,
    deadline: '2026-05-10',
    teamMembersCount: 7,
    openTasks: 34,
    status: 'at-risk' as const,
  },
  {
    id: 'PRJ-005',
    name: 'Marketing Website',
    description: 'Modern marketing website with SEO optimization, content management system, and lead generation forms.',
    progress: 100,
    deadline: '2026-01-31',
    teamMembersCount: 4,
    openTasks: 0,
    status: 'completed' as const,
  },
]

const MyProjectsPage = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'at-risk'>('all')

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.status === filter)

  const stats = {
    total: projectsData.length,
    active: projectsData.filter(p => p.status === 'active').length,
    completed: projectsData.filter(p => p.status === 'completed').length,
    atRisk: projectsData.filter(p => p.status === 'at-risk').length,
  }

  const getStatusConfig = (status: string) => {
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

  const getDaysRemaining = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
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
          My Projects
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666666',
        }}>
          Manage and track all projects assigned to you
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#666666',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Total Projects
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#1a1a1a',
          }}>
            {stats.total}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#666666',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Active Projects
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#10b981',
          }}>
            {stats.active}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#666666',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            Completed
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#6366f1',
          }}>
            {stats.completed}
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e5e5',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#666666',
            fontWeight: 500,
            marginBottom: '8px',
          }}>
            At Risk
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#ef4444',
          }}>
            {stats.atRisk}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
        borderBottom: '1px solid #e5e5e5',
        paddingBottom: '0',
      }}>
        {[
          { label: 'All Projects', value: 'all' as const },
          { label: 'Active', value: 'active' as const },
          { label: 'Completed', value: 'completed' as const },
          { label: 'At Risk', value: 'at-risk' as const },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            style={{
              padding: '12px 20px',
              background: 'none',
              border: 'none',
              borderBottom: filter === tab.value ? '2px solid #1a1a1a' : '2px solid transparent',
              fontSize: '14px',
              fontWeight: filter === tab.value ? 600 : 500,
              color: filter === tab.value ? '#1a1a1a' : '#666666',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '20px',
      }}>
        {filteredProjects.map((project) => {
          const statusConfig = getStatusConfig(project.status)
          const daysRemaining = getDaysRemaining(project.deadline)

          return (
            <div
              key={project.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '20px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d4d4d4'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              onClick={() => navigate(`/teamlead/projects/${project.id}`)}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#666666',
                    lineHeight: '1.5',
                    marginBottom: '12px',
                  }}>
                    {project.description.substring(0, 100)}...
                  </p>
                </div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: statusConfig.color,
                  background: statusConfig.bg,
                }}>
                  {statusConfig.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px',
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#666666',
                  }}>
                    Progress
                  </span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                  }}>
                    {project.progress}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#f5f5f5',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${project.progress}%`,
                    height: '100%',
                    background: project.progress >= 75 ? '#10b981' : project.progress >= 50 ? '#4a90e2' : '#f59e0b',
                    transition: 'width 0.3s ease',
                  }} />
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <div style={{
                  padding: '12px',
                  background: '#fafafa',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}>
                    {project.teamMembersCount}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                    Team Members
                  </div>
                </div>

                <div style={{
                  padding: '12px',
                  background: '#fafafa',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}>
                    {project.openTasks}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                    Open Tasks
                  </div>
                </div>

                <div style={{
                  padding: '12px',
                  background: '#fafafa',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: daysRemaining < 7 ? '#ef4444' : '#1a1a1a',
                    marginBottom: '4px',
                  }}>
                    {daysRemaining}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                    Days Left
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid #e5e5e5',
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#666666',
                }}>
                  Deadline: <span style={{ fontWeight: 600, color: '#1a1a1a' }}>
                    {new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/teamlead/projects/${project.id}`)
                  }}
                  style={{
                    padding: '6px 16px',
                    background: '#1a1a1a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  View Details →
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#666666',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
          <div style={{ fontSize: '16px', fontWeight: 500 }}>
            No projects found
          </div>
        </div>
      )}
    </div>
  )
}

export default MyProjectsPage
