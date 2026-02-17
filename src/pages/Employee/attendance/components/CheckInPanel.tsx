interface CheckInPanelProps {
  todayData: {
    isCheckedIn: boolean
    checkInTime: string | null
    checkOutTime: string | null
    workingHours: string
    status: string
  }
}

const CheckInPanel = ({ todayData }: CheckInPanelProps) => {
  const handleCheckIn = () => {
    console.log('Check In clicked')
  }

  const handleCheckOut = () => {
    console.log('Check Out clicked')
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      border: '1px solid #e5e7eb',
      marginBottom: '32px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        alignItems: 'center',
      }}>
        {/* Status Display */}
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '20px',
          }}>
            Today's Status
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontSize: '14px',
                color: '#6b7280',
              }}>
                Status:
              </span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 600,
                background: todayData.isCheckedIn ? '#04785720' : '#99 1b1b20',
                color: todayData.isCheckedIn ? '#047857' : '#991b1b',
                textTransform: 'capitalize',
              }}>
                {todayData.isCheckedIn ? 'Checked In' : 'Not Checked In'}
              </span>
            </div>

            {todayData.checkInTime && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  Check In Time:
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {todayData.checkInTime}
                </span>
              </div>
            )}

            {todayData.checkOutTime && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  Check Out Time:
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {todayData.checkOutTime}
                </span>
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px solid #e5e7eb',
            }}>
              <span style={{
                fontSize: '14px',
                color: '#6b7280',
              }}>
                Working Hours:
              </span>
              <span style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#1e40af',
              }}>
                {todayData.workingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <button
            onClick={handleCheckIn}
            disabled={todayData.isCheckedIn}
            style={{
              padding: '16px 32px',
              background: todayData.isCheckedIn ? '#e5e7eb' : '#047857',
              color: todayData.isCheckedIn ? '#9ca3af' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: todayData.isCheckedIn ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!todayData.isCheckedIn) {
                e.currentTarget.style.background = '#065f46'
              }
            }}
            onMouseLeave={(e) => {
              if (!todayData.isCheckedIn) {
                e.currentTarget.style.background = '#047857'
              }
            }}
          >
            ✓ Check In
          </button>

          <button
            onClick={handleCheckOut}
            disabled={!todayData.isCheckedIn || todayData.checkOutTime !== null}
            style={{
              padding: '16px 32px',
              background: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? '#e5e7eb' : '#991b1b',
              color: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? '#9ca3af' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: (!todayData.isCheckedIn || todayData.checkOutTime !== null) ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (todayData.isCheckedIn && todayData.checkOutTime === null) {
                e.currentTarget.style.background = '#7f1d1d'
              }
            }}
            onMouseLeave={(e) => {
              if (todayData.isCheckedIn && todayData.checkOutTime === null) {
                e.currentTarget.style.background = '#991b1b'
              }
            }}
          >
            ✗ Check Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckInPanel
