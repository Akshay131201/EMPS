import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTaskDetail } from '../data/tasksData'

const TaskDetailPage = () => {
  const { taskId } = useParams<{ taskId: string }>()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('')
  const [newTimeLog, setNewTimeLog] = useState({ hours: '', description: '' })

  const taskDetail = getTaskDetail(taskId!)

  if (!taskDetail) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h2>Task not found</h2>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#047857'
      case 'in-progress': return '#1e40af'
      case 'review': return '#b45309'
      case 'todo': return '#374151'
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
        onClick={() => navigate('/employee/my-tasks')}
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
        ← Back to Tasks
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
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              {taskDetail.title}
            </h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
            }}>
              {taskDetail.projectName}
            </div>
          </div>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: getPriorityColor(taskDetail.priority),
          }} />
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
            background: `${getStatusColor(taskDetail.status)}20`,
            color: getStatusColor(taskDetail.status),
          }}>
            {taskDetail.status.replace('-', ' ').toUpperCase()}
          </span>
          <span style={{
            padding: '6px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 600,
            background: `${getPriorityColor(taskDetail.priority)}20`,
            color: getPriorityColor(taskDetail.priority),
            textTransform: 'capitalize',
          }}>
            {taskDetail.priority} Priority
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
              {taskDetail.description}
            </p>
          </div>

          {/* Subtasks */}
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
              Subtasks ({taskDetail.subtasks.filter(s => s.completed).length}/{taskDetail.subtasks.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {taskDetail.subtasks.map((subtask) => (
                <div
                  key={subtask.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: '#f9fafb',
                    borderRadius: '8px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    readOnly
                    style={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer',
                    }}
                  />
                  <span style={{
                    fontSize: '14px',
                    color: subtask.completed ? '#6b7280' : '#1f2937',
                    textDecoration: subtask.completed ? 'line-through' : 'none',
                  }}>
                    {subtask.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attachments */}
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
              {taskDetail.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    background: '#f9fafb',
                    borderRadius: '8px',
                  }}
                >
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#1f2937',
                      marginBottom: '4px',
                    }}>
                      📎 {attachment.fileName}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      {attachment.fileSize} • {attachment.uploadedBy}
                    </div>
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
              <button style={{
                padding: '10px',
                background: '#f3f4f6',
                border: '1px dashed #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#374151',
                cursor: 'pointer',
                marginTop: '8px',
              }}>
                + Upload File
              </button>
            </div>
          </div>

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
              {taskDetail.comments.map((comment) => (
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
          {/* Status Update */}
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
              Update Status
            </h3>
            <select style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
              marginBottom: '12px',
            }}>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
            </select>
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
              Mark Completed
            </button>
          </div>

          {/* Task Info */}
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
              Task Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Assigned By
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {taskDetail.assignedBy}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginBottom: '4px',
                }}>
                  Due Date
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {new Date(taskDetail.dueDate).toLocaleDateString('en-US', {
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
                  Time Spent
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1f2937',
                }}>
                  {taskDetail.timeSpent}h / {taskDetail.estimatedTime}h
                </div>
              </div>
            </div>
          </div>

          {/* Time Logs */}
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
              Time Logs
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '16px',
            }}>
              {taskDetail.timeLogs.map((log) => (
                <div
                  key={log.id}
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
                    }}>
                      {log.hours}h
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      {new Date(log.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#6b7280',
                  }}>
                    {log.description}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <input
                type="number"
                placeholder="Hours"
                value={newTimeLog.hours}
                onChange={(e) => setNewTimeLog({ ...newTimeLog, hours: e.target.value })}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '14px',
                }}
              />
              <input
                type="text"
                placeholder="Description"
                value={newTimeLog.description}
                onChange={(e) => setNewTimeLog({ ...newTimeLog, description: e.target.value })}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '14px',
                }}
              />
              <button style={{
                padding: '10px',
                background: '#1e40af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}>
                Log Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailPage
