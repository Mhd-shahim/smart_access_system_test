import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage.jsx'
import RequestAccessPage from './components/RequestAccessPage.jsx'
import DashboardPage from './components/DashboardPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import LogsPage from "./components/LogsPage.jsx";
import GuestRequestsPage from "./components/GuestRequestsPage.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import ListParking from "./components/ListParking.jsx";
import { useNavigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      {/* no navbar */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/request-access" element={<RequestAccessPage />} />

      {/* shared layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/guests" element={<GuestRequestsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/parking" element={<ListParking />} />
      </Route>
    </Routes>
  )
}

export default App