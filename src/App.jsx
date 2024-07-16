import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";

import Users from "./Pages/Users";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import UserDetail from "./features/users/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Users /> },
      { path: "/details/:userId", element: <UserDetail /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
