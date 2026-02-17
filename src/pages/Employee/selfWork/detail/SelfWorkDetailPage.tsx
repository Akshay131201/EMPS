import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSelfWorkDetail } from '../data/selfWorkData'

const SelfWorkDetailPage = () => {
  const { workId } = useParams<{ workId: string }>()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('')
  const [newUpdate, setNewUpdate] = useState('')

  const work = getSelfWorkDetail(workId!)

  if (!work) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h2>Self Work not found</h2>
      </div>
    )
  }

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

  const getApprovalColor = (state: string) => {
    switch (state) {
      case 'approved': return '#047857'
      case 'rejected': return '#991b1b'
      case 'pending': return '#b45309'
      case 'converted-to-task': return '#1e40af'
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
        onClick={() => navigate('/employee/self-work')}
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
        ← Back to Self Work
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
              {work.id}
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              {work.title}
            </h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
            }}>
              {work.projectName} • {work.workType}
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
            background: `${getStatusColor(work.status)}20`,
            color: getStatusColor(work.status),
            textTransform: 'capitalize',
          }}>
            {work.status.replace('-', ' ')}
          </span>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
            background: `${getApprovalColor(work.approvalState)}20`,
            color: getApprovalColor(work.approvalState),
          }}>
            {work.approvalState.replace('-', ' ').toUpperCase()}
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
          {/* Description */}
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
              Description
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: 0,
            }}>
              {work.description}
            </p>
          </div>

          {/* Lead Feedback */}
          {work.leadFeedback && (
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
                Lead Feedback
              </h3>
              <div style={{
                padding: '16px',
                background: work.approvalState === 'approved' ? '#d1fae5' : work.approvalState === 'rejected' ? '#fee2e2' : '#fef3c7',
                borderRadius: '8px',
                border: `1px solid ${work.approvalState === 'approved' ? '#a7f3d0' : work.approvalState === 'rejected' ? '#fecaca' : '#fde68a'}`,
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {work.leadFeedback}
                </p>
              </div>
            </div>
          )}

          {/* Convert Status */}
          {work.convertedToTaskId && (
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
                Conversion Status
              </h3>
              <div style={{
                padding: '16px',
                background: '#dbeafe',
                borderRadius: '8px',
                border: '1px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{ fontSize: '24px' }}>✓</span>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e40af',
                    marginBottom: '4px',
                  }}>
                    Converted to Task
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#1e40af',
                  }}>
                    Task ID: {work.convertedToTaskId}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Comments */}
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
              Comments
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '20px',
            }}>
              {work.comments.map((comment) => (
                <div key={comment.id} style={{
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
                      {comment.author}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      {comment.timestamp}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#374151',
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {comment.message}
                  </p>
                </div>
              ))}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
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
              Add Comment
            </button>
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
              {work.status === 'draft' && (
                <>
                  <button style={{
                    width: '100%',
                    padding: '10px',
                    background: '#1e40af',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}>
                    Submit for Approval
                  </button>
                  <button style={{
                    width: '100%',
                    padding: '10px',
                    background: '#6b7280',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}>
                    Edit Draft
                  </button>
                </>
              )}
              {work.status === 'in-progress' && (
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
                  Mark Complete
                </button>
              )}
              {(work.status === 'completed' || work.status === 'submitted') && (
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
                  Close Work
                </button>
              )}
            </div>
          </div>

          {/* Work Info */}
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
              Work Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Estimated Time
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {work.estimatedTime} hours
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Priority
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                  textTransform: 'capitalize',
                }}>
                  {work.priority}
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
                  {new Date(work.createdDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
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
              Updates
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '16px',
            }}>
              {work.updates.map((update) => (
                <div
                  key={update.id}
                  style={{
                    padding: '12px',
                    background: '#f9fafb',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{
                    fontSize: '13px',
                    color: '#374151',
                    marginBottom: '4px',
                  }}>
                    {update.message}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280',
                  }}>
                    {update.timestamp}
                  </div>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="Add an update..."
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                fontSize: '14px',
                outline: 'none',
                marginBottom: '8px',
              }}
            />
            <button style={{
              width: '100%',
              padding: '10px',
              background: '#1e40af',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}>
              Add Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfWorkDetailPage
