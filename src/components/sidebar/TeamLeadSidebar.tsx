import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', path: '/teamlead/dashboard' },
  { label: 'My Projects', path: '/teamlead/projects' },
  { label: 'Team Tasks', path: '/teamlead/tasks' },
  { label: 'Ticket Center', path: '/teamlead/tickets' },
  { label: 'Work Approval', path: '/teamlead/work-approval' },
  { label: 'Team Attendance', path: '/teamlead/attendance' },
  { label: 'Time Logs', path: '/teamlead/time-logs' },
  { label: 'Project Finance', path: '/teamlead/finance' },
  { label: 'Reports', path: '/teamlead/reports' },
  { label: 'Team Chat', path: '/teamlead/chat' },
  { label: 'Profile & Settings', path: '/teamlead/settings' },
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
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default TeamLeadSidebar
