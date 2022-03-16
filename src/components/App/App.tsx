import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Footer from "../UI/Footer/Footer";

// TODO: see if aliasing works now in typescript without breaking everything...
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { AuthProvider } from "../../providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export function Layout() {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
