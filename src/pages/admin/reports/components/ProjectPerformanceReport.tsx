import { projectPerformanceData } from '../data/reportsData'

const ProjectPerformanceReport = () => {
  return (
    <div>
      {/* Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Total Projects
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            {projectPerformanceData.length}
          </div>
        </div>
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Avg Progress
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            {Math.round(projectPerformanceData.reduce((sum, p) => sum + p.progress, 0) / projectPerformanceData.length)}%
          </div>
        </div>
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Total Budget
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            ${(projectPerformanceData.reduce((sum, p) => sum + p.budget, 0) / 1000).toFixed(0)}K
          </div>
        </div>
        <div style={{
          background: '#1a1a1a',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
            Avg On-Time Delivery
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#fff' }}>
            {Math.round(projectPerformanceData.reduce((sum, p) => sum + p.onTimeDelivery, 0) / projectPerformanceData.length)}%
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{
              textAlign: 'left',
              fontSize: '12px',
              color: '#666',
              fontWeight: 500,
              borderBottom: '1px solid #e5e5e5'
            }}>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Project Name</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Progress</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Tasks</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Budget Usage</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Team Size</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>On-Time %</th>
            </tr>
          </thead>
          <tbody>
            {projectPerformanceData.map((project, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: '1px solid #f5f5f5',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 500, color: '#1a1a1a', fontSize: '14px' }}>
                    {project.projectName}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: project.status === 'Completed' ? '#1a1a1a' : '#f0f0f0',
                    color: project.status === 'Completed' ? '#fff' : '#1a1a1a',
                    border: '1px solid #e5e5e5'
                  }}>
                    {project.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '6px', 
                      background: '#f0f0f0', 
                      borderRadius: '3px',
                      overflow: 'hidden',
                      minWidth: '80px'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${project.progress}%`, 
                        background: '#1a1a1a', 
                        borderRadius: '3px' 
                      }} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', minWidth: '35px' }}>
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {project.tasksCompleted}/{project.totalTasks}
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                    ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {Math.round((project.spent / project.budget) * 100)}% used
                  </div>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                  {project.teamSize}
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span style={{ 
                    fontSize: '14px', 
                    fontWeight: 600,
                    color: project.onTimeDelivery >= 85 ? '#1a1a1a' : '#666'
                  }}>
                    {project.onTimeDelivery}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectPerformanceReport
