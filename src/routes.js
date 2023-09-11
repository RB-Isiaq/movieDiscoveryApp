import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "./pages/home";
import CountryDetails from "./pages/[id]";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<CountryDetails />} />
    </AppRoutes>
  );
};

export default Routes;
