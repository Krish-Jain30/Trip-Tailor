import sidebg from "../../assets/LogandSignbg.jpg"
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <div className="page flex">
      <div className="w-[50%] flex items-center justify-center max-lg:w-full">
        <LoginForm/>
      </div>
      <img src={sidebg} alt="" className="rounded-l-[4%] w-[50%] object-cover max-lg:hidden" />
      
    </div>
  )
}

export default Login
