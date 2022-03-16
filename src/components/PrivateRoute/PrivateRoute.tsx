import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

function PrivateRoute({children}: { children: JSX.Element }) {
    const auth = useAuth();
    const location = useLocation();
    if (!auth || !auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default PrivateRoute;