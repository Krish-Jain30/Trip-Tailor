import { IoIosSend } from "react-icons/io";
import art from "../../assets/bg-art.png";

const SubscribeSection = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-20 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-purple-50 relative overflow-hidden rounded-2xl rounded-tl-full w-full md:w-[60%] max-lg:rounded-tl-0 max-lg:rounded-2xl h-72">
        <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-purple-300 to-white rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-purple-300 to-white rounded-full opacity-20"></div>

        <div className="relative lg:ml-10 w-full md:w-[60%] z-10 text-center">
          <h2 className="text-lg md:text-2xl font-medium text-[#5E6282]">
            Subscribe to get information, latest news and other interesting offers about triptailor
          </h2>

          <div className="mt-6 flex justify-center flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 w-full sm:w-64 md:w-80 rounded-l-lg sm:rounded-none sm:rounded-l-lg border border-gray-300 focus:outline-none mb-4 sm:mb-0"
            />
            <button className="bg-[#F1A501] text-white px-6 py-3 rounded-r-lg hover:bg-[#ffae00] transition duration-300 sm:w-auto w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <img src={art} alt="" className="absolute w-24 z-10 md:left-7 md:-bottom-[487%] lg:-bottom-[303%] max-md:hidden  xl:left-7 rotate-180 xl:-bottom-[260%]" />
    </div>
  );
};

export default SubscribeSection;
