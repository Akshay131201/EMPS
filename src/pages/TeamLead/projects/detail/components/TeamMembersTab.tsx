import { teamMembers } from '../../data/projectsData'

const TeamMembersTab = () => {
  const getWorkloadColor = (workload: number) => {
    if (workload >= 80) return '#ef4444'
    if (workload >= 60) return '#f59e0b'
    return '#10b981'
  }

  return (
    <div>
      {/* Add Member Button */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{
          padding: '10px 20px',
          background: '#1a1a1a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
        >
          + Add Member
        </button>
      </div>

      {/* Team Members List */}
      <div style={{
        display: 'grid',
        gap: '16px',
      }}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#d4d4d4'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e5e5'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              {/* Avatar */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: '#1a1a1a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 600,
                flexShrink: 0,
              }}>
                {member.avatar}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '4px',
                }}>
                  {member.name}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: '#666666',
                  marginBottom: '12px',
                }}>
                  {member.role}
                </p>

                {/* Workload Indicator */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '6px',
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: '#666666',
                    }}>
                      Workload
                    </span>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: getWorkloadColor(member.workload),
                    }}>
                      {member.workload}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: '#f5f5f5',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${member.workload}%`,
                      height: '100%',
                      background: getWorkloadColor(member.workload),
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-end',
              }}>
                <div style={{
                  padding: '8px 16px',
                  background: '#fafafa',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                  }}>
                    {member.tasksAssigned}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#666666',
                  }}>
                    Tasks
                  </div>
                </div>

                <button style={{
                  padding: '6px 12px',
                  background: 'none',
                  border: '1px solid #e5e5e5',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#ef4444',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fee2e2'
                  e.currentTarget.style.borderColor = '#ef4444'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.borderColor = '#e5e5e5'
                }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembersTab
