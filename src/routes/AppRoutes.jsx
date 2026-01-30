import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layouts
import DashboardLayout from "../components/layout/DashboardLayout";

// Pages Import
import DashboardOverview from "../pages/dashboard_overview/DashboardOverview";
import CallLogsView from "../pages/call_logs/CallLogsView";
import AppointmentsView from "../pages/appointments/AppointmentsView";
import SettingsView from "../pages/settings/SettingsView";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="call-logs" element={<CallLogsView />} />
          <Route path="appointments" element={<AppointmentsView />} />
          <Route path="settings" element={<SettingsView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
