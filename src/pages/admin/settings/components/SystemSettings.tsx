import { attendanceRulesData, notificationRulesData } from '../data/settingsData'

const SystemSettings = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Attendance Rules */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Attendance Rules
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {attendanceRulesData.map(rule => (
            <div
              key={rule.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e5e5e5'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>
                  {rule.name}
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>
                  {rule.description}
                </div>
              </div>
              <label style={{
                position: 'relative',
                display: 'inline-block',
                width: '48px',
                height: '24px',
                marginLeft: '16px'
              }}>
                <input
                  type="checkbox"
                  checked={rule.enabled}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: rule.enabled ? '#1a1a1a' : '#e5e5e5',
                  transition: '0.3s',
                  borderRadius: '24px'
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '""',
                    height: '18px',
                    width: '18px',
                    left: rule.enabled ? '27px' : '3px',
                    bottom: '3px',
                    backgroundColor: 'white',
                    transition: '0.3s',
                    borderRadius: '50%'
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Rules */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Notification Rules
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notificationRulesData.map(rule => (
            <div
              key={rule.id}
              style={{
                padding: '16px',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e5e5e5'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>
                  {rule.type}
                </div>
                <label style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '48px',
                  height: '24px'
                }}>
                  <input
                    type="checkbox"
                    checked={rule.enabled}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: rule.enabled ? '#1a1a1a' : '#e5e5e5',
                    transition: '0.3s',
                    borderRadius: '24px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      content: '""',
                      height: '18px',
                      width: '18px',
                      left: rule.enabled ? '27px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      transition: '0.3s',
                      borderRadius: '50%'
                    }} />
                  </span>
                </label>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {rule.channels.map(channel => (
                  <span
                    key={channel}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 500,
                      backgroundColor: '#fff',
                      color: '#666',
                      border: '1px solid #e5e5e5'
                    }}
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backup Settings */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Backup Settings
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Automatic Backup Frequency
            </label>
            <select
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Backup Time
            </label>
            <input
              type="time"
              value="02:00"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{
            padding: '16px',
            background: '#fafafa',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>
                Last Backup
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                February 10, 2026 at 2:00 AM
              </div>
            </div>
            <button
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
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
              Download
            </button>
          </div>

          <button
            style={{
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
            Create Backup Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SystemSettings
