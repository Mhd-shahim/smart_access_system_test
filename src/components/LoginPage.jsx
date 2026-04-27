import { useState } from 'react'
import './LoginPage.css'

function LoginPage({ onLogin, onRequestAccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onLogin?.()
    }, 2000)
  }

  return (
    <div className="login-wrapper">
      {/* Ambient glow blobs */}
      <div className="glow-blob glow-1" />
      <div className="glow-blob glow-2" />

      <div className="login-phone-frame">
        {/* Header */}
        <div className="login-header text-center">
          <div className="fingerprint-icon">
            <i className="fas fa-fingerprint" />
          </div>
          <h1 className="brand-title">Smart Access System</h1>
          <p className="brand-subtitle">Secure Smart Access</p>
        </div>

        {/* Card */}
        <div className="login-card">
          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-sub">Please enter your credentials to continue.</p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="field-group">
              <label className="field-label">EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <i className="fas fa-envelope input-icon" />
                <input
                  id="email"
                  type="email"
                  className="custom-input"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="field-group">
              <div className="field-label-row">
                <label className="field-label">PASSWORD</label>
                <a href="#" className="forgot-link">Forgot?</a>
              </div>
              <div className="input-wrapper">
                <i className="fas fa-lock input-icon" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="custom-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              id="login-btn"
              type="submit"
              className="login-btn w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Authenticating...
                </>
              ) : (
                <>
                  <i className="fas fa-arrow-right me-2" />
                  Login
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="card-footer-text text-center mt-4">
            <span className="footer-muted">Need entry? </span>
            <a
              href="#"
              className="request-link"
              onClick={(e) => { e.preventDefault(); onRequestAccess?.() }}
            >Request Access</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
