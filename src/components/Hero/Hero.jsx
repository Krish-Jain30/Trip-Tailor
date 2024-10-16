import HeroText from "./HeroText";
import hero from '../../assets/hero2.png';
import plane from '../../assets/plane.png'

const Hero = () => {
  return (
    <div className="mt-20 ">
      <section className="flex max-lg:flex-wrap max-lg:flex-col justify-between items-center max-md:items-start lg:px-28">
        <HeroText></HeroText>
        <div className="hero-image relative">
          <img src={plane} alt="" className="absolute w-40 max-xl:left-10 -top-5 -left-20 max-lg:hidden" />
          <img src={hero} alt="Hero image" className="w-[100rem] xl:w-[33rem] max-lg:w-[30rem] max-lg:pr-0" />
          <img src={plane} alt="" className="max-lg:hidden absolute w-40 top-5 -right-20" />
        </div>
      </section>
      
    </div>
  )
}

export default Hero
