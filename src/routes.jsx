import { Route, Routes } from "react-router-dom";
import { UserProfile } from "./pages";

const routes = [
  { path: "/user-profile", element: <UserProfile /> },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);
