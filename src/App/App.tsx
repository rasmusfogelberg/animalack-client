import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/UI/Footer/Footer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
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
