import { useMemo, useState } from 'react'
import './ListParking.css'

const PARKING_AREAS = [
  {
    id: 1,
    name: 'Main Office Lot',
    available: 12,
    filled: 28,
    total: 40,
    distance: 0.4,
  },
  {
    id: 2,
    name: 'Sub Office Garage',
    available: 8,
    filled: 42,
    total: 50,
    distance: 0.9,
  },
  {
    id: 3,
    name: 'North Branch Lot',
    available: 3,
    filled: 17,
    total: 20,
    distance: 1.2,
  },
  
]

function ListParking() {
  const [search, setSearch] = useState('')

  const filteredParking = useMemo(() => {
    return PARKING_AREAS.filter((area) =>
      area.name.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => a.distance - b.distance)
  }, [search])

  return (
    <div className="parking-page">
      <h1 className="parking-title">Parking Areas</h1>

      <div className="parking-search-wrap">
        <i className="fas fa-magnifying-glass parking-search-icon" />
        <input
          id="parking-search"
          type="text"
          className="parking-search"
          placeholder="Search parking areas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className="parking-search-clear"
            onClick={() => setSearch('')}
            aria-label="Clear search"
          >
            <i className="fas fa-xmark" />
          </button>
        )}
      </div>

      {filteredParking.length === 0 ? (
        <div className="parking-empty">
          <i className="fas fa-inbox parking-empty-icon" />
          <p>No parking areas found</p>
        </div>
      ) : (
        <div className="parking-list">
          {filteredParking.map((area, index) => (
            <ParkingCard key={area.id} area={area} isNearest={index === 0} />
          ))}
        </div>
      )}
    </div>
  )
}

function ParkingCard({ area, isNearest }) {
  return (
    <div className="parking-entry">
      <div className="parking-entry-icon-wrap">
        <i className="fas fa-square-parking" />
      </div>

      <div className="parking-entry-body">
        <span className="parking-entry-name">{area.name}</span>
        <span className="parking-entry-meta">
          {area.available} available • {area.total} total
        </span>
        <div className="parking-entry-metrics">
          <span className="parking-entry-metric available">
            {area.available} free
          </span>
        </div>
      </div>
        
      <div className="parking-entry-status-col">
        <span className="parking-entry-distance">
          {area.distance.toFixed(1)} km
        </span>
        <span className={`parking-entry-badge${isNearest ? ' nearest' : ''}`}>
          {isNearest ? 'NEAREST' : 'NEARBY'}
        </span>
      </div>
    </div>
  )
}

export default ListParking;
