import logo from "../../assets/Logo2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col px-10 sm:px-20 gap-1 h-auto mt-10">
      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
        
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-[60%]">
          <img src={logo} alt="TripTailor Logo" className="w-32 sm:w-40" />
          <p className="pl-4 sm:pl-10 text-gray-600 text-sm sm:text-base mt-2">
            Plan your trip in a minute, get full control for much longer.
          </p>

          {/* Social Media Icons (Horizontal) */}
          <div className="flex gap-6 mt-4 justify-center sm:justify-start">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-wrap justify-between items-start w-full sm:w-[40%] gap-6 md:gap-0">
          <div className="pt-10 w-[30%]">
            <h2 className="font-bold pb-2">Company</h2>
            <ul>
              <li className="text-gray-600 text-sm sm:text-md">About</li>
              <li className="text-gray-600 text-sm sm:text-md">Careers</li>
              <li className="text-gray-600 text-sm sm:text-md">Mobile</li>
            </ul>
          </div>
          <div className="pt-10 w-[30%]">
            <h2 className="font-bold pb-2">Contact</h2>
            <ul>
              <li className="text-gray-600 text-sm sm:text-md">Help/FAQ</li>
              <li className="text-gray-600 text-sm sm:text-md">Press</li>
              <li className="text-gray-600 text-sm sm:text-md">Affiliates</li>
            </ul>
          </div>
          <div className="pt-10 w-[30%]">
            <h2 className="font-bold pb-2">More</h2>
            <ul>
              <li className="text-gray-600 text-sm sm:text-md">Airline Fees</li>
              <li className="text-gray-600 text-sm sm:text-md">Airline</li>
              <li className="text-gray-600 text-sm sm:text-md">Low fare tips</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-5" />
      
      {/* Footer Bottom Section */}
      <p className="text-center font-bold tracking-wide pt-2 pb-2 text-sm sm:text-md text-gray-600">
        All rights reserved @triptailor.co
      </p>
    </div>
  );
};

export default Footer;
