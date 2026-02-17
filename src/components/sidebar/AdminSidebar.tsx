import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
  { label: 'Employees', path: '/admin/employees', icon: '👥' },
  { label: 'Projects', path: '/admin/projects', icon: '📁' },
  { label: 'Tasks', path: '/admin/tasks', icon: '✓' },
  { label: 'Tickets', path: '/admin/tickets', icon: '🎫' },
  { label: 'Attendance', path: '/admin/attendance', icon: '📅' },
  { label: 'Finance', path: '/admin/finance', icon: '💰' },
  { label: 'Reports', path: '/admin/reports', icon: '📈' },
  { label: 'Notifications', path: '/admin/notifications', icon: '🔔' },
  { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
]

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <h2 
        className="sidebar-title"
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#4a90e2'
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.letterSpacing = '1px'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#1a1a1a'
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.letterSpacing = '0.5px'
        }}
      >
        EPMS
      </h2>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span style={{ fontSize: '18px', marginRight: '12px' }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
