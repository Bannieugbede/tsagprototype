import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DailyDosePage from "./pages/DailyDosePage";
import DailyDoseDetailPage from "./pages/DailyDoseDetailPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminDailyDosePage from "./pages/admin/AdminDailyDosePage";
import AdminDailyDoseEditorPage from "./pages/admin/AdminDailyDoseEditorPage";
import AdminDailyDosePreviewPage from "./pages/admin/AdminDailyDosePreviewPage";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-dose" element={<DailyDosePage />} />
      <Route path="/daily-dose/:slug" element={<DailyDoseDetailPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/daily-dose" element={<AdminDailyDosePage />} />
        <Route path="/admin/daily-dose/new" element={<AdminDailyDoseEditorPage />} />
        <Route path="/admin/daily-dose/edit/:id" element={<AdminDailyDoseEditorPage />} />
        <Route path="/admin/daily-dose/preview/:id" element={<AdminDailyDosePreviewPage />} />
      </Route>
    </Routes>
  );
};

export default App;
