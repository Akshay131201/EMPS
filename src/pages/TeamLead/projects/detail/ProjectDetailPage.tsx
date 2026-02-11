import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projectsData'
import ProjectStatus from '../components/ProjectStatus'
import OverviewTab from './components/OverviewTab'
import TeamMembersTab from './components/TeamMembersTab'
import TaskBoardTab from './components/TaskBoardTab'
import TicketsTab from './components/TicketsTab'

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'overview' | 'team' | 'tasks' | 'tickets'>('overview')

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
          Project Not Found
        </div>
        <button
          onClick={() => navigate('/teamlead/projects')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← Back to Projects
        </button>
      </div>
    )
  }

  const tabs = [
    { id: 'overview' as const, label: '📁 Overview', icon: '📁' },
    { id: 'team' as const, label: '👥 Team Members', icon: '👥' },
    { id: 'tasks' as const, label: '🧩 Task Board', icon: '🧩' },
    { id: 'tickets' as const, label: '🎫 Tickets', icon: '🎫' },
  ]

  return (
    <div>
      {/* Header */}
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        marginBottom: '24px',
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/teamlead/projects')}
          style={{
            background: 'none',
            border: 'none',
            color: '#666666',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
        >
          ← Back to Projects
        </button>

        {/* Project Info */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}>
              <h1 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}>
                {project.name}
              </h1>
              <ProjectStatus status={project.status} />
            </div>
            <p style={{
              fontSize: '14px',
              color: '#666666',
              maxWidth: '600px',
            }}>
              {project.description}
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: '16px',
          }}>
            <div style={{
              padding: '12px 16px',
              background: '#fafafa',
              borderRadius: '10px',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}>
                {project.progress}%
              </div>
              <div style={{
                fontSize: '11px',
                color: '#666666',
              }}>
                Complete
              </div>
            </div>
            <div style={{
              padding: '12px 16px',
              background: '#fafafa',
              borderRadius: '10px',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}>
                {project.teamMembersCount}
              </div>
              <div style={{
                fontSize: '11px',
                color: '#666666',
              }}>
                Members
              </div>
            </div>
            <div style={{
              padding: '12px 16px',
              background: '#fafafa',
              borderRadius: '10px',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}>
                {project.openTasks}
              </div>
              <div style={{
                fontSize: '11px',
                color: '#666666',
              }}>
                Open Tasks
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
        borderBottom: '1px solid #e5e5e5',
        paddingBottom: '0',
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #1a1a1a' : '2px solid transparent',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? 600 : 500,
              color: activeTab === tab.id ? '#1a1a1a' : '#666666',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = '#1a1a1a'
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = '#666666'
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab project={project} />}
        {activeTab === 'team' && <TeamMembersTab />}
        {activeTab === 'tasks' && <TaskBoardTab />}
        {activeTab === 'tickets' && <TicketsTab />}
      </div>
    </div>
  )
}

export default ProjectDetailPage
