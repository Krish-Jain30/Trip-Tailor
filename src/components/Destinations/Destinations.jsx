import art from "../../assets/bg-art.png";
import decoreline from "../../assets/Decore2.png";
import decoreart from "../../assets/Decore3.png";
import DCard from "./DCard";
import dest1 from "../../assets/dest1.png";
import dest2 from "../../assets/dest2.png";
import dest3 from "../../assets/dest3.png";

const Destinations = () => {
  return (
    <div>
    <h1 className="text-3xl text-center mt-4 font-semibold">Famous Destinations</h1>
    <img src={art} alt="" className="absolute right-8 w-24 max-md:hidden" />
    <img src={decoreline} alt="" className="absolute left-[50%] w-52" />
    <div className="py-20 flex max-md:flex-col items-center justify-center gap-10 max-lg:flex-wrap ">
      <DCard image={dest1} destination="Rome,Italy" days="10 days trip" likes="20.2k"/>
      <DCard image={dest2} destination="London,UK" days="12 days trip" likes="32.2k"/>
      <DCard image={dest3} destination="Europe" days="20 days trip" likes="24.2k"/>
      <img src={decoreart} alt="" className="absolute w-20 top-50 max-xl:right-16 xl:right-[20%] -z-20 max-lg:hidden" />
    </div>
  </div>
  )
}

export default Destinations
