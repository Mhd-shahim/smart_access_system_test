import './BottomNavbar.css'

const NAV_ITEMS = [
  { id: 'home',    icon: 'fa-house',    label: 'HOME' },
  { id: 'logs',    icon: 'fa-clock-rotate-left', label: 'LOGS' },
  { id: 'guests',  icon: 'fa-user-group', label: 'GUESTS' },
  { id: 'profile', icon: 'fa-user',     label: 'PROFILE' },
]

function BottomNavbar({ activeTab, onTabChange }) {
  return (
    <nav className="bottom-navbar" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          id={`nav-${item.id}`}
          className={`bottom-nav-item${activeTab === item.id ? ' active' : ''}`}
          onClick={() => onTabChange(item.id)}
          aria-label={item.label}
        >
          <i className={`fas ${item.icon} bottom-nav-icon`} />
          <span className="bottom-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomNavbar
