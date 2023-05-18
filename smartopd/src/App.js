import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import ErrorPage from "./components/ErrorPage";
import { Login } from "./components/Login";
import { CheckBoxes, SignUp } from "./components/SignUp";
import { ContextProvider } from "./context/ContextProvider";
import { DashBoard } from "./pages/DashBoard";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <SignUp />,
  },
  {
    path: "checkbox",
    element: <CheckBoxes />,
  },
  {
    path: "dashBoard",
    element: <DashBoard />,
  },
]);

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
