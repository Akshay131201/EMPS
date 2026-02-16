import { useState } from 'react'
import type { AttendanceRecord } from '../types/attendance.types'

type DailyAttendanceTableProps = {
  records: AttendanceRecord[]
  selectedDate: string
}

const DailyAttendanceTable = ({ records, selectedDate }: DailyAttendanceTableProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null)
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null)

  const getStatusBadge = (status: string) => {
    const styles = {
      present: { bg: '#d1fae5', color: '#065f46', text: 'Present' },
      absent: { bg: '#fee2e2', color: '#991b1b', text: 'Absent' },
      leave: { bg: '#fef3c7', color: '#92400e', text: 'Leave' },
      wfh: { bg: '#dbeafe', color: '#1e40af', text: 'WFH' },
    }

    const style = styles[status as keyof typeof styles] || styles.present

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

  const handleAction = (action: string, employeeName: string) => {
    setShowActionMenu(null)
    alert(`${action} for ${employeeName}`)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
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
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fafafa',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '4px',
          }}>
            Daily Attendance
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#666666',
            margin: 0,
          }}>
            {formatDate(selectedDate)}
          </p>
        </div>
        <button
          onClick={() => alert('Export report functionality')}
          style={{
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
        >
          <span>📥</span>
          <span>Export Report</span>
        </button>
      </div>

      {/* Table */}
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
                Check-in
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
                Check-out
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
                Total Hours
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
            {records.map((record) => (
              <tr 
                key={record.id}
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
                  {record.employeeName}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: record.checkIn ? '#1a1a1a' : '#999999',
                }}>
                  {record.checkIn || '-'}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: record.checkOut ? '#1a1a1a' : '#999999',
                }}>
                  {record.checkOut || '-'}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: record.totalHours ? '#1a1a1a' : '#999999',
                  fontWeight: 500,
                }}>
                  {record.totalHours || '-'}
                </td>
                <td style={{ padding: '16px' }}>
                  {getStatusBadge(record.status)}
                </td>
                <td style={{
                  padding: '16px',
                  textAlign: 'center',
                  position: 'relative',
                }}>
                  <button
                    onClick={() => setShowActionMenu(showActionMenu === record.id ? null : record.id)}
                    style={{
                      padding: '8px 16px',
                      background: '#f5f5f5',
                      color: '#1a1a1a',
                      border: '1px solid #e5e5e5',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  >
                    Actions ▾
                  </button>

                  {/* Action Menu */}
                  {showActionMenu === record.id && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: '16px',
                      marginTop: '4px',
                      background: '#ffffff',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      zIndex: 10,
                      minWidth: '200px',
                    }}>
                      <button
                        onClick={() => handleAction('Request Clarification', record.employeeName)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#1a1a1a',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        💬 Request Clarification
                      </button>
                      <button
                        onClick={() => handleAction('Flag Irregular Attendance', record.employeeName)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#1a1a1a',
                          cursor: 'pointer',
                          transition: 'background 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        🚩 Flag Irregular Attendance
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {records.length === 0 && (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          color: '#999999',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📅</div>
          <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>
            No attendance records
          </div>
          <div style={{ fontSize: '14px' }}>
            Select a date from the calendar to view attendance
          </div>
        </div>
      )}
    </div>
  )
}

export default DailyAttendanceTable
