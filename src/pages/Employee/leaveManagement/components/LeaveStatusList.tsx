interface LeaveStatusListProps {
  requests: Array<{
    id: string
    leaveType: string
    fromDate: string
    toDate: string
    days: number
    reason: string
    status: string
    appliedDate: string
    approvedBy: string | null
    approvedDate: string | null
    rejectionReason?: string
  }>
}

const LeaveStatusList = ({ requests }: LeaveStatusListProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return '#047857'
      case 'rejected': return '#991b1b'
      case 'pending': return '#b45309'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Approved'
      case 'rejected': return 'Rejected'
      case 'pending': return 'Pending'
      default: return status
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
        padding: '24px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0,
        }}>
          Leave Requests
        </h2>
      </div>

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
                Leave Type
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
                From Date
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
                To Date
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'center',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Days
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
                Reason
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
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Applied Date
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={request.id}
                style={{
                  borderBottom: index < requests.length - 1 ? '1px solid #e5e7eb' : 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 600,
                }}>
                  {request.leaveType}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  {formatDate(request.fromDate)}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  {formatDate(request.toDate)}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 600,
                  textAlign: 'center',
                }}>
                  {request.days}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                  maxWidth: '250px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {request.reason}
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: `${getStatusColor(request.status)}20`,
                    color: getStatusColor(request.status),
                    textTransform: 'capitalize',
                  }}>
                    {getStatusLabel(request.status)}
                  </span>
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#6b7280',
                }}>
                  {formatDate(request.appliedDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveStatusList
