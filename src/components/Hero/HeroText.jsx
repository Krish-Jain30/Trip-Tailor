const HeroText = () => {
  return (
    <div className="max-lg:w-full xl:w-[50%] max-lg:px-12 max-md:px-8 max-lg:pb-10 h-full">
      <p className="py-4 font-bold text-[#DF6951] uppercase text-lg md:text-xl">
        Your Dream Trip, Curated by Travelers
      </p>
      <h1 className="font-bold text-3xl sm:text-4xl pb-4 leading-tight">
        Create personalized
        <div className="text-[#DF6951] inline-block pr-3 max-lg:pl-3 max-md:pl-0 xl:pl-3">
          itineraries
        </div>
        with recommendations from real travelers.
      </h1>
      <p className="pb-6 text-gray-500 text-sm sm:text-base">
        Tap into a world of experiences to build the perfect itinerary. Discover hidden gems, top attractions, and insider tips. Customize every detail with ease, and share with friends for real-time feedback.
      </p>
      <button className="px-6 bg-[#F1A501] text-white py-2 rounded-md">
        <p>Let's Plan</p>
      </button>
    </div>
  );
}

export default HeroText;
