
import { useState } from 'react'
import './GuestRequestsPage.css'

const GUEST_REQUESTS_DATA = [
  {
    group: 'TODAY, OCT 24',
    entries: [
      {
        id: 1,
        location: 'Main Entrance',
        time: '09:42 AM',
        method: 'App Access',
        icon: 'fa-mobile-screen',
        status: 'success',
      },
      {
        id: 2,
        location: 'Executive Suite',
        time: '08:15 AM',
        method: 'Facial ID',
        icon: 'fa-face-smile',
        status: 'success',
      },
      {
        id: 3,
        location: 'Parking Gate B',
        time: '07:58 AM',
        method: 'Vehicle Tag',
        icon: 'fa-car',
        status: 'failed',
        reason: 'Unrecognized Tag',
      },
    ],
  },
  {
    group: 'YESTERDAY, OCT 23',
    entries: [
      {
        id: 4,
        location: 'EV Charging Dock 4',
        time: '11:20 PM',
        method: 'Vehicle Tag',
        icon: 'fa-car',
        status: 'success',
      },
      {
        id: 5,
        location: 'Main Entrance',
        time: '06:12 PM',
        method: 'App Access',
        icon: 'fa-mobile-screen',
        status: 'success',
      },
      {
        id: 6,
        location: 'Server Room',
        time: '02:30 PM',
        method: 'App Access',
        icon: 'fa-mobile-screen',
        status: 'failed',
        reason: 'Unauthorized',
      },
    ],
  },
]

function GuestRequestsPage() {
  const [search, setSearch] = useState('')

  const filtered = GUEST_REQUESTS_DATA.map((group) => ({
    ...group,
    entries: group.entries.filter(
      (e) =>
        e.location.toLowerCase().includes(search.toLowerCase()) ||
        e.method.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((g) => g.entries.length > 0)

  return (
    <div className="guests-page">
      {/* Title */}
      <h1 className="guests-title">Guests Requests</h1>

      {/* Search */}
      <div className="guests-search-wrap">
        <i className="fas fa-magnifying-glass guests-search-icon" />
        <input
          id="guests-search"
          type="text"
          className="guests-search"
          placeholder="Search guest requests..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className="guests-search-clear"
            onClick={() => setSearch('')}
            aria-label="Clear search"
          >
            <i className="fas fa-xmark" />
          </button>
        )}
      </div>

      {/* Groups */}
      {filtered.length === 0 && (
        <div className="guests-empty">
          <i className="fas fa-inbox guests-empty-icon" />
          <p>No guest requests found</p>
        </div>
      )}

      {filtered.map((group) => (
        <section key={group.group} className="guests-group">
          <h2 className="guests-group-label">{group.group}</h2>
          <div className="guests-group-list">
            {group.entries.map((entry) => (
              <LogEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function LogEntry({ entry }) {
  const isFailed = entry.status === 'failed'

  return (
    <div className={`log-entry${isFailed ? ' log-entry--failed' : ''}`}>
      <div className={`log-entry-icon-wrap${isFailed ? ' failed' : ''}`}>
        <i className={`fas ${entry.icon}`} />
      </div>

      <div className="log-entry-body">
        <span className="log-entry-location">{entry.location}</span>
        <span className="log-entry-meta">
          <i className="fas fa-clock log-entry-clock" />
          {entry.time} • {entry.method}
        </span>
      </div>

      <div className="log-entry-status-col">
        <span className={`log-entry-badge ${entry.status}`}>
          {entry.status === 'success' ? 'SUCCESS' : 'FAILED'}
        </span>
        {entry.reason && (
          <span className="log-entry-reason">{entry.reason}</span>
        )}
      </div>
    </div>
  )
}

export default GuestRequestsPage

