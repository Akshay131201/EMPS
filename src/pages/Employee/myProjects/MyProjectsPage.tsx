import ProjectCard from './components/ProjectCard'
import { employeeProjects } from './data/projectsData'

const MyProjectsPage = () => {
  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          My Projects
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Projects you're currently working on
        </p>
      </div>

      {/* Stats Summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {employeeProjects.length}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Active Projects
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#047857',
            marginBottom: '4px',
          }}>
            {employeeProjects.reduce((sum, p) => sum + p.taskCount, 0)}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Total Tasks
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#b45309',
            marginBottom: '4px',
          }}>
            {Math.round(employeeProjects.reduce((sum, p) => sum + p.progress, 0) / employeeProjects.length)}%
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Avg Progress
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px',
      }}>
        {employeeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default MyProjectsPage
