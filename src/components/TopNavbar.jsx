import { useState } from 'react'
import avatarImg from '../assets/avatar.png'
import ProfilePage from './ProfilePage.jsx'
import './TopNavbar.css'
import { useNavigate } from 'react-router-dom'

function TopNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setDropdownOpen(false)
    navigate('/profile')
  }

  const HandleLogout = () => {
    setDropdownOpen(false);
    navigate('/');
  }

  return (
    <header className="top-navbar">
      <div className="top-nav-brand">
        <div className="top-nav-logo">
          <i className="fas fa-door-open" />
        </div>
        <span className="top-nav-title">Smart Access System</span>
      </div>

      {/* Settings Dropdown */}
      <div className="top-nav-settings-wrapper">
        <button
          className="top-nav-settings-btn"
          aria-label="Settings"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <i className="fas fa-cog" />
        </button>

        {dropdownOpen && (
          <div className="top-nav-dropdown">
            {/* Profile Section */}
            <div className="dropdown-profile-section" style={{cursor: 'pointer'}} onClick={handleProfileClick}>
              <div className="dropdown-profile-header">
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="dropdown-avatar"
                />
                <div className="dropdown-profile-info">
                  <p className="dropdown-profile-name">Alex Thompson</p>
                  <p className="dropdown-profile-email">
                    alex.thompson@corporation.com
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="dropdown-divider" />

            {/* Logout Option */}
            <button
              className="dropdown-logout-btn"
              onClick={HandleLogout}
            >
              <i className="fas fa-right-from-bracket" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default TopNavbar
