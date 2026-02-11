import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../utils/auth'

const SignupPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState('')

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    const result = signup(formData.fullName, formData.email, formData.password)
    
    if (result.success) {
      navigate('/admin/dashboard')
    } else {
      setError(result.error || 'Signup failed')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            Create your account
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          {/* Error Message */}
          {error && (
            <div style={{
              background: '#fff5f5',
              border: '1px solid #feb2b2',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#c53030',
            }}>
              {error}
            </div>
          )}

          {/* Full Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
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

          {/* Email Field */}
          <div style={{ marginBottom: '20px' }}>
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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

          {/* Password Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
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

          {/* Confirm Password Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '8px',
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
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

          {/* Terms & Conditions */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#666666',
            }}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
                style={{ cursor: 'pointer', marginTop: '2px' }}
              />
              <span>
                I agree to the{' '}
                <span style={{ color: '#1a1a1a', fontWeight: 600 }}>
                  Terms & Conditions
                </span>{' '}
                and{' '}
                <span style={{ color: '#1a1a1a', fontWeight: 600 }}>
                  Privacy Policy
                </span>
              </span>
            </label>
          </div>

          {/* Signup Button */}
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
              marginBottom: '20px',
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
            Create Account
          </button>

          {/* Login Link */}
          <div style={{
            textAlign: 'center',
            fontSize: '13px',
            color: '#666666',
          }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/auth/login')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1a1a1a',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a90e2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
