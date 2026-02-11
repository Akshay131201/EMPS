import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add password reset logic here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
        padding: '20px',
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          width: '100%',
          maxWidth: '440px',
          padding: '48px 40px',
          border: '1px solid #e5e5e5',
          textAlign: 'center',
        }}>
          {/* Success Icon */}
          <div style={{
            width: '64px',
            height: '64px',
            background: '#1a1a1a',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '32px',
          }}>
            ✓
          </div>

          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '12px',
          }}>
            Check Your Email
          </h2>

          <p style={{
            fontSize: '14px',
            color: '#666666',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}>
            We've sent a password reset link to{' '}
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>
              {email}
            </span>
            . Please check your inbox and follow the instructions.
          </p>

          <button
            onClick={() => navigate('/auth/login')}
            style={{
              width: '100%',
              padding: '14px',
              background: '#1a1a1a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginBottom: '16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333333'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a1a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Back to Login
          </button>

          <button
            onClick={() => setIsSubmitted(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#666666',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
          >
            Didn't receive the email? Resend
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
      padding: '20px',
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        width: '100%',
        maxWidth: '440px',
        padding: '48px 40px',
        border: '1px solid #e5e5e5',
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/auth/login')}
          style={{
            background: 'none',
            border: 'none',
            color: '#666666',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1a1a1a'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
        >
          ← Back to Login
        </button>

        {/* Logo/Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '8px',
            letterSpacing: '0.5px',
          }}>
            ISPM
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666666',
            fontWeight: 500,
          }}>
            Reset your password
          </p>
        </div>

        {/* Info Message */}
        <div style={{
          background: '#fafafa',
          border: '1px solid #e5e5e5',
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '28px',
        }}>
          <p style={{
            fontSize: '13px',
            color: '#666666',
            lineHeight: '1.6',
            margin: 0,
          }}>
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                border: '1px solid #e5e5e5',
                borderRadius: '10px',
                background: '#fafafa',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.target.style.background = '#ffffff'
                e.target.style.borderColor = '#1a1a1a'
              }}
              onBlur={(e) => {
                e.target.style.background = '#fafafa'
                e.target.style.borderColor = '#e5e5e5'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#1a1a1a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333333'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a1a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
