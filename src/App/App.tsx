import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import "./App.scss";

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
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="profile">Profile</Link> |{" "}
          <Link to="thisdoesnotexist">BREAK ME</Link> |{" "}
        </nav>
        <h1>This should show on all routes</h1>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
