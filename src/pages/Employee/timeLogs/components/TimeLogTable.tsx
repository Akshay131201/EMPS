interface TimeLogTableProps {
  logs: Array<{
    id: string
    date: string
    workType: string
    reference: string
    workDescription: string
    hours: number
    approvalStatus: string
    projectName: string
  }>
}

const TimeLogTable = ({ logs }: TimeLogTableProps) => {
  const getApprovalColor = (status: string) => {
    switch (status) {
      case 'approved': return '#047857'
      case 'rejected': return '#991b1b'
      case 'pending': return '#b45309'
      default: return '#374151'
    }
  }

  const getApprovalLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Approved'
      case 'rejected': return 'Rejected'
      case 'pending': return 'Pending'
      default: return status
    }
  }

  const getWorkTypeColor = (type: string) => {
    switch (type) {
      case 'task': return '#1e40af'
      case 'ticket': return '#b45309'
      case 'meeting': return '#6b21a8'
      case 'other': return '#374151'
      default: return '#374151'
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
                Work Type
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
                Reference
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
                Hours
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
                Approval Status
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={log.id}
                style={{
                  borderBottom: index < logs.length - 1 ? '1px solid #e5e7eb' : 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px 24px',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {formatDate(log.date)}
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    background: `${getWorkTypeColor(log.workType)}20`,
                    color: getWorkTypeColor(log.workType),
                    textTransform: 'capitalize',
                  }}>
                    {log.workType}
                  </span>
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 500,
                }}>
                  {log.reference}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#1f2937',
                  fontWeight: 600,
                }}>
                  {log.hours}h
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: `${getApprovalColor(log.approvalStatus)}20`,
                    color: getApprovalColor(log.approvalStatus),
                  }}>
                    {getApprovalLabel(log.approvalStatus)}
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

export default TimeLogTable
