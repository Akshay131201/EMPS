import { useState } from 'react'
import { projects } from './data/projectsData'
import ProjectCard from './components/ProjectCard'

const ProjectsPage = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'at-risk'>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter)

  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    atRisk: projects.filter(p => p.status === 'at-risk').length,
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
            onMouseEnter={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.color = '#1a1a1a'
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== tab.value) {
                e.currentTarget.style.color = '#666666'
              }
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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

export default ProjectsPage
