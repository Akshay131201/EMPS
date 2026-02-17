import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTicketPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    projectId: '',
    ticketType: '',
    assignTo: '',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'critical',
    title: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    navigate('/employee/tickets')
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '8px',
  }

  return (
    <div style={{
      padding: '32px',
      maxWidth: '900px',
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

      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          Create New Ticket
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Report an issue or request assistance
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '24px',
          }}>
            {/* Project */}
            <div>
              <label style={labelStyle}>
                Project <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <select
                value={formData.projectId}
                onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                style={inputStyle}
                required
              >
                <option value="">Select Project</option>
                <option value="P001">E-Commerce Platform</option>
                <option value="P002">CRM System</option>
                <option value="P003">Mobile App Backend</option>
              </select>
            </div>

            {/* Ticket Type */}
            <div>
              <label style={labelStyle}>
                Ticket Type <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <select
                value={formData.ticketType}
                onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                style={inputStyle}
                required
              >
                <option value="">Select Type</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature Request</option>
                <option value="enhancement">Enhancement</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Assign To */}
            <div>
              <label style={labelStyle}>
                Assign To <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <select
                value={formData.assignTo}
                onChange={(e) => setFormData({ ...formData, assignTo: e.target.value })}
                style={inputStyle}
                required
              >
                <option value="">Select Team Member</option>
                <option value="sarah">Sarah Johnson</option>
                <option value="mike">Mike Chen</option>
                <option value="david">David Lee</option>
                <option value="emily">Emily Davis</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label style={labelStyle}>
                Priority <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                style={inputStyle}
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          {/* Title */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>
              Title <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Brief description of the issue"
              style={inputStyle}
              required
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>
              Description <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide detailed information about the issue..."
              style={{
                ...inputStyle,
                minHeight: '150px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
              required
            />
          </div>

          {/* Attach File */}
          <div style={{ marginBottom: '32px' }}>
            <label style={labelStyle}>
              Attach Files
            </label>
            <div style={{
              border: '2px dashed #d1d5db',
              borderRadius: '8px',
              padding: '32px',
              textAlign: 'center',
              background: '#f9fafb',
              cursor: 'pointer',
            }}>
              <div style={{
                fontSize: '40px',
                marginBottom: '12px',
              }}>
                📎
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '8px',
              }}>
                Click to upload or drag and drop
              </div>
              <div style={{
                fontSize: '12px',
                color: '#9ca3af',
              }}>
                PNG, JPG, PDF up to 10MB
              </div>
              <input
                type="file"
                multiple
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
          }}>
            <button
              type="button"
              onClick={() => navigate('/employee/tickets')}
              style={{
                padding: '12px 24px',
                background: '#f3f4f6',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e5e7eb'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                background: '#1e40af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
            >
              Create Ticket
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTicketPage
