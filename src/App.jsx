import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import NewItinerary from "./pages/NewItinerary"; // Import the new itinerary creation page

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login/signup",
      element: <SignUp />,
    },
    {
      path: "/signup/login",
      element: <LogIn />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/new-itinerary", // New route for creating itinerary
      element: <NewItinerary />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;