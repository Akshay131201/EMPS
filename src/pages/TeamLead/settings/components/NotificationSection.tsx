import type { NotificationPreferences } from '../types/settings.types'

type NotificationSectionProps = {
  preferences: NotificationPreferences
  onUpdate: (preferences: NotificationPreferences) => void
}

const NotificationSection = ({ preferences, onUpdate }: NotificationSectionProps) => {
  const handleToggle = (key: keyof NotificationPreferences) => {
    onUpdate({
      ...preferences,
      [key]: !preferences[key],
    })
  }

  const notificationOptions = [
    {
      key: 'emailNotifications' as keyof NotificationPreferences,
      title: 'Email Notifications',
      description: 'Receive email notifications for important updates',
      icon: '📧',
    },
    {
      key: 'taskAssignments' as keyof NotificationPreferences,
      title: 'Task Assignments',
      description: 'Get notified when tasks are assigned to you or your team',
      icon: '✓',
    },
    {
      key: 'projectUpdates' as keyof NotificationPreferences,
      title: 'Project Updates',
      description: 'Receive updates about project progress and milestones',
      icon: '📊',
    },
    {
      key: 'teamMessages' as keyof NotificationPreferences,
      title: 'Team Messages',
      description: 'Get notified about new messages in team channels',
      icon: '💬',
    },
    {
      key: 'weeklyReports' as keyof NotificationPreferences,
      title: 'Weekly Reports',
      description: 'Receive weekly summary reports via email',
      icon: '📈',
    },
    {
      key: 'systemAlerts' as keyof NotificationPreferences,
      title: 'System Alerts',
      description: 'Important system notifications and announcements',
      icon: '🔔',
    },
  ]

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #e5e5e5',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1a1a1a',
          marginBottom: '4px',
        }}>
          Notification Preferences
        </h2>
        <p style={{
          fontSize: '13px',
          color: '#666666',
          margin: 0,
        }}>
          Manage how you receive notifications and updates
        </p>
      </div>

      {/* Notification Options */}
      <div style={{ padding: '24px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {notificationOptions.map((option) => (
            <div
              key={option.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #f0f0f0',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fafafa'}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flex: 1,
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: preferences[option.key] ? '#dbeafe' : '#e5e5e5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  transition: 'all 0.2s ease',
                }}>
                  {option.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}>
                    {option.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#666666',
                    margin: 0,
                  }}>
                    {option.description}
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => handleToggle(option.key)}
                style={{
                  width: '52px',
                  height: '28px',
                  borderRadius: '14px',
                  background: preferences[option.key] ? '#3b82f6' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  position: 'absolute',
                  top: '3px',
                  left: preferences[option.key] ? '27px' : '3px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }} />
              </button>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          display: 'flex',
          gap: '12px',
        }}>
          <div style={{ fontSize: '20px' }}>ℹ️</div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1e40af',
              marginBottom: '4px',
            }}>
              Notification Settings
            </div>
            <div style={{
              fontSize: '13px',
              color: '#1e40af',
              lineHeight: '1.5',
            }}>
              Changes to notification preferences are saved automatically. You can update these settings at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSection
