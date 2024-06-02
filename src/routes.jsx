import { Route, Routes } from "react-router-dom";
import { ActivityFeed, UserProfile } from "./pages";

const routes = [
  { path: "/user-profile", element: <UserProfile /> },
  {
    path: '/activity-feed', element: <ActivityFeed />
  }
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);
