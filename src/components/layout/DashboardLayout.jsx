import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "");
  const titles = {
    "/dashboard": "Dashboard Overview",
    "/call-logs": "Call Logs & History",
    "/appointments": "Appointments",
    "/settings": "Settings",
  };

  const matchedKey = Object.keys(titles).find(
    (k) => pathname === k || pathname.startsWith(k + "/"),
  );

  const showNavbar = Boolean(matchedKey);
  const title = matchedKey ? titles[matchedKey] : undefined;

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar (fixed for lg, drawer for smaller screens) */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Main content area */}
      <div className="ml-0 lg:ml-[241px] flex flex-1 flex-col">
        {/* Top navbar (sticky) - show only on specified routes */}
        {showNavbar && (
          <Navbar
            onMenuClick={() => setIsSidebarOpen((s) => !s)}
            title={title}
          />
        )}
        {/* Main content (scrollable) */}
        <main className="mt-[96px] flex-1 overflow-y-auto lg:p-5 md:p-4 p-3 h-screen w-full bg-gradient-to-br from-[#0D173B] via-[#162456] to-[#131F44]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
