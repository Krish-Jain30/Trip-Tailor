import { FaLocationArrow } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

const DCard = (props) => {
  return (
<div className="w-60 h-80 bg-gray-50 flex flex-col gap-1 rounded-2xl drop-shadow-md">
  <img src={props.image} alt="" className="h-[70%] rounded-t-md object-fill" />
  <div className="flex flex-col gap-4 px-2 py-1">
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-col">
        <span className="font-semibold">{props.destination}</span>
        <p className="text-xs font-bold py-2 text-gray-700 flex items-center gap-2"><FaLocationArrow className="mt-1"/>{props.days}</p>
      </div>
      <span className="font-bold  flex gap-1"><BiSolidLike className="mt-1 text-blue-500"/>{props.likes}</span>
    </div>
  </div>
</div>
  )
}

export default DCard
