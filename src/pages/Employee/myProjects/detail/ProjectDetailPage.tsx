import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { employeeProjects, getProjectTasks, getProjectTickets, getTeamMembers, getDiscussions } from '../data/projectsData'
import OverviewTab from './components/OverviewTab'
import TasksTab from './components/TasksTab'
import TicketsTab from './components/TicketsTab'
import TeamMembersTab from './components/TeamMembersTab'
import DiscussionsTab from './components/DiscussionsTab'

type TabType = 'overview' | 'tasks' | 'tickets' | 'team' | 'discussions'

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  const project = employeeProjects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h2>Project not found</h2>
      </div>
    )
  }

  const tasks = getProjectTasks(projectId!)
  const tickets = getProjectTickets(projectId!)
  const teamMembers = getTeamMembers(projectId!)
  const discussions = getDiscussions(projectId!)

  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'team', label: 'Team Members' },
    { id: 'discussions', label: 'Discussions' },
  ]

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/employee/my-projects')}
        style={{
          padding: '8px 16px',
          background: '#f3f4f6',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#374151',
          cursor: 'pointer',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
      >
        ← Back to Projects
      </button>

      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          {project.projectName}
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 500,
            background: '#f0f9ff',
            color: '#1e40af',
          }}>
            {project.role}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            Led by {project.leadName}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        borderBottom: '2px solid #e5e7eb',
        marginBottom: '32px',
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #1e40af' : '2px solid transparent',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? 600 : 500,
                color: activeTab === tab.id ? '#1e40af' : '#6b7280',
                cursor: 'pointer',
                marginBottom: '-2px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#1f2937'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#6b7280'
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab project={project} />}
        {activeTab === 'tasks' && <TasksTab tasks={tasks} />}
        {activeTab === 'tickets' && <TicketsTab tickets={tickets} />}
        {activeTab === 'team' && <TeamMembersTab members={teamMembers} />}
        {activeTab === 'discussions' && <DiscussionsTab discussions={discussions} />}
      </div>
    </div>
  )
}

export default ProjectDetailPage
