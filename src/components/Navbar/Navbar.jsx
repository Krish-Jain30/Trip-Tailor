import Logo from "../../assets/Logo2.png";
import decore from '../../assets/Decore.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 max-md:h-10 m-0 relative">
      <img src={decore} alt="" className="absolute z-[-9999999] xl:-top-10 max-lg:hidden block" />
      <nav className="flex justify-between items-center p-0 md:px-14 max-md:px-4">
        <span className="logo">
          <img src={Logo} alt="TripTailor" className="w-40 md:w-56" />
        </span>

        <div className="hidden md:flex gap-4 justify-between items-center">
        <Link to="login" ><button className="login-btn btn1 px-4 md:px-6 py-1 md:py-2">
            <p>LogIn</p>
          </button></Link>
          <Link to="signup" ><button className="signup-btn btn2 border-[1.6px] border-black rounded-md px-4 md:px-6 py-1 md:py-2">
            <p className="font-semibold">SignUp</p>
          </button></Link>
        </div>

      </nav>
    </div>
  )
}

export default Navbar;

