import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const location = useLocation();

    if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
