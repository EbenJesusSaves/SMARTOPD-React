import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import ErrorPage from "./components/ErrorPage";
import { Login } from "./components/Login";
import { CheckBoxes, SignUp } from "./components/SignUp";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
