import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { BareLayout, Layout } from "../components/App/App";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import AddPet from "../Pages/Pets/AddPet";
import PetDetail from "../Pages/Pets/PetDetail/PetDetail";
import Pets from "../Pages/Pets/Pets";
import UpdatePet from "../Pages/Pets/UpdatePet";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import AllPets from "../Pages/AllPets/AllPets";

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
        <Route
          path="/pets/add"
          element={
            <PrivateRoute>
              <AddPet />
            </PrivateRoute>
          }
        />
        <Route
          path="/pets/:petId/update"
          element={
            <PrivateRoute>
              <UpdatePet />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/allPets" element={<AllPets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<BareLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </ReactRouterRoutes>
  );
}

export default Routes;
