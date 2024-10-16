import SCard from "./SCard";
import StepsText from "./StepsText";

const Steps = () => {
  return (
    <div className="flex items-center justify-center p-20 gap-10 mx-20 max-lg:flex-wrap max-lg:mx-0">
      <StepsText/>
      <SCard/>
    </div>
  )
}

export default Steps
