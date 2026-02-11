import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utils/auth'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    const result = login(email, password)
    
    if (result.success) {
      navigate('/admin/dashboard')
    } else {
      setError(result.error || 'Login failed')
    }
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
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
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

          {/* Demo Credentials Info */}
          <div style={{
            background: '#fafafa',
            border: '1px solid #e5e5e5',
            borderRadius: '10px',
            padding: '12px 16px',
            marginBottom: '20px',
            fontSize: '12px',
            color: '#666666',
          }}>
            <div style={{ fontWeight: 600, marginBottom: '6px', color: '#1a1a1a' }}>
              Demo Credentials:
            </div>
            <div style={{ fontFamily: 'monospace' }}>
              Email: admin@ispm.com<br />
              Password: admin123
            </div>
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

          {/* Password Field */}
          <div style={{ marginBottom: '16px' }}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

          {/* Remember Me & Forgot Password */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#666666',
            }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ cursor: 'pointer' }}
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => navigate('/auth/forgot-password')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1a1a1a',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a90e2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
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
            Sign In
          </button>

          {/* Sign Up Link */}
          <div style={{
            textAlign: 'center',
            fontSize: '13px',
            color: '#666666',
          }}>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/auth/signup')}
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
