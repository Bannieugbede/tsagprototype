import { Navigate, Outlet } from "react-router-dom";
import { dailyDoseService } from "../../services/dailyDoseService";

const ProtectedRoute = () => {
  const auth = dailyDoseService.getAuthState();

  if (!auth?.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
