import { useState } from 'react'
import TopNavbar from './TopNavbar.jsx'
import BottomNavbar from './BottomNavbar.jsx'
import LogsPage from './LogsPage.jsx'
import ProfilePage from './ProfilePage.jsx'
import GuestRequestsPage from './GuestRequestsPage.jsx'
import './DashboardPage.css'



/* ──────────────────────── HOME TAB ──────────────────────── */
function DashboardPage() {
  const [selectedAction, setSelectedAction] = useState(null)

  return (
    <div className="dash-home">
      {/* Greeting */}
      <section className="dash-greeting">
        <p className="dash-greeting-sub">Welcome Back,</p>
        <h1 className="dash-greeting-name">Hello, Alex</h1>
      </section>

      {/* Security Status Card */}
      <section className="dash-status-card">
        <div className="dash-status-left">
          <span className="dash-status-label">SECURITY STATUS</span>
          <span className="dash-status-value">
            <span className="dash-status-dot" />
            Approved
          </span>
        </div>
        <div className="dash-status-icon-wrap">
          <i className="fas fa-circle-check" />
        </div>
      </section>

      {/* Info Row */}
      <section className="dash-info-row">
        <div className="dash-info-tile">
          <span className="dash-info-tile-icon parking">P</span>
          <span className="dash-info-tile-label">ASSIGNED PARKING</span>
          <span className="dash-info-tile-value">Level 2, B-42</span>
        </div>
        <div className="dash-info-tile">
          <div className="dash-info-tile-icon">
            <i className="fas fa-charging-station" />
          </div>
          <span className="dash-info-tile-label">EV CHARGING</span>
          <span className="dash-info-tile-value">Available</span>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="dash-actions-section">
        <h2 className="dash-section-title">QUICK ACTIONS</h2>
        <div className="dash-actions-grid">
          <ActionCard icon="fa-door-open"  label="Open Gate" onClick={() => setSelectedAction('gate')} />
          <ActionCard icon="fa-building"   label="Open Door" onClick={() => setSelectedAction('door')} />
          <ActionCard icon="fa-headset" label="Call Customer Support" />
          <ActionCard icon="fa-list-check" label="View Logs" />
        </div>
      </section>

      {/* Selected Action List */}
      {selectedAction === 'gate' && <GateList onSelect={() => setSelectedAction(null)} />}
      {selectedAction === 'door' && <DoorList onSelect={() => setSelectedAction(null)} />}

    </div>
  )
}

/* ──────────── Action Card ──────────── */
function ActionCard({ icon, label, onClick }) {
  return (
    <button className="dash-action-card" onClick={onClick}>
      <div className="dash-action-icon-wrap">
        <i className={`fas ${icon}`} />
      </div>
      <span className="dash-action-label">{label}</span>
    </button>
  )
}

/* ──────────── Gate List ──────────── */
function GateList({ onSelect }) {
  const gates = ['Main Gate', 'Side Gate', 'Service Gate']

  return (
    <section className="dash-actions-section">
      <h2 className="dash-section-title">SELECT GATE TO OPEN</h2>
      <div className="dash-list">
        {gates.map(gate => (
          <button key={gate} className="dash-list-item" onClick={() => { alert(`Opening ${gate}`); onSelect() }}>
            {gate}
          </button>
        ))}
      </div>
    </section>
  )
}

/* ──────────── Door List ──────────── */
function DoorList({ onSelect }) {
  const doors = ['Front Door', 'Back Door', 'Office Door']

  return (
    <section className="dash-actions-section">
      <h2 className="dash-section-title">SELECT DOOR TO OPEN</h2>
      <div className="dash-list">
        {doors.map(door => (
          <button key={door} className="dash-list-item" onClick={() => { alert(`Opening ${door}`); onSelect() }}>
            {door}
          </button>
        ))}
      </div>
    </section>
  )
}

/* ──────────── Placeholder Tab ──────────── */
function PlaceholderTab({ title, icon }) {
  return (
    <div className="dash-placeholder">
      <div className="dash-placeholder-icon">
        <i className={`fas ${icon}`} />
      </div>
      <h2 className="dash-placeholder-title">{title}</h2>
      <p className="dash-placeholder-sub">Coming soon</p>
    </div>
  )
}

export default DashboardPage
