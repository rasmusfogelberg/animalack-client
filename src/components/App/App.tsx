import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "../../providers/AuthProvider";
import Routes from "../../routes";
import Navigation from "../Navigation/Navigation";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  );
}

export function Layout() {
  const { user } = useAuth();

  return (
    <>
      {!user && <Header />}
      {user && <Navigation />}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export function BareLayout() {
  const { pathname }: any = useLocation();
  const isLogin = pathname.includes("login");
  const gradientClass = isLogin
    ? `from-cyan-500 to-blue-500`
    : `from-pink-500 to-purple-500`;

  return (
    <>
      {<Header />}
      <div
        className={`flex flex-col min-h-screen overflow-hidden bg-gradient-to-r ${gradientClass}`}
      >
        <main className="flex flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
