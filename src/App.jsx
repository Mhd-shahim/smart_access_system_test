import { useState } from 'react'
import LoginPage from './components/LoginPage.jsx'
import RequestAccessPage from './components/RequestAccessPage.jsx'
import DashboardPage from './components/DashboardPage.jsx'

function App() {
  const [page, setPage] = useState('login')

  if (page === 'dashboard') {
    return <DashboardPage onLogout={() => setPage('login')} />
  }

  if (page === 'request-access') {
    return <RequestAccessPage onBack={() => setPage('login')} />
  }

  return (
    <LoginPage
      onLogin={() => setPage('dashboard')}
      onRequestAccess={() => setPage('request-access')}
    />
  )
}

export default App
