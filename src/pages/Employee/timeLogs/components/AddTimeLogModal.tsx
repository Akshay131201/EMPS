import { useState } from 'react'

interface AddTimeLogModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

const AddTimeLogModal = ({ isOpen, onClose, onSubmit }: AddTimeLogModalProps) => {
  const [formData, setFormData] = useState({
    projectId: '',
    taskOrTicketId: '',
    workDescription: '',
    hours: '',
    date: new Date().toISOString().split('T')[0],
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      projectId: '',
      taskOrTicketId: '',
      workDescription: '',
      hours: '',
      date: new Date().toISOString().split('T')[0],
    })
    onClose()
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto',
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '24px',
        }}>
          Add Time Entry
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
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

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>
              Task/Ticket <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <input
              type="text"
              value={formData.taskOrTicketId}
              onChange={(e) => setFormData({ ...formData, taskOrTicketId: e.target.value })}
              placeholder="e.g., T001 or TKT001"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>
              Work Description <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <textarea
              value={formData.workDescription}
              onChange={(e) => setFormData({ ...formData, workDescription: e.target.value })}
              placeholder="Describe what you worked on..."
              style={{
                ...inputStyle,
                minHeight: '100px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
              required
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div>
              <label style={labelStyle}>
                Hours Spent <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <input
                type="number"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                placeholder="e.g., 4"
                style={inputStyle}
                min="0.5"
                step="0.5"
                required
              />
            </div>

            <div>
              <label style={labelStyle}>
                Date <span style={{ color: '#991b1b' }}>*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
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
                padding: '10px 20px',
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
              Add Time Log
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTimeLogModal
