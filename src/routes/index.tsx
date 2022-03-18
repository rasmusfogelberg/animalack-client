import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { Layout } from "../components/App/App";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import PetDetail from "../Pages/Pets/PetDetail/PetDetail";
import Pets from "../Pages/Pets/Pets";
import Register from "../Pages/Register/Register";

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="pets"
          element={
            <PrivateRoute>
              <Pets />
            </PrivateRoute>
          }
        />
        <Route
          path="pets/:petId"
          element={
            <PrivateRoute>
              <PetDetail />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </ReactRouterRoutes>
  );
}

export default Routes;