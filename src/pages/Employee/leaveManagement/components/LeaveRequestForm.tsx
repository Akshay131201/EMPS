import { useState } from 'react'

interface LeaveRequestFormProps {
  onSubmit: (data: any) => void
}

const LeaveRequestForm = ({ onSubmit }: LeaveRequestFormProps) => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
  })

  const leaveTypes = [
    'Sick Leave',
    'Casual Leave',
    'Annual Leave',
    'Work From Home',
    'Maternity Leave',
    'Paternity Leave',
    'Unpaid Leave',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      leaveType: '',
      fromDate: '',
      toDate: '',
      reason: '',
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      border: '1px solid #e5e7eb',
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '24px',
      }}>
        Request Leave
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}>
          {/* Leave Type */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '8px',
            }}>
              Leave Type <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <select
              value={formData.leaveType}
              onChange={(e) => handleChange('leaveType', e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
                background: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <option value="">Select leave type</option>
              {leaveTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* From Date */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '8px',
            }}>
              From Date <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <input
              type="date"
              value={formData.fromDate}
              onChange={(e) => handleChange('fromDate', e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          </div>

          {/* To Date */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '8px',
            }}>
              To Date <span style={{ color: '#991b1b' }}>*</span>
            </label>
            <input
              type="date"
              value={formData.toDate}
              onChange={(e) => handleChange('toDate', e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          </div>
        </div>

        {/* Reason */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Reason <span style={{ color: '#991b1b' }}>*</span>
          </label>
          <textarea
            value={formData.reason}
            onChange={(e) => handleChange('reason', e.target.value)}
            required
            rows={4}
            placeholder="Please provide a reason for your leave request..."
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#1f2937',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '12px 32px',
            background: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
        >
          Submit Request
        </button>
      </form>
    </div>
  )
}

export default LeaveRequestForm
