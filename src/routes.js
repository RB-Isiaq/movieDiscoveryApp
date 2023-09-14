import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "./pages/home";
import SingleMovieDetails from "./pages/[id]";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/movie">
        <Route path=":id" element={<SingleMovieDetails />} />
      </Route>
    </AppRoutes>
  );
};

export default Routes;
