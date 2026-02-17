import { useNavigate } from 'react-router-dom'
import type { SelfWork } from '../types/selfWork.types'

interface SelfWorkTableProps {
  works: SelfWork[]
}

const SelfWorkTable = ({ works }: SelfWorkTableProps) => {
  const navigate = useNavigate()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#047857'
      case 'in-progress': return '#1e40af'
      case 'submitted': return '#b45309'
      case 'draft': return '#374151'
      case 'closed': return '#6b7280'
      default: return '#374151'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in-progress': return 'In Progress'
      case 'submitted': return 'Submitted'
      case 'draft': return 'Draft'
      case 'completed': return 'Completed'
      case 'closed': return 'Closed'
      default: return status
    }
  }

  const getApprovalColor = (state: string) => {
    switch (state) {
      case 'approved': return '#047857'
      case 'rejected': return '#991b1b'
      case 'pending': return '#b45309'
      case 'converted-to-task': return '#1e40af'
      default: return '#374151'
    }
  }

  const getApprovalLabel = (state: string) => {
    switch (state) {
      case 'approved': return 'Approved'
      case 'rejected': return 'Rejected'
      case 'pending': return 'Pending'
      case 'converted-to-task': return 'Converted to Task'
      default: return state
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
                Title
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
                Project
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
                Approval State
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
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            {works.map((work, index) => (
              <tr
                key={work.id}
                onClick={() => navigate(`/employee/self-work/${work.id}`)}
                style={{
                  borderBottom: index < works.length - 1 ? '1px solid #e5e7eb' : 'none',
                  transition: 'background 0.2s ease',
                  cursor: 'pointer',
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
                  {work.title}
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {work.projectName}
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    background: `${getStatusColor(work.status)}20`,
                    color: getStatusColor(work.status),
                  }}>
                    {getStatusLabel(work.status)}
                  </span>
                </td>
                <td style={{
                  padding: '16px 24px',
                }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: `${getApprovalColor(work.approvalState)}20`,
                    color: getApprovalColor(work.approvalState),
                  }}>
                    {getApprovalLabel(work.approvalState)}
                  </span>
                </td>
                <td style={{
                  padding: '16px 24px',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {formatDate(work.createdDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SelfWorkTable
