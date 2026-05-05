import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import { Outlet } from "react-router-dom";

function DashboardLayout({ onLogout }) {
  return (
    <div className="dash-shell">
      <TopNavbar onLogout={onLogout} />

      <main className="dash-content">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}

export default DashboardLayout;