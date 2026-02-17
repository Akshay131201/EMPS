import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateSelfWorkPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    projectId: '',
    workType: '',
    title: '',
    description: '',
    estimatedTime: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
  })

  const handleSubmit = (e: React.FormEvent, saveAsDraft: boolean = false) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, saveAsDraft })
    navigate('/employee/self-work')
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

      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '8px',
        }}>
          Add Self Work
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
        }}>
          Document your personal initiative or discovered work
        </p>
      </div>

      {/* Form */}
      <form onSubmit={(e) => handleSubmit(e, false)}>
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

            {/* Work Type */}
            <div>
              <label style={labelStyle}>
                Work Type <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <select
                value={formData.workType}
                onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                style={inputStyle}
                required
              >
                <option value="">Select Type</option>
                <option value="bug-fix">Bug Fix</option>
                <option value="feature">Feature</option>
                <option value="improvement">Code Improvement</option>
                <option value="documentation">Documentation</option>
                <option value="testing">Testing</option>
                <option value="performance">Performance</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Estimated Time */}
            <div>
              <label style={labelStyle}>
                Estimated Time (hours) <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <input
                type="number"
                value={formData.estimatedTime}
                onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                placeholder="e.g., 8"
                style={inputStyle}
                min="1"
                required
              />
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
              placeholder="Brief description of the work"
              style={inputStyle}
              required
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <label style={labelStyle}>
              Description <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide detailed information about the work, why it's needed, and expected outcomes..."
              style={{
                ...inputStyle,
                minHeight: '150px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
              required
            />
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
          }}>
            <button
              type="button"
              onClick={() => navigate('/employee/self-work')}
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
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              style={{
                padding: '12px 24px',
                background: '#6b7280',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#4b5563'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#6b7280'}
            >
              Save as Draft
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
              Submit for Approval
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateSelfWorkPage
