type ProjectSelectorProps = {
  projects: { id: string; name: string }[]
  selectedProject: string
  onProjectChange: (projectId: string) => void
}

const ProjectSelector = ({ projects, selectedProject, onProjectChange }: ProjectSelectorProps) => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      marginBottom: '24px',
    }}>
      <label style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: 500,
        color: '#1a1a1a',
        marginBottom: '12px',
      }}>
        Select Project
      </label>
      <select
        value={selectedProject}
        onChange={(e) => onProjectChange(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          fontSize: '15px',
          color: '#1a1a1a',
          background: '#fafafa',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'all 0.2s ease',
        }}
      >
        {projects.map(project => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProjectSelector
