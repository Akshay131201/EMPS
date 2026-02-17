interface AttendanceTableProps {
  records: Array<{
    id: string
    date: string
    inTime: string
    outTime: string
    totalHours: string
    status: string
  }>
}

const AttendanceTable = ({ records }: AttendanceTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return '#047857'
      case 'absent': return '#991b1b'
      case 'leave': return '#b45309'
      case 'wfh': return '#1e40af'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'present': return 'Present'
      case 'absent': return 'Absent'
      case 'leave': return 'Leave'
      case 'wfh': return 'WFH'
      default: return status
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
    }}>
      <div style={{
        overflowX: 'auto',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{
              background: '#f9fafb',
              borderBottom: '1px solid #e5e7eb',
            }}>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Date
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                In Time
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Out Time
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Total Hours
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr
                key={record.id}
                style={{
                  borderBottom: index < records.length - 1 ? '1px solid #e5e7eb' : 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 500,
                }}>
                  {formatDate(record.date)}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  {record.inTime}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  {record.outTime}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 600,
                }}>
                  {record.totalHours}
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: `${getStatusColor(record.status)}20`,
                    color: getStatusColor(record.status),
                    textTransform: 'capitalize',
                  }}>
                    {getStatusLabel(record.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceTable
