/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading, Logout } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  useEffect(() => {
    // Only call Logout if loading is done and the user is not an admin
    if (!loading && !isAdminLoading && (!user || !isAdmin)) {
      Logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isAdminLoading, isAdmin, user]);

  // Display loading spinner while loading states are true
  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center mx-auto my-auto justify-center mt-20">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  // Render the children if user is authenticated and is an admin
  if (user && isAdmin) {
    return children;
  }

  // Redirect to login if not authenticated or not an admin
  return <Navigate state={{ from: location.pathname }} to="/login" />;
};

export default AdminRoute;
