import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Employees', path: '/admin/employees' },
  { label: 'Projects', path: '/admin/projects' },
  { label: 'Tasks', path: '/admin/tasks' },
  { label: 'Tickets', path: '/admin/tickets' },
  { label: 'Attendance', path: '/admin/attendance' },
  { label: 'Finance', path: '/admin/finance' },
  { label: 'Reports', path: '/admin/reports' },
  { label: 'Notifications', path: '/admin/notifications' },
  { label: 'Settings', path: '/admin/settings' },
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
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
