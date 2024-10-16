import greece from "../../assets/greeece.jpg";
import { IoMdPeople } from "react-icons/io";
import rome from "../../assets/rome.jpg"

const SCard = () => {
  return (
    <div className="w-[50%]">
      <div className="flex flex-col gap-1 p-4 w-64 h-72 bg-white shadow-lg rounded-xl max-lg:hidden">
      <img src={greece} alt="" className="rounded-xl w-full"/>
      <div className="flex flex-col space-y-2 pt-2">
      <h4 className="text-blue-800 font-semibold">Trip To Greece</h4>
      <p className="text-gray-500">14-29 June | by Robbin Joseph</p>
      <p className="flex gap-1">
        <IoMdPeople className="mt-[2px] text-xl"/>
        24 people planning
      </p>
      </div>
      
      </div>
      <div className="flex absolute bg-white gap-2 shadow-lg w-56 h-20 p-4 rounded-xl max-xl:right-1 max-xl:top-[295%] max-lg:hidden xl:right-28 xl:top-[273%]">
        <img src={rome} alt="" className="rounded-full w-11 h-11 mt-1" />
        <div className="">
        <p className="text-xs text-gray-600">Previous Trip</p>
        <h4 className="text-md font-semibold">Trip to Rome</h4>
        <p className="text-xs text-green-600 font-semibold">Completed</p>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default SCard
