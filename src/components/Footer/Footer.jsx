import logo from "../../assets/Logo2.png";

const Footer = () => {
  return (
    <div className="flex flex-col px-10 sm:px-20 gap-1 h-auto mt-10">
      <div className="flex items-center justify-around flex-wrap">
        <div className="w-full md:w-[60%]">
          <img src={logo} alt="" className="w-32 sm:w-40" />
          <p className="pl-4 sm:pl-10 text-gray-600 text-sm sm:text-base">
            Plan your trip in a minute, get full control for much longer.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full md:w-[40%] gap-6 md:gap-0">
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
      <hr className="mt-5"/>
      <p className="text-center font-bold tracking-wide pt-2 pb-2 text-sm sm:text-md text-gray-600">
        All rights reserved @triptailor.co
      </p>
    </div>
  );
};

export default Footer;
