import { rolesData } from '../data/settingsData'

const RolePermissionSettings = () => {
  const modules = [
    { name: 'Dashboard', permissions: ['View', 'Export'] },
    { name: 'Employees', permissions: ['View', 'Create', 'Edit', 'Delete'] },
    { name: 'Projects', permissions: ['View', 'Create', 'Edit', 'Delete', 'Manage'] },
    { name: 'Tasks', permissions: ['View', 'Create', 'Edit', 'Delete', 'Assign'] },
    { name: 'Tickets', permissions: ['View', 'Create', 'Edit', 'Close'] },
    { name: 'Attendance', permissions: ['View', 'Mark', 'Approve', 'Edit'] },
    { name: 'Finance', permissions: ['View', 'Create', 'Approve', 'Export'] },
    { name: 'Reports', permissions: ['View', 'Generate', 'Export'] },
    { name: 'Settings', permissions: ['View', 'Edit'] }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Roles List */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
            Roles & Permissions
          </h3>
          <button
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: 'none',
              background: '#1a1a1a',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
          >
            + Create Role
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {rolesData.map(role => (
            <div
              key={role.id}
              style={{
                padding: '20px',
                background: '#fafafa',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>
                  {role.name}
                </h4>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  backgroundColor: '#1a1a1a',
                  color: '#fff'
                }}>
                  {role.userCount}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#666', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                {role.description}
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid #e5e5e5',
                    background: '#fff',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #e5e5e5',
                    background: '#fff',
                    fontSize: '13px',
                    color: '#666',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fafafa'
                    e.currentTarget.style.color = '#1a1a1a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff'
                    e.currentTarget.style.color = '#666'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permission Matrix */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Menu Access Control
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{
                borderBottom: '2px solid #e5e5e5'
              }}>
                <th style={{ 
                  padding: '12px 16px', 
                  textAlign: 'left', 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: '#666' 
                }}>
                  Module
                </th>
                {rolesData.map(role => (
                  <th key={role.id} style={{ 
                    padding: '12px 16px', 
                    textAlign: 'center', 
                    fontSize: '13px', 
                    fontWeight: 600, 
                    color: '#666' 
                  }}>
                    {role.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={module.name} style={{
                  borderBottom: '1px solid #f5f5f5',
                  backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa'
                }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                    {module.name}
                  </td>
                  {rolesData.map(role => (
                    <td key={role.id} style={{ padding: '16px', textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={role.permissions.includes('all') || Math.random() > 0.3}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: '#1a1a1a',
            color: '#fff',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          Save Permissions
        </button>
      </div>
    </div>
  )
}

export default RolePermissionSettings
