import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

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
    
  ])
  return (
    <>
    <RouterProvider router = {router}/>
      
    </>
  )
}

export default App
