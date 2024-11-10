// src/ExploreMain.js
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import Footer from "../Footer/Footer";
import ExploreNav from "./ExploreNav";
import axiosInstance from '../../utils/common-utils/'; // Import the axios instance for API calls

const ExploreMain = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [itineraries, setItineraries] = useState([]); // Store all itineraries
  const [loading, setLoading] = useState(false); // Loading state for fetching data
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [selectedFilters, setSelectedFilters] = useState([]); // Active filters state
  const [filteredItineraries, setFilteredItineraries] = useState([]); // Filtered itineraries based on search/query

  const descriptions = [
    "Explore the beauty of the Taj Mahal and its surroundings.",
    "Relax on the serene beaches and enjoy water sports.",
    "Experience breathtaking mountain landscapes and hikes.",
    "Discover the nightlife and attractions of the city.",
    "Journey through scenic countryside routes.",
    "Adventure into the wilderness and enjoy nature.",
    "Visit historic sites and learn about ancient cultures.",
    "Enjoy a weekend getaway to peaceful lakes.",
  ];

  const UNSPLASH_URL = "photos/random?query=travel&count=1"; // Unsplash API endpoint for random images

  // Function to fetch itineraries
  const fetchItineraries = async () => {
    if (itineraries.length >= 20) return; // Stop if 20 itineraries are already loaded

    setLoading(true); // Show loading spinner
    try {
      const newItineraries = [];
      const totalToFetch = 20 - itineraries.length; // Calculate how many more itineraries we need

      for (let i = 0; i < totalToFetch; i++) {
        const randomIndex = Math.floor(Math.random() * descriptions.length);
        const randomDescription = descriptions[randomIndex];

        // Fetch random image from Unsplash using axiosInstance
        const response = await axiosInstance.get(UNSPLASH_URL, {
          params: {
            client_id: "Q1llpAiNHCxxSA9LiluXYo7ZixpAXwRwPpRZ5PopTCM", // Replace with your Unsplash API key
          },
        });

        const imageUrl = response.data[0]?.urls?.regular || `https://source.unsplash.com/800x600/?travel,scenery&sig=${Math.random()}`; // Fallback image if API fails

        // Push new itinerary data
        newItineraries.push({
          id: Math.random(),
          title: `Itinerary ${itineraries.length + i + 1}`,
          description: randomDescription,
          image: imageUrl,
          shape: "rounded-lg", // Rounded corners for the cards
          type: randomIndex % 3 === 0 ? "Adventure" : randomIndex % 2 === 0 ? "Relaxation" : "Cultural", // Random type for categories
        });
      }

      // Update itineraries state
      setItineraries((prevItineraries) => [...prevItineraries, ...newItineraries]);
    } catch (error) {
      console.error("Failed to fetch itineraries", error); // Handle any errors
    }
    setLoading(false); // Hide loading spinner
  };

  // Filter itineraries based on search query and selected filters
  const filterItineraries = () => {
    let filtered = itineraries;

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (itinerary) =>
          itinerary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          itinerary.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filter based on selected categories
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((itinerary) =>
        selectedFilters.includes(itinerary.type)
      );
    }

    setFilteredItineraries(filtered); // Update filtered itineraries state
  };

  // Fetch itineraries on component mount
  useEffect(() => {
    fetchItineraries();
  }, []); // Empty dependency array ensures it runs only once

  // Reapply filters when search query or selected filters change
  useEffect(() => {
    filterItineraries();
  }, [searchQuery, selectedFilters, itineraries]); // Rerun filter on change of search or filters

  // Handle changes to search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle filter button clicks
  const handleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter) // Remove filter if it's already active
        : [...prevFilters, filter] // Add filter if it's not already active
    );
  };

  // Handle button click to create a new itinerary and navigate to the new itinerary page
  const handleCreateItinerary = () => {
    navigate("/new-itinerary"); // Navigate to the new itinerary page
  };

  // Scroll handler to load more itineraries when the user reaches the bottom of the page
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      if (!loading && itineraries.length < 20) fetchItineraries();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, [loading, itineraries]);

  return (
    <div className="App min-h-screen bg-white text-gray-700">
      <ExploreNav />

      <main className="p-4 sm:p-6">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)} // Update search query on input change
              placeholder="Search itineraries..."
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" size={20} />
          </div>
        </div>

        {/* Filters and Create New Itinerary button */}
        <div className="flex justify-between items-center gap-3 py-2 rounded-lg mb-6 bg-gray-100 max-w-[28rem] m-auto">
          <div className="flex gap-3">
            <button
              onClick={() => handleFilter("Adventure")}
              className={`px-3 py-2 text-sm text-gray-600 rounded hover:bg-gray-200 ${
                selectedFilters.includes("Adventure") ? "bg-gray-200" : ""
              }`}
            >
              Adventure
            </button>
            <button
              onClick={() => handleFilter("Relaxation")}
              className={`px-3 py-2 text-sm text-gray-600 rounded hover:bg-gray-200 ${
                selectedFilters.includes("Relaxation") ? "bg-gray-200" : ""
              }`}
            >
              Relaxation
            </button>
            <button
              onClick={() => handleFilter("Cultural")}
              className={`px-3 py-2 text-sm text-gray-600 rounded hover:bg-gray-200 ${
                selectedFilters.includes("Cultural") ? "bg-gray-200" : ""
              }`}
            >
              Cultural
            </button>
          </div>

          {/* Create New Itinerary Button */}
          <Link to = "/new-itinerary">
          <button
            onClick={handleCreateItinerary}
            className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            + New Itinerary
          </button>
          </Link>
        </div>

        {/* Display filtered itineraries */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 px-2">
          {filteredItineraries.length > 0 ? (
            filteredItineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className={`relative bg-gray-800 text-white p-5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${itinerary.shape}`}
                style={{
                  backgroundImage: `url(${itinerary.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "15px", // Rounded corners for non-rectangular shape
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{itinerary.title}</h3>
                  <p className="text-sm mt-1">{itinerary.description}</p>
                  <span className="block mt-2 text-xs text-gray-300">{itinerary.type}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">No itineraries found</div>
          )}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center py-4">
            <ImSpinner2 className="animate-spin text-2xl text-gray-600" />
          </div>
        )}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ExploreMain;
