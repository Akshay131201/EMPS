import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTicketDetail } from '../data/ticketsData'

const TicketDetailPage = () => {
  const { ticketId } = useParams<{ ticketId: string }>()
  const navigate = useNavigate()
  const [newReply, setNewReply] = useState('')

  const ticket = getTicketDetail(ticketId!)

  if (!ticket) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h2>Ticket not found</h2>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'closed': return '#047857'
      case 'resolved': return '#065f46'
      case 'in-progress': return '#1e40af'
      case 'open': return '#b45309'
      case 'reopened': return '#991b1b'
      default: return '#374151'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#991b1b'
      case 'high': return '#b45309'
      case 'medium': return '#1e40af'
      case 'low': return '#374151'
      default: return '#374151'
    }
  }

  return (
    <div style={{
      padding: '32px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/employee/tickets')}
        style={{
          padding: '8px 16px',
          background: '#f3f4f6',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#374151',
          cursor: 'pointer',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
      >
        ← Back to Tickets
      </button>

      {/* Header */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
        marginBottom: '24px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '13px',
              color: '#1e40af',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              {ticket.id}
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              {ticket.title}
            </h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
            }}>
              {ticket.projectName} • Created by {ticket.createdBy}
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 500,
            background: `${getStatusColor(ticket.status)}20`,
            color: getStatusColor(ticket.status),
            textTransform: 'capitalize',
          }}>
            {ticket.status.replace('-', ' ')}
          </span>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
            background: `${getPriorityColor(ticket.priority)}20`,
            color: getPriorityColor(ticket.priority),
            textTransform: 'capitalize',
          }}>
            {ticket.priority} Priority
          </span>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 500,
            background: '#f3f4f6',
            color: '#374151',
          }}>
            {ticket.ticketType}
          </span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px',
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Problem Description */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '12px',
            }}>
              Problem Description
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: 0,
            }}>
              {ticket.description}
            </p>
          </div>

          {/* Solution Area */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '12px',
            }}>
              Solution Area
            </h3>
            <div style={{
              padding: '12px 16px',
              background: '#f0f9ff',
              borderRadius: '8px',
              border: '1px solid #bfdbfe',
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1e40af',
              }}>
                {ticket.solutionArea}
              </div>
            </div>
          </div>

          {/* Attachments */}
          {ticket.attachments.length > 0 && (
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid #e5e7eb',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '16px',
              }}>
                Attachments
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ticket.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: '#f9fafb',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#1f2937',
                    }}>
                      📎 {attachment}
                    </div>
                    <button style={{
                      padding: '6px 12px',
                      background: '#1a1a1a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discussion Thread */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '16px',
            }}>
              Discussion
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '20px',
            }}>
              {ticket.replies.map((reply) => (
                <div key={reply.id} style={{
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1f2937',
                    }}>
                      {reply.author}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      {reply.timestamp}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#374151',
                    lineHeight: '1.6',
                    margin: '0 0 12px 0',
                  }}>
                    {reply.message}
                  </p>
                  {reply.attachments && reply.attachments.length > 0 && (
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}>
                      {reply.attachments.map((att, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '4px 10px',
                            background: '#e5e7eb',
                            borderRadius: '6px',
                            fontSize: '12px',
                            color: '#374151',
                          }}
                        >
                          📎 {att}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write a reply..."
              style={{
                width: '100%',
                minHeight: '80px',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                marginBottom: '12px',
              }}
            />
            <div style={{
              display: 'flex',
              gap: '12px',
            }}>
              <button style={{
                padding: '10px 20px',
                background: '#1e40af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                Reply
              </button>
              <button style={{
                padding: '10px 20px',
                background: '#f3f4f6',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                Upload Evidence
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Actions */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '16px',
            }}>
              Actions
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <button style={{
                width: '100%',
                padding: '10px',
                background: '#047857',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                Mark Solved
              </button>
              <button style={{
                width: '100%',
                padding: '10px',
                background: '#991b1b',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                Reopen
              </button>
              <select style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                fontSize: '14px',
              }}>
                <option>Change Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Ticket Info */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '16px',
            }}>
              Ticket Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Assigned To
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {ticket.assignedTo}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Created Date
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {new Date(ticket.createdDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Last Update
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {new Date(ticket.lastUpdate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Status History */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '16px',
            }}>
              Status History
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {ticket.statusHistory.map((history) => (
                <div
                  key={history.id}
                  style={{
                    padding: '12px',
                    background: '#f9fafb',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#1f2937',
                      textTransform: 'capitalize',
                    }}>
                      {history.status.replace('-', ' ')}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      {history.timestamp}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    marginBottom: '4px',
                  }}>
                    by {history.changedBy}
                  </div>
                  {history.comment && (
                    <div style={{
                      fontSize: '13px',
                      color: '#374151',
                      marginTop: '4px',
                    }}>
                      {history.comment}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPage
