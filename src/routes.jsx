import { Route, Routes } from "react-router-dom";
import { ActivityFeed, AllDone, Chat, Reels, RegisterCode, RegisterEmail, RegisterFullName, RegisterPassword, UserProfile } from "./pages";

const routes = [
  { path: "/", element: <RegisterEmail /> },
  { path: "/register-code", element: <RegisterCode /> },
  { path: "/register-password", element: <RegisterPassword /> },
  { path: "/register-full-name", element: <RegisterFullName /> },
  { path: "/register-finished", element: <AllDone /> },
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
