import Logo from "../../assets/Logo2.png";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

const ExploreNav = () => {
  return (
    <div className="w-full h-22 max-md:h-10 m-0 relative">
      <nav className="flex justify-between items-center p-0 md:px-14 max-md:px-4">
        <span className="logo">
          <img src={Logo} alt="TripTailor" className="w-40 md:w-56" />
        </span>

        <div className="hidden md:flex gap-4 justify-between items-center">
          <Link to="/dashboard" ><button className=" btn2 px-4 md:px-6 py-1 md:py-2">
            <p className="font-semibold flex items-center justify-center gap-2">
                <p className="text-sm">ACCOUNT</p>
                <MdAccountCircle className="text-3xl text-yellow-500"/>
                </p>
          </button></Link>
        </div>

      </nav>
    </div>
  )
}

export default ExploreNav;

