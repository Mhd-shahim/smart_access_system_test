import { useState } from 'react'
import './RequestAccessPage.css'

const COMPANIES = [
  'Acme Corporation',
  'Globex Industries',
  'Initech Solutions',
  'Umbrella Corp',
  'Stark Enterprises',
  'Wayne Industries',
]

function RequestAccessPage({ onBack }) {
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setPhotoFile(file)
    const reader = new FileReader()
    reader.onload = (ev) => setPhotoPreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fullName.trim() || !company) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  return (
    <div className="ra-wrapper">
      {/* Ambient blobs */}
      <div className="ra-blob ra-blob-1" />
      <div className="ra-blob ra-blob-2" />

      <div className="ra-phone-frame">
        {/* Top bar */}
        <div className="ra-topbar">
          <button className="ra-back-btn" onClick={() => window.history.back()} aria-label="Go back">
            <i className="fas fa-arrow-left" />
          </button>
          <span className="ra-topbar-title">Smart Access System</span>
          <button className="ra-notif-btn" aria-label="Notifications">
            <i className="fas fa-bell" />
          </button>
        </div>

        <div className="ra-scroll-area">
          {/* Breadcrumb */}
          <p className="ra-breadcrumb">REQUEST ACCESS</p>

          {/* Card */}
          <div className="ra-card">
            <h1 className="ra-card-title">Identify Yourself</h1>
            <p className="ra-card-sub">
              Please provide your details to request facility access.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="ra-field-group">
                <label className="ra-label">FULL NAME</label>
                <div className="ra-input-wrap">
                  <input
                    id="ra-fullname"
                    type="text"
                    className="ra-input"
                    placeholder="e.g. Alex Johnson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="ra-field-group">
                <label className="ra-label">COMPANY</label>
                <div className="ra-input-wrap ra-select-wrap">
                  <select
                    id="ra-company"
                    className="ra-input ra-select"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select company...</option>
                    {COMPANIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down ra-select-chevron" />
                </div>
              </div>

              {/* Facial Recognition */}
              <div className="ra-field-group">
                <label className="ra-label">FACIAL RECOGNITION SETUP</label>
                <label htmlFor="ra-photo" className="ra-photo-zone">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Face preview"
                      className="ra-photo-preview"
                    />
                  ) : (
                    <div className="ra-photo-placeholder">
                      <div className="ra-face-icon-wrap">
                        <i className="fas fa-user-circle ra-face-icon" />
                      </div>
                      <span className="ra-photo-label">Upload or take photo</span>
                      <span className="ra-photo-hint">Clear view of face required</span>
                    </div>
                  )}
                  <input
                    id="ra-photo"
                    type="file"
                    accept="image/*"
                    capture="user"
                    className="ra-photo-input"
                    onChange={handlePhoto}
                  />
                </label>
              </div>

              {/* Vehicle Plate */}
              <div className="ra-field-group">
                <label className="ra-label">VEHICLE PLATE (OPTIONAL)</label>
                <div className="ra-input-wrap">
                  <i className="fas fa-car ra-input-icon" />
                  <input
                    id="ra-plate"
                    type="text"
                    className="ra-input ra-input-padded"
                    placeholder="ABC-1234"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                id="ra-submit-btn"
                type="submit"
                className="ra-submit-btn"
                disabled={loading || submitted}
              >
                {loading ? (
                  <>
                    <span className="ra-spinner" role="status" />
                    Submitting...
                  </>
                ) : submitted ? (
                  <>
                    <i className="fas fa-check me-2" />
                    Request Sent
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          </div>

          {/* Success Badge */}
          {submitted && (
            <div className="ra-badge" role="alert">
              <div className="ra-badge-icon-wrap">
                <i className="fas fa-info-circle ra-badge-icon" />
              </div>
              <p className="ra-badge-text">
                Your request will be reviewed by the security administrator.
                Expect a notification within 15 minutes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RequestAccessPage
