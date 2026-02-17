interface MobileAttendanceViewProps {
  todayData: {
    isCheckedIn: boolean
    checkInTime: string | null
    checkOutTime: string | null
    workingHours: string
    status: string
  }
  recentRecords: Array<{
    id: string
    date: string
    inTime: string
    outTime: string
    totalHours: string
    status: string
  }>
}

const MobileAttendanceView = ({ todayData, recentRecords }: MobileAttendanceViewProps) => {
  const handleCheckIn = () => {
    console.log('Check In clicked')
  }

  const handleCheckOut = () => {
    console.log('Check Out clicked')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return '#047857'
      case 'absent': return '#991b1b'
      default: return '#374151'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div style={{
      padding: '16px',
    }}>
      {/* Today's Status Card */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
        marginBottom: '16px',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '16px',
        }}>
          Today's Attendance
        </h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            Status
          </span>
          <span style={{
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            background: todayData.isCheckedIn ? '#04785720' : '#991b1b20',
            color: todayData.isCheckedIn ? '#047857' : '#991b1b',
          }}>
            {todayData.isCheckedIn ? 'Checked In' : 'Not Checked In'}
          </span>
        </div>

        {todayData.checkInTime && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Check In</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937' }}>
              {todayData.checkInTime}
            </span>
          </div>
        )}

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingTop: '12px',
          borderTop: '1px solid #e5e7eb',
        }}>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>Working Hours</span>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#1e40af' }}>
            {todayData.workingHours}
          </span>
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
        }}>
          <button
            onClick={handleCheckIn}
            disabled={todayData.isCheckedIn}
            style={{
              flex: 1,
              padding: '12px',
              background: todayData.isCheckedIn ? '#e5e7eb' : '#047857',
              color: todayData.isCheckedIn ? '#9ca3af' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: todayData.isCheckedIn ? 'not-allowed' : 'pointer',
            }}
          >
            ✓ Check In
          </button>
          <button
            onClick={handleCheckOut}
            disabled={!todayData.isCheckedIn || todayData.checkOutTime !== null}
            style={{
              flex: 1,
              padding: '12px',
              background: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? '#e5e7eb' : '#991b1b',
              color: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? '#9ca3af' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? 'not-allowed' : 'pointer',
            }}
          >
            ✗ Check Out
          </button>
        </div>
      </div>

      {/* Recent Records */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #e5e7eb',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '16px',
        }}>
          Recent History
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {recentRecords.slice(0, 5).map((record) => (
            <div
              key={record.id}
              style={{
                padding: '12px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {formatDate(record.date)}
                </span>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: `${getStatusColor(record.status)}20`,
                  color: getStatusColor(record.status),
                }}>
                  {record.status}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#6b7280',
              }}>
                <span>{record.inTime} - {record.outTime}</span>
                <span style={{ fontWeight: 600, color: '#1f2937' }}>
                  {record.totalHours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileAttendanceView
