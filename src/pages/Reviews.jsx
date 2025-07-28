import { useState, useEffect } from "react";
import axios from "axios";


// axios.get("/reviews")  // auto-appends to baseURL
// axios.post("/reviews", newReview)

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Rahul Sharma", text: "Excellent service! My home shifting was smooth and hassle-free.", rating: 5 },
    { name: "Priya Mehta", text: "Professional and on-time delivery. My car arrived safely.", rating: 4 },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  useEffect(() => {
    axios.get("http://localhost:5000/api/reviews")
 // Use 5000 if backend runs there
      .then(res => {
        //console.log("Fetched reviews:", res.data); 
        setReviews(res.data);
      })
      .catch(err => {
        console.error("Error fetching reviews:", err.text);
      });
  }, []);

   const handleSubmit = (e) => {
    e.preventDefault();
   axios.post("http://localhost:5000/api/reviews", newReview)

      .then(res => {
        setReviews([res.data, ...reviews]);
        setNewReview({ name: "", text: "", rating: 5 });
        setIsOpen(false);
      })
      .catch(err => {
        console.error("Error submitting review:", err.text);
      });
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Customer Reviews</h2>
        <p className="text-gray-600 mb-10">Hear what our happy customers have to say about us.</p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 italic">"{review.text}"</p>
              <h4 className="mt-3 font-semibold text-blue-800">- {review.name}</h4>
              <div className="flex justify-center mt-2 text-yellow-400">
                {"⭐".repeat(review.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="mt-10 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          + Add Your Review
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Add Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Your Review"
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="w-full p-2 border rounded"
              >
                {[5,4,3,2,1].map(num => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
              <div className="flex justify-end space-x-3">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)} 
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
