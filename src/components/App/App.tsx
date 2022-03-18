import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Footer from "../UI/Footer/Footer";

import { AuthProvider } from "../../providers/AuthProvider";
import Routes from "../../routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
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
