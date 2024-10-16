import Destinations from "../components/Destinations/Destinations"
import Features from "../components/Features/Features"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Steps from "../components/Steps/Steps"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"

const Home = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <Navbar/>
    <Hero/>
    <Features/>
    <Destinations/>
    <Steps/>
    <SubscribeSection/>
    <Footer/>
    </div>
  )
}

export default Home
