import { useState } from "react";
import log from "../../assets/Logo2.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex w-full flex-col items-center bg-cover bg-center">
      <div className="flex justify-center items-center w-72 h-32 pt-10">
          <img src={log} alt="logo"/>
      </div>
      <div className="max-w-md w-full rounded-lg py-8 max-md:p-8">
        <h2 className="text-2xl font-semibold text-start text-yellow-400 pb-2">
          Welcome Back
        </h2>
        <p className="mb-10 text-sm text-gray-600">Enter your Credentials to access your account.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                {showPassword ? "👁️" : "🙈"}  
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 max-lg:w-full">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium block text-end text-yellow-400 hover:text-yellow-500 max-lg:w-full">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="signup" className="text-yellow-400 font-medium hover:text-yellow-500"> 
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;