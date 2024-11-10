import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const PasswordForm = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/authenticate", {
        password,
      });
      if (response.data.success) {
        onPasswordCorrect();
      } else {
        setError("Incorrect password, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="password-form-container">
      <div className="main-folder">
        <h2 className="form-title">
          Enter Your Password to access the folder🔒
        </h2>
        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="password-input"
          />
          <button type="submit" className="submit-button">
            Unlock
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordForm;
