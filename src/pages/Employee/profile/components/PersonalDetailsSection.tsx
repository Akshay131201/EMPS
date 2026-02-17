import { useState } from 'react'

interface PersonalDetailsSectionProps {
  details: {
    fullName: string
    email: string
    phone: string
    dateOfBirth: string
    address: string
    emergencyContact: string
    emergencyContactName: string
  }
}

const PersonalDetailsSection = ({ details }: PersonalDetailsSectionProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(details)

  const handleSave = () => {
    console.log('Saving personal details:', formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(details)
    setIsEditing(false)
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0,
        }}>
          Personal Details
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '8px 16px',
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
            Edit
          </button>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {/* Full Name */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Full Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {formData.fullName}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Email
          </label>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            padding: '10px 0',
          }}>
            {formData.email}
            <span style={{
              marginLeft: '8px',
              fontSize: '12px',
              color: '#9ca3af',
            }}>
              (Cannot be changed)
            </span>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Phone
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {formData.phone}
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Date of Birth
          </label>
          {isEditing ? (
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange('dateOfBirth', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {new Date(formData.dateOfBirth).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          )}
        </div>

        {/* Address */}
        <div style={{
          gridColumn: 'span 2',
        }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Address
          </label>
          {isEditing ? (
            <textarea
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              rows={2}
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
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {formData.address}
            </div>
          )}
        </div>

        {/* Emergency Contact Name */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Emergency Contact Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.emergencyContactName}
              onChange={(e) => handleChange('emergencyContactName', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {formData.emergencyContactName}
            </div>
          )}
        </div>

        {/* Emergency Contact */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Emergency Contact Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.emergencyContact}
              onChange={(e) => handleChange('emergencyContact', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1f2937',
              }}
            />
          ) : (
            <div style={{
              fontSize: '14px',
              color: '#1f2937',
              padding: '10px 0',
            }}>
              {formData.emergencyContact}
            </div>
          )}
        </div>
      </div>

      {isEditing && (
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb',
        }}>
          <button
            onClick={handleSave}
            style={{
              padding: '10px 24px',
              background: '#047857',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#065f46'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#047857'}
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: '10px 24px',
              background: '#ffffff',
              color: '#6b7280',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default PersonalDetailsSection
