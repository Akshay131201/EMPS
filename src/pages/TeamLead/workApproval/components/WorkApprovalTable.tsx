import { useNavigate } from 'react-router-dom'
import type { WorkApproval } from '../types/workApproval.types'

type WorkApprovalTableProps = {
  approvals: WorkApproval[]
}

const WorkApprovalTable = ({ approvals }: WorkApprovalTableProps) => {
  const navigate = useNavigate()

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: { bg: '#fef3c7', color: '#92400e', text: 'Pending' },
      approved: { bg: '#d1fae5', color: '#065f46', text: 'Approved' },
      rejected: { bg: '#fee2e2', color: '#991b1b', text: 'Rejected' },
    }

    const style = styles[status as keyof typeof styles] || styles.pending

    return (
      <span style={{
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 500,
        background: style.bg,
        color: style.color,
      }}>
        {style.text}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e5e5e5',
      overflow: 'hidden',
    }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{ background: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Work ID
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Employee Name
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Project
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Work Title
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Submitted Date
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Estimated Time
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Status
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((approval) => (
              <tr 
                key={approval.id}
                style={{
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'background 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#3b82f6',
                  fontWeight: 500,
                }}>
                  {approval.id}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#1a1a1a',
                  fontWeight: 500,
                }}>
                  {approval.employeeName}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  {approval.project}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#1a1a1a',
                  maxWidth: '300px',
                }}>
                  {approval.workTitle}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  {formatDate(approval.submittedDate)}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  {approval.estimatedTime}
                </td>
                <td style={{ padding: '16px' }}>
                  {getStatusBadge(approval.status)}
                </td>
                <td style={{
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <button
                    onClick={() => navigate(`/teamlead/work-approval/${approval.id}`)}
                    style={{
                      padding: '8px 16px',
                      background: '#1a1a1a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {approvals.length === 0 && (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          color: '#999999',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
          <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>
            No work approvals found
          </div>
          <div style={{ fontSize: '14px' }}>
            Work submissions will appear here for review
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkApprovalTable