import StepsContent from "./StepsContent";
import visual1 from "../../assets/visual1.png";
import visual2 from "../../assets/visual2.png";
import visual3 from "../../assets/visual3.png";



const StepsText = () => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <h1 className="text-3xl font-bold w-80"><span className="text-[#DF6951]">Plan</span> Your Perfect Trip in 3 Easy Steps</h1>
      <div className="steps flex flex-col gap-2">
        <StepsContent image={visual1} title="Choose Your Destination" meaning="Select a destination from a variety of options based on your preferences."/>
        <StepsContent image={visual2} title="Customize Your Itinerary" meaning="Pick activities, accommodations, and transportation options to personalize your trip."/>
        <StepsContent image={visual3} title="Collaborate & Finalize" meaning="Work with friends or fellow travelers to finalize your perfect itinerary."/>
      </div>
    </div>
  )
}

export default StepsText
