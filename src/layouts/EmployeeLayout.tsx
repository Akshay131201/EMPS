import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { logout, getCurrentUser } from '../utils/auth'

const EmployeeLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const menuItems = [
    { path: '/employee/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/employee/my-projects', label: 'My Projects', icon: '📁' },
    { path: '/employee/my-tasks', label: 'My Tasks', icon: '✓' },
    { path: '/employee/tickets', label: 'Ticket Center', icon: '🎫' },
    { path: '/employee/self-work', label: 'My Self Work', icon: '💼' },
    { path: '/employee/time-logs', label: 'Time Log', icon: '⏱️' },
    { path: '/employee/attendance', label: 'Attendance', icon: '📅' },
    { path: '/employee/leave', label: 'Leave Management', icon: '🏖️' },
    { path: '/employee/notifications', label: 'Notifications', icon: '🔔' },
    { path: '/employee/profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fafafa' }}>
      {/* Sidebar */}
      <div style={{
        width: '260px',
        background: '#1a1a1a',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #333333',
      }}>
        {/* Logo */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid #333333',
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 700,
            margin: 0,
            letterSpacing: '0.5px',
          }}>
            ISPM
          </h1>
          <p style={{
            fontSize: '12px',
            color: '#999999',
            margin: '4px 0 0 0',
          }}>
            Employee Portal
          </p>
        </div>

        {/* Menu Items */}
        <nav style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 0',
        }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  background: isActive ? '#333333' : 'transparent',
                  color: isActive ? '#ffffff' : '#cccccc',
                  border: 'none',
                  borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#2a2a2a'
                    e.currentTarget.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#cccccc'
                  }
                }}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* User Info */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #333333',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600,
            }}>
              {user?.fullName?.charAt(0) || 'E'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {user?.fullName || 'Employee'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#999999',
              }}>
                Employee
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px',
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Top Bar */}
        <div style={{
          height: '70px',
          background: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}>
          <div style={{
            flex: 1,
            maxWidth: '500px',
            position: 'relative',
          }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <span style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '16px',
            }}>
              🔍
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <button style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#f5f5f5',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              🔔
            </button>
            <div style={{
              padding: '6px 16px',
              background: '#dbeafe',
              color: '#1e40af',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
            }}>
              Employee
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div style={{
          flex: 1,
          overflow: 'auto',
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default EmployeeLayout
