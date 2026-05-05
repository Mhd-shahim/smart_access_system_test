import './BottomNavbar.css'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'home', path: '/dashboard', icon: 'fa-house', label: 'HOME' },
  { id: 'logs', path: '/logs', icon: 'fa-clock-rotate-left', label: 'LOGS' },
  { id: 'guests', path: '/guests', icon: 'fa-user-group', label: 'GUESTS' },
  { id: 'parking', path: '/parking', icon: 'fa-car', label: 'PARKING' },
]

function BottomNavbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="bottom-navbar" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path

        return (
          <button
            key={item.id}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
            aria-label={item.label}
          >
            <i className={`fas ${item.icon} bottom-nav-icon`} />
            <span className="bottom-nav-label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNavbar