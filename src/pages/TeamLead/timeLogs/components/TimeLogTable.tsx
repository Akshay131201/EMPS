import { useState } from 'react'
import type { TimeLog } from '../types/timeLog.types'
import RejectModal from './RejectModal'
import CorrectionModal from './CorrectionModal'

type TimeLogTableProps = {
  timeLogs: TimeLog[]
  onApprove: (id: string) => void
  onReject: (id: string, reason: string) => void
  onRequestCorrection: (id: string, message: string) => void
}

const TimeLogTable = ({ timeLogs, onApprove, onReject, onRequestCorrection }: TimeLogTableProps) => {
  const [showRejectModal, setShowRejectModal] = useState<string | null>(null)
  const [showCorrectionModal, setShowCorrectionModal] = useState<string | null>(null)

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

  const handleReject = (id: string, reason: string) => {
    onReject(id, reason)
    setShowRejectModal(null)
  }

  const handleRequestCorrection = (id: string, message: string) => {
    onRequestCorrection(id, message)
    setShowCorrectionModal(null)
  }

  return (
    <>
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
                  Employee
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
                  Task
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
                  Logged Hours
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
                  Date
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
              {timeLogs.map((log) => (
                <tr 
                  key={log.id}
                  style={{
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{
                    padding: '16px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontWeight: 500,
                  }}>
                    {log.employeeName}
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                  }}>
                    <div style={{ marginBottom: '4px' }}>{log.taskName}</div>
                    <div style={{ fontSize: '12px', color: '#999999' }}>
                      {log.taskId}
                    </div>
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '14px',
                    color: '#666666',
                  }}>
                    {log.projectName}
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontWeight: 600,
                  }}>
                    {log.loggedHours}h
                  </td>
                  <td style={{
                    padding: '16px',
                    fontSize: '14px',
                    color: '#666666',
                  }}>
                    {formatDate(log.date)}
                  </td>
                  <td style={{ padding: '16px' }}>
                    {getStatusBadge(log.status)}
                  </td>
                  <td style={{
                    padding: '16px',
                    textAlign: 'center',
                  }}>
                    {log.status === 'pending' ? (
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button
                          onClick={() => onApprove(log.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#10b981',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
                          onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
                          title="Approve"
                        >
                          ✓
                        </button>
                        <button
                          onClick={() => setShowRejectModal(log.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#ef4444',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
                          onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
                          title="Reject"
                        >
                          ✕
                        </button>
                        <button
                          onClick={() => setShowCorrectionModal(log.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#f59e0b',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#d97706'}
                          onMouseLeave={(e) => e.currentTarget.style.background = '#f59e0b'}
                          title="Request Correction"
                        >
                          ↻
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize: '13px', color: '#999999' }}>
                        {log.status === 'approved' ? 'Approved' : 'Rejected'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {timeLogs.length === 0 && (
          <div style={{
            padding: '60px 20px',
            textAlign: 'center',
            color: '#999999',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏱️</div>
            <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>
              No time logs found
            </div>
            <div style={{ fontSize: '14px' }}>
              Time logs will appear here for review
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showRejectModal && (
        <RejectModal
          onClose={() => setShowRejectModal(null)}
          onReject={(reason) => handleReject(showRejectModal, reason)}
        />
      )}

      {showCorrectionModal && (
        <CorrectionModal
          onClose={() => setShowCorrectionModal(null)}
          onRequest={(message) => handleRequestCorrection(showCorrectionModal, message)}
        />
      )}
    </>
  )
}

export default TimeLogTable
