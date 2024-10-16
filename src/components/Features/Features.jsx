import FCard from "./FCard";
import custom from "../../assets/custom.jpg";
import collab from "../../assets/collab.jpg";
import destination from "../../assets/destination.jpeg";
import budget from "../../assets/budget.png";
import art from "../../assets/bg-art.png";
import decoreline from "../../assets/Decore2.png";

const Features = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-4 pt-10 font-semibold">Our Features</h1>
      <img src={art} alt="" className="absolute right-8 w-24 max-md:hidden" />
      <img src={decoreline} alt="" className="absolute left-[48%] w-48 " />
      <div className="py-20 flex max-md:flex-col items-center justify-center gap-10 max-lg:flex-wrap">
        <FCard image={custom} title="Customizable Itineraries" description="Build and personalize your travel plans with an easy-to-use interface that lets you add, remove, or reorder activities."/>
        <FCard image={collab} title="Collaborative Planning" description="Share your itinerary with friends or fellow travelers, and make real-time updates based on their feedback and suggestions."/>
        <FCard image={destination} title="Multi-Destination Planner" description="Seamlessly plan complex trips with multiple stops, organizing every leg of your journey in one place."/>
        <FCard image={budget} title="Budget Management Tool" description="Enable users to track expenses and set budget limits for the trip."/>
      </div>
    </div>
  )
}

export default Features
