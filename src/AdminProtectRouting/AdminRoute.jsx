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
    if (!user || !isAdmin) {
      Logout(); // Call Logout if the user is not an admin
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isAdmin]);

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

  if (user && isAdmin) {
    return children; // Render the children if user is authenticated and is an admin
  }

  return <Navigate state={{ from: location.pathname }} to="/login" />;
};

export default AdminRoute;
