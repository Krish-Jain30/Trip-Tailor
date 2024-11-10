import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after successful form submission

const CreateItinerary = ({ addNewItinerary }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Adventure");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for form submission

  const navigate = useNavigate(); // Hook to navigate to the Explore page after adding an itinerary

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a new itinerary object
    const newItinerary = {
      id: Math.random(), // Random ID for the new itinerary
      title,
      description,
      type,
      image,
    };

    // Call the parent component's function to add the new itinerary
    addNewItinerary(newItinerary);

    setLoading(false);
    navigate("/explore"); // Navigate back to the Explore page after submitting
  };

  return (
    <div className="App min-h-screen bg-white text-gray-700">
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Add a New Itinerary</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            ></textarea>
          </div>

          <div>
            <label htmlFor="type" className="block text-lg font-medium mb-2">Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          <div>
            <label htmlFor="image" className="block text-lg font-medium mb-2">Image URL</label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 text-white ${loading ? 'bg-gray-500' : 'bg-blue-600'} rounded-lg hover:bg-blue-700 transition-colors`}
            >
              {loading ? "Saving..." : "Save Itinerary"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateItinerary;
