import React, { useState } from "react";
import axios from "axios";
import '../App.css';

const PasswordForm = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        "https://secure-25th.onrender.com/authenticate",
        {
          password,
        }
      );
      if (response.data.success) {
        onPasswordCorrect();
      } else {
        setError("Incorrect password, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[87.3svh]">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Enter Your Password to access the folder🔒
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center items-start">
            <button
              type="submit"
              className="download-button w-full flex items-center justify-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="loader mr-2"></span> // Show loader when loading
              ) : (
                "Unlock"
              )}
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordForm;
