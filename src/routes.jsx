import { Route, Routes } from "react-router-dom";
import { ActivityFeed, Chat, Reels, UserProfile } from "./pages";

const routes = [
  { path: "/user-profile", element: <UserProfile /> },
  {
    path: '/activity-feed', element: <ActivityFeed />
  },
  { path: '/chat', element: <Chat /> },
  { path: '/reels', element: <Reels /> },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);
