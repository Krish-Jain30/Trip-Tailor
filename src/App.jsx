import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/login',
      element : <LogIn/>
    },
    {
      path : '/signup',
      element : <SignUp/>
    },
    {
      path : '/login/signup',
      element : <SignUp/>
    },
    {
      path : '/signup/login',
      element : <LogIn/>
    },
    {
      path : '/dashboard',
      element : <Dashboard/>
    },
    {
      path : '/explore',
      element : <Explore/>
    },
    
  ])
  return (
    <>
    <RouterProvider router = {router}/>
      
    </>
  )
}

export default App
