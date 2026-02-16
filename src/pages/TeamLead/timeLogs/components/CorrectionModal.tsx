import { useState } from 'react'

type CorrectionModalProps = {
  onClose: () => void
  onRequest: (message: string) => void
}

const CorrectionModal = ({ onClose, onRequest }: CorrectionModalProps) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onRequest(message)
    }
  }

  return (
    <div
      style={{
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
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: 0,
          }}>
            Request Correction
          </h2>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              border: 'none',
              background: '#f5f5f5',
              color: '#666666',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#f5f5f5'}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              Correction Request Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe what needs to be corrected in this time log..."
              required
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                color: '#1a1a1a',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#f59e0b'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
            <div style={{
              fontSize: '12px',
              color: '#999999',
              marginTop: '8px',
            }}>
              The employee will be asked to update and resubmit
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid #e5e5e5',
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
                background: '#ffffff',
                color: '#666666',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!message.trim()}
              style={{
                padding: '10px 20px',
                background: message.trim() ? '#f59e0b' : '#e5e5e5',
                color: message.trim() ? '#ffffff' : '#999999',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: message.trim() ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (message.trim()) e.currentTarget.style.background = '#d97706'
              }}
              onMouseLeave={(e) => {
                if (message.trim()) e.currentTarget.style.background = '#f59e0b'
              }}
            >
              Request Correction
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CorrectionModal
