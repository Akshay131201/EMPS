import { employeeProductivityData } from '../data/reportsData'

const EmployeeProductivityReport = () => {
  const totalTasks = employeeProductivityData.reduce((sum, e) => sum + e.tasksCompleted, 0)
  const totalHours = employeeProductivityData.reduce((sum, e) => sum + e.hoursLogged, 0)
  const avgEfficiency = Math.round(employeeProductivityData.reduce((sum, e) => sum + e.efficiency, 0) / employeeProductivityData.length)

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
            Total Tasks Completed
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            {totalTasks}
          </div>
        </div>
        <div style={{
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            Total Hours Logged
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a' }}>
            {totalHours}h
          </div>
        </div>
        <div style={{
          background: '#1a1a1a',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>
            Avg Efficiency
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#fff' }}>
            {avgEfficiency}%
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
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Employee</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Department</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Tasks Completed</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Hours Logged</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Efficiency</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Projects</th>
              <th style={{ padding: '16px 20px', fontWeight: 500 }}>Avg Time/Task</th>
            </tr>
          </thead>
          <tbody>
            {employeeProductivityData.map((employee, index) => (
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
                    {employee.employeeName}
                  </div>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {employee.department}
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                  {employee.tasksCompleted}
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                  {employee.hoursLogged}h
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '6px', 
                      background: '#f0f0f0', 
                      borderRadius: '3px',
                      overflow: 'hidden',
                      minWidth: '60px'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${employee.efficiency}%`, 
                        background: employee.efficiency >= 90 ? '#1a1a1a' : '#666', 
                        borderRadius: '3px' 
                      }} />
                    </div>
                    <span style={{ 
                      fontSize: '13px', 
                      fontWeight: 600, 
                      color: employee.efficiency >= 90 ? '#1a1a1a' : '#666',
                      minWidth: '35px'
                    }}>
                      {employee.efficiency}%
                    </span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {employee.projectsInvolved}
                </td>
                <td style={{ padding: '16px 20px', fontSize: '14px', color: '#666' }}>
                  {employee.avgTaskCompletionTime}h
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeProductivityReport
