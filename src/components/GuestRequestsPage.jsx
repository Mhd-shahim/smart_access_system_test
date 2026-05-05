
import { useState } from 'react'
import './GuestRequestsPage.css'

const GUEST_REQUESTS_DATA = [
  {
    id: 1,
    guest_name: 'Peter Parker',
    date: '17-03-2024 09:45 AM',
    method: 'App Access',
    icon: 'fa-mobile-screen',
    status: 'pending',
  },
  {
    id: 2,
    guest_name: 'John Doe',
    date: '17-03-2024 08:15 AM',
    method: 'Facial ID',
    icon: 'fa-face-smile',
    status: 'approved',
  },
  {
    id: 3,
    guest_name: 'Sarah connor',
    date: '17-03-2024 07:58 AM',
    method: 'Vehicle Tag',
    icon: 'fa-car',
    status: 'failed',
    reason: 'approved',
  },
  {
    id: 4,
    guest_name: 'Mary Jane',
    date: '17-03-2024 11:20 PM',
    method: 'Vehicle Tag',
    icon: 'fa-car',
    status: 'failed',
  },
  {
    id: 5,
    guest_name: 'GUEST-1234',
    date: '17-03-2024 06:12 PM',
    method: 'App Access',
    icon: 'fa-mobile-screen',
    status: 'pending',
  },
  {
    id: 6,
    guest_name: 'GUEST-5678',
    date: '17-03-2024 02:30 PM',
    method: 'App Access',
    icon: 'fa-mobile-screen',
    status: 'failed',
    reason: 'pending',
  },
]

function GuestRequestsPage() {
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(GUEST_REQUESTS_DATA);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    guest_name: '',
    method: 'App Access',
    date: '',
    notes: '',
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      guest_name: form.guest_name || 'Unnamed Guest',
      date: form.date || now.toLocaleString(),
      method: form.method,
      icon: form.method === 'App Access' ? 'fa-mobile-screen' : form.method === 'Facial ID' ? 'fa-face-smile' : 'fa-car',
      status: 'pending',
    };
    setRequests([newEntry, ...requests]);
    setForm({ guest_name: '', method: 'App Access', date: '', notes: '' });
    setShowModal(false);
  };

  return (
    <div className="guests-page">
      {/* Title + New Request */}
      <div className="guests-header">
        <h1 className="guests-title">Guests Requests</h1>
        <button id="new-guest-request-btn" className="guests-new-btn" onClick={() => setShowModal(true)}>
          <i className="fas fa-plus" />
          <span>New Request</span>
        </button>
      </div>

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
      {requests.length === 0 && (
        <div className="guests-empty">
          <i className="fas fa-inbox guests-empty-icon" />
          <p>No guest requests found</p>
        </div>
      )}

      <section className="guests-group">
        <h2 className="guests-group-label">All Requests</h2>
        <div className="guests-group-list">
          {requests.map((entry) => (
            <RequestItem key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── New Request Modal ── */}
      {showModal && (
        <div className="grm-overlay" onClick={() => setShowModal(false)}>
          <div className="grm-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="grm-header">
              <h5 className="grm-title">
                <i className="fas fa-paper-plane" style={{ marginRight: 8 }} />
                New Guest Request
              </h5>
              <button className="grm-close" onClick={() => setShowModal(false)} aria-label="Close">
                <i className="fas fa-xmark" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="grm-body">
              {/* Guest Name */}
              <div className="grm-field">
                <label className="grm-label" htmlFor="grm-guest-name">
                  <i className="fas fa-user grm-label-icon" />
                  Guest Name
                </label>
                <input
                  id="grm-guest-name"
                  name="guest_name"
                  type="text"
                  className="grm-input"
                  placeholder="e.g. John Doe"
                  value={form.guest_name}
                  onChange={handleFormChange}
                  autoFocus
                  required
                />
              </div>

              {/* Access Method */}
              <div className="grm-field">
                <label className="grm-label" htmlFor="grm-method">
                  <i className="fas fa-shield-halved grm-label-icon" />
                  Access Method
                </label>
                <select
                  id="grm-method"
                  name="method"
                  className="grm-input grm-select"
                  value={form.method}
                  onChange={handleFormChange}
                >
                  <option value="App Access">Gate Access</option>
                  <option value="Facial ID">Door Access</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grm-field">
                <label className="grm-label" htmlFor="grm-date">
                  <i className="fas fa-calendar grm-label-icon" />
                  Expected Date & Time
                </label>
                <input
                  id="grm-date"
                  name="date"
                  type="datetime-local"
                  className="grm-input"
                  value={form.date}
                  onChange={handleFormChange}
                />
              </div>

              {/* Notes */}
              <div className="grm-field">
                <label className="grm-label" htmlFor="grm-notes">
                  <i className="fas fa-comment grm-label-icon" />
                  Notes <span className="grm-optional">(optional)</span>
                </label>
                <textarea
                  id="grm-notes"
                  name="notes"
                  className="grm-input grm-textarea"
                  placeholder="Any special instructions..."
                  value={form.notes}
                  onChange={handleFormChange}
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="grm-actions">
                <button type="button" className="grm-btn grm-btn-cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="grm-btn grm-btn-submit">
                  <i className="fas fa-paper-plane" style={{ marginRight: 6 }} />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


function RequestItem({ entry }) {
  return (
    <div className='request-entry'>
      <div className={`request-entry-icon-wrap ${entry.status === 'failed' ? 'failed' : entry.status === 'approved' ? 'approved' : ""}`}>
        <i className={`fas fa-paper-plane`} />
      </div>

      <div className="request-entry-body">
        <span className="request-entry-location">{entry.guest_name}</span>
        <span className="request-entry-meta">
          <i className="fas fa-calendar request-entry-clock" />
          {entry.date}
        </span>
      </div>

      <div className="request-entry-status-col">
        <span className={`request-entry-badge ${entry.status === 'approved' ? 'success' : entry.status === 'failed' ? 'failed' : 'pending'}`}>
          {entry.status === 'approved' ? 'APPROVED' : entry.status === 'failed' ? 'FAILED' : 'PENDING'}
        </span>

      </div>

    </div>
  )
}

export default GuestRequestsPage

