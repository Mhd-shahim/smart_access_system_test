import './TopNavbar.css'

function TopNavbar() {
  return (
    <header className="top-navbar">
      <div className="top-nav-brand">
        <div className="top-nav-logo">
          <i className="fas fa-door-open" />
        </div>
        <span className="top-nav-title">Smart Access System</span>
      </div>
      <button className="top-nav-bell" aria-label="Notifications">
        <i className="fas fa-bell" />
        <span className="top-nav-badge" />
      </button>
    </header>
  )
}

export default TopNavbar
