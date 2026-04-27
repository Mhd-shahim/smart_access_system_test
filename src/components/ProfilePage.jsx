import { useState } from 'react'
import avatarImg from '../assets/avatar.png'
import './ProfilePage.css'

function ProfilePage({ onLogout }) {
  const [biometric, setBiometric] = useState(true)

  return (
    <div className="profile-page">
      {/* Avatar Section */}
      <section className="profile-avatar-section">
        <div className="profile-avatar-wrap">
          <img src={avatarImg} alt="Alex Thompson" className="profile-avatar" />
          <button className="profile-avatar-edit" aria-label="Edit photo">
            <i className="fas fa-pen" />
          </button>
        </div>
        <h1 className="profile-name">Alex Thompson</h1>
        <p className="profile-email">alex.thompson@corporation.com</p>
      </section>

      {/* Info Cards */}
      <section className="profile-cards">
        <button className="profile-info-card">
          <div className="profile-info-icon-wrap">
            <i className="fas fa-car" />
          </div>
          <div className="profile-info-body">
            <span className="profile-info-label">VEHICLE NUMBER</span>
            <span className="profile-info-value">ABC-1234</span>
          </div>
          <i className="fas fa-chevron-right profile-info-chevron" />
        </button>

        <button className="profile-info-card">
          <div className="profile-info-icon-wrap">
            <i className="fas fa-building" />
          </div>
          <div className="profile-info-body">
            <span className="profile-info-label">COMPANY NAME</span>
            <span className="profile-info-value">SSK Technologies</span>
          </div>
          <i className="fas fa-chevron-right profile-info-chevron" />
        </button>

        <button className="profile-info-card">
          <div className="profile-info-icon-wrap parking-icon">
            <span>P</span>
          </div>
          <div className="profile-info-body">
            <span className="profile-info-label">PARKING SLOT DETAILS</span>
            <span className="profile-info-value">Level 2 • Slot B-42</span>
          </div>
          <span className="profile-reserved-badge">RESERVED</span>
          <i className="fas fa-chevron-right profile-info-chevron" />
        </button>
      </section>

      {/* Account Security */}
      <section className="profile-security">
        <h2 className="profile-section-title">ACCOUNT SECURITY</h2>

        <button className="profile-security-row">
          <i className="fas fa-lock profile-security-icon" />
          <span className="profile-security-label">Change Passcode</span>
          <i className="fas fa-chevron-right profile-security-chevron" />
        </button>

        <div className="profile-security-row">
          <i className="fas fa-fingerprint profile-security-icon" />
          <span className="profile-security-label">Biometric Access</span>
          <label className="profile-toggle" htmlFor="biometric-toggle">
            <input
              id="biometric-toggle"
              type="checkbox"
              checked={biometric}
              onChange={() => setBiometric(!biometric)}
            />
            <span className="profile-toggle-track">
              <span className="profile-toggle-thumb" />
            </span>
          </label>
        </div>
      </section>

      {/* Logout */}
      <button className="profile-logout-btn" onClick={onLogout}>
        <i className="fas fa-right-from-bracket" />
        Logout
      </button>

      <p className="profile-version">Version 2.4.1 (Build 882)</p>
    </div>
  )
}

export default ProfilePage
