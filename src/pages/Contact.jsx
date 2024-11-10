import React from 'react';
import Footer from '../components/Footer/Footer';
import ExploreNav from '../components/Explore/ExploreNav';

function Contact() {
  return (
    <div>
        <ExploreNav/>
    <div className="relative flex flex-col items-center px-8 py-20 lg:px-20 lg:py-24 bg-gradient-to-b from-yellow-50 to-blue-100 overflow-hidden mt-10">
    {/* Decorative Circles */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full opacity-30"></div>
    <div className="absolute bottom-50 right-20 w-60 h-60 bg-yellow-300 rounded-full opacity-30"></div>
    
    <div className="relative z-10 max-w-4xl w-full text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Have any questions? We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
      </p>
    </div>
    
    {/* Contact Form */}
    <div className="relative z-10 w-full max-w-3xl bg-white shadow-xl rounded-lg p-8">
      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Subject Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject of your message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Information */}
    <div className="relative z-10 flex flex-col lg:flex-row justify-around mt-12 w-full max-w-3xl text-center lg:text-left text-gray-700">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
        <p>Phone: +123 456 7890</p>
        <p>Email: contact@travello.com</p>
      </div>
      
      <div className="space-y-4 mt-8 lg:mt-0">
        <h3 className="text-xl font-semibold text-gray-900">Office Address</h3>
        <p>123 Travello Street,</p>
        <p>Travel City, Country</p>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
}

export default Contact;