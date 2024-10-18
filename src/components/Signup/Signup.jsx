import SignupForm from "./SignupForm";
import sidebg from "../../assets/LogandSignbg.jpg"

const Signup = () => {
  return (
    <div className="page flex">
    <div className="w-[50%] flex items-center justify-center max-lg:w-full">
      <SignupForm/>
    </div>
    <img src={sidebg} alt="" className="rounded-l-[4%] w-[50%] object-cover max-lg:hidden" />
  </div>
  )
}

export default Signup;
