import { useState } from 'react'

interface ProfilePhotoSectionProps {
  currentPhoto: string
  userName: string
}

const ProfilePhotoSection = ({ currentPhoto, userName }: ProfilePhotoSectionProps) => {
  const [photo, setPhoto] = useState(currentPhoto)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
        console.log('Photo uploaded:', file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setPhoto('')
    console.log('Photo removed')
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
        Profile Photo
      </h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        flexWrap: 'wrap',
      }}>
        {/* Photo Display */}
        <div style={{
          position: 'relative',
        }}>
          {photo ? (
            <img
              src={photo}
              alt={userName}
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #e5e7eb',
              }}
            />
          ) : (
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              border: '4px solid #e5e7eb',
            }}>
              {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <label style={{
            padding: '10px 24px',
            background: '#1e40af',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#1e40af'}
          >
            Upload New Photo
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{
                display: 'none',
              }}
            />
          </label>

          {photo && (
            <button
              onClick={handleRemovePhoto}
              style={{
                padding: '10px 24px',
                background: '#ffffff',
                color: '#991b1b',
                border: '1px solid #991b1b',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#991b1b'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.color = '#991b1b'
              }}
            >
              Remove Photo
            </button>
          )}

          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            maxWidth: '250px',
          }}>
            Recommended: Square image, at least 400x400px. Max file size: 5MB.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotoSection
