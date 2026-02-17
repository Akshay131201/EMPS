import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', path: '/teamlead/dashboard', icon: '📊' },
  { label: 'My Projects', path: '/teamlead/projects', icon: '📁' },
  { label: 'Team Tasks', path: '/teamlead/tasks', icon: '✓' },
  { label: 'Ticket Center', path: '/teamlead/tickets', icon: '🎫' },
  { label: 'Work Approval', path: '/teamlead/work-approval', icon: '📋' },
  { label: 'Team Attendance', path: '/teamlead/attendance', icon: '📅' },
  { label: 'Time Logs', path: '/teamlead/time-logs', icon: '⏱️' },
  { label: 'Project Finance', path: '/teamlead/finance', icon: '💰' },
  { label: 'Reports', path: '/teamlead/reports', icon: '📈' },
  { label: 'Team Chat', path: '/teamlead/chat', icon: '💬' },
  { label: 'Profile & Settings', path: '/teamlead/settings', icon: '⚙️' },
]

const TeamLeadSidebar = () => {
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
        ISPM
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

export default TeamLeadSidebar
