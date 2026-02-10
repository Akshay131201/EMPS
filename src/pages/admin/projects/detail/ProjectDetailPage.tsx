import { useState } from 'react'
import ProjectSummary from './components/ProjectSummary'
import TeamMembersPanel from './components/TeamMembersPanel'
import ProjectTasksTab from './components/ProjectTasksTab'
import ProjectTicketsTab from './components/ProjectTicketsTab'
import ProjectFinanceTab from './components/ProjectFinanceTab'

type TabType = 'summary' | 'team' | 'tasks' | 'tickets' | 'finance'

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('summary')

  const tabs = [
    { id: 'summary' as TabType, label: 'Summary' },
    { id: 'team' as TabType, label: 'Team Members' },
    { id: 'tasks' as TabType, label: 'Tasks' },
    { id: 'tickets' as TabType, label: 'Tickets' },
    { id: 'finance' as TabType, label: 'Finance' }
  ]

  return (
    <div style={{ padding: '32px', maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#666',
              padding: '4px'
            }}
          >
            ←
          </button>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 600,
            color: '#1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            E-Commerce Platform
          </h1>
        </div>
        <p style={{ color: '#666', fontSize: '14px', marginLeft: '44px' }}>
          Project Dashboard
        </p>
      </div>

      {/* Tabs */}
      <div style={{ 
        borderBottom: '1px solid #e5e5e5',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 20px',
                border: 'none',
                background: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: activeTab === tab.id ? '#1a1a1a' : '#666',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '2px solid #1a1a1a' : '2px solid transparent',
                transition: 'all 0.2s ease',
                marginBottom: '-1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#1a1a1a'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#666'
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
        {activeTab === 'summary' && <ProjectSummary />}
        {activeTab === 'team' && <TeamMembersPanel />}
        {activeTab === 'tasks' && <ProjectTasksTab />}
        {activeTab === 'tickets' && <ProjectTicketsTab />}
        {activeTab === 'finance' && <ProjectFinanceTab />}
      </div>
    </div>
  )
}

export default ProjectDetailPage
