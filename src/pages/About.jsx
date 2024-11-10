import React from 'react';
import travel2 from "../assets/travel2.jpg";
import ExploreNav from '../components/Explore/ExploreNav';
import Footer from '../components/Footer/Footer';


function About() {
  return (
    <div><ExploreNav/>
    <div className="flex flex-col items-center px-8 py-16 lg:px-20 lg:py-24 bg-gray-50 mt-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12">
        

        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-orange-500 font-semibold text-lg">How It All Began</h2>
          <h1 className="text-4xl font-bold text-gray-900">
          Your trusted companion in creating unforgettable travel experiences.
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to Travello, your dedicated travel companion, committed to turning dreams into memorable journeys. We believe travel is more than just moving from place to place—it’s about experiencing new cultures, discovering hidden gems, and creating stories you’ll cherish forever. With a team of passionate experts, we provide personalized travel solutions, from curated itineraries to insider tips, ensuring each trip is unique and tailored to you. Sustainability and customer satisfaction are at the heart of our mission, making every adventure not only extraordinary but also responsible. Let’s make your next journey unforgettable, together with Travello.
          </p>
        </div>

  
        <div className="lg:w-1/2 flex flex-col items-center space-y-6">
          <div className="bg-blue-100 rounded-lg p-8 w-full h-full flex items-center justify-center">
            <img
              src={travel2}
              alt="Founders working"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex justify-between space-x-4 w-full">
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">1.5</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">23</h3>
              <p className="text-gray-500">Itenories planned</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">830+</h3>
              <p className="text-gray-500">Positive Reviews</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/4 text-center">
              <h3 className="text-2xl font-bold text-gray-900">100K</h3>
              <p className="text-gray-500">Trusted Customers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;