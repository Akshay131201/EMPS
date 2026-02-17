import type { TimeSummary } from '../types/dashboard.types'

interface TimeSummaryWidgetProps {
  timeSummary: TimeSummary
}

const TimeSummaryWidget = ({ timeSummary }: TimeSummaryWidgetProps) => {
  const weeklyProgress = (timeSummary.weeklyHours / timeSummary.expectedWeeklyHours) * 100

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e5e7eb',
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '20px',
      }}>
        Time Summary
      </h3>

      {/* Check-in Status */}
      {timeSummary.isCheckedIn && (
        <div style={{
          padding: '12px 16px',
          background: '#d1fae5',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#047857',
          }} />
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#065f46',
            }}>
              Checked In
            </div>
            <div style={{
              fontSize: '12px',
              color: '#047857',
            }}>
              Since {timeSummary.checkInTime}
            </div>
          </div>
        </div>
      )}

      {/* Hours Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <div style={{
          padding: '16px',
          background: '#f0f9ff',
          borderRadius: '8px',
          border: '1px solid #bfdbfe',
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '4px',
          }}>
            {timeSummary.todayHours}h
          </div>
          <div style={{
            fontSize: '12px',
            color: '#1e40af',
            fontWeight: 500,
          }}>
            Today
          </div>
        </div>

        <div style={{
          padding: '16px',
          background: '#f0fdf4',
          borderRadius: '8px',
          border: '1px solid #bbf7d0',
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#15803d',
            marginBottom: '4px',
          }}>
            {timeSummary.weeklyHours}h
          </div>
          <div style={{
            fontSize: '12px',
            color: '#15803d',
            fontWeight: 500,
          }}>
            This Week
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}>
          <span style={{
            fontSize: '13px',
            color: '#6b7280',
            fontWeight: 500,
          }}>
            Weekly Progress
          </span>
          <span style={{
            fontSize: '13px',
            color: '#1f2937',
            fontWeight: 600,
          }}>
            {timeSummary.weeklyHours} / {timeSummary.expectedWeeklyHours}h
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '8px',
          background: '#e5e7eb',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${Math.min(weeklyProgress, 100)}%`,
            height: '100%',
            background: weeklyProgress >= 100 ? '#047857' : '#1e40af',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
      }}>
        <button style={{
          padding: '10px',
          background: '#1e40af',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
        >
          Start Work
        </button>
        <button style={{
          padding: '10px',
          background: '#f3f4f6',
          color: '#374151',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
        >
          Add Self Work
        </button>
      </div>
    </div>
  )
}

export default TimeSummaryWidget
